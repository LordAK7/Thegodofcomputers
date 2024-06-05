import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Developer', 'Programmer', 'Fullstack Dev'];
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        const word = words[wordIndex];
        if (typedText.length < word.length) {
          setTypedText((prevTypedText) => prevTypedText + word[typedText.length]);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            let tempTypedText = typedText;
            const backspaceInterval = setInterval(() => {
              if (tempTypedText.length === 0) {
                clearInterval(backspaceInterval);
                setIsTyping(true);
                setTypedText('');
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
              } else {
                tempTypedText = tempTypedText.slice(0, -1);
                setTypedText(tempTypedText);
              }
            }, 100);
          }, 1000);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [wordIndex, typedText, isTyping]);

  return (
    <div name='home' className='w-full h-screen bg-[#000000]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ffffff] text-sm sm:text-base'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-7xl font-bold text-[#B0CDF1]'>
          ADITYA
        </h1>
        <h2 className='text-3xl sm:text-7xl font-bold text-slate text-[#E8E6E3]'>
          I'm a {typedText}
        </h2>
        <p className='text-[#ffffff] py-4 max-w-[700px] text-xs sm:text-sm'>
          My name is Aditya. I am a 15-year-old enthusiast passionate about coding, development, and leveraging my extensive computer skills to solve real-world problems. I also have a keen interest in building custom PCs.
        </p>
        {/* <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#B0CDF1] hover:text-black hover:border-white'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
