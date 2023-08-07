import {
  DateTimeLocationItem,
  Description,
  ImageWrapp,
  Item,
  Title,
  DateTimeLocationWrapp,
  InfoWrapp,
  Badge,
  BadgeWrapp,
  ButtonMoreInfo,
  ButtonWrapp,
} from "./Event.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from "images/placeholder.svg";
import { useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { priorities } from "data/variables";

export const EventCard = ({ event }) => {
  const {
    id,
    title,
    description,
    date,
    time,
    location,
    category,
    img,
    priority,
  } = event;

  const navigate = useNavigate();
  const toEvent = () => navigate(`/event/${id}`);

  const priorityItem = priorities.find((item) => item.value === priority);

  return (
    <Item>
      <ImageWrapp>
        <LazyLoadImage
          alt={title}
          effect="blur"
          src={img ? img : placeholder}
        />
        <BadgeWrapp>
          <Badge>{category}</Badge>
          <Badge priority={priorityItem?.name}>{priorityItem?.name}</Badge>
        </BadgeWrapp>
        <DateTimeLocationWrapp>
          <DateTimeLocationItem>
            {date} at {time}
          </DateTimeLocationItem>
          <DateTimeLocationItem>{location}</DateTimeLocationItem>
        </DateTimeLocationWrapp>
      </ImageWrapp>
      <InfoWrapp>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoWrapp>
      <ButtonWrapp>
        <ButtonMoreInfo onClick={toEvent}>More info</ButtonMoreInfo>
      </ButtonWrapp>
    </Item>
  );
};
