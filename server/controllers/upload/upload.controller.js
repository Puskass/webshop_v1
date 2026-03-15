const multer = require("multer");
const path = require("path");
const Image = require("../../models/Image");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Folder mora postojati u root-u servera
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit 5MB
}).single("image");

const uploadImage = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res
        .status(400)
        .json({ success: false, message: `Multer greška: ${err.message}` });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    try {
      const newImage = new Image({
        filename: req.file.filename,
        path: `http://localhost:5000/uploads/${req.file.filename}`,
      });
      const savedImage = await newImage.save();
      res.status(200).json({
        success: true,
        message: "Image saved to database and disk",
        data: savedImage,
      });
    } catch (error) {
      console.error("Greska pri upisu u MongoDB: ", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  });
};

module.exports = { uploadImage };
