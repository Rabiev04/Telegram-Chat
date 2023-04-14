import { useEffect, useState } from "react";
import MessageBox from "./components/Message Box/MessageBox";
import HeaderSearch from "./components/User List/HeaderSearch";
import UserList from "./components/User List/UserList";

function App() {
  const [pickedUser, setPikcedUser] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [theme, setTheme] = useState("light");

  const choosenUser = (user) => {
    setPikcedUser(user);
  };

  const onClickChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <button onClick={onClickChangeTheme}>theme</button>
      <div className={`app_box ${theme}`}>
        <HeaderSearch theme={theme} />
        <UserList choosenUser={choosenUser} />
        <MessageBox pickedUser={pickedUser} />
      </div>
    </div>
  );
}

export default App;
