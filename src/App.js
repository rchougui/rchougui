import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      {/* <Work /> */}
      <Stack />
      <Contact />
      <div className='w-4/5 mx-auto text-center font-dosis md:w-2/5 transtion duration-2000'><p>This site is owned and operated by Riadh chougui.</p></div>

    </>
  );
}

export default App;
