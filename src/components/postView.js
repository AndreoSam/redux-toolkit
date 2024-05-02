import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/slice/PostSlice";

const PostView = () => {
  useSelector((state) => console.log(state));
  const { isLoading, postValue, error } = useSelector((state) => state.posts);
  console.log("UseSelector in post", isLoading, postValue, error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <h1>Posts</h1>
      {isLoading && <h3>...Loading</h3>}
      {error && <h3>{error}</h3>}
      {postValue &&
        postValue.map((post) => (
          <React.Fragment key={post.id}>
            <h3>
              {post.userId}.{post.title}
            </h3>
            <h5>{post.body}</h5>
            <hr />
          </React.Fragment>
        ))}
    </>
  );
};

export default PostView;
