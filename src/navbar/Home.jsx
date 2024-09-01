import React from 'react';
import logo from '../assets/react.svg';
import video from '../assets/Screen Recording 2024-09-01 145133.mp4'


const Home = () => {
  const algorithms = [
    {
      name: 'Bubble Sort',
      description: 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
      link: 'https://www.geeksforgeeks.org/bubble-sort-algorithm/',
      video: 'https://www.example.com/bubble-sort-video.mp4', // Replace with actual video URL
    },
    {
      name: 'Selection Sort',
      description: 'Selection Sort is an efficient sorting algorithm that uses a divide-and-conquer approach to sort elements by partitioning the array into sub-arrays.',
      link: 'https://www.geeksforgeeks.org/selection-sort-algorithm-2/',
      video: 'https://www.example.com/selection-sort-video.mp4', // Replace with actual video URL
    },
    {
      name: 'Merge Sort',
      description: 'Merge Sort is a stable, comparison-based, divide-and-conquer sorting algorithm that divides the array into halves, sorts them, and then merges them back together.',
      link: 'https://www.geeksforgeeks.org/merge-sort/',
      video: 'https://www.example.com/merge-sort-video.mp4', // Replace with actual video URL
    },
    {
      name: 'Insertion Sort',
      description: 'Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.',
      link: 'https://www.geeksforgeeks.org/insertion-sort-algorithm/',
      video: 'https://www.example.com/insertion-sort-video.mp4', // Replace with actual video URL
    },
    {
      name: 'Quick Sort',
      description: 'Quick Sort is an efficient sorting algorithm that uses a divide-and-conquer approach to sort elements by partitioning the array into sub-arrays.',
      link: 'https://www.geeksforgeeks.org/quick-sort-algorithm/',
      video: 'https://www.example.com/quick-sort-video.mp4', // Replace with actual video URL
    }
  ];

  return (
    <>
      <div className="flex flex-col items-center bg-gray-900 text-blue-900 min-h-screen p-8">
      <div className="flex flex-col items-center mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">The ALGO VISUALISER</h1>
          <p className="mb-6">Built to make your visualisation more better</p>
        </div>
      </div>

      {/* Algorithms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {algorithms.map((algo, index) => (
          <div key={index} className="flex flex-col items-center bg-white rounded-lg p-4 transition-transform hover:scale-105">
            <h2 className="font-bold text-lg mb-2">{algo.name}</h2>
            <p className="mb-2">{algo.description}</p>
            <a href={algo.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-2">Learn More</a>
            {/* Video Player */}
            <div className="w-full h-48 overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default Home;