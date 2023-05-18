import './App.scss';
import HeaderRegister from "./Headers/Mobile/HeaderRegister";
import { useTheme } from './elements/useTheme';
import { UserInfo } from './common/UserInfo';
import Settings from './Body/Settings/Settings';
import Login from './Body/Login/Login';
import HeaderMain from './Headers/Mobile/HeaderMain';
import MainPage from './Body/Main/MainPage';



function App() {
  document.documentElement.setAttribute('data-theme', "light");
  const [theme,setTheme] =  useTheme();
  const user = new UserInfo("katerina4cat");

  return (
    <div className="App">
      {/* <HeaderRegister theme={theme} setTheme={setTheme}/> */}
      <HeaderMain/>
      {/* <Login/> */}
      {/* <Settings user={user}/> */}
      <MainPage user={user}/>
    </div>
  );
}

export default App;
