import Component11 from './img/Component 11.png';
import Component12 from './img/Component 12.png';
import Rectangle1 from './img/Rectangle 3.1.png';
import Rectangle2 from './img/Rectangle 3.2.png';
import Rectangle3 from './img/Rectangle 3.png';
import React, { useState }  from 'react';
import Signup from '../signup/Sigup';
import Signin from '../signin/Signin';
import {DATA_CARDS} from '../../data/Data';

function  Main  () {

     const [active, setActive] = useState(0);
     console.log(active)

    

    const [signup, setSignUp] = useState (false);
    const [signin, setSignIn] = useState (false);
    const handleClick = () =>  setSignUp (true);
    const handleClose = ()  =>  setSignUp ( false);
    const dropDown = ()  =>  setSignIn ( true);
    const dropClose = ()  =>  setSignIn ( false);

    return (
        <div className="  ">
            <div className=' max-w-[1400px]  mx-auto '>
                <div className=" pt-[15px] flex justify-between">
                    <h1 className=" text-[36px] font-Gruppo font-semibold">3Sixty</h1>
                    <div className=" pt-[12px] ">
                        <button className=" bg-[#507EF5] w-[83px] h-[44px] text-[14px]  rounded-l-full text-white " onClick={dropDown} >Login</button>
                        <button className=" bg-[#356DFB] w-[96px] h-[44px] text-[14px] rounded-r-full text-white " onClick={handleClick}>Sign Up</button>
                    </div>
                </div>
            </div>

            <div className=' max-w-[1400px]  mx-auto '>
                <div className=' flex '>
                    <div className=" pt-[44px]">
                        <h1 className=" text-[48px] font-Roboto  font-bold leading-[65px] ">You can’t really <br></br> manage time, but you <br></br>  can take small steps <br></br> that counts on a long <br></br> run.</h1>
                        <p className=' flex gap-[21px] text-[16px] pt-[41px] font-Open Sans '><span className=' pt-1'> <img src={Component11} alt="" /></span> Track your daily activities</p>
                        <p className=' flex gap-[21px]  text-[16px] pt-[10px] font-Open Sans '><span className='pt-1'> <img src={Component11} alt="" /></span> Save important notes or code snippets you’re likely to reuse</p>
                        <p className=' flex gap-[21px]  text-[16px] pt-[10px] font-Open Sans '><span  className='pt-1'> <img src={Component11} alt="" /></span>keep a diary of your daily activities</p>
                        <button className=' bg-[#356DFB] text-[16px] text-white mt-[93px]  w-[177px] h-[52px] rounded-full font-Open Sans ' onClick={handleClick}>Get Started</button>
                    </div>
                    
                    <div>
                        <div className=' ml-[439px] mt-[25px]'>
                            <img className=' ' src={Component12} alt="" />
                            <div className=' bg-white h-[240px] w-[237px]  ml-[30px] shadow relative bottom-[120px]'>
                                <img className='w-[237px] h-[175px]' src={Rectangle1} alt="" />
                                <h2 className=' text-center text-[14px] font-Open Sans py-[22px]'>track your TODOS status</h2>
                            </div> 
                        </div>

                        <div className=' flex  '>
                                <div className=' ml-[230px]  -mt-[90px] '>
                                    <img className=' ' src={Component12} alt="" />
                                    <div className=' bg-white h-[240px] w-[237px]  ml-[30px] shadow relative bottom-[120px]'>
                                        <img className=' w-[237px] h-[175px] ' src={Rectangle2} alt="" />
                                        <h2 className=' text-center text-[14px] font-Open Sans py-[22px]'>Jot down reusable code snippets</h2>
                                    </div> 
                                </div>

                                <div className=' mt-[55px] ml-[159px] '>
                                    <img className='  ' src={Component12} alt="" />
                                    <div className=' bg-white h-[240px] w-[237px]  ml-[30px] shadow relative bottom-[120px]'>
                                        <img className=' w-[237px] h-[175px] -mt-[145px]' src={Rectangle3} alt="" />
                                        <h2 className=' text-center text-[14px] font-Open Sans py-[22px]'>Jot down your daily activities</h2>
                                    </div> 
                              </div>
                        </div>
                    </div>
                </div>
            </div> 
            <footer className=' text-center text-[11px] font-Open Sans -mt-[30px] '>All Rights Reserved. 2020 @wiztemple</footer>
            <Signup visible={signup} onClose={handleClose } />
            <Signin visible={signin} onClose={dropClose} />
        </div>
    )
}


export default Main;