import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "fBase";

function App() {
  // console.log(authService.currentUser); // null
  // 로그인 여부 판단 가능
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
      <footer>&copy; Twitter Cloning {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
