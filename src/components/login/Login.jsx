import { ArchiveBoxIcon, PencilIcon, PrinterIcon, TrashIcon } from "@heroicons/react/24/outline";


function  Login ()  {
    return (
        <div className=" absolute top-[370px] left-[170px] bg-white   shadow-2xl w-[143px] h-[124px]  ">
            <div className='  pt-[10px]  '>
               <h3 className="flex gap-[16px] text-[13px] font-Roboto text-[#DDDDDD]  hover:bg-bluelight hover:text-[#356DFB]  "><PencilIcon className=" ml-[17px] w-[14px]  h-[14px] mt-[5px]" />Edit</h3>
               <h3 className=" flex text-[#DDDDDD] text-[13px] font-Roboto  gap-[16px] pt-[8px] hover:bg-bluelight hover:text-[#356DFB]"><TrashIcon className=" ml-[17px] w-[14px] h-[14px] mt-[4px] " /> Delete</h3>
               <h3 className=" flex text-[#DDDDDD] text-[13px] font-Roboto gap-[16px] pt-[8px] hover:bg-bluelight hover:text-[#356DFB]"><PrinterIcon className=" ml-[17px] w-[14px] h-[14px] mt-[3px] " /> Print</h3>
               <h3 className=" flex text-[#DDDDDD] text-[13px] font-Roboto  gap-[16px] pt-[8px] hover:bg-bluelight hover:text-[#356DFB]  "> <ArchiveBoxIcon className=" ml-[17px] w-[14px] h-[14px] mt-[3px] " /> Archive</h3>
            </div>
            
        </div>
    )
}

export default Login;