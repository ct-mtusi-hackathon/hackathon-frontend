import "./App.scss";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import { UserInfo } from "./common/UserInfo";
import { useTheme } from "./elements/useTheme";
import { useEffect, useRef, useState } from "react";

function App() {
  const theme = useTheme();
  const [CurrentPage, setCurrentPage] = useState(undefined);
  const user = new UserInfo();
  useEffect(
    () => async () => {
      if (await user.restoreSession())
        setCurrentPage(
          <Main setCurrentPage={setCurrentPage} user={user} theme={theme} />
        );
      else
        setCurrentPage(
          <Login setCurrentPage={setCurrentPage} user={user} theme={theme} />
        );
    },
    [theme.theme]
  );
  return <div className="App">{CurrentPage}</div>;
}

export default App;
