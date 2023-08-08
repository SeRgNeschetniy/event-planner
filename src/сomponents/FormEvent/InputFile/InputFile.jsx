import { useRef, useState } from "react";
import { Error, FieldWrapp, Label } from "../FormEvent.styled";

import { ButtonIcon, Input, SelectHeader, TextWrapp } from "./InputFile.styled";
import { IconDown } from "helpers/icons";

export const InputFile = ({
  field,
  form,
  options,
  label,
  meta,
  onFile,
  ...props
}) => {
  const inputRef = useRef(null);

  const [value, setValue] = useState();

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    setValue(e.target.files[0]);
    onFile(e.target.files[0]);
  };

  return (
    <FieldWrapp>
      <Label htmlFor={label}>{label}</Label>
      <SelectHeader>
        <Input onClick={handleUploadClick}>
          <TextWrapp>{value ? value.name : `Select ${label}`}</TextWrapp>
          <ButtonIcon>
            <IconDown />
          </ButtonIcon>
        </Input>
        <input
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </SelectHeader>

      <Error name={label} component="div" />
    </FieldWrapp>
  );
};
