import React from 'react';
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/grid';
import { MainLayout } from './components/layouts/MainLayout';
import DataList from './components/UI/DataList'
import { deputies } from './utils/deputies';
import { Deputat } from './components/home/Deputat';

function Lend() {
  return (
    <MainLayout>
      <h2 className='text-center font-medium text-[25px] mt-[50px] mb-[0px]'>Знайти депутата за адресою</h2>
      <label htmlFor="">
      <input
        type='text'
        placeholder='Введіть імʼя депутата'
        className='search-input mb-6 w-full h-[55px]'
      />
      <i className="fas fa-search"><img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Group.png" className='img-sch' alt="" /></i>
      </label>

      {/* <div class="search-container">
        <input
          type='text'
          placeholder='Введіть імʼя депутата'
          className='search-input'
        />
        
      </div> */}
      <h1 className='text-center font-medium text-[25px] mt-[50px] mb-[15px]'>або за фракцією</h1>
      <br />
      <div className='grid grid-cols-3 gap-5 mb-10 '>
        <button className='btn-title min-h-[90px]'>ПРОПОЗИЦІЯ</button>
        <button className='btn-title min-h-[90px]'>ЗА УКРАЇНУ! ЗА ДНІПРО!</button>
        <button className='btn-title min-h-[90px]'>ЄВРОПЕЙСЬКА СОЛІДАРНІСТЬ</button>
        <button className='btn-title min-h-[90px]'>ГРОМАДСЬКА СИЛА</button>
        <button className='btn-title min-h-[90px]'>БЛОК ВІЛКУЛА «УКРАЇНСЬКА ПЕРСПЕКТИВА»</button>
        <button className='btn-title min-h-[90px]'>СЛУГА НАРОДУ</button>
      </div>





      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation]}
        navigation={
          {
            nextEl: '.next',
            prevEl: '.prev',
          }
        }
        className="mySwiper place-content-start"

      >

        {deputies.map(item => <SwiperSlide data-hash={item.id} key={item.id}><Deputat item={item} /></SwiperSlide>)}



      </Swiper>
      <button className='next flex justify-center items-center ml-auto w-[200px]'>
      <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Arrow%201.png" alt="Arrow" className='absolute mt-[-40px] z-40 w-20' />
      </button>
    </MainLayout>

  );
}

export default Lend;