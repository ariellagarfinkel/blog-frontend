/* eslint-disable react/prop-types */
export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h1>Title: {props.post.title}</h1>
      <p>Description: {props.post.body}</p>
    </div>
  );
}
