'use client';

import { useEffect, useState } from 'react';
import FormModal from '@/pages/form/pages';
import Header from '@/pages/header/page';
import { Button, Table } from 'antd';
import FormUpdateModal from '@/pages/form/update/page';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDataPosts } from '@/api';
import { getDataPost } from '@/lib/posts/postSlice';

export default function Home() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);

  const [row, setRow] = useState(null);
  const [modal, setModal] = useState({
    isFormModalOpen: false,
    isFormUpdateModalOpen: false,
  });

  useEffect(() => {
    getAllDataPosts().then((data) => dispatch(getDataPost(data)));
  }, [dispatch]);

  const toggleModal = (name) => {
    setModal((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'description',
      dataIndex: 'body',
      key: 'body',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <Button
          type="primary"
          className="bg-blue-500 text-white border-0"
          onClick={() => {
            toggleModal('isFormUpdateModalOpen');
            setRow(record);
          }}
        >
          Edit
        </Button>
      ),
    },
  ];

  const handleRow = (record, index) => {
    if (index % 2 !== 0) {
      return 'bg-gray-100';
    }
  };

  return (
    <>
      <Header />

      <div className="container mx-auto">
        <div className="my-8">
          <h1 className="text-2xl font-bold text-start text-gray-700 ">Management</h1>
          <p className="text-base font-bold text-start text-indigo-700">
            Application Post
          </p>
        </div>

        <Button
          className="float-right mb-8"
          type="primary"
          onClick={() => toggleModal('isFormModalOpen')}
        >
          Add Post
        </Button>

        <Table columns={columns} dataSource={posts.posts} rowClassName={handleRow} />

        <FormModal
          open={modal.isFormModalOpen}
          toggle={() => {
            toggleModal('isFormModalOpen');
          }}
        />

        <FormUpdateModal
          row={row}
          open={modal.isFormUpdateModalOpen}
          toggle={() => {
            toggleModal('isFormUpdateModalOpen');
          }}
        />
      </div>
    </>
  );
}
