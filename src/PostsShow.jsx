/* eslint-disable react/prop-types */
export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div id="posts-show">
      <h1>Title: {props.post.title}</h1>
      <p>Description: {props.post.body}</p>
      <div id="posts-new">
        <h1>New post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Title: <input defaultValue={props.post.title} name="title" type="text" />
          </div>
          <div>
            Body: <input defaultValue={props.post.body} name="body" type="text" />
          </div>
          <div>
            Image: <input defaultValue={props.post.image} name="image" type="text" />
          </div>
          <button type="submit">Update Post</button>
        </form>
        <button onClick={handleClick}>Delete Post</button>
      </div>
    </div>
  );
}
