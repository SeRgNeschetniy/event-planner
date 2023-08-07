import { useRef, useState } from "react";
import { Error, FieldWrapp, Item, Label, List } from "../FormEvent.styled";
import useOutsideClick from "hooks/useOutsideHook";
import { ButtonIcon, Input, SelectHeader, Text } from "./InputSelect.styled";

const IconDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 10L12 15L17 10"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const IconUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 14L12 9L7 14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const InputSelect = ({
  field,
  form,
  options,
  label,
  meta,
  ...props
}) => {
  const value = field.value
    ? options.find((item) => item.value === field.value).name
    : `Select ${label}`;
  const [selectValue, setSelectValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(inputRef, outsideClickHandler);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const onSelect = (obj) => {
    setSelectValue(obj.name);
    togglePopup();
    form.setFieldValue(field.name, obj.value);
  };

  return (
    <FieldWrapp ref={inputRef}>
      <Label htmlFor={label} onClick={togglePopup}>
        {label}
      </Label>
      <SelectHeader>
        <Input onClick={togglePopup}>
          <Text $select={selectValue}>
            {!isOpen && <>{selectValue ? selectValue : `Select ${label}`}</>}
            {isOpen && `Select ${label}`}
          </Text>

          {!isOpen ? (
            <ButtonIcon>
              <IconDown />
            </ButtonIcon>
          ) : (
            <ButtonIcon>
              <IconUp />
            </ButtonIcon>
          )}
        </Input>
      </SelectHeader>

      {isOpen && (
        <List>
          {options.map((item, index) => {
            return (
              <Item
                onClick={() => {
                  onSelect(item);
                }}
                key={index}
              >
                {item.name}
              </Item>
            );
          })}
        </List>
      )}

      <Error name={label} component="div" />
    </FieldWrapp>
  );
};
