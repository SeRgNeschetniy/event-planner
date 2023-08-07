import { EventCard } from "сomponents/Event/EventCard/EventCard";
import { ListItem, List } from "./EventList.styled";
import { useEffect, useState } from "react";
import { getAllEvents } from "API/API";
import { useSelector } from "react-redux";
import { selectCategory } from "redux/category/selectors";
import { selectSortByOption } from "redux/sortBy/selectors";

export const EventList = () => {
  const [events, setEvents] = useState([]);
  const filter = useSelector(selectCategory);
  const sortBy = useSelector(selectSortByOption);

  useEffect(() => {
    const results = async () => {
      try {
        return await getAllEvents(filter, sortBy);
      } catch (error) {
        console.log(error);
      }
    };

    results().then((data) => {
      setEvents(data);
    });
  }, [filter, sortBy]);

  return (
    <List>
      {events?.map((item) => (
        <ListItem key={item.id}>
          <EventCard event={item} />
        </ListItem>
      ))}
    </List>
  );
};
