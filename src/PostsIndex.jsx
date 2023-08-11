/* eslint-disable react/prop-types */
// make label tags
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt={post.title} />
          <button onClick={() => props.onShowPost(post)}>More info</button>
        </div>
      ))}
    </div>
  );
}
