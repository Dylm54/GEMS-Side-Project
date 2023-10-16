import '../styles/login.css';
import { Tabs, Tab, Card, CardBody, Checkbox } from "@nextui-org/react";
import { useState } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { AiFillExclamationCircle } from 'react-icons/ai';
import axios from 'axios';

export const Login = () => {
    const [selected, setSelected] = useState("username");
    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [login, setLogin] = useState({
        username: "",
        password: "",
    });
    const loginURL = "http://gemsbackend.zetgo.in/api/auth/login";

    const auth = async () => {
        try {
            const response = await axios.post(loginURL, login)
            const data = await response.data.token
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 7);
            document.cookie = `token=${data}; expires=${expirationDate.toUTCString()};`;
            window.location.href = '/'
        } catch (err) {
            console.log(err)
            setErrorMessage('Wrong password or username.')
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setLogin({
            ...login,
            [e.target.name]: value,
        });
    };

    const handleUsername = (e) => {
        e.preventDefault();
        setSelected("password")
    }

    const handlePassword = async (e) => {
        e.preventDefault();
        auth()
    }

    return (
        <div className="flex justify-center items-center w-full h-screen bg-white">
            <div className="flex flex-col w-full ">
                <Card className='!bg-white !shadow-none'>
                    <CardBody className="overflow-hidden">
                        <Tabs
                            aria-label="Tabs form"
                            selectedKey={selected}
                            onSelectionChange={setSelected}
                            className='hidden'
                        >
                            <Tab key="username" title="Login" className='flex justify-center flex-col items-center'>
                                <div className="flex border-0 sm:border border-solid border-[#dadce0] bg-white w-[450px] h-[500px] rounded-lg px-[60px] sm:px-[40px] pt-0 sm:pt-[48px] pb-[36px] flex-col">
                                    <div className="flex flex-col w-full items-center">
                                        <svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g id="qaEJec"><path fill="#ea4335" d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"></path></g><g id="YGlOvc"><path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path></g><g id="BWfIk"><path fill="#4285f4" d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"></path></g><g id="e6m3fd"><path fill="#fbbc05" d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"></path></g><g id="vbkDmc"><path fill="#ea4335" d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"></path></g><g id="idEJde"><path fill="#4285f4" d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"></path></g></svg>
                                        <div className="flex flex-col align-center justify-center w-full">
                                            <h1 className="text-black font-normal text-[24px] pt-[16px] text-center">
                                                <span>Sign in</span>
                                            </h1>
                                            <div className="pt-2 text-center mb-9">
                                                <span className="text-black">Use your Google Account</span>
                                            </div>
                                            <form onSubmit={handleUsername}>
                                                <div className="relative">
                                                    <input required name='username' id='username' type="text" onChange={handleChange} className="p-3 bg-white w-full h-14 border border-solid border-[#dadce0] text-black rounded placeholder:text-[#5F6367] outline-0 focus:border-[#1A73E7] focus:border-2 peer transition-colors" />
                                                    <label htmlFor="username" className='absolute left-3 top-[0.95rem] cursor-text peer-focus:text-xs peer-valid:text-xs peer-valid:-top-5 peer-focus:-top-5 text-[#5F6367] peer-focus:text-[#1A73E7]  transition-all'>Email or phone</label>
                                                    <div className='pt-2'>
                                                        <p className='text-[#1A73E7] font-semibold text-sm'>Forgot email?</p>
                                                    </div>
                                                    <div className='mt-[2.5rem]'>
                                                        <div className='text-sm text-[#5F6367]'>Not your computer? Use Guest mode to sign in privately. <a href="" className='text-[#1A73E7] font-semibold text-sm' target="_blank" aria-label="Learn more about using Guest mode">Learn more</a></div>
                                                    </div>
                                                    <div className='mt-[2.5rem] flex flex-row justify-between'>
                                                        <div className='text-[#1A73E7] text-sm tracking-wide'>Create account</div>
                                                        <button type='submit' className='h-9 bg-[#1A73E7] hover:bg-[#2060B9] w-20 rounded text-sm'>Next</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col sm:flex-row w-[450px] justify-between text-[#3C4043] mt-4 gap-6 pl-16 sm:pl-0 md:gap-0'>
                                    <div className='flex flex-row gap-9 items-center'>
                                        <span className='text-xs'>English (United States)</span>
                                        <RiArrowDownSFill size={20} />
                                    </div>
                                    <div className='flex flex-row gap-9 items-center'>
                                        <span className='text-xs'>Help</span>
                                        <span className='text-xs'>Privacy</span>
                                        <span className='text-xs'>Terms</span>
                                    </div>
                                </div>
                            </Tab>
                            <Tab key="password" title="Sign up" className='flex justify-center flex-col items-center'>
                                <div className="flex border-0 sm:border border-solid border-[#dadce0] bg-white w-[450px] h-[500px] rounded-lg px-[60px] sm:px-[40px] pt-0 sm:pt-[48px] pb-[36px] flex-col">
                                    <div className="flex flex-col w-full items-center">
                                        <svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g id="qaEJec"><path fill="#ea4335" d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"></path></g><g id="YGlOvc"><path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path></g><g id="BWfIk"><path fill="#4285f4" d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"></path></g><g id="e6m3fd"><path fill="#fbbc05" d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"></path></g><g id="vbkDmc"><path fill="#ea4335" d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"></path></g><g id="idEJde"><path fill="#4285f4" d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"></path></g></svg>
                                        <div className="flex flex-col items-center justify-center w-full">
                                            <h1 className="text-black font-normal text-[24px] pt-[16px] text-center">
                                                <span>Welcome</span>
                                            </h1>
                                            <div className="mt-2 text-center mb-9 border border-solid border-[#dadce0] rounded-2xl w-fit flex flex-row py-1 px-2 gap-1 ">
                                                <BiUserCircle fill='black' size={20} />
                                                <span className="text-[#3C4043] text-sm font-semibold">{login.username}</span>
                                            </div>
                                            <form onSubmit={handlePassword} className='w-full'>
                                                <div className="relative">
                                                    <input required name='password' id='password' onChange={handleChange} type={visible ? "text" : "password"} className="p-3 bg-white w-full h-14 border border-solid border-[#dadce0] text-black rounded placeholder:text-[#5F6367] outline-0 focus:border-[#1A73E7] focus:border-2 peer transition-colors" />
                                                    <label htmlFor="password" className='absolute left-3 top-[0.95rem] cursor-text peer-focus:text-xs peer-valid:text-xs peer-valid:-top-5 peer-focus:-top-5 text-[#5F6367] peer-focus:text-[#1A73E7]  transition-all'>Enter your password</label>
                                                    <div
                                                        className='text-xs mt-1 text-[#D93025] flex flex-row items-center gap-2'
                                                        style={{ display: errorMessage ? 'flex' : 'none' }}
                                                    >
                                                        <AiFillExclamationCircle fill='#D93025' />
                                                        {errorMessage}
                                                    </div>
                                                    <div className='pt-3 flex flex-row gap-3'>
                                                        <Checkbox onClick={() => setVisible(!visible)} radius="none" className='!rounded-sm'></Checkbox>
                                                        <span className='text-black text-sm'>Show password</span>
                                                    </div>
                                                    <div className='mt-14 flex flex-row justify-between'>
                                                        <div className='text-[#1A73E7] text-sm tracking-wide flex items-center'>Forgot password?</div>
                                                        <button type='submit' className='h-9 bg-[#1A73E7] hover:bg-[#2060B9] w-20 rounded text-sm'>Next</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col sm:flex-row w-[450px] justify-between text-[#3C4043] mt-4 gap-6 pl-16 sm:pl-0 md:gap-0'>
                                    <div className='flex flex-row gap-9 items-center'>
                                        <span className='text-xs'>English (United States)</span>
                                        <RiArrowDownSFill size={20} />
                                    </div>
                                    <div className='flex flex-row gap-9 items-center'>
                                        <span className='text-xs'>Help</span>
                                        <span className='text-xs'>Privacy</span>
                                        <span className='text-xs'>Terms</span>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}