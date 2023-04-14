import UserHeader from "./UserHeader";
import InputMessage from "./InputMessage";
import Messages from "./Messages";
import { useEffect, useState } from "react";

export default function MessageBox({ pickedUser }) {
  const [arrayOfMessages, setArrayOfMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/messages")
      .then((res) => res.json())
      .then((json) => setArrayOfMessages(json));
  }, []);

  const onSaveNewArray = (addedMessage) => {
    const newMessage = [...arrayOfMessages, addedMessage];
    setArrayOfMessages(newMessage);
  };

  return (
    <div className="messages_box">
      <UserHeader pickedUser={pickedUser} />
      <Messages arrayOfMessages={arrayOfMessages} pickedUser={pickedUser} />
      <InputMessage pickedUser={pickedUser} onSaveNewArray={onSaveNewArray} />
    </div>
  );
}
