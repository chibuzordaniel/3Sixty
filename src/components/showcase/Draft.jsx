import { Cog8ToothIcon, MagnifyingGlassIcon, ArchiveBoxIcon, PlusIcon, EllipsisHorizontalIcon, MinusIcon } from '@heroicons/react/24/outline'
import Ellipse from  './img/Ellipse 17.png'
import {TbNotes } from 'react-icons/tb'
import {BsListCheck, BsTrophy } from 'react-icons/bs'


function Draft () {

    return(
        <div className=' '>
            <div  className="  bg-white">
                <div className="    mx-[35px] ">
                    <div className=' flex gap-[129px]'>
                        <h1 className=" text-[36px] font-Gruppo h-[80px] pt-[8px] font-normal text-[#000000]  ">  3Si<span className=' absolute -ml-[10px] mt-[10px]'><img className=' h-[13px] w-[13px] ' src={Ellipse} alt="" /></span>xty </h1>
                        <div className=' flex '>
                            <MagnifyingGlassIcon className=' mt-[19px] w-[40px] text-[#DDDDDD] h-[40px] absolute ml-[20px] ' />
                            <input className=' pl-[69px] pt-[px] text-[14px] text-[#777777] mt-[10px] font-Roboto w-[300px] h-[56px]  outline-[#C4C4C4]' placeholder='Search notes' type="text" />
                        </div>
                    </div>
                </div>
            </div>
           
            <div className=' bg-[#F7FBFD]  h-[80px]'>
                <div  className='   mx-[52px]'>
                    <div className=' flex  justify-between '>
                        <div className=' flex'>
                            <div className=' grid  grid-cols-3  group  hover:border-b-[3px] hover:border-[#356DFB] pb-[15px] '>
                                <TbNotes className=' group-hover:text-[#356DFB]  text-[#C4C4C4] mt-[20px] w-[31px] h-[35px]' /> 
                                <h3 className=' group-hover:text-[#356DFB]  text-[16px] pt-[27px] pl-[px] text-[#C4C4C4] font-Roboto'>Notes</h3>
                                <p className=' group-hover:text-[#356DFB] group-hover:bg-[#dee0e6] text-[15px] text-white bg-[#DDDDDD] text-center w-[25px] h-[25px] rounded-full mt-[26px] ml-[13px] '>10</p>
                            </div>

                            <div className=' grid grid-cols-3  group ml-[30px] hover:border-b-[3px] hover:border-[#356DFB] pb-[15px]'>
                                <BsListCheck className=' group-hover:text-[#356DFB]  text-[#C4C4C4] mt-[20px] w-[30px] h-[38px]' /> 
                                <h3 className=' group-hover:text-[#356DFB]  text-[16px] pt-[27px] pl-[px] text-[#C4C4C4] font-Roboto'>Todos</h3>
                                <p className=' group-hover:text-[#356DFB] group-hover:bg-[#dee0e6] text-[15px] text-white bg-[#DDDDDD] text-center w-[25px] h-[25px] rounded-full mt-[26px] ml-[13px] '>10</p>
                            </div>

                            <div className=' grid grid-cols-3   group ml-[30px] hover:border-b-[3px] hover:border-[#356DFB] pb-[15px]'>
                                <BsTrophy className=' group-hover:text-[#356DFB]  text-[#C4C4C4] mt-[25px] w-[35px] h-[25px]' /> 
                                <h3 className=' group-hover:text-[#356DFB]  text-[16px] pt-[27px] pl-[px] text-[#C4C4C4] font-Roboto'>Events</h3>
                                <p className=' group-hover:text-[#356DFB] group-hover:bg-[#dee0e6] text-[15px] text-white bg-[#DDDDDD]  text-center w-[25px] h-[25px] rounded-full mt-[26px] ml-[13px] '>2</p>
                            </div>

                            <div className=' grid grid-cols-3   group ml-[30px] hover:border-b-[3px] hover:border-[#356DFB] pb-[15px]'>
                                <ArchiveBoxIcon className=' group-hover:text-[#356DFB]  text-[#C4C4C4] mt-[23px] w-[35px] h-[29px]' /> 
                                <h3 className=' group-hover:text-[#356DFB]  text-[16px] pt-[27px] -ml-[6px] text-[#C4C4C4] font-Roboto'>Archives</h3>
                                <p className=' group-hover:text-[#356DFB] group-hover:bg-[#dee0e6] text-[15px] text-white bg-[#DDDDDD] text-center w-[25px] h-[25px] rounded-full mt-[26px] ml-[13px] '>10</p>
                            </div>

                            <div className=' grid grid-cols-3   group ml-[15px] hover:border-b-[3px] hover:border-[#356DFB] pb-[15px]'>
                                <Cog8ToothIcon className=' group-hover:text-[#356DFB]  text-[#C4C4C4] mt-[20px] w-[33px] h-[38px]' /> 
                                <h3 className=' group-hover:text-[#356DFB]  text-[16px] pt-[27px] -ml-[5px] text-[#C4C4C4] font-Roboto'>Settings</h3>
                            </div>
                        </div>

                        <div className=' mt-[17px] flex  '>
                            <button className=' bg-[#4C7DFA] w-[64px] h-[45px]  rounded-l-full  '><PlusIcon className=' text-center text-white w-[20px] h-[20px] ml-[20px] '/></button>
                            <button className=' bg-[#356DFB] w-[111px] h-[45px] rounded-r-full text-[16px] text-white font-Roboto'>Create Note</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className=' bg-[#E5E5E5]  h-[630px] '>
                <div className=' flex'>
                    <div className=' bg-white w-[390px] h-[630px] '>
                    <div className=' overflow-y-scroll w-[390px] h-[580px]'>
                        <div className=' border-b-[1px] pb-[20px] hover:bg-[#F7FBFD] '>
                                <div className=' mx-[31px]  '>
                                    <div className=' '>
                                        <h1 className='pt-[42px] text-[#444444]  text-[18px] font-Roboto font-bold'>10 Hours Fasting every week</h1>
                                        <p className=' text-[#777777] text-[13px] leading-[21px] pt-[4px] font-Roboto '>Incididunt et aliquip sint duis esse. Est duis ea dolor <br /> eiusmod ut elit incididunt irure nisi duis aliquip <br /> anim velit. Officia laborum consectetur quis ea <br /> pariatur proident exercitation. </p>
                                        <div className=' flex'>
                                            <h3 className=' bg-[#F7FBFD] w-[90px] h-[32px] mt-[12px] py-[5px] text-center text-[13px] text-[#356DFB] rounded-full font-Roboto '>Personal</h3>
                                            <p className=' pl-[69px] pt-[17px] text-[#CCCCCC] text-[13px] font-Roboto '>23 hours ago</p>
                                            <h4 className=' bg-[#f1f7fa]  w-[50px] h-[26px] rounded-full  text-[#777777] text-[30px] mt-[15px] ml-[19px]  '><EllipsisHorizontalIcon className='p-[10px] -mt-[12px]' /></h4>

                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className=' border-b-[1px] pb-[20px] hover:bg-[#F7FBFD]'>
                                <div className=' mx-[31px]  '>
                                    <div className=' '>
                                        <h1 className='pt-[42px] text-[#444444]  text-[18px] font-Roboto font-bold'>10 Hours Fasting every week</h1>
                                        <p className=' text-[#777777] text-[13px] leading-[21px] pt-[4px] font-Roboto '>Incididunt et aliquip sint duis esse. Est duis ea dolor <br /> eiusmod ut elit incididunt irure nisi duis aliquip <br /> anim velit. Officia laborum consectetur quis ea <br /> pariatur proident exercitation. </p>
                                        <div className=' flex'>
                                            <h3 className=' bg-[#F7FBFD] w-[90px] h-[32px] mt-[12px] py-[5px] text-center text-[13px] text-[#356DFB] rounded-full font-Roboto '>Personal</h3>
                                            <p className=' pl-[69px] pt-[17px] text-[#CCCCCC] text-[13px] font-Roboto '>23 hours ago</p>
                                            <h4 className=' bg-[#f1f7fa]  w-[50px] h-[26px] rounded-full  text-[#777777] text-[30px] mt-[15px] ml-[19px]  '><EllipsisHorizontalIcon className='p-[10px] -mt-[12px]' /></h4>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className=' border-b-[1px] pb-[20px] hover:bg-[#F7FBFD]'>
                            <div className=' mx-[31px]  '>
                                <div className=' '>
                                    <h1 className='pt-[42px] text-[#444444]  text-[18px] font-Roboto font-bold'>10 Hours Fasting every week</h1>
                                    <p className=' text-[#777777] text-[13px] leading-[21px] pt-[4px] font-Roboto '>Incididunt et aliquip sint duis esse. Est duis ea dolor <br /> eiusmod ut elit incididunt irure nisi duis aliquip <br /> anim velit. Officia laborum consectetur quis ea <br /> pariatur proident exercitation. </p>
                                    <div className=' flex'>
                                        <h3 className=' bg-[#F7FBFD] w-[90px] h-[32px] mt-[12px] py-[5px] text-center text-[13px] text-[#356DFB] rounded-full font-Roboto '>Personal</h3>
                                        <p className=' pl-[69px] pt-[17px] text-[#CCCCCC] text-[13px] font-Roboto '>23 hours ago</p>
                                        <h4 className=' bg-[#f1f7fa]  w-[50px] h-[26px] rounded-full  text-[#777777] text-[30px] mt-[15px] ml-[19px]  '><EllipsisHorizontalIcon className='p-[10px] -mt-[12px]' /></h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' border-b-[1px] pb-[20px] hover:bg-[#F7FBFD]'>
                                <div className=' mx-[31px]  '>
                                    <div className=' '>
                                        <h1 className='pt-[42px] text-[#444444]  text-[18px] font-Roboto font-bold'>10 Hours Fasting every week</h1>
                                        <p className=' text-[#777777] text-[13px] leading-[21px] pt-[4px] font-Roboto '>Incididunt et aliquip sint duis esse. Est duis ea dolor <br /> eiusmod ut elit incididunt irure nisi duis aliquip <br /> anim velit. Officia laborum consectetur quis ea <br /> pariatur proident exercitation. </p>
                                        <div className=' flex'>
                                            <h3 className=' bg-[#F7FBFD] w-[90px] h-[32px] mt-[12px] py-[5px] text-center text-[13px] text-[#356DFB] rounded-full font-Roboto '>Personal</h3>
                                            <p className=' pl-[69px] pt-[17px] text-[#CCCCCC] text-[13px] font-Roboto '>23 hours ago</p>
                                            <h4 className=' bg-[#f1f7fa]  w-[50px] h-[26px] rounded-full  text-[#777777] text-[30px] mt-[15px] ml-[19px]  '><EllipsisHorizontalIcon className='p-[10px] -mt-[12px]' /></h4>
                                        </div>
                                  </div>
                             </div>
                          </div>
                       </div>
                   </div>

                   <div className=' bg-white h-[600px] w-[1020px] ml-[16px] mt-[17px]'>
                     <h1 className='text-[48px] font-Roboto font-bold pt-[41px] pl-[70px] '>Learn Darts</h1>
                     <p className=' pl-[57px] pt-[9px] text-[14px] text-[#777777] font-Roboto leading-[186%] '>Exercitation in consectetur velit enim ullamco aliqua officia mollit eu nulla sunt aliquip aute nulla. Aliquip <br /> tempor et exercitation minim adipisicing minim velit. Id elit culpa aute est. Aute aute excepteur et adipisicing <br /> adipisicing officia dolor. Commodo incididunt ad labore incididunt aliquip deserunt anim eu incididunt est <br /> mollit. Proident aliqua non aliquip dolore sint voluptate adipisicing. Tempor in fugiat incididunt ea officia <br /> ullamco ut qui excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et velit est nulla. In consectetur <br /> nisi duis ad quis magna anim ut dolor minim irure proident do irure. Sit do quis sunt consequat id incididunt <br /> quis.</p>
                     <p className=' pl-[57px] pt-[10px] text-[14px] text-[#777777] font-Roboto leading-[186%] '>Exercitation in consectetur velit enim ullamco aliqua officia mollit eu nulla sunt aliquip aute nulla. Aliquip <br /> tempor et exercitation minim adipisicing minim velit. Id elit culpa aute est. Aute aute excepteur et adipisicing <br /> adipisicing officia dolor. Commodo incididunt ad labore incididunt aliquip deserunt anim eu incididunt est <br /> mollit. Proident aliqua non aliquip dolore sint voluptate adipisicing. Tempor in fugiat incididunt ea officia <br /> ullamco ut qui excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et velit est nulla. In consectetur <br /> nisi duis ad quis magna anim ut dolor minim irure proident do irure. Sit do quis sunt consequat id incididunt <br /> quis.</p>
                   </div>

                   <div>
                     <h4 className=' p-[3px] mt-[15px] text-[#777777] rounded-full ml-[30px] bg-white w-[40px] h-[40px] '><EllipsisHorizontalIcon /></h4>
                     <div className=' bg-white w-[42px] h-[86px] ml-[30px] mt-[17px] rounded-t-full rounded-b-full  '>
                        <div className='border-b-[1px] '>
                           <PlusIcon className=' text-[#777777] w-[24px] h-[44px] ml-[9px]  ' />
                        </div>
                        <div>
                           <MinusIcon className=' ml-[9px] mt-[5px] text-[#777777] w-[24px] ' />
                        </div>
                        
                     </div> 
                   </div>
              </div>
          </div>
      </div>
    )
}

export default Draft;