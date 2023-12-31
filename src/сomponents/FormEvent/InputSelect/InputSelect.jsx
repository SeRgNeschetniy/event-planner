import { useRef, useState } from "react";
import { Error, FieldWrapp, Item, Label, List } from "../FormEvent.styled";
import useOutsideClick from "hooks/useOutsideHook";
import {
  ButtonIcon,
  Input,
  SelectHeader,
  TextWrapp,
} from "./InputSelect.styled";
import { IconDown, IconUp } from "helpers/icons";

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
  const ref = useRef(null);

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(ref, outsideClickHandler);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const onSelect = (obj) => {
    setSelectValue(obj.name);
    togglePopup();
    form.setFieldValue(field.name, obj.value);
  };

  return (
    <FieldWrapp ref={ref}>
      <Label htmlFor={label} onClick={togglePopup}>
        {label}
      </Label>
      <SelectHeader>
        <Input onClick={togglePopup}>
          <TextWrapp $select={selectValue}>
            {!isOpen && <>{selectValue ? selectValue : `Select ${label}`}</>}
            {isOpen && `Select ${label}`}
          </TextWrapp>

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
