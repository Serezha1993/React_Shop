import { Input, Form, Button } from "antd";
import "./index.scss";
import { useEffect } from "react";
import { createComment, loadComments } from "../slices";
import { useAppDispatch, useAppSelector } from "../../../reduxHooks";

type CommentForm = {
  userName: string;
  text: string;
};

export const ProductComments = ({ productId }: { productId: number }) => {
  const dispatch = useAppDispatch();
  const { comments } = useAppSelector((state) => state.product);

  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    const date = new Date().toLocaleString();

    dispatch(createComment({ ...values, productId, date }));
    form.resetFields();
  };

  useEffect(() => {
    dispatch(loadComments(productId));
  }, [dispatch, productId]);

  return (
    <div className="productPageComments">
      <Form form={form} onFinish={handleFinish}>
        <Form.Item name="username">
          <Input placeholder="Укажите имя" />
        </Form.Item>
        <Form.Item name="text">
          <Input.TextArea placeholder="Комментарий" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </Form>
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="productCommentsBlock">
            <span>{comment.username}</span>
            <span>{comment.date}</span>
            <div>{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
