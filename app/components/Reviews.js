"use client"

import { useState } from 'react';
import Image from 'next/image';

const reviews = [
  // Replace with your actual reviews
  { id: 1, title: 'Amazing Team Event! 1', text: 'Our team had a fantastic time, the activities were engaging and brought us all closer together.', person: 'Alex Johnson', imgUrl: 'https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=' },
  { id: 2, title: 'Amazing Team Event! 2', text: 'Our team had a fantastic time, the activities were engaging and brought us all closer together.', person: 'Alex Johnson', imgUrl: 'https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=' },
  { id: 3, title: 'Amazing Team Event! 3', text: 'Our team had a fantastic time, the activities were engaging and brought us all closer together.', person: 'Alex Johnson', imgUrl: 'https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=' },
  { id: 4, title: 'Amazing Team Event! 4', text: 'Our team had a fantastic time, the activities were engaging and brought us all closer together.', person: 'Alex Johnson', imgUrl: 'https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=' },
];

export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Calculate the correct translateX value
  const calculateTranslateX = () => {
    return `translateX(-${currentReviewIndex * 100}%)`;
  };

  // Inline styles for the review slider
  const sliderStyles = {
    transform: calculateTranslateX(),
    transition: 'transform 0.5s ease-out',
  };

  return (
    <div className="bg-white w-full flex justify-center items-center p-20 overflow-hidden" style={{ height: '650px', position: 'relative' }}>
        {/*PC buttons*/}
        <button className="hidden md:flex bg-gray-200 hover:bg-gray-300 absolute transition-transform duration-300 hover:scale-110" onClick={prevReview} style={{ left: '10%', zIndex: '30', width: '70px', height: '70px', borderColor: "lightgray", borderWidth: "2px", borderRadius: '35px', alignItems: 'center', justifyContent: 'center' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
      </button>
      <button className="hidden md:flex bg-gray-200 hover:bg-gray-300 absolute transition-transform duration-300 hover:scale-110" onClick={nextReview} style={{ right: '10%', zIndex: '30', width: '70px', height: '70px', borderColor: "lightgray", borderWidth: "2px", borderRadius: '35px', alignItems: 'center', justifyContent: 'center' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
      </button>
      {/*Mobile Buttons*/}
      <button className="md:hidden bg-gray-200 hover:bg-gray-300 absolute transition-transform duration-300 hover:scale-110" onClick={prevReview} style={{ left: '10%', bottom: '2%', zIndex: '30', width: '70px', height: '70px', borderColor: "lightgray", borderWidth: "2px", borderRadius: '35px', alignItems: 'center', justifyContent: 'center' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
      </button>
      <button className="md:hidden bg-gray-200 hover:bg-gray-300 absolute transition-transform duration-300 hover:scale-110" onClick={nextReview} style={{ right: '10%', bottom: '2%', zIndex: '30', width: '70px', height: '70px', borderColor: "lightgray", borderWidth: "2px", borderRadius: '35px', alignItems: 'center', justifyContent: 'center' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ml-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
      </button>
      {/* Mobile review slider */}
      <div className="md:hidden w-full">
        <div className="flex" style={sliderStyles}>
          {reviews.map((review, index) => (
            <div key={review.id} className={`flex items-center justify-center transition-opacity duration-500 ${index === currentReviewIndex ? 'opacity-100' : 'opacity-0'}`} style={{ width: '100%', flexShrink: 0 }}>
              <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden flex-col p-4 text-center">
                <h2 className="text-xl font-semibold text-blue-600">{review.title}</h2>
                <p className="text-md text-gray-700">{review.text}</p>
                <p className="text-lg font-medium text-blue-600">{review.person}</p>
                <Image src={review.imgUrl} alt="Review image" width={400} height={400} objectFit="cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

<div className="relative hidden md:block" style={{ width: '1200px', height: '500px', overflow: 'hidden' }}>
    {/* This div is only visible on PC */}
    <div className="absolute flex transition-transform duration-500" style={{ transform: `translateX(${-1200 * currentReviewIndex}px)` }}>
        {reviews.map((review, index) => (
        <div key={review.id} className={`flex items-center justify-center p-10 transition-opacity duration-500 ${index === currentReviewIndex ? 'opacity-100' : 'opacity-0'}`} style={{ minWidth: '1200px', height: '500px' }}>
            <div className="flex w-full h-full bg-blue-50 rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col justify-between w-3/5 p-8 text-left">
                <h2 className="text-2xl font-semibold text-blue-600">{review.title}</h2>
                <p className="text-md text-gray-700">{review.text}</p>
                <p className="text-lg font-medium text-blue-600">{review.person}</p>
            </div>
            <div className="w-2/5">
                <Image src={review.imgUrl} alt="Review image" width={400} height={400} objectFit="cover" className="h-full w-full" />
            </div>
            </div>
        </div>
        ))}
    </div>
</div>

    </div>
  );
}