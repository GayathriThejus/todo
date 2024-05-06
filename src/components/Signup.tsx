import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const style = {
    outerScreen: 'mx-auto bg-gradient-to-r from-purple-500 to-indigo-600 h-screen flex flex-cols justify-center items-center',
    box: 'w-[387px] h-[457px] shadow-xl bg-white rounded-md mx-auto',
    formContainer: 'p-8',
    input: 'w-full mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500',
    button: 'w-full bg-purple-300 text-white py-2 px-4 rounded-md hover:bg-indigo-600',
};

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify({ name, email, password }));
        setRedirect(true);
    };

    return (
        <div className="w-full mt-8"> 
       
            <div className={style.outerScreen}>
                <div className={style.box}>
                    <div className={style.formContainer}>
                        <div className='flex flex-col justify-center items-center text-center mb-4'>
                            <h1 className='text-black font-bold text-3xl mb-3'>T O D O</h1>
                            <p className='mb-7 text-xs text-indigo-700'>Your perfect task manager! </p>
                            <h2 className="text-lg font-semibold mb-4 text-purple-400">Signup</h2>
                        </div>
                        <form onSubmit={handleSignup}>
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className={style.input} required />
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={style.input} required />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={style.input} required />
                            <button type="submit" className={style.button}>Signup</button>
                        </form>
                        <hr className="my-4" />
                        <p className='text-xs text-gray-500 '>Already created an account or <Link to="/">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;