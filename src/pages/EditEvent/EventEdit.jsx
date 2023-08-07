import { GoBack } from "сomponents/Button/GoBack/GoBack";
import { TitleWrapp } from "./EditEvent.styled";
import { Title } from "сomponents/Title/Title";
import { FormEvent } from "сomponents/FormEvent/FormEvent";

export default function EventEdit() {
  return (
    <>
      <GoBack />
      <TitleWrapp>
        <Title title={"Edit event"} />
      </TitleWrapp>
      <FormEvent type={"edit"} />
    </>
  );
}
