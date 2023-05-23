import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 초기화 : false로 로그인 되어있지 않은 상태로
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          // Fragment(<>)로 Route 여러개 추가
          // 부모 요소가 없을 때 많은 요소들을 render 할 수 있게 해줌.
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          // 로그인 되어있지 않을 때 로그인 페이지로 가도록
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
