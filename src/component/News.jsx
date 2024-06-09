// File: Card.js
import React, { useState } from 'react';

const News = (props) => {
  const [dataNews, setData] = useState([
    { url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWf2VHAvUeh5IGsv09FJrH-4KvsI_kaZtbg&s' ,category: 'Category 1', title: 'Title 1', date: '2024-06-05' },
    { url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWf2VHAvUeh5IGsv09FJrH-4KvsI_kaZtbg&s' ,category: 'Category 2', title: 'Title 2', date: '2024-06-06' },
    { url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWf2VHAvUeh5IGsv09FJrH-4KvsI_kaZtbg&s' , category: 'Category 3', title: 'Title 3', date: '2024-06-07' }
  ]);
  return (
    <div className="flex flex-col bg-white rounded-[24px] border-2 shadow-lg px-12 p-6">
      <div className='flex flex-col gap-4'>
      {props.berita.map((data, index) => (
        <div key={index} className='flex'>
          <img src={data.urlToImage} className='hidden md:block w-[250px] h-[150px] rounded-[12px] object-cover' />
          <div className='flex flex-col h-full px-6 py-4 justify-between'>
            <div>
              <p className='font-proxima text-[16px] font-bold pt-2'>{data.title}</p>
              <p className='font-proxima text-[12px] text-[#979797]'>{data.publishedAt}</p>
            </div>
              <a className='font-proxima text-[12px] text-[#979797]' href ={data.url}>Link to News</a>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default News;
