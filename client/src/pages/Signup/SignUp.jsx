import React, { useState } from 'react'
import { validateEmail } from '../../utils/Helper';
import PasswordInput from '../../components/Input/PasswordInput'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/AxiosInstance';

function SignUp() {
  const[name, setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] = useState(null);

  const navigate = useNavigate();

  const handlesignup = async(e) => {
    e.preventDefault();
    
    if(!name){
      setError("Please enter your name");
      return;
    }
    if(!validateEmail(email)){
      setError("Please enter valid email address");
      return;
    }
    if(!password){
      setError("Please enter the password");
      return;
    }

    setError("");
    
    // SignUp API cal
    try{
      const response = await axiosInstance.post("/create-account", {
          fullName: name,
          email: email,
          password: password,
      });
      //Handle successful registration response
      if(response.data && response.data.error){
          setError(response.data.message);
          return
      }

      if(response.data && response.data.accessToken){
        localStorage.setItem("token",response.data.accessToken)
        navigate("/")
      }

  } catch (error) {
      //Handle Login error
      if(error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
      }else {
          setError("An unexpected error occurred. Please try again.");
      }

  }

  };

  return (
    <>
    <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col gap-4 p-4 border rounded w-1/4'>

                <h1 className='text-xl font-semibold'>
                SignUp
                </h1>

                <form 
                className='flex flex-col gap-4'
                onSubmit={handlesignup} >

                    <input type='text' 
                    placeholder='Name' 
                    className='input-box'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <input type='text' 
                    placeholder='abc@gmail.com' 
                    className='input-box'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <PasswordInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                    {/* if error than print  */}
                    {error && <p className='text-red-500 pb-1 text-md'>{error}</p>}

                    <button type='submit' 
                    className="bg-blue-600 p-2 rounded text-white active:bg-blue-700">
                    Create Account
                    </button>

                    <p>Already have account ?{" "}
                        <Link to={"/login"} 
                        className='text-blue-600 underline'>
                        Login
                        </Link>
                    </p>

                </form>
            </div>
    </div>
    </>
  )
}

export default SignUp