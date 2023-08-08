import { useRef, useState } from "react";
import { Error, FieldWrapp, Label } from "../FormEvent.styled";
import useOutsideClick from "hooks/useOutsideHook";
import {
  ButtonIcon,
  CalendarWrapp,
  Input,
  SelectHeader,
  TextWrapp,
} from "./InputTime.styled";
import { IconDown, IconUp } from "helpers/icons";

import { TimePicker } from "react-ios-time-picker";

export const InputTime = ({ field, form, options, label, meta, ...props }) => {
  // const formValue = field.value ? field.value : null;

  //const [value, setValue] = useState(formValue);
  const [selected, setSelected] = useState("");

  const [value, setValue] = useState("10:00");

  const onChange = (timeValue) => {
    setValue(timeValue);
  };

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(ref, outsideClickHandler);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  // const handleDateChange = (date) => {
  //   setSelected(date);
  // };

  // const handleSelectDate = () => {
  //   setValue(selected);
  //   setIsOpen((prev) => !prev);
  // };

  return (
    <FieldWrapp ref={ref}>
      <Label htmlFor={label} onClick={togglePopup}>
        {label}
      </Label>
      <SelectHeader>
        <Input onClick={togglePopup}>
          <TextWrapp $select={selected}>
            {!isOpen && <>{value ? value : `Select ${label}`}</>}
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

      <TimePicker onChange={onChange} value={value} />

      {isOpen && (
        <CalendarWrapp>
          <TimePicker onChange={onChange} value={value} />
        </CalendarWrapp>
      )}

      <Error name={label} component="div" />
    </FieldWrapp>
  );
};
