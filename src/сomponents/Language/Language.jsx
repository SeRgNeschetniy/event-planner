import { Button, Wrapp } from "./Language.styled";

export const Language = () => {
  return (
    <Wrapp>
      <Button>
        UK
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#3F3F3F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
    </Wrapp>
  );
};
