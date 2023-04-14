import { useEffect, useState } from "react";
// import { listOfUsers } from "../../mockData/anArrayOfUsers";
export default function UserList({ choosenUser }) {
  const [arrayOfUsers, setArrayOfUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/users")
      .then((response) => response.json())
      .then((json) => setArrayOfUsers(json));
  }, []);

  return (
    <div className={`user_list_box`}>
      <div className={`search_input_box`}>
        <p>Chat</p>
      </div>
      {arrayOfUsers &&
        arrayOfUsers.map((user) => {
          return (
            <div key={user.id} className="contact-box">
              <div
                onClick={() => choosenUser(user)}
                className="user_list_user_box"
              >
                <div className="user_avatar_box">
                  <img className="user_avatar" src={user.img} />
                </div>
                <div className="user_list_user">{user.name}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
