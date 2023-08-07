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
import { IconFilter } from "helpers/icons";
import useMedia from "hooks/useMedia";

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
  const { isMobile } = useMedia();
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
        {isMobile && isOpen && selectedCategory}
        {!isMobile && selectedCategory}
        <IconFilter />
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
