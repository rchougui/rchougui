import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Contact() {
  const animated = false
  return (
    <div
      className="flex items-center justify-center min-h-screen "
      id="mycontact"
    >
      <div
        style={{
          minHeight: '50vh',
          background: '#091C29',
        }}
        className="flex flex-col-reverse items-center justify-around w-full shadow-2xl md:w-4/5 md:rounded-xl md:flex-row"
      >
        <LazyLoadImage
          effect="blur"
          src={content.contact.img}
          placeholderSrc={content.contact.imgPlaceholder}
          alt="profile"
          width="300px"
          className="mx-auto mt-10 ease-in-out transtion duration-2000"
        />
        <div className="w-4/5 mt-5 font-dosis md:w-2/5 transtion duration-2000">
          <h1
            className={` transform transition duration-3000 text-white text-5xl font-bold`}
          >
            {content.contact.title}
          </h1>
          <p
            className={` transform transition duration-3000 text-white text-2xl`}
          >
            {content.contact.desc}
          </p>
          <div
            className={`flex  transform transition duration-3000 `}
          >
            {content.contact.socials.map((social, index) => {
              return (
                <a href="mailto:chougui.riadh@gmail.com">
                  <LazyLoadImage
                    effect="blur"
                    className="m-2"
                    width="50px"
                    key={index}
                    src={social.img}
                    alt={social.alt}
                  /></a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
