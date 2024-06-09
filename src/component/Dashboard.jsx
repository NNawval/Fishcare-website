import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import arrow from '../assets/arrow-down.png';

const Dashboard = () => {
    const [isChange, setIsChange] = useState(false)
    const [schedule, setSchedule] = useState([8, 20, 35])
    const [open, setOpen] = useState(3);

    function handleSchedule(e) {
        console.log(e.target.parentElement.id);
        if (e.target.parentElement.id == "plusHours") {
            if (schedule[0] != 24) {
                const newSchedule = schedule[0] + 1;
                setSchedule([newSchedule, schedule[1], schedule[2]])
            }
        } else if (e.target.parentElement.id == "minusHours") {
            if (schedule[0] != 0) {
                const newSchedule = schedule[0] - 1;
                setSchedule([newSchedule, schedule[1], schedule[2]])
            }
        } else if (e.target.parentElement.id == "plusMinutes") {
            if (schedule[1] != 60) {
                const newSchedule = schedule[1] + 1;
                setSchedule([schedule[0], newSchedule, schedule[2]])
            }
        } else if (e.target.parentElement.id == "minusMinutes") {
            if (schedule[1] != 0) {
                const newSchedule = schedule[1] - 1;
                setSchedule([schedule[0], newSchedule, schedule[2]])
            }
        } else if (e.target.parentElement.id == "plusSeconds") {
            if (schedule[2] != 60) {
                const newSchedule = schedule[2] + 1;
                setSchedule([schedule[0], schedule[1], newSchedule])
            }
        }else if (e.target.parentElement.id == "minusSeconds") {
            if (schedule[2] > 1) {
                const newSchedule = schedule[2] - 1;
                setSchedule([schedule[0], schedule[1], newSchedule])
            } else if (schedule[2] == 1) {
                if (schedule[0] != 0 || schedule[1] != 0) {
                    const newSchedule = schedule[2] - 1;
                    setSchedule([schedule[0], schedule[1], newSchedule])
                }
            }
        }
    }

    function handleOpen(e) {
        if (e.target.innerHTML == "+") {
            if (open != 9) {
                const newOpen = open + 1;
                setOpen(newOpen);
            }
            
        } else {
            if (open != 1) {
                const newOpen = open - 1;
                setOpen(newOpen);
            }
        }
    }

    return (
    <div className="flex items-center flex-col bg-white h-auto rounded-[24px] border-2 shadow-lg p-10 lg:w-[400px]">
        <p className='font-proxima text-[20px] tracking-wide text-center'>Automatically serve food every </p>
        <div className='flex gap-2 my-3 items-center'>
            <div className='flex flex-col items-center'>
                <button id='plusHours' onClick={handleSchedule} className={isChange ? "" : "invisible"}><IoIosArrowDown size={24} className='text-[#7BC0FF] rotate-180' /></button>
                <p className='font-proxima text-[24px] text-[#7BC0FF] tracking-wide'>{schedule[0]}</p>
                <button id='minusHours' onClick={handleSchedule}  className={isChange ? "" : "invisible"}><IoIosArrowDown size={24} className='text-[#7BC0FF]' /></button>
            </div>
            <p className='font-proxima text-[24px] pb-1 text-[#7BC0FF]'>:</p>
            <div className='flex flex-col items-center'>
                <button id='plusMinutes' onClick={handleSchedule}  className={isChange ? "" : "invisible"}><IoIosArrowDown size={24} className='text-[#7BC0FF] rotate-180' /></button>
                <p className='font-proxima text-[24px] text-[#7BC0FF] tracking-wide'>{schedule[1]}</p>
                <button id='minusMinutes' onClick={handleSchedule}  className={isChange ? "" : "invisible"}><IoIosArrowDown size={24} className='text-[#7BC0FF]' /></button>
            </div>
            <p className='font-proxima text-[24px] pb-1 text-[#7BC0FF]'>:</p>
            <div className='flex flex-col items-center'>
                <button id='plusSeconds' onClick={handleSchedule}  className={isChange ? "" : "invisible"}><IoIosArrowDown size={24} className='text-[#7BC0FF] rotate-180' /></button>
                <p className='font-proxima text-[24px] text-[#7BC0FF] tracking-wide'>{schedule[2]}</p>
                <button id='minusSeconds' onClick={handleSchedule}  className={isChange ? "" : "invisible"}><IoIosArrowDown size={24} className='text-[#7BC0FF]' /></button>
            </div>
        </div>
        <div className='flex justify-between w-full'>
            <p className='font-proxima text-[14px]'>Servo opening time (second) :</p>
            <div className='flex gap-3'>
                <button className={isChange ? "" : "invisible"} name="+" onClick={handleOpen}><p className='font-proxima text-[14px]'>+</p></button>
                <p className='w-[15px] text-center font-proxima text-[14px]'>{open}</p>
                <button className={isChange ? "" : "invisible"} onClick={handleOpen}><p className='font-proxima text-[14px]'>-</p></button>
            </div>
        </div>
        <button onClick={() => setIsChange(!isChange)} className='my-4 w-full border border-[#7BC0FF] rounded-[8px] py-3 shadow-md '>
            <p className='font-proxima text-[16px] text-[#7BC0FF] tracking-wide'>{isChange ? "Save Schedule" : "Edit Schedule"}</p>
        </button>
        <p className='font-proxima text-[20px] tracking-wide'>or</p>
        <p className='font-proxima text-[20px] tracking-wide'>Serve food manually</p>
        <button className='my-4 w-full border bg-[#7BC0FF] rounded-[8px] py-3 shadow-md '>
            <p className='font-proxima text-[16px] text-white tracking-wide'>Feed Now</p>
        </button>
        <div className='flex justify-between w-full'>
            <p className='font-proxima text-[14px]'>Countdown to the next mealtime: </p>
            <p className='font-proxima text-[14px]'>08 : 08 : 08</p>
        </div>
    </div> 
);}

export default Dashboard;