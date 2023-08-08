import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Badge,
  BadgeWrapp,
  ButtonDelete,
  ButtonEdit,
  ButtonWrapp,
  CardWrapp,
  Description,
  ImageWrapp,
  InfoWrapp,
  TitleWrapp,
  Wrapp,
} from "./EventDetails.styled";
import { GoBack } from "сomponents/Button/GoBack/GoBack";

import { deleteEvent, getEventById } from "API/API";
import { Title } from "сomponents/Title/Title";
import { priorities } from "helpers/variables";
import { format } from "date-fns";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const toHome = () => navigate("/");
  const toEditEvent = () => navigate(`/event/edit/${id}`);

  useEffect(() => {
    if (!id) return;

    try {
      setIsLoading(true);

      const fetchEvent = async () => {
        try {
          const result = await getEventById(id);
          setEvent(result);
        } catch (error) {
          console.log(error);
        }
      };

      fetchEvent();
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  const handleClickDelete = async (id) => {
    try {
      await deleteEvent(id).finally(() => {
        toHome();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { title, description, date, time, location, category, img, priority } =
    event;

  const priorityItem = priorities.find((item) => item.value === priority);

  return (
    <>
      <GoBack />
      {!event && (
        <div>
          воыасфылва рфывало рфывоарфывла рфлывоар фыловар флвоыра фловыра лфоыв
          рлфо
        </div>
      )}

      {!isLoading && event && (
        <Wrapp>
          <TitleWrapp>
            <Title title={title} />
          </TitleWrapp>
          <CardWrapp>
            <ImageWrapp>
              <LazyLoadImage alt={title} effect="blur" src={img} />
            </ImageWrapp>
            <InfoWrapp>
              <Description>{description}</Description>
              <BadgeWrapp>
                <Badge>{category}</Badge>
                <Badge priority={priorityItem?.name}>
                  {priorityItem?.name}
                </Badge>
                <Badge>{location}</Badge>
                <Badge>
                  {date} at {time}
                </Badge>
              </BadgeWrapp>
              <ButtonWrapp>
                <ButtonEdit onClick={toEditEvent}>Edit</ButtonEdit>
                <ButtonDelete onClick={() => handleClickDelete(id)}>
                  Delete event
                </ButtonDelete>
              </ButtonWrapp>
            </InfoWrapp>
          </CardWrapp>
        </Wrapp>
      )}
    </>
  );
}
