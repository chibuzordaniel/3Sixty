import {Link} from 'react-router-dom';
import Input from '../../input/Input';

import React, {useState} from 'react';




function Draft () {

    const [drop, setDrop] = useState (true);
    const [ dropmain, setDropMain] = useState (true)
    const [ dropup, setDropUp] = useState (true)


    return(
        <div>
            <div className='' >
                <div className=' bg-white  h-59'>
                    <div  className=' pl-[35px] '>
                      <div className=' flex'>
                            <div>
                              <h1 className='  text-36 font-Gruppo '> <Link to='/3Sixty'>3Sixty</Link></h1>  
                            </div>

                            <div className=' pl-129  py-3'>
                               <spn>
                                   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8571 26.7224C20.9579 26.7224 26.7143 20.9661 26.7143 13.8653C26.7143 6.76449 20.9579 1.00815 13.8571 1.00815C6.75634 1.00815 1 6.76449 1 13.8653C1 20.9661 6.75634 26.7224 13.8571 26.7224Z" stroke="#DDDDDD" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M23.5 23.5081L31 31.0081" stroke="#DDDDDD" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                               </spn> 
                            </div>

                            <div className=' py-4 pl-3 text-14 font-Roboto '>
                              <h3 >Search notes</h3>
                            </div>
                      </div>
                    </div>
                </div>

                {/* section2 */}
                <div className='  bg-secondary  h-61'>
                    <div className=' pl-[52px] '>
                      <div className=' flex justify-between'>
                        <div  className=' flex'>
                         <div className=' flex py-5' >
                                <span>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 5.25H17.25V6.86538H3.75V5.25Z" fill="#356DFB"/>
                                        <path d="M3.75 9.69231H17.25V11.3077H3.75V9.69231Z" fill="#356DFB"/>
                                        <path d="M3.75 14.1346H10.875V15.75H3.75V14.1346Z" fill="#356DFB"/>
                                        <path d="M0 0V21H21V0H0ZM19.5 19.3846H1.5V1.61538H19.5V19.3846Z" fill="#356DFB"/>
                                    </svg>
                                </span>
                                <h3  className='card2 pl-[9px] font-Roboto  text-bluedark font text-15  '>Notes</h3>
                                <h5 className='  bg-punkcolor text-bluedark w-25 h-25 rounded-full ml-[18px] pl-[2.5px]'>10</h5>
                          </div>

                          <div className=' flex py-5 pl-[40px]' >
                                <span>
                                   <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.37033 0.00787468C6.16104 0.0380661 5.97095 0.156232 5.84083 0.337038L3.09086 4.09477L1.27476 2.77812C1.18531 2.71278 1.08488 2.66731 0.979223 2.64429C0.87357 2.62127 0.764777 2.62117 0.659086 2.64398C0.553396 2.6668 0.452889 2.71209 0.363333 2.77725C0.273776 2.84241 0.196932 2.92616 0.137211 3.0237C0.0774896 3.12123 0.0360661 3.23063 0.0153172 3.34562C-0.00543164 3.4606 -0.00509739 3.57891 0.0163008 3.69376C0.037699 3.80861 0.0797398 3.91773 0.140011 4.01486C0.200282 4.11199 0.277598 4.19523 0.367521 4.25979L2.78898 6.01533C2.9587 6.13821 3.16489 6.1867 3.36613 6.15104C3.56737 6.11538 3.74874 5.99822 3.8738 5.8231L7.10242 1.43425C7.20516 1.29795 7.2678 1.13116 7.28217 0.955611C7.29654 0.780058 7.26199 0.603865 7.183 0.449967C7.10401 0.296068 6.98425 0.171593 6.8393 0.092743C6.69436 0.013893 6.53094 -0.0156796 6.37033 0.00787468ZM9.69984 2.64118V4.39672H21V2.64118H9.69984ZM6.37033 7.9078C6.16104 7.93799 5.97095 8.05616 5.84083 8.23696L3.09086 11.9947L1.27476 10.678C1.09409 10.5471 0.872977 10.4996 0.660074 10.5459C0.447171 10.5922 0.259915 10.7287 0.1395 10.9251C0.0190853 11.1216 -0.0246245 11.3621 0.0179864 11.5936C0.0605973 11.8251 0.186038 12.0288 0.366714 12.1597L2.78818 13.9153C2.95789 14.0381 3.16408 14.0866 3.36532 14.051C3.56656 14.0153 3.74793 13.8981 3.87299 13.723L7.10161 9.33418C7.20427 9.19793 7.26687 9.03124 7.28125 8.85579C7.29564 8.68034 7.26115 8.50424 7.18228 8.35038C7.1034 8.19653 6.98378 8.07205 6.83897 7.99312C6.69417 7.91418 6.53088 7.88446 6.37033 7.9078ZM9.69984 10.5411V12.2966H21V10.5411H9.69984ZM6.37033 15.8077C6.16104 15.8379 5.97095 15.9561 5.84083 16.1369L3.09086 19.8946L1.27476 18.578C1.1853 18.5131 1.08497 18.4681 0.979503 18.4454C0.874035 18.4227 0.765493 18.4229 0.660074 18.4458C0.447171 18.4922 0.259915 18.6286 0.1395 18.8251C0.0190853 19.0215 -0.0246245 19.262 0.0179864 19.4935C0.0605973 19.7251 0.186038 19.9287 0.366714 20.0596L2.78818 21.8152C2.95789 21.9381 3.16408 21.9865 3.36532 21.9509C3.56656 21.9152 3.74793 21.7981 3.87299 21.6229L7.10161 17.2341C7.20427 17.0979 7.26687 16.9312 7.28125 16.7557C7.29564 16.5803 7.26115 16.4042 7.18228 16.2503C7.1034 16.0965 6.98378 15.972 6.83897 15.893C6.69417 15.8141 6.53088 15.7844 6.37033 15.8077ZM9.69984 18.441V20.1966H21V18.441H9.69984Z" fill="#C4C4C4"/>
                                    </svg>

                                </span>
                                <h3 className=' card2  pl-[10px] font-Roboto  text-15  text-secondarydark'>Todos</h3>
                                <h5 className=' bg-secondarypure text-white w-25 h-25 rounded-full ml-[14px] pl-[2.5px]'>10</h5>         
                          </div>

                          <div className=' flex py-5 pl-[39px]' >
                                <span>
                                   <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.6667 2.33333H16.3333V0H4.66667V2.33333H2.33333C1.05 2.33333 0 3.38333 0 4.66667V5.83333C0 8.80833 2.24 11.235 5.12167 11.5967C5.49063 12.4709 6.0669 13.2422 6.80069 13.8439C7.53448 14.4455 8.40373 14.8595 9.33333 15.05V18.6667H4.66667V21H16.3333V18.6667H11.6667V15.05C12.5963 14.8595 13.4655 14.4455 14.1993 13.8439C14.9331 13.2422 15.5094 12.4709 15.8783 11.5967C18.76 11.235 21 8.80833 21 5.83333V4.66667C21 3.38333 19.95 2.33333 18.6667 2.33333ZM2.33333 5.83333V4.66667H4.66667V9.12333C3.31333 8.63333 2.33333 7.35 2.33333 5.83333ZM10.5 12.8333C8.575 12.8333 7 11.2583 7 9.33333V2.33333H14V9.33333C14 11.2583 12.425 12.8333 10.5 12.8333ZM18.6667 5.83333C18.6667 7.35 17.6867 8.63333 16.3333 9.12333V4.66667H18.6667V5.83333Z" fill="#DDDDDD"/>
                                     </svg>

                                </span>
                                <h3 className=' card2  pl-[11px] font-Roboto  text-15  text-secondarydark'>Events</h3>
                                <h5 className=' bg-secondarypure text-white w-25 h-25 rounded-full ml-[5px] pl-[2.5px]'>10</h5>
                          </div>

                          <div className='  flex py-5 pl-[32px]' >
                                <span>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 6H19.7647V2.25C19.7647 1.8 19.5176 1.5 19.1471 1.5H1.85294C1.48235 1.5 1.23529 1.8 1.23529 2.25V6H0V2.25C0 0.975 0.802941 0 1.85294 0H19.1471C20.1971 0 21 0.975 21 2.25V6Z" fill="#DDDDDD"/>
                                    <path d="M17.9118 21H3.08829C2.03829 21 1.23535 20.025 1.23535 18.75V6H2.47065V18.75C2.47065 19.2 2.7177 19.5 3.08829 19.5H17.9118C18.2824 19.5 18.5295 19.2 18.5295 18.75V6H19.7648V18.75C19.7648 20.025 18.9618 21 17.9118 21Z" fill="#DDDDDD"/>
                                    <path d="M12.9704 10.5H8.02927C7.65868 10.5 7.41162 10.2 7.41162 9.75C7.41162 9.3 7.65868 9 8.02927 9H12.9704C13.341 9 13.5881 9.3 13.5881 9.75C13.5881 10.2 13.341 10.5 12.9704 10.5Z" fill="#DDDDDD"/>
                                    <path d="M0 4.5H21V6H0V4.5Z" fill="#DDDDDD"/>
                                    </svg>

                                </span>
                                <h3 className=' card2    pl-[14px] font-Roboto  text-15  text-secondarydark'>Archives</h3>
                                <h5 className=' bg-secondarypure text-white w-25 h-25 rounded-full ml-[9px] pl-[2.5px]'>10</h5>
                          </div>
                          <div className=' flex py-5 pl-[27px]' >
                                <span>
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.25 1V4L7.75 4.75L5.5 2.5L2.5 5.5L4.75 7.75L4 9.25H1V13.75H4L4.75 15.25L2.5 17.5L5.5 20.5L7.75 18.25L9.25 19V22H13.75V19L15.25 18.25L17.5 20.5L20.5 17.5L18.25 15.25L19 13.75H22V9.25H19L18.25 7.75L20.5 5.5L17.5 2.5L15.25 4.75L13.75 4V1H9.25Z" stroke="#CCCCCC" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.5 14.5C13.1569 14.5 14.5 13.1569 14.5 11.5C14.5 9.84315 13.1569 8.5 11.5 8.5C9.84315 8.5 8.5 9.84315 8.5 11.5C8.5 13.1569 9.84315 14.5 11.5 14.5Z" stroke="#CCCCCC" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </span>
                                <h3 className=' card2  pl-[13px] font-Roboto  text-secondarydark text-15'>Settings</h3>
                                
                          </div>
                          </div>

                          <div className='  flex py-3  mr-[40px] '>
                                <button  className=' bg-bluelight w-64 h-41 rounded-l-full pl-25'>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white"/>
                                    </svg>
                                </button>

                                <button className=' bg-bluedark w-111 h-41 font-Roboto  rounded-r-full text-white text-16' onClick={() => { setDropUp(!dropup)}} >Create Note</button>
                          </div>
                      </div>
                    </div>
                </div>

                {/* section3 */}

                <div >
                    <div className=' bg-primary h-600' >
                        <div className=' flex'>
                        <div  className=' bg-white w-[373px] h-600  '>
                           <div className=' overflow-y-scroll h-580 overflow-x-hidden'>
                             <div className=' card-hover border-b-2 pb-[18px] cursor-pointer'>
                                <div className='  pl-[31px] pt-41 '>
                                    <h1 className=' text-[18px] font-Roboto font-bold'>10 Hours Fasting every week</h1>
                                    <p className='  text-[13px] text-graydark'>Incididunt et aliquip sint duis esse. Est duis ea dolor <br></br> eiusmod ut elit incididunt irure nisi duis aliquip<br></br> anim velit. Officia laborum consectetur quis ea <br></br> pariatur proident exercitation. </p>

                                    <div className='flex '>
                                        <h2 className=' pl-[18px]  pt-[5px] mt-[12px]  bg-punklight  text-bluedark w-93 h-32 rounded-full text-13'>Personal</h2>
                                        <h3 className=' pl-69 pt-17 text-primarydark text-13 '>23 hours ago</h3>
                                        <span className='bg-secondary  w-50 rounded-full h-26 ml-19 pl-[18px]   pt-3   mt-15'  onClick={() =>{setDrop(!drop)}}>
                                            <svg width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 3C7.32843 3 8 2.32843 8 1.5C8 0.671573 7.32843 0 6.5 0C5.67157 0 5 0.671573 5 1.5C5 2.32843 5.67157 3 6.5 3Z" fill="#777777"/>
                                            <path d="M11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3Z" fill="#777777"/>
                                            <path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z" fill="#777777"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                             </div>

                             <div className=' card-hover border-b-2 pb-[18px] cursor-pointer'>
                                <div className=' pl-[31px] pt-41 '>
                                    <h1 className=' text-18 font-Roboto font-bold'>Visit Plateau State</h1>
                                    <p className='  text-13 text-graydark'>Incididunt et aliquip sint duis esse. Est duis ea dolor <br></br> eiusmod ut elit incididunt irure nisi duis aliquip<br></br> anim velit. Officia laborum consectetur quis ea <br></br> pariatur proident exercitation. </p>

                                    <div className='flex '>
                                        <h2 className=' pl-[18px]  pt-[5px] mt-[12px]  bg-punklight text-bluedark text-13 w-93 h-32 rounded-full'>Travel</h2>
                                        <h3 className=' pl-69 pt-[17px] text-primarydark  text-13'>23 hours ago</h3>
                                        <span className='bg-secondary  w-50 rounded-full h-26 ml-19 pl-[18px]   pt-3   mt-15'onClick={() => {setDrop(!drop)}} >
                                            <svg width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 3C7.32843 3 8 2.32843 8 1.5C8 0.671573 7.32843 0 6.5 0C5.67157 0 5 0.671573 5 1.5C5 2.32843 5.67157 3 6.5 3Z" fill="#777777"/>
                                            <path d="M11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3Z" fill="#777777"/>
                                            <path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z" fill="#777777"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                             </div>
                             <div className=' card-hover border-b-2 pb-[18px] cursor-pointer'>
                                <div className=' pl-[31px] pt-41 '>
                                    <h1 className=' text-18 font-Roboto font-bold'>Birthday debrief</h1>
                                    <p className='  text-13 text-graydark'>Incididunt et aliquip sint duis esse. Est duis ea dolor <br></br> eiusmod ut elit incididunt irure nisi duis aliquip<br></br> anim velit. Officia laborum consectetur quis ea <br></br> pariatur proident exercitation. </p>

                                    <div className='flex '>
                                        <h2 className=' pl-[18px]  pt-[5px] mt-[12px]  bg-punklight text-bluedark w-93 h-32 text-13 rounded-full'>Personal</h2>
                                        <h3 className=' pl-69 pt-17 text-primarydark text-13 '>3 hours ago</h3>
                                        <span className='bg-secondary  w-50 rounded-full h-26 ml-19 pl-[18px]   pt-3   mt-15' onClick={() => {setDrop(!drop)}}>
                                            <svg width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 3C7.32843 3 8 2.32843 8 1.5C8 0.671573 7.32843 0 6.5 0C5.67157 0 5 0.671573 5 1.5C5 2.32843 5.67157 3 6.5 3Z" fill="#777777"/>
                                            <path d="M11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3Z" fill="#777777"/>
                                            <path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z" fill="#777777"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                             </div>
                             <div className= 'card-hover border-b-2 pb-[18px] cursor-pointer'>
                                <div className=' pl-[31px] pt-41 '>
                                    <h1 className=' text-18 font-Roboto font-bold'>Learn Darts</h1>
                                    <p className='  text-13 text-graydark'>Incididunt et aliquip sint duis esse. Est duis ea dolor <br></br> eiusmod ut elit incididunt irure nisi duis aliquip<br></br> anim velit. Officia laborum consectetur quis ea <br></br> pariatur proident exercitation. </p>

                                    <div className='flex '>
                                        <h2 className=' pl-[18px]  pt-[5px] mt-[12px]  bg-punklight text-bluedark w-93 text-13 h-32 rounded-full'>Personal</h2>
                                        <h3 className=' pl-69 pt-17  text-graydark text-13 '>23 hours ago</h3>
                                        <span className='bg-secondary  w-50 rounded-full h-26 ml-19 pl-[18px]  pt-3   mt-15' onClick={() => {setDrop(!drop)}}>
                                            <svg width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 3C7.32843 3 8 2.32843 8 1.5C8 0.671573 7.32843 0 6.5 0C5.67157 0 5 0.671573 5 1.5C5 2.32843 5.67157 3 6.5 3Z" fill="#777777"/>
                                            <path d="M11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3Z" fill="#777777"/>
                                            <path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z" fill="#777777"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                             </div>
                           </div>
                        </div>
                         <div className=' bg-white ml-17 mt-15 h-570 flex ju  w-[920px]'>
                            <div>
                                <h1 className=' text-48 font-Roboto font-bold pl-85 pb-2  pt-41'>Learn Darts</h1>
                                <p className=' text-13 pl-57 text-graydark '>Exercitation in consectetur velit enim ullamco aliqua officia mollit eu nulla sunt aliquip aute nulla. Aliquip <br></br> tempor et exercitation minim adipisicing minim velit. Id elit culpa aute est. Aute aute excepteur et adipisicing <br></br>adipisicing officia dolor. Commodo incididunt ad labore incididunt aliquip deserunt anim eu incididunt est<br></br> mollit. Proident aliqua non aliquip dolore sint voluptate adipisicing. Tempor in fugiat incididunt ea officia <br></br> ullamco ut qui excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et velit est nulla. In consectetur <br></br>nisi duis ad quis magna anim ut dolor minim irure proident do irure. Sit do quis sunt consequat id incididunt<br></br> quis.</p>
                                <p className=' text-13 pl-57 text-graydark pt-11'>Exercitation in consectetur velit enim ullamco aliqua officia mollit eu nulla sunt aliquip aute nulla. Aliquip <br></br> tempor et exercitation minim adipisicing minim velit. Id elit culpa aute est. Aute aute excepteur et adipisicing <br></br>adipisicing officia dolor. Commodo incididunt ad labore incididunt aliquip deserunt anim eu incididunt est<br></br> mollit. Proident aliqua non aliquip dolore sint voluptate adipisicing. Tempor in fugiat incididunt ea officia <br></br> ullamco ut qui excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et velit est nulla. In consectetur <br></br>nisi duis ad quis magna anim ut dolor minim irure proident do irure. Sit do quis sunt consequat id incididunt<br></br> quis.</p>
                                
                            </div>
                         </div>
                         <div>
                            <div className=' bg-white w-41 h-41 rounded-full pt-19 pl-3.5  ml-5 mt-4' onClick={() => {setDropMain(! dropmain)}}>
                                <span>
                                    <svg width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 3C7.32843 3 8 2.32843 8 1.5C8 0.671573 7.32843 0 6.5 0C5.67157 0 5 0.671573 5 1.5C5 2.32843 5.67157 3 6.5 3Z" fill="#777777"/>
                                    <path d="M11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3Z" fill="#777777"/>
                                    <path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z" fill="#777777"/>
                                    </svg>
                                </span> 
                            </div>
                            <div className=' bg-white h-[86px] w-46 mt-17  ml-5 rounded-full'>
                                <div className=' border-b-2 pt-4 pb-2 pl-3.5 '>
                                    <p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.02344 8H15.0234M8.02344 1V15V1Z" stroke="#777777" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                     </p>
                                </div>

                                <div className='  pt-4   pl-3.5 '>
                                    <p>
                                       <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.02344 1H15.0234" stroke="#777777" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </p>
                                </div>
                            </div>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section4 */}

            <div className={`dropdown-menu ${drop? 'active' : 'inactive'}`} >
          <div className=" bg-white shadow-2xl w-[143px] h-[124px]  absolute bottom-[277px] left-[180px] ">
            <div className=" flex cardD">
                <span className=" pl-[17px] pt-[9px] ">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8901 0.389997L13.6001 3.11C14.0601 3.57 14.0201 4.35 13.6301 4.75L5.62006 12.77L0.0600586 13.93L1.22006 8.35C1.22006 8.35 8.82006 0.719997 9.21006 0.319997C9.60006 -0.0700034 10.4301 -0.0700033 10.8901 0.389997ZM8.16006 3.18L2.57006 8.79L3.68006 9.9L9.22006 4.25L8.16006 3.18ZM5.19006 11.41L10.7701 5.81L9.70006 4.73L4.11006 10.33L5.19006 11.41Z" fill="#356DFB"/>
                    </svg>
              </span>

              <h3 className="  pl-[18px] font-Roboto   pt-[5px]  text-[13px] text-bluedark">Edit</h3>
            </div>

            <div className=" flex  cardD">
                <span className=" pl-[17px] pt-[9px] ">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33398 19.0008V19.008C1.33398 19.5529 1.7731 19.9947 2.31621 20H13.6851C13.9466 19.9974 14.1966 19.8916 14.3805 19.7057C14.5645 19.5197 14.6676 19.2686 14.6673 19.0071V5.66513H1.33398V19.0008ZM2.66732 7.0003H13.334V18.6675H2.66732V7.0003Z" fill="#DDDDDD"/>
                    <path d="M4.33398 8.33371H5.66732V16.6674H4.33398V8.33371Z" fill="#DDDDDD"/>
                    <path d="M7.33398 8.33371H8.66732V16.6674H7.33398V8.33371Z" fill="#DDDDDD"/>
                    <path d="M10.334 8.33371H11.6673V16.6674H10.334V8.33371Z" fill="#DDDDDD"/>
                    <path d="M11.0009 3.00014V1.00005C11.0009 0.439131 10.6053 0 10.1004 0H5.90044C5.39556 0 5 0.439131 5 1.00005V3.00014H0V4.33353H16V3.00014H11.0009ZM6.33422 1.33339H9.66755V3.00014H6.33422V1.33339Z" fill="#DDDDDD"/>
                    </svg>

              </span>

              <h3 className="  pl-[18px]  font-Roboto  pt-[5px]  text-[13px] text-primarydark">Delete</h3>
            </div>

            <div className=" flex  cardD">
                <span className=" pl-[17px] pt-[9px] ">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4286 7.85714H14.1429M3.85714 14.1429H1V5H17V14.1429H14.1429H3.85714ZM3.85714 10.7143V17H14.1429V10.7143H3.85714ZM14.1429 5V1H3.85714V5H14.1429Z" stroke="#DDDDDD" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
              </span>

              <h3 className="  pl-[18px]  font-Roboto pt-[5px]  text-[13px] text-primarydark">Print</h3>
            </div>

            <div className=" flex cardD">
                <span className=" pl-[17px] pt-[9px] ">
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 4H16V1.5C16 1.2 15.8 1 15.5 1H1.5C1.2 1 1 1.2 1 1.5V4H0V1.5C0 0.65 0.65 0 1.5 0H15.5C16.35 0 17 0.65 17 1.5V4Z" fill="#DDDDDD"/>
                    <path d="M14.5 14H2.5C1.65 14 1 13.35 1 12.5V4H2V12.5C2 12.8 2.2 13 2.5 13H14.5C14.8 13 15 12.8 15 12.5V4H16V12.5C16 13.35 15.35 14 14.5 14Z" fill="#DDDDDD"/>
                    <path d="M10.5 7H6.5C6.2 7 6 6.8 6 6.5C6 6.2 6.2 6 6.5 6H10.5C10.8 6 11 6.2 11 6.5C11 6.8 10.8 7 10.5 7Z" fill="#DDDDDD"/>
                    <path d="M0 3H17V4H0V3Z" fill="#DDDDDD"/>
                    </svg>

              </span>

              <h3 className="  pl-[18px]  font-Roboto pt-[5px]  text-[13px] text-primarydark">Archive</h3>
            </div>
          </div>
        </div>

          {/* section5 */}

          {/* <div  className={`dropdown-menu ${dropmain? 'active' : 'inactive'}`}  >
          <div className=" bg-whit shadow-2xl w-[200px] h-[160px]  absolute bottom-[390px] left-[1120px] ">
            <div className=" flex cardD">
                <span className=" pl-[17px] pt-[9px] ">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8901 0.389997L13.6001 3.11C14.0601 3.57 14.0201 4.35 13.6301 4.75L5.62006 12.77L0.0600586 13.93L1.22006 8.35C1.22006 8.35 8.82006 0.719997 9.21006 0.319997C9.60006 -0.0700034 10.4301 -0.0700033 10.8901 0.389997ZM8.16006 3.18L2.57006 8.79L3.68006 9.9L9.22006 4.25L8.16006 3.18ZM5.19006 11.41L10.7701 5.81L9.70006 4.73L4.11006 10.33L5.19006 11.41Z" fill="#356DFB"/>
                    </svg>
              </span>

              <h3 className="  pl-[18px]  pt-[5px]  font-Roboto text-[13px]  text-bluedark">Edit</h3>
            </div>

            <div className=" flex  cardD">
                <span className=" pl-[17px] pt-[9px] ">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33398 19.0008V19.008C1.33398 19.5529 1.7731 19.9947 2.31621 20H13.6851C13.9466 19.9974 14.1966 19.8916 14.3805 19.7057C14.5645 19.5197 14.6676 19.2686 14.6673 19.0071V5.66513H1.33398V19.0008ZM2.66732 7.0003H13.334V18.6675H2.66732V7.0003Z" fill="#DDDDDD"/>
                    <path d="M4.33398 8.33371H5.66732V16.6674H4.33398V8.33371Z" fill="#DDDDDD"/>
                    <path d="M7.33398 8.33371H8.66732V16.6674H7.33398V8.33371Z" fill="#DDDDDD"/>
                    <path d="M10.334 8.33371H11.6673V16.6674H10.334V8.33371Z" fill="#DDDDDD"/>
                    <path d="M11.0009 3.00014V1.00005C11.0009 0.439131 10.6053 0 10.1004 0H5.90044C5.39556 0 5 0.439131 5 1.00005V3.00014H0V4.33353H16V3.00014H11.0009ZM6.33422 1.33339H9.66755V3.00014H6.33422V1.33339Z" fill="#DDDDDD"/>
                    </svg>

              </span>

              <h3 className="  pl-[18px] font-Roboto  pt-[10px]  text-[13px] text-primarydark">Delete</h3>
            </div>

            <div className=" flex  cardD">
                <span className=" pl-[17px] pt-[19px] ">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4286 7.85714H14.1429M3.85714 14.1429H1V5H17V14.1429H14.1429H3.85714ZM3.85714 10.7143V17H14.1429V10.7143H3.85714ZM14.1429 5V1H3.85714V5H14.1429Z" stroke="#DDDDDD" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
              </span>

              <h3 className="  pl-[18px]  pt-[19px]  font-Roboto text-[13px] text-primarydark">Print</h3>
            </div>

            <div className=" flex cardD">
                <span className=" pl-[17px] pt-[21px] ">
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 4H16V1.5C16 1.2 15.8 1 15.5 1H1.5C1.2 1 1 1.2 1 1.5V4H0V1.5C0 0.65 0.65 0 1.5 0H15.5C16.35 0 17 0.65 17 1.5V4Z" fill="#DDDDDD"/>
                    <path d="M14.5 14H2.5C1.65 14 1 13.35 1 12.5V4H2V12.5C2 12.8 2.2 13 2.5 13H14.5C14.8 13 15 12.8 15 12.5V4H16V12.5C16 13.35 15.35 14 14.5 14Z" fill="#DDDDDD"/>
                    <path d="M10.5 7H6.5C6.2 7 6 6.8 6 6.5C6 6.2 6.2 6 6.5 6H10.5C10.8 6 11 6.2 11 6.5C11 6.8 10.8 7 10.5 7Z" fill="#DDDDDD"/>
                    <path d="M0 3H17V4H0V3Z" fill="#DDDDDD"/>
                    </svg>

              </span>

              <h3 className="  pl-[18px] font-Roboto   pt-[18px]  text-[13px] text-primarydark">Archive</h3>
            </div>
          </div>
        </div> */}

          {/* section6 */}

           <div className={`dropdown-menu ${dropup? 'active' : 'inactive'}`}>
            <div className=' bg-white shadow-2xl rounded   w-[454px]  h-[450px] absolute bottom-[30px]  left-[500px] '>
                <div className=' flex  border-b pb-[7px]'>
                    <h1 className=' pl-[22px] pt-[16px] text-[18px] font-Roboto font-bold '>Write a Note</h1>
                     <span className=' pl-[297px] pt-[20px] ' onClick={() => {setDropUp(! dropup)}}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.792678L11.2073 0L6 5.20732L0.792678 0L0 0.792678L5.20732 6L0 11.2073L0.792678 12L6 6.79268L11.2073 12L12 11.2073L6.79268 6L12 0.792678Z" fill="#777777"/>
                        </svg>
                     </span>
                </div>

                <div >
                    <h3 className=' text-[14px] font-bold font-Roboto  pl-[22px] pt-[13px]'>Title</h3>
                    <input className=' outline-none text-primarydark font-Roboto   text-[14px] mt-[7px]  bg-extra border w-[410px] h-[46px] ml-[22px] rounded-xl  pl-[14px] border-extracolor' placeholder='note title'></input>
                </div>

                <div >
                    <h3 className=' text-[14px] font-bold font-Roboto   pl-[22px] pt-[13px]'>Title</h3>
                    <input className=' outline-none text-primarydark  font-Roboto  mt-[7px]  text-[14px]  bg-extra border w-[410px] h-[46px] ml-[22px] rounded-xl  pl-[14px] border-extracolor' placeholder='note title'></input>
                </div>


                <div >
                    <h3 className=' text-[14px] font-bold font-Roboto   pl-[22px] pt-[13px]'>Title</h3>
                    <div className=' note'>
                       <textarea className=' outline-none font-Roboto  pl-[14px]  pt-[14px] rounded-2xl w-[410px] h-[99px]   bg-extra  ' placeholder='note body'></textarea>
                    </div>
                </div>

                <div>
                    <button className=' bg-bluedark text-white ml-[22px] mt-[20px] w-[141px] h-[48px] font-Roboto text-[16px] rounded-full'>Create</button>
                </div>
            </div>
           </div>

        </div>
    )
}

export default Draft;