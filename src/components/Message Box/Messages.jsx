export default function Messages({ arrayOfMessages, pickedUser }) {
  const filteredMessage = arrayOfMessages.filter((message) => {
    return (
      (message.senderId === 99999 && message.receiverId === pickedUser.id) ||
      (message.senderId === pickedUser.id && message.receiverId === 99999)
    );
  });

  return (
    <div className="messages_list_box">
      {filteredMessage &&
        filteredMessage.map((line) => {
          return (
            <div key={line.id} className="each_message_box">
              <div className="each_message">{line.text}</div>
            </div>
          );
        })}
    </div>
  );
}
