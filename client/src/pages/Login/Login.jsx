import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'
import { validateEmail } from '../../utils/Helper';
import axiosInstance from '../../utils/AxiosInstance';
function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();

        if(!validateEmail(email)){
            setError("Please enter a valid email address");
            return;
        }

        if(!password){
            setError("Please enter password");
            return;
        }
        setError("");

    //Login API CALL
    try{
        const response = await axiosInstance.post("/login", {
            email: email,
            password: password,
        });
        //Handle successful signUp response
        if(response.data && response.data.accessToken){
            localStorage.setItem("token", response.data.accessToken)
            navigate('/')

        }
    } catch (error) {
        //Handle signUp error
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
                Login
                </h1>

                <form 
                className='flex flex-col gap-4'
                onSubmit={handleLogin} >

                    <input type='text' 
                    placeholder='Email' 
                    className='input-box'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                    <PasswordInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                    
                    {/* if error than print  */}
                    {error && <p className='text-red-500 pb-1 text-md'>{error}</p>}

                    <button type='submit' 
                    className="bg-blue-600 p-2 rounded text-white active:bg-blue-700">
                    Login
                    </button>

                    <p>Not resgister yet?{" "}
                        <Link to={"/signup"} 
                        className='text-blue-600 underline'>
                        Create an Account
                        </Link>
                    </p>

                </form>

            </div>
        </div>
    </>
  )
}

export default Login