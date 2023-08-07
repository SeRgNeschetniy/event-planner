import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./сomponents/Layout";

const HomePage = lazy(() => import("./pages/Home/Home"));
const EventDetailsPage = lazy(() =>
  import("./pages/EventDetails/EventDetails")
);
const EventCreatePage = lazy(() => import("./pages/CreateEvent/EventCreate"));
const EventEditPage = lazy(() => import("./pages/EditEvent/EventEdit"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route path="/event/create" element={<EventCreatePage />} />
        <Route path="/event/edit/:id" element={<EventEditPage />} />
      </Route>
    </Routes>
  );
};

export default App;
