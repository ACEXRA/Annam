import React from "react";
import { Route, Routes } from "react-router-dom";
import FeedPage from "../pages/FeedPage";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </>
  );
};

export default Content;
