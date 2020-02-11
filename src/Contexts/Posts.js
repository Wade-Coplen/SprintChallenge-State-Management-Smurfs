import React, { useState, useEffect, useContext } from "react";
import PostContext from "../Contexts/PostContexts";
import axios from "axios";

export default function Posts() {
  const { posts, setPosts } = useContext(PostContext);

  return (
    <>
      {posts.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.age}</h2>
          <h2>{item.height}</h2>
        </div>
      ))}
    </>
  );
}
