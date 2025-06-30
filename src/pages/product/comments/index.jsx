import { Input, Form, Button } from "antd";
import "./index.scss";



export const ProductComments = () => {
  const handleFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="productPageComments">
      <Form onFinish={handleFinish}>
        <Form.Item name="name">
          <Input placeholder="Укажите имя" />
        </Form.Item>
        <Form.Item name="comment">
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
