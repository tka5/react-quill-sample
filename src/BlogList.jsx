import React, { useContext } from "react";
import { Button, Table } from "reactstrap";
import parse from "html-react-parser";
import Modal from "./Modal";
import { BlogInfoContext } from "./BlogInfoProvider";

function BlogList() {
  const {
    setTitle,
    setContent,
    blogs,
    deleteBlog,
    editModal,
    toggleEditModal,
    updateBlog,
    setEditModal,
    setId,
  } = useContext(BlogInfoContext);
  const handleEditModal = (i) => {
    setTitle(blogs[i].title);
    setContent(blogs[i].content);
    setId(i + 1)
    setEditModal(!editModal);
  };
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>タイトル</th>
          <th>内容</th>
          <th>作成日時</th>
          <th>更新</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog, i) => (
          <tr key={i}>
            <th scope="row">{blog.id}</th>
            <td>{blog.title}</td>
            <td>{parse(blog.content)}</td>
            <td>{blog.createdAt.toLocaleString()}</td>
            <td>
              <Button color="primary" onClick={() => handleEditModal(i)}>
                更新
              </Button>
              <Modal
                modal={editModal}
                toggle={toggleEditModal}
                onClick={() => updateBlog()}
              />
            </td>
            <td>
              <Button color="danger" onClick={() => deleteBlog(i)}>
                削除
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BlogList;
