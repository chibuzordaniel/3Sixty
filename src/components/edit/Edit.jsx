import { XMarkIcon } from "@heroicons/react/24/outline";


function Edit ({visible, onClose}) {
    
    if (!visible) return null;

    return(
        <div>
            <div  className=' bg-[#00000033] w-full h-full  absolute top-0'>
            <div className="   bg-white shadow-2xl w-[454px] h-[572px] absolute top-[180px] left-[520px] ">
               <h1 className="flex  border-b-[0.5px] pb-[20px]  pl-[22px] text-[18px] font-bold font-Roboto gap-[320px] pt-[16px]">Edit Note <XMarkIcon className=" text-[#777777] w-[20px] h-[25px]" onClick={onClose} /> </h1>    
               <form className=" pt-[18px] pl-[22px] ">
                    <h2 className=" text-[14px]  font-Roboto font-bold ">Title</h2>
                    <input className=" border border-1-[#DEDFEC] mt-[5px] bg-blueass rounded-lg pl-[14px]  w-[410px] h-[46px]" type="text" placeholder="note title" />

                    <h2 className=" text-[14px] mt-[18px]  font-Roboto font-bold ">Tag</h2>
                    <input className=" border border-1-[#DEDFEC] mt-[5px] bg-blueass rounded-lg pl-[14px]  w-[410px] h-[46px]" type="text" placeholder="note title" />
                      
                      <h2 className=" text-[14px] mt-[18px]  font-Roboto font-bold "> Note</h2>
                      <textarea  className=" border  w-[410px] h-[174px] pl-[14px] pt-[14px] " name="" id="" cols="" rows="" placeholder="note body"></textarea>

                      <div className=" mt-7">
                        <button className=" w-[141px] h-[48px] rounded-full bg-[#356DFB] text-white">Edit</button>
                        <button className=" ml-[15px] w-[141px] h-[48px] rounded-full text-[#777777]  border " onClick={onClose}>Cancel</button>
                      </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Edit;