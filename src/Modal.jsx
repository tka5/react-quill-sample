import React, { useContext } from "react";
import {
  Button,
  Modal as BootstrapModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
import ReactQuill from "react-quill";
import { BlogInfoContext } from "./BlogInfoProvider";

function Modal({ modal, toggle, onClick }) {
  const { title, setTitle, content, setContent } = useContext(BlogInfoContext);
  return (
    <BootstrapModal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        ブログ記事を追加する
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">タイトル</Label>
            <Input
              id="title"
              name="title"
              placeholder="タイトルを入力"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="content">内容</Label>
            <ReactQuill
              id="content"
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          キャンセル
        </Button>
        <Button color="primary" onClick={onClick}>
          保存
        </Button>
      </ModalFooter>
    </BootstrapModal>
  );
}

export default Modal;
