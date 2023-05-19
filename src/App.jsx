import './App.scss';
import Login from './Pages/Login';
import { UserInfo } from './common/UserInfo';
import { useTheme } from './elements/useTheme';
import { useEffect, useState } from 'react';



function App() {
  const [theme,setTheme] =  useTheme();
  const [CurrentPage, setCurrentPage] = useState(undefined);
  const user = new UserInfo();
  useEffect(()=>{
    setCurrentPage(<Login setCurrentPage={setCurrentPage} user={user} theme={theme} setTheme={setTheme}/>);
  },1);
  return (
    <div className="App">
        {CurrentPage}
    </div>
  );
}

export default App;
