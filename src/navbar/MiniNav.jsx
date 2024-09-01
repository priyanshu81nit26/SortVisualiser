import React, { useState, useEffect, useRef } from 'react';
import Play from '@mui/icons-material/PlayCircleOutlineRounded';

function MiniNav({ onChangeAlgorithm, onChangeBarCount, onChangeSpeed, currentAlgorithm, currentBarCount, currentSpeed, onPlay }) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);

  const toggleMenu1 = () => setIsOpen1(!isOpen1);
  const toggleMenu2 = () => setIsOpen2(!isOpen2);
  const toggleMenu3 = () => setIsOpen3(!isOpen3);

  const handleAlgorithmSelect = (algorithm) => {
    onChangeAlgorithm(algorithm);
    setIsOpen1(false);
  };

  const handleItemCountChange = (count) => {
    onChangeBarCount(count);
    setIsOpen2(false);
  };

  const handleSpeedChange = (speedValue) => {
    onChangeSpeed(speedValue);
    setIsOpen3(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
      setIsOpen1(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsOpen2(false);
    }
    if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) {
      setIsOpen3(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="p-1 mt-20 top-0 z-50 bg-blue-200 rounded-full mx-auto max-w-2xl">
      <div className="container mx-auto flex justify-between items-center px-1 py-1 relative">
        
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center" ref={dropdownRef1}>
            <button onClick={toggleMenu1} className="text-black focus:outline-none bg-green-500 px-2 py-1 rounded-full">
              Algorithm: {currentAlgorithm}
            </button>
            {isOpen1 && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-green-400 px-6 py-3 rounded-full-b-3xl z-10">
                {['Bubble Sort', 'Merge Sort', 'Quick Sort', 'Insertion Sort', 'Selection Sort'].map((algorithm) => (
                  <div key={algorithm} onClick={() => handleAlgorithmSelect(algorithm)} className="block text-green-400 hover:text-blue-500 cursor-pointer">
                    {algorithm}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative flex items-center" ref={dropdownRef2}>
            <button onClick={toggleMenu2} className="text-black focus:outline-none bg-green-500 px-2 py-1 rounded-full">
              Size: {currentBarCount}
            </button>
            {isOpen2 && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-green-400 px-6 py-3 rounded-full-b-3xl z-10">
                {[10, 15, 20, 25, 30].map((count) => (
                  <div key={count} onClick={() => handleItemCountChange(count)} className="block text-green-400 hover:text-blue-500 cursor-pointer">
                    {count}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative flex items-center" ref={dropdownRef3}>
            
            {isOpen3 && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-green-400 px-6 py-3 rounded-full-b-3xl z-10">
                {[500, 400, 300, 200, 100].map((speedValue) => (
                  <div key={speedValue} onClick={() => handleSpeedChange(speedValue)} className="block text-green-400 hover:text-blue-500 cursor-pointer">
                    {speedValue / 100}x
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Control Panel Section */}
        <div className='flex items-center'>
          <button className='bg-green-500 text-white px-4 py-2 text-lg rounded hover:bg-green-600 rounded-full' onClick={onPlay}>
            <Play />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MiniNav;