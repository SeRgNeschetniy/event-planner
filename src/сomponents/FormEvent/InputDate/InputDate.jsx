import { useRef, useState } from "react";
import { Error, FieldWrapp, Label } from "../FormEvent.styled";
import useOutsideClick from "hooks/useOutsideHook";
import {
  ButtonCancel,
  ButtonChoose,
  ButtonIcon,
  ButtonWrapp,
  CalendarWrapp,
  Input,
  SelectHeader,
  TextWrapp,
} from "./InputDate.styled";
import { IconDown, IconUp } from "helpers/icons";
import { DayPicker } from "react-day-picker";
import { format, parseISO } from "date-fns";
//import "react-day-picker/dist/style.css";
import styles from "./InputDate.module.css";

export const InputDate = ({ field, form, options, label, meta, ...props }) => {
  const formValue = field.value ? new Date(field.value) : null;

  const [value, setValue] = useState(formValue);
  const [selected, setSelected] = useState(formValue);

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(ref, outsideClickHandler);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectDate = () => {
    setValue(selected);
    form.setFieldValue(field.name, format(selected, "dd/MM/yyyy"));
    setIsOpen((prev) => !prev);
  };

  const classNames = {
    caption: styles.caption,
    caption_label: styles.month,
    nav: styles.nav,
    nav_button: styles.navBtn,
    nav_icon: styles.navIcon,
    table: styles.table,
    head: styles.head,
    head_cell: styles.dayOfWeek,
    row: styles.row,
    cell: styles.cell,
    day: styles.calendarDay,
    day_today: styles.today,
    day_selected: styles.selected,
  };

  const footer = (
    <ButtonWrapp>
      <ButtonCancel onClick={togglePopup}>Cancel</ButtonCancel>
      <ButtonChoose onClick={handleSelectDate}>Choose date</ButtonChoose>
    </ButtonWrapp>
  );

  return (
    <FieldWrapp ref={ref}>
      <Label htmlFor={label} onClick={togglePopup}>
        {label}
      </Label>
      <SelectHeader>
        <Input onClick={togglePopup}>
          <TextWrapp $select={selected}>
            {!isOpen && (
              <>{value ? format(value, "dd/MM/yyyy") : `Select ${label}`}</>
            )}
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
            defaultMonth={new Date()}
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
            classNames={classNames}
          />
        </CalendarWrapp>
      )}

      <Error name={label} component="div" />
    </FieldWrapp>
  );
};
