import { XMarkIcon } from "@heroicons/react/24/outline";
import vector from './img/Vector (3).png'

function  Delete ({visible}) {

    if (!visible) return null;

    return(
        <div  className=' bg-[#00000033] w-full h-full  absolute top-0 hidden'>
            <div className=" bg-white shadow-2xl  w-[339px] h-[225px] absolute top-[350px] left-[550px]  ">
                <XMarkIcon className=" ml-[300px] mt-[14px] w-[20px] h-[20px] " />
                <img className=" ml-[150px] " src={vector} alt="" />
                <h3 className=" text-[14px] pl-[40px] pt-[14px]">Are you sure you want to delete this note?</h3>
                <div className=" flex mt-[45px] ml-[52px]">
                    <h3 className=" w-[110px] h-[41px] border border-[#C4C4C4] text-[#777777] text-center text-[16px] pt-[5px] rounded-full">Cancel</h3>
                    <h3 className=" w-[110px] h-[41px] border  ml-[15px] text-[#F13843] bg-redlight text-center text-[16px] pt-[5px] rounded-full">Delete</h3>
                </div>
            </div>
        </div>
    )
}


export default Delete;