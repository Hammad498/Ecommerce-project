import { useState } from "react"
import { BiArrowBack } from "react-icons/bi";


const Shipping = () => {

    const[shippingInfo,setShippingInfo]=useState({
        address:'',
        city:'',
        state:'',
        country:'',
        pinCode:'',
    });

    const changeHandler=()=>{};


  return <div className="shipping">
    <button><BiArrowBack/></button>

    <form >
        <h1>SHIPPING ADDRESS</h1>

        <input type="text" placeholder="Address" name="address" value={shippingInfo.address} />
    </form>



  </div>
}

export default Shipping
