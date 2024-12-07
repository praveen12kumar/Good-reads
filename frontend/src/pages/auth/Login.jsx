 import { useState } from "react";
 import Input from "@/components/atoms/input/Input";
 import { useNavigate } from "react-router-dom";
 function Login(){
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

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
                            onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}  
                            checkOnBlur={false}
                            autoComplete="off"
                        />
                    </div>

                    <div className="w-full h-10">
                        <Input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={loginForm.password}
                            classess={"w-full h-full"}
                            onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}  
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

export default Login