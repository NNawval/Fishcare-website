// File: Card.js
import React, { useState } from 'react';

const News = () => {
  const [dataNews, setData] = useState([
    { url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWf2VHAvUeh5IGsv09FJrH-4KvsI_kaZtbg&s' ,category: 'Category 1', title: 'Title 1', date: '2024-06-05' },
    { url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWf2VHAvUeh5IGsv09FJrH-4KvsI_kaZtbg&s' ,category: 'Category 2', title: 'Title 2', date: '2024-06-06' },
    { url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWf2VHAvUeh5IGsv09FJrH-4KvsI_kaZtbg&s' , category: 'Category 3', title: 'Title 3', date: '2024-06-07' }
  ]);
  return (
    <div className="flex flex-col min-h-[450px] bg-white rounded-[24px] border-2 shadow-lg my-6 px-12 p-6 mobile:p-2">
      <div className='flex flex-col my-4 '>
      {dataNews.map((data, index) => (
        <div key={index}>
        <div className='flex flex-row xl:max-h-[170px]'>
          <div className='w-auto h-auto'>
            <img src={data.url} className='w-full h-full' />
          </div>
          <div className='flex flex-col h-full pl-6'>
  <text className='font-proxima text-[12px] text-[#979797]'>{data.category}</text>
  <text className='font-proxima text-[16px] font-bold pt-4'>{data.title}</text>
  <div className='self-end'>
    <text className='font-proxima text-[12px] text-[#979797] self-end'>{data.date}</text>
  </div>
</div>

        </div>
        </div>
      ))}







      </div>

    </div>
  );
};

export default News;
