 import { useState, useRef, useEffect } from "react";
 import Layout from "@/layouts/Layout";
 import Input from "@/components/atoms/input/Input";
 import { useNavigate } from "react-router-dom";
 import validateEmail from "@/helpers/validateEmail";
 import validatePassword from "@/helpers/validatePassword";
 import { useDispatch, useSelector } from "react-redux";
 import { signin } from "@/redux/Slices/AuthSlice";


 function Login(){
    const {isLoggedIn} = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        handleInvalidEmail();
        handleInvalidPassword();
        const response = await dispatch(signin(loginForm));
        if(response?.payload?.data && response?.payload?.success === true){
            navigate('/dashboard');
        }

        resetForm();
    }

    const handleInvalidEmail = () => {
        if(!validateEmail(loginForm.email)) {
            emailRef.current.setInValid();
        }
    }

    const handleInvalidPassword = () => {
        if(!validatePassword(loginForm.password)) {
            passwordRef.current.setInValid();
        }   
    }

    const onChangeHandler = (e) => {
        const {id, value} = e.target;
        setLoginForm({...loginForm, [id]:value});
    }
    

    const resetForm = () => {
        setLoginForm({
            email: '',
            password: '',
        });
    }

    useEffect(()=>{
        if(isLoggedIn) {
            navigate('/dashboard');
        }
    },[])

    return(
       
        <div className="w-screen h-dvh relative">
        <div className="w-full h-full flex-center p-4">
            <div className="max-w-md w-full h-auto flex flex-col gap-8 items-center">
               <div className="w-full  flex flex-col gap-5 items-center">
                <h1 className="text-3xl text-white text-center font-heading">Login to your account</h1>
                <p className="font-subheading ">Donot have an account? <button className="btn btn-sm text-white btn-success" onClick={() => navigate('/signup')}>SIGN UP</button></p>
               </div>
               <form onSubmit={handleFormSubmit} className="w-full flex flex-col items-center  gap-8" noValidate>
                
                    <div className="w-full h-10">
                        <Input
                            id="email"
                            type="text"
                            placeholder="Email"
                            value={loginForm.email}
                            classess={"w-full h-full"}
                            onChangeHand={(e) => setLoginForm({...loginForm, email: e.target.value})}  
                            ref={emailRef}
                            onChangeHandler={onChangeHandler}
                            checkOnBlur={handleInvalidEmail}
                           
                        />
                    </div>

                    <div className="w-full h-10">
                        <Input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={loginForm.password}
                            ref={passwordRef}
                            classess={"w-full h-full"}
                            onChangeHandler={onChangeHandler}  
                            checkOnBlur={handleInvalidPassword}
                        />
                    </div>

                    <div className="w-full">
                        <input 
                            type="submit" 
                            placeholder="Submit"
                            className="w-full btn btn-md btn-accent text-white text-lg font-heading uppercase"    
                        />
                    </div>

               </form>

            </div>
        </div>
    
        </div>
       
       
    )
}

export default Login