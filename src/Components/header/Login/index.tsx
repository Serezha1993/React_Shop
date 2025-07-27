import { Button, Form, Input } from "antd";
import { useState } from "react";

export const Login = () => {
  const [openRegistration, setOpenRegistration] = useState(false);
  return (
    <div style={{ marginTop: 30 }}>
      <Form onFinish={console.log}>
        <Form.Item
          name="login"
          rules={[
            { required: true, min: 5, message: "Должно быть мин 5 символов" },
          ]}
        >
          <Input placeholder="Введите логин" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, min: 5, message: "Должно быть мин 5 символов" },
          ]}
        >
          <Input placeholder="Введите пароль" />
        </Form.Item>

        {openRegistration && (
          <>
            {/* {" "} */}
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  min: 3,
                  message: "Должно быть мин 5 символов",
                },
              ]}
            >
              <Input placeholder="Укажите Имя" />
            </Form.Item>
            <Form.Item name="phone">
              <Input placeholder="Укажите телефон" />
            </Form.Item>
          </>
        )}

        <Button htmlType="submit">
          {openRegistration ? "Зарегестрироваться" : "Войти"}
        </Button>
      </Form>
      {!openRegistration && (
        <Button
          style={{ marginTop: 20 }}
          type="primary"
          onClick={() => setOpenRegistration(true)}
        >
          Зарегестрироваться
        </Button>
      )}
    </div>
  );
};
