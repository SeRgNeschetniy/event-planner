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

export const Event = ({ event }) => {
  const { title, description, date, time, location, category, img, priority } =
    event;

  return (
    <Item>
      <ImageWrapp>
        <BadgeWrapp>
          <Badge>{category}</Badge>
          <Badge>{priority}</Badge>
        </BadgeWrapp>
        <LazyLoadImage alt={title} src={img ? img : placeholder} />
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
      <ButtonWrapp className="button-wrapp">
        <ButtonMoreInfo>More info</ButtonMoreInfo>
      </ButtonWrapp>
    </Item>
  );
};
