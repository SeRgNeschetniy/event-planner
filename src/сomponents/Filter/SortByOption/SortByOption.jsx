import { useEffect, useRef, useState } from "react";
import { Button, Item, List, TextWrapp, Wrapp } from "./SortByOption.styled";
import { useDispatch, useSelector } from "react-redux";
import { setSortByOption } from "redux/sortBy/slice";
import { selectSortByOption } from "redux/sortBy/selectors";
import useOutsideClick from "hooks/useOutsideHook";

export const SORT = [
  { text: "Name", type: "title", order: "asc" },
  { text: "Name", type: "title", order: "desc" },
  { text: "Date", type: "date", order: "asc" },
  { text: "Date", type: "date", order: "desc" },
  { text: "Priority", type: "priority", order: "asc" },
  { text: "Priority", type: "priority", order: "desc" },
];

const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
    >
      <path
        d="M5 11L5 1M5 11L1 7M5 11L9 7"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ArrowUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
    >
      <path
        d="M5 1L5 11M5 1L9 5M5 1L1 5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const SortByOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const sortByOption = useSelector(selectSortByOption);

  const dispatch = useDispatch();

  const handleCategoryClick = (item) => {
    dispatch(setSortByOption(item));
    setIsOpen((prev) => !prev);
  };

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(ref, outsideClickHandler);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Wrapp>
      <Button onClick={handleButtonClick} isOpen={isOpen}>
        <TextWrapp>
          {sortByOption.text}
          {sortByOption.order === "asc" ? <ArrowUp /> : <ArrowDown />}
        </TextWrapp>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5M14 5H20M10 5L4 5M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM16 12H4M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19ZM8 19H20"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </Button>
      {isOpen && (
        <List isOpen={isOpen} ref={ref}>
          {SORT.map((item, index) => (
            <Item key={index} onClick={() => handleCategoryClick(item)}>
              {item.text}
              {item.order === "asc" ? <ArrowUp /> : <ArrowDown />}
            </Item>
          ))}
        </List>
      )}
    </Wrapp>
  );
};
