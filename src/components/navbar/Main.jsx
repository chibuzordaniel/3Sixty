import img1 from './img/Component 12.png';
import img2 from './img/Rectangle 3.1.png';
import img3 from './img/Rectangle 3.2.png';
import img4 from './img/Rectangle 3.png';
import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function  Main () {
    const  [open,  setOpen] = useState(true);
    const  [on, setOn] =  useState (true)
    


    return (
        <div className=''>
        <div className=" container ">
            <div className=" flex justify-between">
                <div className=" ">
                    <h3 
                      className=" pt-8 font-semibold font-Gruppo text-36"
                    >3Sixty</h3>
                </div>

                <div className=" mt-19">
                    <button
                      className="  bg-bluelight w-86  text-white  
                      h-44  text-14  rounded-l-full " 
                      onClick={() =>{setOn(!on)}}
                      >Login</button>
                    <button 
                     
                        className="  bg-bluedark text-white  w-96 
                         h-44  text-14   rounded-r-full"
                        onClick={ () =>{setOpen(!open)}}
                        >Sign Up
                    </button>
                </div>
            </div>
             
            <div>
            <div  className=" flex">
                <div>  
                   <div 
                       className=" pt-44 text-40  font-sans font-bold  ">
                       <h1>You can’t really <br></br> manage time, but you 
                       <br></br> can take small steps
                       <br></br> that counts on a long <br></br> run.</h1>
                   </div>
                    
                    <div className=" text-16 font-sans font-regular ">
                           <p className=" pt-41  gap-21 flex"> <span className="pt-1 "> <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3333 15L17 8L10.3333 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 15L7.66667 8L1 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></span>
                            Track your daily activities
                       </p>
                        
                        <p
                            className=" pt-10 flex  w-500 text-16 gap-21   font-Open Sans  font-regular ">
                            <span className="pt-1"> <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3333 15L17 8L10.3333 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 15L7.66667 8L1 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></span>
                            Save important notes or code snippets you’re likely to reuse
                        </p>

                        <p 
                            className=" pt-10 flex gap-21   font-regular"> <span className=" pt-1"> <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3333 15L17 8L10.3333 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 15L7.66667 8L1 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></span>
                            keep a diary of your daily activities
                        </p>
                  </div>

                    <div 
                        className="  pt-93  mb-83">
                       <button 
                            className="bg-bluedark  w-177  h-52 rounded-full text-16 
                             font-Open Sans  font-regular text-white "
                            onClick={() =>{setOpen(!open)}}
                            >Get Started
                        </button>
                    </div>
                </div>

              <div>
                  <div className=' '>
                       <div
                           className=' pl-252 pt-25'>
                            <img  src={img1}  alt=''/>
                        </div>

                        <div 
                            className=' ml-292  bg-white w-235 h-215   
                             -mt-120  rounded-lg shadow'>
                            <img className='h-150 w-235'  src={img2}  alt=''/>
                            <p 
                              className=' text-14 pl-36 pt-21 font-Open Sans font-regular'
                              >track your TODOS status
                            </p>
                        </div>

                  </div>
                     
                    <div className=' flex  mt-30' >
                        <div className=' '>

                           <div  className=' pl-77'>
                                <img  src={img1}  alt=''/>
                            </div>

                            <div 
                                className=' ml-105   -mt-120  bg-white w-235 
                                 rounded-lg   h-215  shadow'>
                                <img  className='h-150 w-235 ' src={img3}  alt=''/>
                                <p className=' text-14 pl-10 pt-21  font-Open Sans font-regular '
                                  >Jot down reusable code snippets
                                </p>
                            </div>

                        </div>

                        <div className=' mt- ml-129'>
                           
                            <div className='  -mt-20  relative top-105   bg-white
                              w-235 h-215 rounded-lg    shadow'>
                                <img  className='  w-235  h-150 ' src={img4}  alt=''/>
                                <p className=' text-14 pl-36 pt-21 font-Open Sans font-regular '>
                                Jot down your daily activities</p>
                            </div>
                          
                            <div  className=' -ml-28  -mt-14 '>
                                <img   className='   '  src={img1}  alt=''/>
                            </div> 
                      </div>
                    </div>
                </div>
            </div>
            <div 
                className='  text-11 text-center font-Open Sans  font-regular '>
                <p className='   -mt-44'>All Rights Reserved. 2020 @wiztemple</p>
            </div>
            </div>
           

            {/* section2 */}

            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                <div className="     bg-white  shadow-2xl w-365  h-650  absolute  -mt-670 left-500 rounded-xl " >
                    <span className=" relative left-311  top-19" onClick={() =>{setOpen(!open)}}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.792678L11.2073 0L6 5.20732L0.792678 0L0 0.792678L5.20732 6L0 11.2073L0.792678 12L6 6.79268L11.2073 12L12 11.2073L6.79268 6L12 0.792678Z" fill="#A39B9B"/>
                        </svg>
                    </span>
                    <div
                        className=" text-center pt-17  font-Gruppo 
                         font-regular  text-36">
                        <h3>3Sixty</h3>
                    </div>

                    <div >
                        <h1 
                           className=" pl-26  pt-10 text-20  text-bluedark  font-Roboto"
                            >Create <br></br> your account
                        </h1>
                        <p className="  pt-10 pl-26 text-13 text-graydark font-Roboto">
                         Enter your personal details to start your journey today</p>
                    </div>

                    <div  className=" borderline1 flex bg-white w-314  h-46 rounded-xl   ml-26   border">
                        <span className=" pl-61 pt-10"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.8055 8.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 16 10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z" fill="#FFC107"/>
                            <path d="M1.15295 5.3455L4.43845 7.755C5.32745 5.554 7.48045 4 9.99995 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 9.99995 0C6.15895 0 2.82795 2.1685 1.15295 5.3455Z" fill="#FF3D00"/>
                            <path d="M10 20C12.583 20 14.93 19.0115 16.7045 17.404L13.6095 14.785C12.5718 15.5742 11.3038 16.001 10 16C7.39903 16 5.19053 14.3415 4.35853 12.027L1.09753 14.5395C2.75253 17.778 6.11353 20 10 20Z" fill="#4CAF50"/>
                            <path d="M19.8055 8.0415H19V8H10V12H15.6515C15.2571 13.1082 14.5467 14.0766 13.608 14.7855L13.6095 14.7845L16.7045 17.4035C16.4855 17.6025 20 15 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z" fill="#1976D2"/>
                            </svg>
                       </span>
                        <h3 
                            className=" text-bluedark pt-8  pl-17 
                            cursor-pointer font-Roboto text-16">
                            Sign up with Google
                         </h3>
                    </div>

                    <div  className="flex  pl-105 pt-14  text-graypure">
                        <span className="p-11">
                            <svg width="" height="1" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="46" y2="0.5" stroke="#B6B8C9"/>
                            </svg>
                        </span>
                         <h3 className=" text-16">OR</h3>
                        <span className=" p-11 ">
                            <svg width="" height="1" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="46" y2="0.5" stroke="#B6B8C9"/>
                            </svg>
                        </span>
                    </div>

                    <div>
                        <div 
                           className=" w-314  h-46 ml-26 mt-14  
                           bg rounded-xl  border">
                           <input 
                             type="name"
                              className=" capitalize mt-2 pl-17 font-Roboto  outline-none  w-282" placeholder="Name" >
                           </input>
                           
                      </div>

                        <div 
                            className=" w-314  h-46 ml-26 
                             font-Roboto mt-17 bg rounded-xl  border">
                            <input 
                            type="username"
                               className="  capitalize mt-2 pl-17 pt-  outline-none  w-282 " placeholder="Username">                             
                            </input>
                        </div>

                        <div 
                            className=" w-314  font-Roboto h-46 ml-26
                             mt-17  bg rounded-xl  border">
                                <input 
                                type="email"
                                    className=" capitalize  mt-2 pl-17 outline-none  w-282" placeholder="E-mail">
                                </input>
                           
                        </div>

                        <div 
                            className=" w-314  h-46 ml-26 mt-17  bg rounded-xl  border">
                           <input
                           type="password"
                              className=" capitalize mt-2 pl-17  outline-none  w-282" placeholder="Password">
                           </input>
                        </div>


                        <div className="   pl-26">
                               <Link to="/Sign" >
                                  <button  className="w-314  mt-19 text-white h-46 rounded-full  bg-bluedark">  Sign </button>
                              </Link> 
                            </div>

                        <div>
                            <p
                                className=" pt-17 text-12 text-center font-Roboto">
                                 Already have an account? 
                                <span 
                                    className=" cursor-pointer text-bluelight"> Sign in here 
                                </span>
                           </p>
                        </div>
                    </div>
                </div>
            </div>

             {/* section 3 */}

                 <div className={`dropup-menu ${on? 'active' : 'inactive'}`}>
                    <div className="  bg-white  shadow-2xl w-365  h-600 
                            absolute  -mt-670 left-500 rounded-xl">
                            <span 
                                className=" relative left-311  top-19" onClick={() =>{setOn(!on)}}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0.792678L11.2073 0L6 5.20732L0.792678 0L0 0.792678L5.20732 6L0 11.2073L0.792678 12L6 6.79268L11.2073 12L12 11.2073L6.79268 6L12 0.792678Z" fill="#A39B9B"/>
                                </svg>
                            </span>

                            <div
                                className=" text-center pt-30  
                                font-Gruppo  font-regular  text-36">
                                <h3>3Sixty</h3>
                            </div>

                            <div >
                                <h1 
                                    className=" pl-26  pt-26 text-20 
                                    text-bluedark  font-Roboto">
                                    Hello <br></br> welcome back
                               </h1>

                                <p 
                                  className="  pt-14 pl-26 text-13
                                 text-graydark font-Roboto">
                                  Enter your personal details to start your journey today
                               </p>

                            </div>
                            
                            <div  className=" borderline1  flex">
                                <span 
                                    className=" pl-61 pt-10 ">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.8055 8.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 16 10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z" fill="#FFC107"/>
                                        <path d="M1.15295 5.3455L4.43845 7.755C5.32745 5.554 7.48045 4 9.99995 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 9.99995 0C6.15895 0 2.82795 2.1685 1.15295 5.3455Z" fill="#FF3D00"/>
                                        <path d="M10 20C12.583 20 14.93 19.0115 16.7045 17.404L13.6095 14.785C12.5718 15.5742 11.3038 16.001 10 16C7.39903 16 5.19053 14.3415 4.35853 12.027L1.09753 14.5395C2.75253 17.778 6.11353 20 10 20Z" fill="#4CAF50"/>
                                        <path d="M19.8055 8.0415H19V8H10V12H15.6515C15.2571 13.1082 14.5467 14.0766 13.608 14.7855L13.6095 14.7845L16.7045 17.4035C16.4855 17.6025 20 15 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z" fill="#1976D2"/>
                                    </svg>
                               </span>
                                <h3 
                                    className=" text-bluedark pt-8  pl-17 
                                    cursor-pointer font-Roboto text-16">
                                    Sign up with Google
                               </h3>
                            </div>
                            

                            <div  className="flex  pl-105 pt-21  text-graypure">
                                <span className="p-11">
                                    <svg width="" height="1" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="46" y2="0.5" stroke="#B6B8C9"/>
                                    </svg>
                                </span>

                                <h3 className=" text-16">OR</h3>
                                <span className=" p-11 ">
                                    <svg width="" height="1" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="46" y2="0.5" stroke="#B6B8C9"/>
                                    </svg>
                                </span>
                            </div>

                            <div>
                              

                                <div className=" w-314  font-Roboto h-46 ml-26 mt-21
                                  bg rounded-xl  border">
                                   <input 
                                   type="email"
                                       className=" capitalize  mt-2 pl-17  outline-none  w-282" placeholder="E-mail">
                                   </input>
                                </div>

                                <div className=" w-314  h-46 ml-26 mt-21 
                                   bg rounded-xl  border">
                                  <input 
                                  type="password"
                                     className=" capitalize mt-2 pl-17  outline-none  w-282" placeholder="Password" >
                                  </input>
                                </div>


                                <div className="   pl-26">
                                    <Link to="/Sign">
                                        <button className=" w-314  mt-30 text-white h-46 rounded-full bg-bluedark"> Sign Up</button>
                                    </Link>
                                </div>

                                <div>
                                    <p 
                                       className=" pt-26 text-12 text-center font-Roboto"> 
                                       Already have an account? 
                                        <span className=" text-bluelight cursor-pointer">
                                           Sign in here 
                                        </span>
                                     </p>
                                </div>
                        </div>
                    </div>
              </div>
        </div>
        </div>
    )
}


export default Main;