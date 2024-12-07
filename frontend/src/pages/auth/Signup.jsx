import { useRef, useState } from "react";
import Input from "@/components/atoms/input/Input";
import { useNavigate } from "react-router-dom";

function Signup(){
    const navigate = useNavigate();
    const [signupForm, setSignupForm] = useState({
        username: '',
        email: '',
        password: '',
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
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
                                classes={"w-full h-full text-slate-800 font-para tracking-wide"}
                                onChange={(e) => setSignupForm({...signupForm, username: e.target.value})}  
                                checkOnBlur={false}
                                autoComplete="off"
                            />
                        </div>

                        <div className="w-full h-10">
                            <Input
                                id="email"
                                type="text"
                                placeholder="Email"
                                value={signupForm.email}
                                classess={"w-full h-full"}
                                onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}  
                                checkOnBlur={false}
                                autoComplete="off"
                            />
                        </div>

                        <div className="w-full h-10">
                            <Input
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={signupForm.password}
                                classess={"w-full h-full"}
                                onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}  
                                checkOnBlur={false}
                                autoComplete="off"
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