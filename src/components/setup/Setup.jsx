import { ArchiveBoxIcon, PencilIcon, PrinterIcon, TrashIcon } from "@heroicons/react/24/outline";
function  Setup ({visible, onClose})  {

    if (!visible) return null;


    return (
        <div className=" bg-white w-[200px] h-[160px] absolute top-[190px] right-[105px]  ">
            <div className=" bg-white  shadow-2xl w-[200px] h-[160px]  ">
                <div className='  pt-[5px]  '>
                <h3 className="flex text-[#DDDDDD]  text-[13px] font-Roboto pt-2 pb-2   gap-[16px]  hover:bg-bluelight hover:text-[#356DFB]  " onClick={onClose}><PencilIcon className=" ml-[17px] w-[14px]  h-[14px] mt-[3px]" />Edit</h3>
                <h3 className="flex text-[#DDDDDD]  text-[13px] font-Roboto  pt-2 pb-2  gap-[16px]  hover:bg-bluelight hover:text-[#356DFB]" onClick={onClose}><TrashIcon className=" ml-[17px] w-[14px] h-[14px] mt-[3px] " />Delete</h3>
                <h3 className="flex text-[#DDDDDD]  text-[13px] font-Roboto pt-2 pb-2  gap-[16px]   hover:bg-bluelight hover:text-[#356DFB]" onClick={onClose}><PrinterIcon className=" ml-[17px] w-[14px] h-[14px] mt-[3px] " /> Print</h3>
                <h3 className="flex text-[#DDDDDD]  text-[13px] font-Roboto pt-2 pb-2  gap-[16px]   hover:bg-bluelight hover:text-[#356DFB]  " onClick={onClose}> <ArchiveBoxIcon className=" ml-[17px] w-[14px] h-[14px] mt-[3px] " /> Archive</h3>
                </div>
            </div>
        </div>
    )
}

export default Setup;