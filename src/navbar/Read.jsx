import React from 'react';

function Read() {
  const algorithms = [
    {
      name: 'Bubble Sort',
      description: 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
      link: 'https://www.geeksforgeeks.org/bubble-sort-algorithm/'
    },
    {
      name: 'Selection Sort',
      description: 'Quick Sort is an efficient sorting algorithm that uses a divide-and-conquer approach to sort elements by partitioning the array into sub-arrays.',
      link: 'https://www.geeksforgeeks.org/selection-sort-algorithm-2/'
    },
    {
      name: 'Merge Sort',
      description: 'Merge Sort is a stable, comparison-based, divide-and-conquer sorting algorithm that divides the array into halves, sorts them, and then merges them back together.',
      link: 'https://www.geeksforgeeks.org/merge-sort/'
    },
    {
      name: 'Insertion Sort',
      description: 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
      link: 'https://www.geeksforgeeks.org/insertion-sort-algorithm/'
    },
    {
      name: 'Quick Sort',
      description: 'Quick Sort is an efficient sorting algorithm that uses a divide-and-conquer approach to sort elements by partitioning the array into sub-arrays.',
      link: 'https://www.geeksforgeeks.org/quick-sort-algorithm/'
    }
    // Add more algorithms as needed
  ];

  return (
    <div className="container mx-auto p-7">
      <h1 className="text-3xl font-bold mb-6 text-center">Read About Algorithms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {algorithms.map((algo, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
          >
            <h2 className="text-xl font-bold text-white mb-2">{algo.name}</h2>
            <p className="text-gray-300 mb-4">{algo.description}</p>
            <a href={algo.link} className="text-blue-500 hover:underline">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Read;