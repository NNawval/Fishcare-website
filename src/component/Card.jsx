// File: Card.js
import React from 'react';
import ikan from "../assets/ikan.jpg";
import suhu from "../assets/suhu.png";
import ph from "../assets/ph.png";
import turnidity from "../assets/turnidity.png";
import o2 from "../assets/o2.png";
import atom from "../assets/atom.png";
import amonia from "../assets/amonia.png";
const Card = (props) => {
  return (
    <div className="flex items-center flex-col bg-white rounded-[24px] border-2 shadow-lg p-8">
      <select className="w-full self-start md:w-[250px]  p-2 border-none shadow-custom rounded-[4px] outline-none">
        <option value="option1">Jenis ikan</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <div className='flex flex-col px-4 lg:flex-row items-center w-full mb-4 pt-10 justify-between'>
        <div className='flex flex-col items-center'>
          <img src={ikan} alt="description2" className="w-56 h-56 object-cover rounded" />
          <p className='font-apple text-center'>
            Your aquarium condition is
          </p>
          <p className='font-apple text-[#7BC0FF] text-4xl'>
            Good
          </p>
        </div>
        <div className='grid grid-cols-3 gap-4 h-full content-center'>
          <div className='h-20 w-20 md:h-24 md:w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
            <img src={suhu} className='w-6' />
            <p className='font-proxima text-[14px] font-bold'>{props.temperature}°C</p>
            <p className='font-proxima text-[10px] text-[#979797]'>Temperature</p>
          </div>
          <div className='h-20 w-20 md:h-24 md:w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
            <img src={ph} className='w-6' />
            <p className='font-proxima text-[14px] font-bold'>28°C</p>
            <p className='font-proxima text-[10px] text-[#979797]'>pH</p>
          </div>
          <div className='h-20 w-20 md:h-24 md:w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
            <img src={turnidity} className='w-6' />
            <p className='font-proxima text-[14px] font-bold'>28°C</p>
            <p className='font-proxima text-[10px] text-[#979797]'>Turnidity</p>
          </div>
          <div className='h-20 w-20 md:h-24 md:w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
            <img src={o2} className='w-6' />
            <p className='font-proxima text-[14px] font-bold'>28°C</p>
            <p className='font-proxima text-[10px] text-[#979797]'>Dissolved Oxygen</p>
          </div>
          <div className='h-20 w-20 md:h-24 md:w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
            <img src={atom} className='w-6' />
            <p className='font-proxima text-[14px] font-bold'>28°C</p>
            <p className='font-proxima text-[10px] text-[#979797]'>Oxidation/Reduction</p>
          </div>
          <div className='h-20 w-20 md:h-24 md:w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
            <img src={amonia} className='w-6' />
            <p className='font-proxima text-[14px] font-bold'>28°C</p>
            <p className='font-proxima text-[10px] text-[#979797]'>Ammonia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
