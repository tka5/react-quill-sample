import { createContext, useState } from "react";

export const BlogInfoContext = createContext();

export const BlogInfoProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [registerModal, setRegisterModal] = useState(false);
  const toggleRegisterModal = () => setRegisterModal(!registerModal);

  const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => setEditModal(!editModal);

  const addBlog = () => {
    const lastBlog = blogs[blogs.length - 1];
    const id = lastBlog ? lastBlog.id + 1 : 1;
    const newBlog = {
      id,
      content,
      title,
      createdAt: new Date(),
    };
    setBlogs([...blogs, newBlog]);
    toggleRegisterModal();
    setId();
    setTitle("");
    setContent("");
  };

  const updateBlog = () => {
    const newBlog = {
      id,
      content,
      title,
    };
    const newBlogs = blogs.map((blog) => {
      if (blog.id === id) {
        return { ...blog, ...newBlog };
      } else {
        return blog;
      }
    });
    setBlogs(newBlogs);
    toggleEditModal();
    setTitle("");
    setContent("");
  };

  const deleteBlog = (i) => {
    if (confirm("本当に削除しますか？")) {
      const newBlogs = [...blogs];
      newBlogs.splice(i, 1);
      setBlogs(newBlogs);
    }
  };
  return (
    <BlogInfoContext.Provider
      value={{
        blogs,
        setBlogs,
        title,
        setTitle,
        content,
        setContent,
        registerModal,
        setRegisterModal,
        toggleRegisterModal,
        editModal,
        setEditModal,
        addBlog,
        deleteBlog,
        updateBlog,
        setId,
      }}
    >
      {children}
    </BlogInfoContext.Provider>
  );
};
