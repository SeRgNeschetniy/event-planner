import { useRef, useState } from "react";
import { Button, Item, List, TextWrapp, Wrapp } from "./SortByOption.styled";
import { useDispatch, useSelector } from "react-redux";
import { setSortByOption } from "redux/sortBy/slice";
import { selectSortByOption } from "redux/sortBy/selectors";
import useOutsideClick from "hooks/useOutsideHook";
import { sortParam } from "helpers/variables";
import useMedia from "hooks/useMedia";
import { ArrowDown, ArrowUp, IconSort } from "helpers/icons";

export const SortByOption = () => {
  const { isMobile } = useMedia();
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
        {!isMobile && (
          <>
            <TextWrapp>{sortByOption.label}</TextWrapp>
            {sortByOption.order === "asc" ? <ArrowUp /> : <ArrowDown />}
          </>
        )}
        {isMobile && !isOpen && <IconSort />}
        {isMobile && isOpen && (
          <>
            <TextWrapp>{sortByOption.label}</TextWrapp>
            {sortByOption.order === "asc" ? <ArrowUp /> : <ArrowDown />}
          </>
        )}
      </Button>
      {isOpen && (
        <List isOpen={isOpen} ref={ref}>
          {sortParam?.map((item, index) => (
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
