'use client';

import React, { useEffect } from 'react';
import { Button, Form, Input, Modal, message } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updatePost } from '@/api';

const FormUpdateModal = (props) => {
  const { open, toggle, row } = props;

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        title: row.title,
        body: row.body,
      });
    }
  }, [row]);

  const handleClose = () => {
    form.resetFields();
    toggle();
  };

  const onFinish = async (values) => {
    const payload = {
      id: row.id,
      title: values.title,
      body: values.body,
      userId: 1,
    };

    try {
      const response = await updatePost(row.id, payload);

      if (response.status === 200) {
        message.success('Post updated successfully');
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal title="Update Posts" open={open} onCancel={handleClose} footer={false}>
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

export default FormUpdateModal;
