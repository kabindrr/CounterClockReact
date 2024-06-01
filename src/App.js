import logo from "./logo.svg";
import "./App.css";

import { UserProfile } from "./component/UserComponent";

function App() {
  return (
    <>
      <div className="user-page" style={{ color: "wheat" }}>
        <UserProfile />
      </div>
    </>
  );
}

export default App;
