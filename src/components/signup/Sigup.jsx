import {useState} from 'react'
import Vector1 from './img/Vector (1).png'
import line1 from './img/Line 20.png'
import {FcGoogle } from 'react-icons/fc'
import {useNavigate} from 'react-router-dom'


function Signup ({visible, onClose}) {

   const navigate = useNavigate()
   const [formState, setformState] = useState ({
      name: "",
      username: "", 
      email: "",
      password: "",

   });

   const [errorMessage, setErrorMessage] = useState("");


   const changeHandler = (e) => {
      setformState({
         ...formState,
         [e.target.name]: e.target.value
      })
   }


   const submitHandler = (e) => {
      e.preventDefault()
      if (!formState.name || !formState.username || !formState.email ||  !formState.password) return setErrorMessage('field is required.');
      console.log(formState)
      setErrorMessage('')
      navigate('/Draft')
   }

   
   const windowClose = (e) => {
      // onClose()
      if (e.target.id === 'Signup') onClose()
   }

   if (!visible) return null;

   return (
     <div id='Signup'  onClick={windowClose} className=' bg-[#00000033] w-full   h-full  absolute top-0 '>
       <div className=' absolute top-[22px] left-[600px]  '>
        <div className=" bg-white rounded-2xl shadow-2xl h-[719px] w-[365px]   ">
           <div className=''>
               <img className='relative left-[330px] top-[15px]'  src={Vector1} alt="" onClick={onClose} />
               <h1 className='text-[36px] text-center font-Gruppo font-normal pt-[15px]  '>3Sixty</h1>
               <h2 className='text-[20px] text-[#356DFB] font-Roboto pl-[26px] pt-[10px] leading-[23px] font-bold  '>Create <br /> your account</h2>
               <p className='text-[13px] text-[#777777] pl-[26px] pt-[10px]  '>Enter your personal details to start your journey today</p>

               <div className='flex border-2 mt-[15px] bg-[#f9f9f9] border-[#356DFB] rounded-md  w-[314px] h-[46px] ml-[26px] cursor-pointer  '>
                  <FcGoogle className=' text-[25px]  mt-[7px] ml-[66px] ' />
                  <h3 className=' text-[16px] text-[#356DFB] pt-[7px] font-bold pl-[15px] font-Roboto '>Sign up with Google</h3>
               </div>

               <div className='  flex ml-[105px] mt-[10px]  '>
                  <img className='w-[46px]  h-[1px] mt-[12px]' src={line1} alt="" />
                  <h3 className=' pl-[13px] font-Roboto'>OR</h3>
                  <img className='w-[46px] ml-[13px] h-[1px] mt-[12px]' src={line1} alt="" />
               </div>

               <form onSubmit={submitHandler}>
                  <div>
                     <input onChange={changeHandler} value={formState.name} className=' border  outline-none border-[#DEDFEC] text-[14px] text-[#BDBEC1]  bg-[#f9f9f9]  font-Roboto   rounded-xl mt-[10px] w-[314px] h-[46px] ml-[26px] pl-[17px] capitalize '  placeholder='Name' type="name" name='name'  />
                     <div  className=' text-sm text-red-500  pl-[27px] '>{errorMessage}</div>
                     <input onChange={changeHandler} value={formState.username} className=' border  outline-none border-[#DEDFEC] text-[14px] text-[#BDBEC1]  bg-[#f9f9f9]  font-Roboto   rounded-xl mt-[18px] w-[314px] h-[46px] ml-[26px] pl-[17px] capitalize '  placeholder='Username' type="username" name='username' />
                     <div className=' text-sm text-red-500 pl-[27px]'>{errorMessage}</div>
                     <input onChange={changeHandler} value={formState.email} className=' border  outline-none border-[#DEDFEC] text-[14px] text-[#BDBEC1]  bg-[#f9f9f9]  font-Roboto   rounded-xl mt-[18px] w-[314px] h-[46px] ml-[26px] pl-[17px] capitalize '  placeholder='E-mail' type="email" name='email' />
                      <div className='text-sm text-red-500 pl-[27px]'>{errorMessage}</div>
                     <input onChange={changeHandler} value={formState.password} className=' border  outline-none border-[#DEDFEC] text-[14px] text-[#BDBEC1]  bg-[#f9f9f9]  font-Roboto   rounded-xl mt-[18px] w-[314px] h-[46px] ml-[26px] pl-[17px] capitalize '  placeholder='Password' type="password" name='password' />
                     <div className=' text-sm text-red-500 pl-[27px]'>{errorMessage}</div>
                     <button type='submit' className=' bg-[#356DFB]  w-[314px] h-[46px] rounded-full ml-[26px] text-[16px] text-white mt-[17px] font-Roboto '> Sign Up</button>
                     <p className=' text-center text-[12px] pt-[15px] font-Roboto '>Already have an account? <span className=' text-[#356DFB] cursor-pointer'>Sign in here</span></p>
                  </div>
               </form>
            </div>
         </div>
      </div>
    </div>
   )
}

export default Signup;