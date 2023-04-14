import { useState } from "react";

export default function InputMessage({ pickedUser, onSaveNewArray }) {
  const [text, setText] = useState("");

  const onClickSendMessage = () => {
    let addedMessage = {
      id: Math.random(),
      text: text,
      senderId: 99999,
      receiverId: pickedUser.id,
    };
    if (addedMessage.text === "") {
      alert(`Write text to ${pickedUser.name}`);
    } else {
      fetch("http://localhost:3002/messages", {
        method: "POST",
        body: JSON.stringify(addedMessage),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    }
    onSaveNewArray(addedMessage);
  };

  return (
    <div className="input_box">
      <input
        placeholder="Type message"
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button onClick={onClickSendMessage}>Send</button>
    </div>
  );
}
