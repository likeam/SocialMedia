import React from "react";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <div>
      <h2 className="">Recent Posts</h2>
      <div className="">
        <PostList />
      </div>
    </div>
  );
};

export default Home;
