import { useNavigate } from "react-router-dom";
import { Button } from "./CreateEvent.styled";
import { IconPlus } from "helpers/icons";
import useMedia from "hooks/useMedia";

export const CreateEvent = () => {
  const { isMobile } = useMedia();
  const navigate = useNavigate();
  const goCreateEvent = () => navigate("event/create");

  return (
    <Button onClick={goCreateEvent}>
      <IconPlus />
      {!isMobile && "Add new event"}
    </Button>
  );
};
