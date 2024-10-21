'use client';

import React from 'react';
import { Button, Form, Input, Modal, message } from 'antd';
import axios from 'axios';
import { addPost } from '@/api';

const FormModal = (props) => {
  const { open, toggle } = props;

  const [form] = Form.useForm();

  const handleClose = () => {
    form.resetFields();
    toggle();
  };

  const onFinish = async (values) => {
    const payload = {
      title: values.title,
      body: values.body,
      userId: 1,
    };

    try {
      const response = await addPost(payload);

      if (response.status === 201) {
        message.success('Post created successfully');
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal title="Create Posts" open={open} onCancel={handleClose} footer={false}>
      <br />

      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          label="Judul"
          name="title"
          required
          rules={[
            {
              required: true,
              message: 'Title is required',
            },
          ]}
        >
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item
          label="Deskripsi"
          name="body"
          required
          rules={[
            {
              required: true,
              message: 'Description is required',
            },
          ]}
        >
          <Input.TextArea placeholder="Description" />
        </Form.Item>

        <Form.Item>
          <div className="flex justify-end gap-2">
            <Button type="primary" danger onClick={handleClose}>
              Cancel
            </Button>

            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FormModal;
