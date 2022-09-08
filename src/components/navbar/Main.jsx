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
                  <div><h3  className=" lg:pt-8 font-semibold font-Gruppo lg:ml-[0] lg:text-36 sml: ml-[70px] text-[60px] pt-[25px] ">3Sixty</h3></div>
                      <div className=" lg:mt-19 lg:ml-[0]  sml:ml-[620px] flex mt-[40px] ">
                          <button className="  bg-bluelight lg:w-86  text-white   lg:h-44  lg:text-14  rounded-l-full  sml: w-[120px] text-[20px] h-[60px] " onClick={() =>{setOn(!on)}}>Login</button>
                          <button  className="  bg-bluedark text-white  lg:w-86   lg:h-44  lg:text-14   rounded-r-full sml: w-[120px] text-[20px] h-[60px] "  onClick={ () =>{setOpen(!open)}}  >Sign Up</button>
                      </div>
                 </div>
            <div>
            <div  className=" lg:flex md:block">
                <div>  
                   <div  className=" pt-44 lg:w-[400px]   lg:text-40  font-sans font-bold lg:pl-[0]  sml: pl-[80px] text-[75px]  w-[830px]  ">
                       <h1 >You can’t really <br></br> manage time, but you <br></br> can take small steps <br></br> that counts on a long <br></br> run.</h1>
                    </div>
                    <div className="  font-sans font-regular  lg:pt-0 sml: pt-[50px]   ">
                        <p className=" lg:text-16 pt-41 lg:w-[400px]  gap-21 flex lg:pl-[0]  sml: pl-[80px] text-[40px]  w-[600px] ">
                            <span className=" lg:pt-1 lg:w-[18px] lg:h-[20px]  sml: pt-[15px] w-[55px] h-[55px]  "> <svg width="" height="" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3333 15L17 8L10.3333 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 15L7.66667 8L1 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                            </span>
                            Track your daily activities
                        </p>
                        
                        <p className=" pt-10 flex lg:w-[500px] lg:text-16 gap-21    font-Open Sans  font-regular  lg:pl-[0]  sml: pl-[80px] text-[40px] w-[900px] ">
                            <span className=" lg:pt-1 lg:w-[18px] lg:h-[20px]  sml: pt-[15px] w-[55px] h-[55px] "> <svg width="" height="" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3333 15L17 8L10.3333 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 15L7.66667 8L1 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            Save important notes or code snippets you’re likely to reuse
                        </p>

                        <p className=" pt-10 flex gap-21 lg:text-16 lg:w-[400px]    font-regular lg:pl-[0]  sml: pl-[80px] text-[40px] w-[900px] "> 
                            <span className=" lg:pt-1 lg:w-[18px] lg:h-[20px]  sml: pt-[15px] w-[55px] h-[55px] "> <svg width="" height="" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3333 15L17 8L10.3333 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 15L7.66667 8L1 1" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            keep a diary of your daily activities
                        </p>
                   </div>

                    <div  className="  lg:pt-93  lg:relative lg:top-0 mb-83  lg:pl-[0]  sml: pl-[87px] relative top-[2900px]  ">
                       <button  className="bg-bluedark  lg:w-177  lg:h-52 rounded-full  lg:text-16 font-Open Sans  font-regular text-white  sml: w-[500px]  h-[120px] text-[40px] " onClick={() =>{setOpen(!open)}}>Get Started</button>
                    </div>
                </div>

               <div>
                  <div className=' lg:mt-0 sml: mt-[200px] '>
                       <div
                           className=' pl-252 pt-25  lg:block  sml: hidden   '>
                            <img  src={img1}  alt=''/>
                        </div>

                        <div 
                            className=' lg:ml-292  bg-white lg:w-235 lg:h-215   
                             -mt-120  rounded-lg   lg:shadow  sml: w-[980px] ml-[87px] h-[750px] shadow-2xl '>
                            <img className='lg:h-150 lg:w-235 sml: w-[980px]  h-[550px] '  src={img2}  alt=''/>
                            <p 
                              className=' lg:text-14 text-center lg:pt-21 font-Open Sans font-regular sml: text-[40px] pt-[60px] '
                              >track your TODOS status
                            </p>
                        </div>
                  </div>
                     
                    <div className=' lg:flex   mt-30   sml::block' >
                        <div className=' '>

                           <div  className=' pl-77 lg:block sml: hidden'>
                                <img  src={img1}  alt=''/>
                            </div>

                            <div 
                                className=' lg:ml-105   lg:-mt-120  bg-white lg:w-235 
                                 rounded-lg   lg:h-215  lg:shadow  mt-[150px] sml: w-[980px] ml-[87px] h-[750px] shadow-2xl'>
                                <img  className=' lg:h-150 lg:w-235  sml: w-[980px]  h-[550px]' src={img3}  alt=''/>
                                <p className=' lg:text-14 text-center  lg:pt-21  font-Open Sans font-regular  sml: text-[40px] pt-[60px]'
                                  >Jot down reusable code snippets
                                </p>
                            </div>

                        </div>

                        <div className=' lg:mt-0 lg:ml-129  sml: mt-[150px] ml-[87px] '>
                           
                            <div className='  -mt-20  relative top-105   bg-white
                              lg:w-235 lg:h-215 rounded-lg    lg:shadow  sml: w-[980px] h-[750px]  shadow-2xl'>
                                <img  className='  lg:w-235  lg:h-150    sml: w-[980px] h-[550px]' src={img4}  alt=''/>
                                <p className=' lg:text-14  text-center lg:pt-21 font-Open Sans font-regular  sml: text-[40px] pt-[60px]'>
                                Jot down your daily activities</p>
                            </div>
                          
                            <div  className=' -ml-28  -mt-14 lg:block sml: hidden '>
                                <img   className='   '  src={img1}  alt=''/>
                            </div> 
                      </div>
                    </div>
                </div>
            </div>
            
            <div className='  lg:text-11 text-center   font-Open Sans  font-regular  sml: text-[35px]  '>
                <p className='   lg:-mt-44 lg:w-[1200px] lg:ml-0  lg:mb-0   lg:pl-0  sml: w-[900px] ml-[120px]  mt-[500px] mb-[35px] '>All Rights Reserved. 2020 @wiztemple</p>
            </div>
            </div>
           

             {/* signUp form */}

            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                <div className="     bg-white  shadow-2xl lg:w-365  lg:h-650  absolute  lg:-mt-670 lg:left-500 rounded-xl  sml: -mt-[4150px] left-[200px] w-[650px] h-[1200px] " >
                    <span className=" relative lg:left-[150px]  top-19  sml: left-[270px] " onClick={() =>{setOpen(!open)}}>
                        <svg className=' lg:h-[12px]  sml: h-[20px] ' width="" height="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.792678L11.2073 0L6 5.20732L0.792678 0L0 0.792678L5.20732 6L0 11.2073L0.792678 12L6 6.79268L11.2073 12L12 11.2073L6.79268 6L12 0.792678Z" fill="#A39B9B"/>
                        </svg>
                    </span>
                    <div
                        className=" text-center pt-17  font-Gruppo 
                         font-regular  lg:text-36  sml: text-[60px] ">
                        <h3>3Sixty</h3>
                    </div>

                    <div >
                        <h1  className=" pl-26  pt-10  lg:text-20  text-bluedark  font-Roboto sml: text-[40px] " >Create <br></br> your account</h1>
                          <p className="  pt-10 pl-26 lg:text-13 text-graydark font-Roboto sml: text-[27px] "> Enter your personal details to start your journey today</p>
                    </div>

                    <div  className="  flex bg-white lg:w-314  lg:h-46 rounded-xl   ml-26  border-bluedark mt-4  border sml: w-[550px]  h-[75px]  ">
                        <span className=" pl-61 lg:pt-10 sm: pt-[20px] ">
                            <svg className=' lg:h-[20px] sml: h-[30px] ' width="" height="" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.8055 8.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 16 10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z" fill="#FFC107"/>
                            <path d="M1.15295 5.3455L4.43845 7.755C5.32745 5.554 7.48045 4 9.99995 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 9.99995 0C6.15895 0 2.82795 2.1685 1.15295 5.3455Z" fill="#FF3D00"/>
                            <path d="M10 20C12.583 20 14.93 19.0115 16.7045 17.404L13.6095 14.785C12.5718 15.5742 11.3038 16.001 10 16C7.39903 16 5.19053 14.3415 4.35853 12.027L1.09753 14.5395C2.75253 17.778 6.11353 20 10 20Z" fill="#4CAF50"/>
                            <path d="M19.8055 8.0415H19V8H10V12H15.6515C15.2571 13.1082 14.5467 14.0766 13.608 14.7855L13.6095 14.7845L16.7045 17.4035C16.4855 17.6025 20 15 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z" fill="#1976D2"/>
                            </svg>
                       </span>
                        <h3  className=" text-bluedark pt-8  pl-17  cursor-pointer font-Roboto lg:text-16   sml: text-[36px]  "> Sign up with Google</h3>
                    </div>

                    <div  className="flex  lg:pl-105 pt-14  text-graypure sml: pl-[150px]">
                        <span className=" lg:p-11  sml: p-[23px]">
                            <svg className=' lg:h-[1px]  sml: h-[2px] ' width="" height="" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="46" y2="0.5" stroke="#B6B8C9"/>
                            </svg>
                        </span>
                         <h3 className=" lg:text-16  sml: text-[30px] ">OR</h3>
                        <span className=" lg:p-11  sml: p-[23px] ">
                            <svg className='lg:h-[1px]  sml: h-[2px] ' width="" height="" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="46" y2="0.5" stroke="#B6B8C9"/>
                            </svg>
                        </span>
                    </div>

                    <form className=''>
                        <div 
                           className=" lg:w-314  lg:h-46 ml-26 lg:mt-14  
                           bg rounded-xl  border  sml: w-[550px]  h-[75px] mt-[30px]">
                           <input 
                             type="name"
                              className=" capitalize lg:mt-2 pl-17 font-Roboto lg:text-[16px]  outline-none  lg:w-282 sml: w-[550px] mt-[16px] text-[27px] " required  placeholder="Name" >
                           </input>
                           
                      </div>

                        <div 
                            className=" lg:w-314  lg:h-46 ml-26 
                             font-Roboto lg:mt-17 bg rounded-xl  border sml: w-[550px]  h-[75px] mt-[30px] ">
                            <input 
                            type="username"
                               className="  capitalize lg:mt-2 pl-17 ;
                                 outline-none lg:text-[16px]  lg:w-282  sml: w-[550px] mt-[14px] text-[27px]  " required placeholder="Username" >                             
                            </input>
                        </div>

                        <div 
                            className=" lg:w-314  font-Roboto lg:h-46 ml-26
                             lg:mt-17  bg rounded-xl  border  sml: w-[550px]  h-[75px] mt-[30px] ">
                                <input 
                                type="email"
                                    className=" capitalize lg:text-[16px]  lg:mt-2 pl-17 outline-none  lg:w-282  sml: w-[550px] mt-[18px] text-[27px]" required placeholder="E-mail">
                                </input>
                           
                        </div>

                        <div 
                            className=" lg:w-314  lg:h-46 ml-26 lg:mt-17  bg rounded-xl  border sml: w-[550px]  h-[75px] mt-[30px]  ">
                           <input
                           type="password"
                              className=" capitalize lg:mt-2 pl-17 lg:text-[16px]  outline-none  lg:w-282  sml: w-[550px] mt-[14px] text-[27px]" required placeholder="Password">
                           </input>
                        </div>


                        <div className="   pl-26">
                               <Link to="/Sign" >
                                  <button  className="lg:w-314 lg:text-[16px]  lg:mt-19 text-white lg:h-46 rounded-full  bg-bluedark  sml: w-[550px] mt-[30px] text-[27px] h-[75px]">  Sign </button>
                              </Link> 
                            </div>

                        <div>
                            <p
                                className=" pt-17 lg:text-12 text-center font-Roboto sml: text-[22px]">
                                 Already have an account? 
                                <span 
                                    className=" cursor-pointer text-bluelight"> Sign in here 
                                </span>
                           </p>
                        </div>
                    </form>
                </div>
            </div>

             {/* sign in form*/}

                 <div className={`dropup-menu ${on? 'active' : 'inactive'}`}>
                    <div className="  bg-white  shadow-2xl w-365  h-600 
                            absolute  lg:-mt-670 left-500 rounded-xl  sml: -mt-[4150px]">
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

                            <form>
                              

                                <div className=" w-314  font-Roboto h-46 ml-26 mt-21
                                  bg rounded-xl  border">
                                   <input 
                                   type="email"
                                       className=" capitalize  mt-2 pl-17  outline-none  w-282" required placeholder="E-mail">
                                   </input>
                                </div>

                                <div className=" w-314  h-46 ml-26 mt-21 
                                   bg rounded-xl  border">
                                  <input 
                                  type="password"
                                     className=" capitalize mt-2 pl-17  outline-none  w-282" required placeholder="Password" >
                                  </input>
                                </div>


                                <div className="   pl-26">
                                    <Link to="/Sign">
                                        <button className=" w-314  mt-30 text-white h-46 rounded-full bg-bluedark"> Sign Up</button>
                                    </Link>
                                </div>

                                <div>
                                    <p 
                                       className=" pt-26 text-12 text-center font-Roboto  "> 
                                       Already have an account? 
                                        <span className=" text-bluelight cursor-pointer">
                                           Sign in here 
                                        </span>
                                     </p>
                                </div>
                          </form>
                    </div>
              </div>
        </div>
        </div>
    )
}


export default Main;