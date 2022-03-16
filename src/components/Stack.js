import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../content';

export default function Stack() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        background: '#eee',
      }}
    >
      <h1 className="mb-10 text-5xl font-bold font-dosis">Stack I Use</h1>
      <div>
        <div className="flex flex-wrap justify-center">
          {content.stack.tech.map((tech, index) => (
            <span
              key={index}
              className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 `}
            >
              <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
            </span>
          ))}
        </div>
      </div>
      <p className="inline-block w-11/12 mt-10 mb-10 text-xl text-center md:max-w-xl md:text-2xl font-dosis ">
        {content.stack.desc}.
      </p>
    </div>
  );
}
