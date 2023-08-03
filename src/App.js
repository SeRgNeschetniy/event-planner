import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./сomponents/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const EventDetailsPage = lazy(() => import("./pages/EventDetails"));
const EventCreatePage = lazy(() => import("./pages/EventCreate"));
const EventEditPage = lazy(() => import("./pages/EventEdit"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<EventDetailsPage />} />
        <Route path="/create" element={<EventCreatePage />} />
        <Route path="/edit" element={<EventEditPage />} />
      </Route>
    </Routes>
  );
};

export default App;
