import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { __AUTH } from './../Backend/Firebase'; // Ensure correct import
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {
    let initialRegisterData = {
        username: "",
        email: "",
        createpassword: "",
        confirmpassword: ""
    };

    let navigate = useNavigate();
    let [loading, setLoading] = useState(false);
    let [registerdata, setRegisterData] = useState(initialRegisterData);
    let [showPassword, setShowPassword] = useState(false);
    let [showConfirmPassword, setShowConfirmPassword] = useState(false); // Separate state for confirm password

    let { username, email, createpassword, confirmpassword } = registerdata;

    let handleChange = (event) => {
        let { name, value } = event.target;
        setRegisterData({ ...registerdata, [name]: value });
    };

    let validatePassword = (password) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (createpassword !== confirmpassword) {
            toast.error("Passwords do not match!", { duration: 4000 });
            setLoading(false);
            return;
        }

        if (!validatePassword(createpassword)) {
            toast.error("Password must be at least 8 characters, contain uppercase, lowercase, number, and a special character.", { duration: 5000 });
            setLoading(false);
            return;
        }

        try {
            let userDetails = await createUserWithEmailAndPassword(__AUTH, email, createpassword);
            if (userDetails.user) {
                await sendEmailVerification(userDetails.user);
                toast.success(`Successfully registered! Please verify your email.`, { duration: 5000 });
                setRegisterData(initialRegisterData);
                setTimeout(() => navigate("/login"), 1000);
            }
        } catch (err) {
            toast.error(err.message, { duration: 5000 });
        }
        setLoading(false);
    };

    return (
        <section className="w-full h-screen flex items-center justify-center bg-black text-white">
            <Toaster position="top-right" reverseOrder={false} />
            <article className="w-[450px] bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-neon-blue">
                <h2 className="text-3xl font-extrabold text-center text-white pb-4 border-b border-blue-700">Create an Account</h2>
                <form className="flex flex-col gap-5 pt-4" onSubmit={handleSubmit}>
                    <section className="flex flex-col">
                        <label className="text-lg">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            className="h-[45px] border border-gray-600 bg-gray-700 text-white px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                            value={username} 
                            onChange={handleChange} 
                            required 
                        />
                    </section>
                    <section className="flex flex-col">
                        <label className="text-lg">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="h-[45px] border border-gray-600 bg-gray-700 text-white px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                            value={email} 
                            onChange={handleChange} 
                            required 
                        />
                    </section>
                    <section className="flex flex-col relative">
                        <label className="text-lg">Password</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="createpassword" 
                            className="h-[45px] border border-gray-600 bg-gray-700 text-white px-4 pr-10 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                            value={createpassword} 
                            onChange={handleChange} 
                            required 
                        />
                        <span className="absolute right-4 top-[38px] cursor-pointer text-gray-400" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </span>
                    </section>
                    <section className="flex flex-col relative">
                        <label className="text-lg">Confirm Password</label>
                        <input 
                            type={showConfirmPassword ? "text" : "password"} 
                            name="confirmpassword" 
                            className="h-[45px] border border-gray-600 bg-gray-700 text-white px-4 pr-10 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                            value={confirmpassword} 
                            onChange={handleChange} 
                            required 
                        />
                        <span className="absolute right-4 top-[38px] cursor-pointer text-gray-400" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </span>
                    </section>
                    <button className="h-[50px] text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-400 disabled:opacity-50" disabled={loading}>
    {loading ? "Registering..." : "REGISTER"}
</button>

                </form>
            </article>
        </section>
    );
};

export default Register;
