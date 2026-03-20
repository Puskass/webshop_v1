import React, { Fragment } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const CommonForm = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled
}) => {
  function renderInputByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent className="bg-white border rounded-md shadow-lg">
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem, index) => (
                    <Fragment key={optionItem.id}>
                      <SelectItem
                        value={optionItem.id}
                        className="cursor-pointer py-2 px-3 focus:bg-gray-100 outline-none transition-colors"
                      >
                        {optionItem.label}
                      </SelectItem>
                      {index < getControlItem.options.length - 1 && (
                        <div className="h-px bg-gray-200 my-1 mx-1" />
                      )}
                    </Fragment>
                  ))
                : null}
              <div className="p-1"></div>
            </SelectContent>
          </Select>
        );
        break;
      // case "textarea":
      //   element = (
      //     <Textarea
      //       name={getControlItem.name}
      //       placeholder={getControlItem.placeholder}
      //       id={getControlItem.id}
      //       value={value}
      //       onChange={(e) =>
      //         setFormData({
      //           ...formData,
      //           [getControlItem.name]: e.target.value,
      //         })
      //       }
      //     />
      //   );
      //   break;
      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div key={controlItem.name} className="grid w-full gap-1.5">
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
