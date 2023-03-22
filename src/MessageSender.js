import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import React, { useState } from "react";
import "./MessageSender.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handelSubmit = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      message: input,
      timestamp: serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      Image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`what is in your mind ,${user.displayName}`}
            type="text"
            className="messageSender_input"
          />
          <input
            placeholder="img url "
            type="text"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
          <button onClick={handelSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3> live video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>photo/video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmotionIcon style={{ color: "orange" }} />
          <h3> feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
