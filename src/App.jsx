import React, { } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';
import AppRoute from './Routes/AppRoute';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {


  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='w-full mx-auto flex-1 my-6 max-w-screen-xl px-2.5'>
        <AppRoute />
      </main>
      <Footer />
    </div>
  );
}

export default App;
