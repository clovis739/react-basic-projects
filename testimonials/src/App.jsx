import { useState } from 'react'

import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
    {
      quote: "i try to take better react classes every days but to know avail!",
      author: "Clovis Tycriz",
    },
    {
      quote: "When everything goes back to normal i will become that great guy i use to be ",
      author: "Munoh Gushi",
    },
    {
      quote: "Times are hard for me, i don't know why but i know it will get better tommorw by His grace !",
      author: "Celes Money",
    },
  ];


  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length -1)% testimonials.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex(
      (currentIndex +1)% testimonials.length
    );
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
{testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
      {testimonials[currentIndex].author}

      </div>
          <div className="testimonials-nav">
            <button onClick={handlePrevClick}>
              Prev
            </button>
            <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  )
}

export default App
