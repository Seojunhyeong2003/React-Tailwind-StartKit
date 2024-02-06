import React, { useState } from 'react';
import tailwindLogo from '../assets/logo/tailwind.svg';
import viteLogo from '/vite.svg';
import reactLogo from '../assets/logo/react.svg';
import '../styles/logo.css';
import '../styles/calculator.css';

const StartComponents = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <section className='flex flex-col justify-center items-center space-y-10'>
            <div className='flex flex-row space-x-8 mb-8'>
                <img className='w-20 logo tailwind-logo cursor-pointer' src={tailwindLogo} alt="😧 Tailwind Logo Not Found!"/>
                <img className='w-20 logo vite-logo cursor-pointer' src={viteLogo} alt="😧 Vite Logo Not Found!"/>
                <img className='w-20 logo react-logo cursor-pointer' src={reactLogo} alt="😧 React Logo Not Found!"/>
            </div>
            {/* <p className="text-3xl font-semibold text-white font-nanum">Project Start with tailwind!</p> */}
            <div className='space-y-7'>
                <div className='w-full flex relative'>
                    <label 
                        className={`absolute top-0 left-0 w-full text-center transition-all duration-200 ${isFocused || inputValue ? 'text-lg -top-8 text-[#9790f7]' : 'text-sm top-3.5 text-[#aaa]'}`}>
                            Number
                    </label>
                    <input 
                        className={`draggable z-10 custom-input w-full border-b text-right text-white bg-transparent outline-none transition-all duration-200 px-2 py-3 ${isFocused ? 'text-[#9790f7]' : ''}`}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        type="text" />
                </div>
                <div className='w-full border rounded-md py-2'>
                    <p className='text-white text-right px-4'>{count}</p>
                </div>
                <div className='flex flex-row space-x-4'>
                    <button onClick={() => increase()} className='border rounded-md px-8 py-2'>
                        <p className='text-white text-lg font-nanum'>증가</p>
                    </button>
                    <button onClick={() => decrease()} className='border rounded-md px-8 py-2'>
                        <p className='text-white text-lg font-nanum'>감소</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

function HelloWorldComponents() {
    return <div>Hello World!!</div>
}

export default {StartComponents, HelloWorldComponents}