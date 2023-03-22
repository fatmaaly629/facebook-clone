import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.shutterstock.com/image-photo/close-photo-male-hands-laptop-man-1922573447"
        profileSrc="https://www.shutterstock.com/image-photo/close-photo-male-hands-laptop-man-1922573447"
        title="hgh"
      />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
}

export default StoryReel;
