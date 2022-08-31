const NewBlogForm = ({
  handleAddBlog,
  setTitle,
  setAuthor,
  setUrl,
  setLikes,
  title,
  author,
  url,
  likes,
  blogVisible,
  setBlogVisible,
}) => {
  const hideWhenVisible = { display: blogVisible ? "none" : "" };
  const showWhenVisible = { display: blogVisible ? "" : "none" };

  return (
    <div>
      <button style={hideWhenVisible} onClick={() => setBlogVisible(true)}>
        New Blog
      </button>
      <form onSubmit={handleAddBlog} style={showWhenVisible}>
        <div>
          Title
          <input
            type="text"
            value={title}
            name="title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Author
          <input
            type="text"
            value={author}
            name="author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          Url
          <input
            type="text"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <div>
          Likes
          <input
            type="number"
            value={likes}
            name="likes"
            onChange={({ target }) => setLikes(target.value)}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
      <button style={showWhenVisible} onClick={() => setBlogVisible(false)}>
        Cancel
      </button>
    </div>
  );
};

export default NewBlogForm;
