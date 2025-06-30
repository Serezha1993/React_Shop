import { Input, Form, Button } from "antd";
import "./index.scss";
import { useEffect } from "react";
import { createComment, loadComments } from "../slices";
import { useDispatch } from "react-redux";

export const ProductComments = ({ productId }) => {
  const dispatch = useDispatch();

  const handleFinish = (values) => {
    const date = new Date().toLocaleString();

    dispatch(createComment({ ...values, productId, date }));
  };

  useEffect(() => {
    dispatch(loadComments());
  }, []);

  return (
    <div className="productPageComments">
      <Form onFinish={handleFinish}>
        <Form.Item name="username">
          <Input placeholder="Укажите имя" />
        </Form.Item>
        <Form.Item name="text">
          <Input.TextArea placeholder="Комментарий" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
