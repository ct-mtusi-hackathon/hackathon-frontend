import './App.css';
import Header from "./Headers/Mobile/Header";
import Login from './Body/Login/Login';
import { useTheme } from './elements/useTheme';



function App() {
  document.documentElement.setAttribute('data-theme', "light");
  const [theme,setTheme] =  useTheme();
  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme}/>
      <Login/>
    </div>
  );
}

export default App;
