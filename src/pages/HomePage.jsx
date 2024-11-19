import { Deputat } from '../components/home/Deputat';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [selectedBtnTitle, setSelectedBtnTitle] = useState('Всі');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const handleBtnClick = (btnTitle, event) => {
        event.preventDefault();
        setSelectedBtnTitle(btnTitle);
        setFilteredData(data.filter(data => data.category.toLowerCase() === btnTitle.toLowerCase()));
    };

    useEffect(() => {
        axios.get(`http://localhost:3020/securityItems`)
            .then(response => {
                setData(response.data);
                setFilteredData(response.data)

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
        const filteredDeputies = data.filter(deputy => deputy.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredData(filteredDeputies);
    };

    if (!data) {
        return <div>Loading...</div>;
    }
    console.log(data)
    return (
        <div className='mx-auto max-w-[1280px] '>

            <h2 className='text-center font-medium text-[25px] mt-[50px] mb-[0px]'>Знайти депутата за адресою</h2>
            <label htmlFor="">
                <input
                    type='text'
                    placeholder='Введіть адресу депутата'
                    className='search-input mb-6 w-full h-[55px]'
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />

            </label>
            <h1 className='text-center font-medium text-[25px] mt-[50px] mb-[15px]'>або за фракцією</h1>
            <br />
            <div className='grid grid-cols-3 gap-5 mb-10 min-h-[]'>
                <button
                    type='button'
                    className={`btn-title min-h-[90px] ${selectedBtnTitle === 'ПРОПОЗИЦІЯ' ? 'active' : ''} active:bg-sky-700  focus:ring focus:ring-sky-900`}
                    onClick={(event) => handleBtnClick('ПРОПОЗИЦІЯ', event)}
                >
                    ПРОПОЗИЦІЯ
                </button>
                <button
                    type='button'
                    className={`btn-title min-h-[90px] ${selectedBtnTitle === 'За Україну, за Дніпро!' ? 'active' : ''} active:bg-sky-700  focus:ring focus:ring-sky-900`}
                    onClick={(event) => handleBtnClick('За Україну, за Дніпро!', event)}
                >
                    ЗА УКРАЇНУ! ЗА ДНІПРО!
                </button>
                <button
                    type='button'

                    className='btn-title min-h-[90px] active:bg-sky-700  focus:ring focus:ring-sky-900' onClick={(event) => handleBtnClick('ЄВРОПЕЙСЬКА СОЛІДАРНІСТЬ', event)}>
                    ЄВРОПЕЙСЬКА СОЛІДАРНІСТЬ
                </button>
                <button
                    type='button'
                    className='btn-title min-h-[90px] active:bg-sky-700  focus:ring focus:ring-sky-900' onClick={(event) => handleBtnClick('ГРОМАДЬСЬКА СИЛА', event)}>
                    ГРОМАДСЬКА СИЛА
                </button>
                <button
                    type='button'
                    className='btn-title min-h-[90px] active:bg-sky-700  focus:ring focus:ring-sky-900' onClick={(event) => handleBtnClick('БЛОК ВІЛКУЛА', event)}>
                    БЛОК ВІЛКУЛА «УКРАЇНСЬКА ПЕРСПЕКТИВА»
                </button>
                <button className='btn-title min-h-[90px] active:bg-sky-700  focus:ring focus:ring-sky-900' onClick={(event) => handleBtnClick('СЛУГА НАРОДУ', event)}>
                    СЛУГА НАРОДУ
                </button>

            </div>


            {filteredData.length > 0 ? <Swiper
                slidesPerView={4}
                grid={{
                    rows: 2,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination, Navigation]}
                navigation={
                    {
                        nextEl: '.next',
                    }
                }
                className="mySwiper place-content-start"
            >

                {filteredData
                    .map((item) => (
                        <SwiperSlide data-hash={item._id} key={item._id}>
                            <Deputat item={item} />
                            <div className='flex gap-4'>

                            </div>
                        </SwiperSlide>
                    ))}

            </Swiper> : null}
            <button className='next flex justify-center items-center ml-auto w-[200px]'>
                <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Arrow%201.png" alt="Arrow" className='absolute mt-[-40px] z-40 w-20' />
            </button>

            <div className="container">

            </div>
        </div>

    )


}

export default HomePage;