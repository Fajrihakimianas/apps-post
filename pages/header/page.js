import { Avatar } from 'antd';
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-end items-center gap-2 border p-5">
      <div className="bg-cyan-600 rounded-full flex items-center justify-center">
        <Avatar
          size={30}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </div>

      <div>
        <h2 className="text-gray-800 font-medium text-sm">
          <span className="text-gray-500">Admin</span>
        </h2>

        <h2 className="text-red-400 font-medium text-xs">
          <button className="text-blue-400 bg-white">Logout</button>
        </h2>
      </div>
    </div>
  );
};

export default Header;
