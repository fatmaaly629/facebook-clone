import React, { useEffect } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { db } from "./firebase";
import { useState } from "react";
import StoryReel from "./StoryReel";
import { onSnapshot, collection } from "firebase/firestore";

function Feed(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //     onSnapshot(collection(db, "posts"), (snapshot) => {
  //       setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     });
  //   }, []);
  //   db.collections("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
  //   );
  // }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
