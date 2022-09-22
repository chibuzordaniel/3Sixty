import { ArchiveBoxIcon, PencilIcon, PrinterIcon, TrashIcon } from "@heroicons/react/24/outline";


function  Login ({visible, onClose})  {

     if (!visible) return null;
     
    return (
        <div className="  bg-white  absolute w-[143px] h-[124px] top-[370px] left-[174px]  ">
            <div  className="   bg-white   shadow-2xl w-[143px] h-[124px]  ">
                <div className='  pt-[4px]  '>
                    <h3 className="flex gap-[16px] text-[13px] font-Roboto text-[#DDDDDD] pt-1 pb-1  hover:bg-bluelight hover:text-[#356DFB]  " onClick={onClose} ><PencilIcon className=" ml-[17px] w-[14px]  h-[14px] mt-[3px]"/>Edit</h3>
                    <h3 className=" flex text-[#DDDDDD] text-[13px] font-Roboto   pt-1 pb-1  gap-[16px]  hover:bg-bluelight hover:text-[#356DFB]" onClick={onClose} ><TrashIcon className=" ml-[17px] w-[14px] h-[14px] mt-[3px] "/> Delete</h3>
                    <h3 className=" flex text-[#DDDDDD] text-[13px] font-Roboto  pt-1 pb-1  gap-[16px]  hover:bg-bluelight hover:text-[#356DFB]" onClick={onClose} ><PrinterIcon className=" ml-[17px] w-[14px] h-[14px] mt-[3px]"/> Print</h3>
                    <h3 className=" flex text-[#DDDDDD] text-[13px] font-Roboto   pt-1 pb-1  gap-[16px]  hover:bg-bluelight hover:text-[#356DFB]   " onClick={onClose}> <ArchiveBoxIcon className=" ml-[17px] w-[14px] h-[14px] mt-[3px]"/> Archive</h3>
                </div>
                
            </div>
        </div>
    )
}

export default Login;