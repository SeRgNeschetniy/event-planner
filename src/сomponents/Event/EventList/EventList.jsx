import { EventCard } from "сomponents/Event/EventCard/EventCard";
import {
  ListItem,
  List,
  ReactPaginateWrapp,
  Message,
} from "./EventList.styled";
import { useEffect, useState } from "react";
import { getAllEvents } from "API/API";
import { useSelector } from "react-redux";
import { selectCategory } from "redux/category/selectors";
import { selectSortByOption } from "redux/sortBy/selectors";
import ReactPaginate from "react-paginate";
import { selectSearch } from "redux/search/selectors";
import { ArrowLeft, ArrowRight } from "helpers/icons";
import { Loader } from "сomponents/Loader/Loader";

export const EventList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const search = useSelector(selectSearch);
  const filter = useSelector(selectCategory);
  const sortBy = useSelector(selectSortByOption);

  useEffect(() => {
    const results = async () => {
      try {
        setIsLoading(true);
        try {
          return await getAllEvents(filter, sortBy);
        } catch (error) {
          console.log(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    results().then(({ events, total }) => {
      if (search.length > 0) {
        const result = events?.filter((item) => {
          return item.title.toUpperCase().includes(search.toUpperCase());
        });
        setEvents(result);
      } else {
        setEvents(events);
      }
    });
  }, [filter, sortBy, search]);

  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = events?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(events?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % events?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !events.length && (
        <Message>Sorry, there are no events...</Message>
      )}
      {!isLoading && events.length > 0 && (
        <>
          <List>
            {currentItems?.map((item) => (
              <ListItem key={item.id}>
                <EventCard event={item} />
              </ListItem>
            ))}
          </List>

          {events?.length > 0 && (
            <ReactPaginateWrapp>
              <ReactPaginate
                previousLabel={<ArrowLeft />}
                nextLabel={<ArrowRight />}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                breakLabel=".."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                renderOnZeroPageCount={null}
              />
            </ReactPaginateWrapp>
          )}
        </>
      )}
    </>
  );
};
