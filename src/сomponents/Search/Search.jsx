import { useEffect, useState } from "react";
import { Form, IconCross, IconSearch, Input } from "./Search.styled";
import { useDispatch } from "react-redux";

import { ReactComponent as SearchIcon } from "images/search.svg";
import { ReactComponent as CrossIcon } from "images/cross-small.svg";
import useDebounce from "hooks/useDebounce";
import { setSearch } from "redux/search/slice";

export const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [dispatch, debouncedSearch]);

  const handleChange = (e) => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const removeQuery = () => {
    setSearchQuery("");
  };

  return (
    <Form>
      <Input
        type="text"
        name="searchQuery"
        autoComplete="off"
        placeholder="Search by keywords"
        onChange={handleChange}
        value={searchQuery}
      />

      {Boolean(searchQuery.length > 0) ? (
        <IconCross>
          <CrossIcon onClick={() => removeQuery("erase")} />
        </IconCross>
      ) : null}
      <IconSearch>
        <SearchIcon />
      </IconSearch>
    </Form>
  );
};
