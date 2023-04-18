import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Toptext } from "../Footer/style";

const ContactPage = () => {
  const onFinish = (values) => {
    alert("Success:", values);
  };
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto
        eum totam non exercitationem illum nisi sequi atque blanditiis ea?
        Officiis culpa vero est adipisci?
      </p>
      <p>
        <Toptext>Email:</Toptext> example@gmail.com
      </p>
      <p>
        <Toptext>Phone:</Toptext>+3584573968551
      </p>
      <Toptext>Naples Office:</Toptext>
      <p> ZindaBazar, Sylhet-3100, Bangladesh</p>
      <ul>
        What you get when asking your question
        <li>Less than 12 hours response to your question </li>
        <li>
          Thoroughtness and expertise and a Certified Exchange Specialist{" "}
        </li>
        <li>Plan of action summarized in an email follow up</li>
      </ul>
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactPage;
