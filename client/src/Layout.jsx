import React, { useEffect, useState, createContext} from 'react'
// import Modal from "react-modal";
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet, useNavigate} from 'react-router-dom'
import axiosInstance from "./utils/AxiosInstance";

export const CartContext = createContext();

function Layout() {

  const [cartItems, setCartItems] = useState([]);

  const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    //add to cart
    const addToCart = (item) => {
      setCartItems((prevItems) => [...prevItems, item]);
    };

    // Get User Info
    const getUserInfo = async () => {
        try{
            const response = await axiosInstance.get("/get-user");
            if(response.data && response.data.user){
                setUserInfo(response.data.user);

                // console.log(userInfo.fullName);
            }
        }
        catch (error){
            if(error.response.status == 401){
                localStorage.clear();
                navigate("/login");
            }
        }
        
    };

    

    useEffect(()=>{
        getUserInfo();
        return () => {};
    },[]);

  return (
    
    <CartContext.Provider value={{cartItems, addToCart}}>
      <Header userInfo={userInfo}/>
      <Outlet />
      <Footer />
    </CartContext.Provider>
      
    
  )
}

export default Layout