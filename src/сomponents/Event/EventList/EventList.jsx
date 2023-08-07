import { EventCard } from "сomponents/Event/EventCard/EventCard";
import { ListItem, List, ReactPaginateWrapp } from "./EventList.styled";
import { useEffect, useState } from "react";
import { getAllEvents } from "API/API";
import { useSelector } from "react-redux";
import { selectCategory } from "redux/category/selectors";
import { selectSortByOption } from "redux/sortBy/selectors";
import ReactPaginate from "react-paginate";

export const EventList = () => {
  const [events, setEvents] = useState([]);
  const filter = useSelector(selectCategory);
  const sortBy = useSelector(selectSortByOption);

  useEffect(() => {
    const results = async () => {
      try {
        return await getAllEvents(filter, sortBy);
      } catch (error) {
        console.log(error);
      }
    };

    results().then(({ events, total }) => {
      setEvents(events);
    });
  }, [filter, sortBy]);

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
            previousLabel={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.22 12.72C8.07931 12.5795 8.00018 12.3888 8 12.19V11.81C8.0023 11.6116 8.08112 11.4217 8.22 11.28L13.36 6.14997C13.4539 6.05532 13.5817 6.00208 13.715 6.00208C13.8483 6.00208 13.9761 6.05532 14.07 6.14997L14.78 6.85997C14.8741 6.95214 14.9271 7.07828 14.9271 7.20997C14.9271 7.34166 14.8741 7.46781 14.78 7.55997L10.33 12L14.78 16.44C14.8747 16.5339 14.9279 16.6617 14.9279 16.795C14.9279 16.9283 14.8747 17.0561 14.78 17.15L14.07 17.85C13.9761 17.9446 13.8483 17.9979 13.715 17.9979C13.5817 17.9979 13.4539 17.9446 13.36 17.85L8.22 12.72Z"
                  fill="#BCBCBC"
                />
              </svg>
            }
            nextLabel={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.78 12.72C15.9207 12.5795 15.9998 12.3888 16 12.19V11.81C15.9977 11.6116 15.9189 11.4217 15.78 11.28L10.64 6.14997C10.5461 6.05532 10.4183 6.00208 10.285 6.00208C10.1517 6.00208 10.0239 6.05532 9.93 6.14997L9.22 6.85997C9.12594 6.95214 9.07293 7.07828 9.07293 7.20997C9.07293 7.34166 9.12594 7.46781 9.22 7.55997L13.67 12L9.22 16.44C9.12534 16.5339 9.0721 16.6617 9.0721 16.795C9.0721 16.9283 9.12534 17.0561 9.22 17.15L9.93 17.85C10.0239 17.9446 10.1517 17.9979 10.285 17.9979C10.4183 17.9979 10.5461 17.9446 10.64 17.85L15.78 12.72Z"
                  fill="#7B61FF"
                />
              </svg>
            }
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
  );
};
