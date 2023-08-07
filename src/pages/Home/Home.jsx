import { useNavigate } from "react-router-dom";
import { EventList } from "сomponents/Event/EventList/EventList";
import { TitleWrapp, ButtonWrapp, CreateEventButton } from "./Home.styled";
import { FilterByCaregory } from "сomponents/Filter/FilterByCategoty/FilterByCategoty";
import { SortByOption } from "сomponents/Filter/SortByOption/SortByOption";
import { Title } from "сomponents/Title/Title";

export default function Home() {
  const navigate = useNavigate();
  const goCreateEvent = () => navigate("event/create");

  return (
    <>
      <TitleWrapp>
        <Title title="My events" />
        <ButtonWrapp>
          <FilterByCaregory />
          <SortByOption />
          <CreateEventButton onClick={goCreateEvent}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.5 4V20M4.5 12L20.5 12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Add new event
          </CreateEventButton>
        </ButtonWrapp>
      </TitleWrapp>
      <EventList />
    </>
  );
}
