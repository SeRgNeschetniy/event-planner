import { useRef, useState } from "react";
import {
  Button,
  CategoryItem,
  CategoryList,
  Wrapp,
} from "./FilterByCategoty.styled";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "redux/category/slice";
import { selectCategory } from "redux/category/selectors";
import useOutsideClick from "hooks/useOutsideHook";

const CATEGORY = [
  "All",
  "Art",
  "Music",
  "Business",
  "Conference",
  "Workshop",
  "Party",
  "Sport",
];

export const FilterByCaregory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const selectedCategory = useSelector(selectCategory);

  const dispatch = useDispatch();

  const handleCategoryClick = (item) => {
    dispatch(setCategory(item));
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
        {selectedCategory}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 4L9 12V18L15 21V12L20 4H4Z"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
      {isOpen && (
        <CategoryList ref={ref} isOpen={isOpen}>
          {CATEGORY.map((item, index) => (
            <CategoryItem key={index} onClick={() => handleCategoryClick(item)}>
              {item}
            </CategoryItem>
          ))}
        </CategoryList>
      )}
    </Wrapp>
  );
};
