import { FormEvent } from "сomponents/FormEvent/FormEvent";
import { TitleWrapp } from "./CreateEvent.styled";
import { GoBack } from "сomponents/Button/GoBack/GoBack";
import { Title } from "сomponents/Title/Title";

export default function EventCreate() {
  return (
    <>
      <GoBack />
      <TitleWrapp>
        <Title title={"Create new event"} />
      </TitleWrapp>
      <FormEvent />
    </>
  );
}
