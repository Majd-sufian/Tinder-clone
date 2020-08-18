import React from "react";
import "../style/Chat.css";
import Avatar from "@material-ui/core/Avatar";

function Chat({ name, messege, timestamp, profilepic }) {
  return (
    <div className="chat">
      <Avatar className="Chat__image" alt="Remy Sharp" src={profilepic} />
      <div>
        <h2>{name}</h2>
        <p>{messege}</p>
      </div>
      <p>{timestamp}</p>
    </div>
  );
}

export default Chat;
