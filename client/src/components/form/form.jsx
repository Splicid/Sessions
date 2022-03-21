import { useEffect, useState } from 'react';
import './form.css';
import Axios from 'axios';

const Form = () =>{
    const [name, setName] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [form, setForm] = useState("")
      const submitData = (e) => {
        Axios.post('http://localhost:3001/api/insert', {name: name, last: last, email: email})
        .then(response => {
            if (response.status === 200){
               console.log("Successful Post") 
               setName("")
               setLast("")
               setEmail("")
            }
          console.log(response.status);
        })
        .catch(err => {
            console.log(err)
        })
      }
    const emailValidation = () =>{
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)){
            setMessage("")
            textValid();
        }else if (!regEx.test(email) && email !== "") {
            setMessage("Email is Not Valid");
        }else {
            setMessage("");
        }
    }
    const textValid = () => {
        if (name === "" || last === "" || email === ""){
            setForm("Please fill all required fields")
        }else if (name !== "" || last !== "" || email !== ""){
            setForm("executed to database")
            submitData();
        }
    }
    return(
        <div className='container'>
            <h1 className='title'>Sign Up</h1>
            <form className='main-form' action="">
                <div className='child-form'>
                    <label> Enter Your First Name </label>
                    <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                    
                    <div className='child-form'>
                    <label> Enter Your Last Name </label>
                    <input 
                    type="text" 
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                    />
                    </div>

                    <div className='child-form'>
                    <label> Enter Your Email </label>
                    <input 
                    type="email" 
                    pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div className='child-form'>
                    <input type="button" onClick={emailValidation} value="Submit"/>
                    </div>
                    <p className='prompt'> {message || form} </p>
            </form>
        </div>
    )
}

export default Form;