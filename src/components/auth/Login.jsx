import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { __AUTH } from './../Backend/Firebase';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    let initialLoginData = {
        email: "",
        password: ""
    };

    let navigate = useNavigate();
    let [loading, setLoading] = useState(false);
    let [logindata, setLoginData] = useState(initialLoginData);
    let { email, password } = logindata;

    let handleChange = (event) => {
        let { name, value } = event.target;
        setLoginData({ ...logindata, [name]: value });
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            let userCredential = await signInWithEmailAndPassword(__AUTH, email, password);
            
            toast.success(`Welcome back! ✅\nLogged in as: ${userCredential.user.email}`, {
                duration: 4000,
                style: { background: '#4CAF50', color: 'white', whiteSpace: "pre-line" }
            });

            console.log("✅ User Logged In:", userCredential.user);
            setLoginData(initialLoginData);

            setTimeout(() => {
                navigate("/");
            }, 1000); 
        } catch (err) {
            console.error("🚨 Error in Login:", err);
            toast.error("Invalid email or password!", { duration: 4000, style: { background: '#ff4d4d', color: 'white' } });
        }

        setLoading(false);
    };

    return (
        <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-800">
            <Toaster position="top-right" reverseOrder={false} />
            <article className="w-[450px] bg-opacity-30 bg-gray-800 text-white shadow-xl backdrop-blur-md rounded-3xl p-8 border-2 border-blue-500">
                <h2 className="text-3xl font-extrabold text-center text-white pb-4 border-b border-gray-600">Login to Your Account</h2>
                <form className="flex flex-col gap-5 pt-4" onSubmit={handleSubmit}>
                    <section className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-medium text-gray-300">Email</label>
                        <input type="email" id="email" name="email" className="h-[45px] border border-gray-600 bg-gray-700 text-white px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" value={email} onChange={handleChange} required />
                    </section>
                    <section className="flex flex-col">
                        <label htmlFor="password" className="text-lg font-medium text-gray-300">Password</label>
                        <input type="password" id="password" name="password" className="h-[45px] border border-gray-600 bg-gray-700 text-white px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" value={password} onChange={handleChange} required />
                    </section>
                    <button className="h-[50px] text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-md hover:opacity-90 transition-all duration-300">
                        {loading ? "Logging in..." : "LOGIN"}
                    </button>
                    <div className="flex flex-col items-center gap-2 mt-3">
                        <p className="text-gray-300">Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Sign up</Link></p>
                        <p className="text-gray-300"><Link to="/forgot-password" className="text-red-400 hover:underline">Forgot password?</Link></p>
                    </div>
                </form>
            </article>
        </section>
    );
};

export default Login;
