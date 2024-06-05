// File: Card.js
import React from 'react';
import ikan from "../assets/ikan.jpg";
import suhu from "../assets/suhu.png";
import ph from "../assets/ph.png";
import turnidity from "../assets/turnidity.png";
import o2 from "../assets/o2.png";
import atom from "../assets/atom.png";
import amonia from "../assets/amonia.png";
const Card = () => {
  return (
    <div className="flex flex-col min-h-[450px] my-6 bg-white rounded-[24px] border-2 shadow-lg p-6 mobile:p-0">
      <div className=''>
      </div>

      <div className='flex flex-col p-0 w-auto grid justify-items-center xl:flex xl:flex-row '>

        <div className='w-[60%] h-full flex flex-col grid justify-items-center '>
          <div className="w-[100%] md:w-[50%] h-30 rounded">
            <select className="w-full h-full border-none shadow-custom rounded-[4px] outline-none">
              <option value="option1">Jenis ikan</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className='flex justify-center flex-col content-center'>
            <div className='self-center pt-10'>
              <img src={ikan} alt="description2" className="w-56 h-56 object-cover rounded" />
            </div>

          </div>
          <text className='font-apple self-center'>
            Your aquarium condition is
          </text>
          <text className='font-apple text-[#7BC0FF] text-4xl self-center'>
            Good
          </text>
        </div>

        <div className='w-[60%] flex justify-center'>
          <div className='grid grid-cols-3 gap-4 h-full content-center py-10 min-w-[400px] md:min-w-[300px]'>
            <div className='h-24 w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
              <img src={suhu} className='w-6' />
              <text className='font-proxima text-[14px] font-bold'>28°C</text>
              <text className='font-proxima text-[10px] text-[#979797]'>Temperature</text>
            </div>
            <div className='h-24 w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
              <img src={ph} className='w-6' />
              <text className='font-proxima text-[14px] font-bold'>28°C</text>
              <text className='font-proxima text-[10px] text-[#979797]'>pH</text>
            </div>
            <div className='h-24 w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
              <img src={turnidity} className='w-6' />
              <text className='font-proxima text-[14px] font-bold'>28°C</text>
              <text className='font-proxima text-[10px] text-[#979797]'>Turnidity</text>
            </div>            <div className='h-24 w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
              <img src={o2} className='w-6' />
              <text className='font-proxima text-[14px] font-bold'>28°C</text>
              <text className='font-proxima text-[10px] text-[#979797]'>Dissolved Oxygen</text>
            </div>            <div className='h-24 w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
              <img src={atom} className='w-6' />
              <text className='font-proxima text-[14px] font-bold'>28°C</text>
              <text className='font-proxima text-[10px] text-[#979797]'>Oxidation/Reduction</text>
            </div>            <div className='h-24 w-24 shadow-lg flex justify-center items-center rounded-2xl flex-col'>
              <img src={amonia} className='w-6' />
              <text className='font-proxima text-[14px] font-bold'>28°C</text>
              <text className='font-proxima text-[10px] text-[#979797]'>Ammonia</text>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Card;
