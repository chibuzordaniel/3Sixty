import { XMarkIcon } from "@heroicons/react/24/outline";
import {Link, Outlet} from 'react-router-dom'

function  Notepage () {
    return (
        <div>
            <div className="   bg-white shadow-2xl w-[454px] h-[572px] ">
               <h1 className="flex  border-b-[0.5px] pb-[20px]  pl-[22px] text-[18px] font-bold font-Roboto gap-[297px] pt-[16px]">Write a Note <XMarkIcon className=" text-[#777777] w-[20px] h-[25px]" /> </h1>    
               <div className=" pt-[18px] pl-[22px] ">
                    <h2 className=" text-[14px]  font-Roboto font-bold ">Title</h2>
                    <input className=" border border-1-[#DEDFEC] mt-[5px] bg-blueass rounded-lg pl-[14px]  w-[410px] h-[46px]" type="text" placeholder="note title" />

                    <h2 className=" text-[14px] mt-[18px]  font-Roboto font-bold ">Tag</h2>
                    <input className=" border border-1-[#DEDFEC] mt-[5px] bg-blueass rounded-lg pl-[14px]  w-[410px] h-[46px]" type="text" placeholder="note title" />
                      
                      <h2 className=" text-[14px] mt-[18px]  font-Roboto font-bold "> Note</h2>
                      <textarea  className=" border  w-[410px] h-[174px] pl-[14px] pt-[14px] " name="" id="" cols="" rows="" placeholder="note body"></textarea>

                      <button className=" text-[16px] font-Robotoio rounded-full text-white w-[141px] h-[48px] mt-[20px] bg-[#356DFB]">Create</button>
                </div>
            </div>
          <Outlet />
        </div>
    )
}

export default Notepage;