import { useRef, useState } from "react";
import Input from "@/components/atoms/input/Input";
import { useNavigate } from "react-router-dom";
import validateEmail from "@/helpers/validateEmail";
import validatePassword from "@/helpers/validatePassword";
import { useDispatch } from "react-redux";
import { signup } from "@/redux/Slices/AuthSlice";


function Signup(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signupForm, setSignupForm] = useState({
        username: '',
        email: '',
        password: '',
    });
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        handleInvalidEmail();
        handleInvalidPassword();

        const response = await dispatch(signup(signupForm));
        console.log(response);
        if(response?.payload?.data){
            navigate('/login');
        }

        resetForm();
    }

    const handleInvalidEmail = () => {
        if(!validateEmail(signupForm.email)) {
            emailRef.current.setInValid();
        }
    }

    const handleInvalidPassword = () => {
        if(!validatePassword(signupForm.password)) {
            passwordRef.current.setInValid();
        }   
    }

    const handleInvalidUsername = ()=>{
        if(signupForm.username.length < 3){
            usernameRef.current.setInValid();
        }
    }

    const onChangeHandler = (e) => {
        const {id, value} = e.target;
        setSignupForm({...signupForm, [id]:value});
    }

    const resetForm = () => {
        setSignupForm({
            username: '',
            email: '',
            password: '',
        });
    }

    



    return (
        <div className="w-screen h-dvh relative">
            <div className="w-full h-full flex-center p-4">
                <div className="max-w-md w-full h-auto flex flex-col gap-8 items-center">
                   <div className="w-full  flex flex-col gap-5 items-center">
                    <h1 className="text-3xl text-white text-center font-heading">Create a new Account</h1>
                    <p className="font-subheading">Already have an account? <button className="btn btn-sm text-white btn-success" onClick={() => navigate('/login')}>Login</button></p>
                   </div>
                   <form onSubmit={handleFormSubmit} className="w-full flex flex-col items-center  gap-8" noValidate>
                        <div className="w-full h-10 ">
                            <Input
                                id="username"
                                type="text"
                                placeholder="Username"
                                value={signupForm.username}
                                classes={"w-full h-full"}
                                ref={usernameRef}
                                onChangeHandler={onChangeHandler}
                                checkOnBlur={handleInvalidUsername}  
                            />
                        </div>

                        <div className="w-full h-10">
                            <Input
                                id="email"
                                type="text"
                                placeholder="Email"
                                value={signupForm.email}
                                classess={"w-full h-full"}
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
                                value={signupForm.password}
                                classess={"w-full h-full "}
                                ref={passwordRef}
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

export default Signup;