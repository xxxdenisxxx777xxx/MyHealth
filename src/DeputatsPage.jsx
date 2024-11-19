import App from './App';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, } from 'react-router-dom';
import { Deputat } from './components/home/Deputat';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DeputatsPage.css';
import Modal from './components/modalwind/Modalwind';





function DeputatsPage() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);


    const [formData, setFormData] = useState({
        date: '',
        time: '',
        surname: '',
        firstName: '',
        patronymic: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3020/createNoteItems', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...formData, deputy_id: id })
            });
            if (response.ok) {
                console.log('Данные на сервер успешно отправлены!')
                closeModal();
            } else {
                console.log('Данные не отправлены на сервер')
            }
        } catch (error) {
            console.log('Сетевая ошибка')
        }
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        axios.get(`http://localhost:3020/securityItems/${id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mx-auto max-w-[1280px]'>
            <div className='flex mt-11'>
                <img src={data.image} className='img-card border-2 rounded-3xl object-cover min-h-[400px]' tabIndex="0" alt={name} />
                <div className="ml-7">
                    <h1 className='font-medium text-3xl'>{data.name}</h1>
                    <div className='flex gap-3'>
                        <button type='button' className='brd-category mt-3 min-h-[43px] flex items-center justify-center'><span className='bg-gradient-to-r from-sky-600  to-blue-900 inline-block text-transparent bg-clip-text px-5'>{data.area}</span></button>
                        <button type='button' className='brd-category mt-3 min-h-[43px] flex items-center justify-center'><span className='bg-gradient-to-r from-sky-600  to-blue-900 inline-block text-transparent bg-clip-text px-5'>{data.category}</span></button>
                    </div>
                    <pre className='font-[500] mt-3 text-xl'>Біографія:</pre>
                    <p className='description text-sm whitespace-pre-wrap break-words'>{data.description}</p>


                </div>
            </div>
            <div className='info-deput flex flex-col sm:flex-row justify-between'>
                <div className='brd-category-info text-2xl mt-11 min-h-[300px] min-w-[45%] flex flex-col items-center justify-center'>
                    <div className='text-left'>
                        <h3 className='font-[500] text-left text-2xl'><span className='font-medium'>Графік прийому:</span></h3>
                        <h3 className='font-normal mt-3 text-xl'>{data.schedule}</h3>
                        <h3 className='font-normal mt-1 text-xl'>{data.address}</h3>
                        <button type="submit" className="block w-auto h-[55px] mt-10 rounded-xl bg-indigo-950 px-[55px] py-2.5 text-center text-lg font-sm text-white shadow-sm hover:bg-blue-900  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={openModal}>Записатись на прийом</button>
                    </div>
                </div>
                <div className='brd-category-info text-left mt-11 min-h-[300px] min-w-[45%] flex flex-col items-center justify-center'>
                    <div className='text-left'>
                        <h3 className=''><span className='font-[500] text-left text-2xl'>Контакти:</span></h3>
                        <p className='font-normal mt-3 text-bold'>{data.phone_number}</p>
                        <p className='font-normal mt-1'>email: {data.email}</p>
                        <div className='flex gap-4'>
                            <a href={data.instagram}><img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/inst.png' alt='alt7' className=' mt-10 w-[50px]'></img></a>
                            <a href={data.facebook}><img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/fb.png' alt='alt7' className='mt-10 w-[50px]'></img></a>
                            <a href={data.telegram}><img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/tg.png' alt='alt7' className='mt-10 w-[50px]'></img></a>
                        </div>
                    </div>

                </div>
            </div>

            <Modal isOpen={isOpen} onClose={closeModal}>
                <form onSubmit={handleSubmit}>
                    <h2 className='font-medium text-3xl text-center'>Запис на прийом</h2>
                    <div className='mdl-win mt-7'>
                        <div className='flex gap-10'>
                            <select name="date" className='brd-modal mt-3 min-h-[43px] flex w-full items-center justify-center text-slate-400' onChange={handleChange} value={formData.date}>
                                <option className="" value="option1">Оберіть дату</option>
                                <option className="text-black" value="19 квітня">19 квітня</option>
                                <option className="text-black" value="27 квітня">27 квітня</option>
                                <option className="text-black" value="2 травня">2 травня</option>
                                <option className="text-black" value="7 травня">7 травня</option>
                                <option className="text-black" value="14 травня">14 травня</option>
                                <option className="text-black" value="21 травня">21 травня</option>
                            </select>

                            <select name="time" className='brd-modal mt-3 min-h-[43px] flex w-full items-center justify-center text-slate-400' onChange={handleChange} value={formData.time}>
                                <option className='' value="час">Оберіть вільний час</option>
                                <option className='' value="12:10">10:10</option>
                                <option className='' value="14:45">11:40</option>
                                <option className='' value="15:55">13:15</option>
                                <option className='' value="14:45">14:45</option>
                                <option className='' value="15:55">15:55</option>
                            </select>

                        </div>
                        <div className='flex gap-4 mt-5'>
                            <input type="text" name="surname" className='brd-modal mt-3 min-h-[43px]' placeholder='Прізвище' onChange={handleChange} value={formData.surname} />
                            <input type="text" name="firstName" className='brd-modal mt-3 min-h-[43px]' placeholder='Ім`я' onChange={handleChange} value={formData.firstName} />
                            <input type="text" name="patronymic" className='brd-modal mt-3 min-h-[43px]' placeholder='По батькові' onChange={handleChange} value={formData.patronymic} />
                        </div>
                        <div className='flex gap-10 mt-5'>
                            <input type="text" name="email" className='brd-modal mt-3 min-h-[43px] w-full flex items-center justify-center' placeholder='Email' onChange={handleChange} value={formData.email} />
                            <input type="text" name="phoneNumber" className='brd-modal mt-3 min-h-[43px] w-full flex items-center justify-center' placeholder='Номер телефону' onChange={handleChange} value={formData.phoneNumber} />
                        </div>
                    </div>
                    <span className='mdl-push mt-7 min-h-[50px] w-full flex items-center justify-center'>Врахуйте, будь ласка, що у випадку запізнення Ваш візит буде скасовано або перенесено!</span>
                    <button type="submit" className="block mx-auto w-auto h-[55px] mt-10 rounded-xl bg-indigo-950 px-[55px] py-2.5 text-center text-lg font-sm text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Записатись на прийом</button>
                </form>
            </Modal>
        </div>



    );
}

export default DeputatsPage;

// value={selectedValue} onChange={handleChange}