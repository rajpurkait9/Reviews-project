import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, text, job, image } = people[index];

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return numberCheck(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return numberCheck(newIndex);
    });
  };
  const randomPerson = () => {
    setIndex(Math.floor(Math.random() * people.length));
  };
  let numberCheck = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return (number = people.length - 1);
    }
    return number;
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
      </div>
      <h3 className='author'>{name}</h3>
      <h4 className='job'>{job}</h4>
      <p className='info'>{text}</p>
      <div className='cointainer-btn'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        random-people
      </button>
    </article>
  );
};

export default Review;
