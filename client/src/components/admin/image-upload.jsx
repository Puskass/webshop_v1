import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import axios from "axios";

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) => {
  const inputRef = useRef(null);

  async function uploadImageToBackend() {
    // setImageLoadingState(true);
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/products/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      console.log(response);

      if (response?.data?.success) {
        setUploadedImageUrl(response.data.data.path);
        console.log("Slika uspešno sačuvana na:", response.data.data.path);
      }
    } catch (error) {
      console.log("Failed to upload: ", error);
    }
  }
  useEffect(() => {
    if (imageFile !== null) {
      uploadImageToBackend();
    }
  }, [imageFile]);
  function handleImageFileChange(e) {
    console.log(e.target.files);
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }
  // console.log(imageFile);

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 mt-4">
      <Label className="text-lg font-semibold mb-2 block">Image Upload</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed rounded-lg p-4"
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          name="image"
          ref={inputRef}
          onChange={handleImageFileChange}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 h-8 text-primary mr-2" />
            </div>
            <p className="text-sm font-medium">{imageFile.name}</p>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
      </div>
      {uploadedImageUrl && (
        <div className="mt-4 relative group">
          <img
            src={uploadedImageUrl}
            alt="Uploaded"
            className="w-full h-48 object-cover rounded-lg border"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-lg">
            Server Uploaded ✅
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImageUpload;
