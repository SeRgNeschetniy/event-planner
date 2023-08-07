import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./GoBack.styled";

export const GoBack = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from ?? "/";

  const goBack = () => navigate(from);

  return (
    <Button onClick={goBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12L20 12M4 12L10 6M4 12L10 18"
          stroke="#7B61FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Back
    </Button>
  );
};
