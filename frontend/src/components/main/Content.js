import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/" element={<Navigate to="signIn" />} />
      </Routes>
    </>
  );
};

export default Content;
