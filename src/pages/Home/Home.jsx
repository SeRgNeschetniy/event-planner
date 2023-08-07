import { EventList } from "сomponents/Event/EventList/EventList";
import { TitleWrapp, ButtonWrapp } from "./Home.styled";
import { FilterByCaregory } from "сomponents/Filter/FilterByCategoty/FilterByCategoty";
import { SortByOption } from "сomponents/Filter/SortByOption/SortByOption";
import { Title } from "сomponents/Title/Title";
import { CreateEvent } from "сomponents/Button/CreatEvent/CreateEvent";
import useMedia from "hooks/useMedia";

export default function Home() {
  const { isTabletOnly, isDesktop } = useMedia();
  return (
    <>
      <TitleWrapp>
        {isDesktop && <Title title="My events" />}
        <ButtonWrapp>
          <FilterByCaregory />
          <SortByOption />
          <CreateEvent />
        </ButtonWrapp>
      </TitleWrapp>
      {isTabletOnly && <Title title="My events" />}
      <EventList />
    </>
  );
}
