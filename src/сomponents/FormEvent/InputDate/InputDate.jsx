import { useRef, useState } from "react";
import { Error, FieldWrapp, Label } from "../FormEvent.styled";
import useOutsideClick from "hooks/useOutsideHook";
import {
  ButtonIcon,
  CalendarWrapp,
  Input,
  SelectHeader,
  TextWrapp,
} from "./InputDate.styled";
import { IconDown, IconUp } from "helpers/icons";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

export const InputDate = ({ field, form, options, label, meta, ...props }) => {
  const [selected, setSelected] = useState(field.value);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(ref, outsideClickHandler);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "EEE")}.</p>;
  }

  return (
    <FieldWrapp ref={ref}>
      <Label htmlFor={label} onClick={togglePopup}>
        {label}
      </Label>
      <SelectHeader>
        <Input onClick={togglePopup}>
          <TextWrapp $select={selected}>
            {!isOpen && <>{selected ? selected : `Select ${label}`}</>}
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
        <CalendarWrapp>
          <DayPicker
            defaultMonth={new Date(2022, 8)}
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </CalendarWrapp>
      )}

      <Error name={label} component="div" />
    </FieldWrapp>
  );
};
