import "./App.scss";
import EditProfile from "./Pages/EditProfile";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import { UserInfo } from "./common/UserInfo";
import NotifyList from "./elements/NotifyList/NotifyList";
import { useTheme } from "./elements/useTheme";
import { useEffect, useRef, useState } from "react";

function App() {
  const theme = useTheme();
  const [CurrentPage, setCurrentPage] = useState(undefined);
  const user = new UserInfo();
  const addNotify = useRef(() => {
    console.log("error1");
  });

  const props = {
    setCurrentPage: setCurrentPage,
    addNotify: addNotify,
    user: user,
    theme: theme,
  };

  useEffect(() => {
    setCurrentPage(<Login {...props} />);
    const x = async () => {
      if (await user.restoreSession())
        if (user.phoneNumber) setCurrentPage(<Main {...props} />);
        else setCurrentPage(<EditProfile {...props} />);
      else setCurrentPage(<Login {...props} />);
    };
    x();
  }, []);
  return (
    <div className="App">
      {CurrentPage}
      <NotifyList addNotify={addNotify} />
    </div>
  );
}

export default App;
