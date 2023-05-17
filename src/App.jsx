import './App.css';
import Header from "./Headers/Mobile/Header";
import Login from './Body/Login/Login';
import { useTheme } from './elements/useTheme';
import Settings from './Body/Settings/Settings';
import { UserInfo } from './common/UserInfo';



function App() {
  document.documentElement.setAttribute('data-theme', "light");
  const [theme,setTheme] =  useTheme();
  const user = new UserInfo("katerina4cat");

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme}/>
      <Login/>
      {/* <Settings user={user}/> */}
    </div>
  );
}

export default App;
