import { Button } from "reactstrap";
import Modal from "./Modal";
import BlogList from "./BlogList";
import { BlogInfoContext } from "./BlogInfoProvider";
import { useContext } from "react";

function App() {
  const { toggleRegisterModal, addBlog, registerModal } =
    useContext(BlogInfoContext);
  return (
    <>
      <h2>ブログ管理システム</h2>
      <Button color="primary" onClick={toggleRegisterModal}>
        ブログ記事を書く
      </Button>
      <Modal
        modal={registerModal}
        toggle={toggleRegisterModal}
        onClick={addBlog}
      />
      <BlogList />
    </>
  );
}

export default App;
