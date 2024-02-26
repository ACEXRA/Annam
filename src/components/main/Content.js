import React from "react";
import { Route, Routes } from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import SignUpPage from "../pages/SignUpPage";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </>
  );
};

export default Content;
