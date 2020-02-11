import React, { useState, useEffect } from "react";
import PostContext from "../Contexts/PostContexts";
import AddForm from "./AddForm";
import Posts from "../Contexts/Posts";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://smurfs-be-harms.herokuapp.com/smurfs").then(res => {
      // console.log(res);
      setPosts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <div className="App">
        <AddForm />
        <Posts />
      </div>
    </PostContext.Provider>
  );
}
