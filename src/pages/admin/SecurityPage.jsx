import './SecurityPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AdminLayout } from '../../components/layouts/AdminLayout';

function SecurityPage() {
    const [securityItems, setSecurityItems] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        description: '',
        image: '',
        instagram: '',
        facebook: '',
        telegram: '',
        schedule: '',
        phone_number: '',
        email: '',
        address: '',
        area: ''
    });

    const [selectedItemId, setSelectedItemId] = useState(null);
    const [editedItem, setEditedItem] = useState({
        name: '',
        category: '',
        description: '',
        image: '',
        instagram: '',
        facebook: '',
        telegram: '',
        schedule: '',
        phone_number: '',
        email: '',
        address: '',
        area: ''
    });

    useEffect(() => {
        fetchSecurityItems();
    }, []);

    const fetchSecurityItems = async () => {
        try {
            const response = await axios.get('http://localhost:3020/securityItems');
            setSecurityItems(response.data);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    };

    const handleCreateItem = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3020/createSecurityItems', formData);
            setFormData({
                name: '',
                category: '',
                description: '',
                image: '',
                instagram: '',
                facebook: '',
                telegram: '',
                schedule: '',
                phone_number: '',
                email: '',
                address: '',
                area: ''
            });
            fetchSecurityItems();
        } catch (error) {
            console.error('Ошибка при создании:', error);
        }
    };

    const handleEditItem = (id) => {
        const selectedItem = securityItems.find(item => item._id === id);
        setEditedItem(selectedItem);
        setSelectedItemId(id);
    };

    const handleEditInputChange = (e) => {
        setEditedItem({
            ...editedItem,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdateItem = async () => {
        try {
            await axios.put(`http://localhost:3020/updateSecurityItems/${selectedItemId}`, editedItem);
            setEditedItem({
                name: '',
                category: '',
                description: '',
                image: '',
                instagram: '',
                facebook: '',
                telegram: '',
                schedule: '',
                phone_number: '',
                email: '',
                address: '',
                area: ''
            });
            setSelectedItemId(null);
            fetchSecurityItems();
        } catch (error) {
            console.error('Ошибка при обновлении элемента:', error);
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:3020/deleteSecurityItems/${id}`);
            setSecurityItems(securityItems.filter(item => item._id !== id));
        } catch (error) {
            console.error('Ошибка при удалении элемента:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditedItem({
            name: '',
            category: '',
            description: '',
            image: '',
            instagram: '',
            facebook: '',
            telegram: '',
            schedule: '',
            phone_number: '',
            email: '',
            address: '',
            area: ''
        });
        setSelectedItemId(null);
    };

    return (
        <AdminLayout>
            <div>
                <div className="bg-white px-6 py-60 sm:py-20 lg:px-8 rounded-lg drop-shadow-md">
                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7274e8] to-[#261da0] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
                    </div>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">База данних</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">Депутаты</p>
                    </div>
                    <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label id="company1" className="block text-sm font-semibold leading-6 text-gray-900">ФІО Депутата</label>
                                <div className="mt-2.5">
                                    <input type="text" name="company" id="company" autoComplete="organization" className="block w-full pl-3 placeholder:pl-0 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Введіть ФІО депутата" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label id="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Район</label>
                                <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 w-full flex items-center">
                                        <select id="country1" name="country2" className="h-full w-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })}>
                                            <option value="Амур-Нижньодніпровський">Амур-Нижньодніпровський район</option>
                                            <option value="Індустріальний район">Індустріальний район</option>
                                            <option value="Новокодакський район">Новокодакський район</option>
                                            <option value="Самарський район">Самарський район</option>
                                            <option value="Соборний район">Соборний район"</option>
                                            <option value="Центральный район">Центральный район</option>
                                            <option value="Чечеловський район">Чечеловський район</option>
                                            <option value="Шевченківський район">Шевченківський район</option>

                                        </select>

                                    </div>
                                    <input type="tel" name="phone-number2" id="phone-number3" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label id="phone-number1" className="block text-sm font-semibold leading-6 text-gray-900">Фракція</label>
                                <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 w-full flex items-center">
                                        <select id="country" name="country" className="h-full w-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                                            <option value="Європейська солідарність">Європейська солідарність</option>
                                            <option value="За Україну, за Дніпро!">За Україну, за Дніпро!</option>
                                            <option value="Пропозиція">Пропозиція</option>
                                            <option value="Громадьська сила">Громадьська сила</option>
                                            <option value="Блок Вілкула">Блок Вілкула "Українська перспектива"</option>
                                            <option value="Слуга народу">Слуга народу</option>
                                        </select>

                                    </div>
                                    <input type="tel" name="phone-number4" id="phone-number5" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label id="message" className="block text-sm font-semibold leading-6 text-gray-900">Біографія</label>
                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows="4" className="block w-full placeholder:p-0 px-3.5 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        placeholder='Біографія'></textarea>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label id="company28" className="block text-sm font-semibold leading-6 text-gray-900">Посилання на світлину Депутата</label>
                                <div className="mt-2.5">
                                    <input type="text" name="company1" id="company2" autoComplete="organization" className="block w-full pl-3 placeholder:pl-0 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} placeholder="Посилання на зображення" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label id="company27" className="block text-sm font-semibold leading-6 text-gray-900">Номер телефона</label>
                                <div className="mt-2.5">
                                    <input type="text" name="company3" id="company4" autoComplete="organization" className="block w-full pl-3 placeholder:pl-0 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.phone_number} onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} placeholder="Номер телефона" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label id="company25" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                <div className="mt-2.5">
                                    <input type="text" name="company5" id="company6" autoComplete="organization" className="block w-full pl-3 placeholder:pl-0 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email депутата" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label id="company7" className="block text-sm font-semibold leading-6 text-gray-900">Адреса</label>
                                <div className="mt-2.5">
                                    <input type="text" name="compan8y" id="company9" autoComplete="organization" className="block w-full pl-3 placeholder:pl-0 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="Адреса прийому" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label id="company24" className="block text-sm font-semibold leading-6 text-gray-900">Графік прийому</label>
                                <div className="mt-2.5">
                                    <input type="text" name="company10" id="company11" autoComplete="organization" className="block w-full pl-3 placeholder:pl-0 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.schedule} onChange={(e) => setFormData({ ...formData, schedule: e.target.value })} placeholder="График прийому" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label id="company23" className="block text-sm font-semibold leading-6 text-gray-900">Посилання на Instagram</label>
                                <div className="mt-2.5">
                                    <input type="text" name="company12" id="company13" autoComplete="organization" className="block w-full pl-3 placeholder:pl-0 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.instagram} onChange={(e) => setFormData({ ...formData, instagram: e.target.value })} placeholder="Посилання на Instagram депутату" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label id="company21" className="block text-sm font-semibold leading-6 text-gray-900">Посилання на Facebook</label>
                                <div className="mt-2.5">
                                    <input type="text" name="company14" id="company15" autoComplete="organization" className="block w-full pl-3 placeholder:pl-0 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.facebook} onChange={(e) => setFormData({ ...formData, facebook: e.target.value })} placeholder="Посилання на Facebook депутату" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label id="company22" className="block text-sm font-semibold leading-6 text-gray-900">Посилання на Telegram</label>
                                <div className="mt-2.5">
                                    <input type="text" name="company17" id="company18" autoComplete="organization" className="block w-full pl-3 placeholder:pl-0 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.telegram} onChange={(e) => setFormData({ ...formData, telegram: e.target.value })} placeholder="Посилання на Telegram депутату" />
                                </div>
                            </div>

                            <div className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">

                                        <span aria-hidden="true" className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                                    </button>
                                </div>

                                <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                                    Не додавати до веб-сайту
                                </label>

                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="block w-full rounded-md bg-sky-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950" onClick={handleCreateItem}>Додати до Бази Данних</button>
                        </div>
                    </form>
                </div>

                <br />


                <div className='flex flex-wrap gap-3 bg-white p-4 items-stretch rounded-lg shadow-md px-6 py-60 ml-[-13px] mr-[-6px] sm:py-20 
             lg:px-8'>
                    {securityItems.map(item => (
                        <div key={item._id} className="mx-auto w-1/4 rounded-lg shadow-lg">
                            {selectedItemId === item._id ? (
                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <input className='font-bold ' type="text" name="name" value={editedItem.name} onChange={handleEditInputChange} />

                                    <select name="category p-5" value={editedItem.category} onChange={handleEditInputChange}>
                                    </select>
                                    <textarea name="description p-5" value={editedItem.description} onChange={handleEditInputChange}
                                        placeholder="Біографія"></textarea>
                                    <input type="text" name="image" value={editedItem.image} onChange={handleEditInputChange}
                                        placeholder="Посилання на зображення" />
                                    <button className="bg-indigo-600 p-2 mb-3 ml-10 text-white" onClick={handleUpdateItem}>Зберегти</button>
                                    <button className="bg-indigo-600 p-2 mb-3 ml-10 text-white" onClick={handleCancelEdit}>Скасувати</button>
                                </div>
                            ) : (
                                <>
                                    <img className='w-[100%] h-[400px] object-cover drop-shadow-xl rounded-lg' src={item.image} alt={item.name} />
                                    <div className='p-3'>
                                        <div className='mb-6'>
                                            <h2 className='p-2 mt-2'>{item.name}</h2>
                                            <p className='p-2'>Фракція: {item.category}</p>
                                            <p className='p-2'>Район: {item.area}</p>
                                            <p className='p-2'>Біографія: {item.description}</p>
                                            <div className='ml-2'>
                                                {item.phone_number && item.phone_number.length > 0 && <p>Номер для зв`язку:{item.phone_number}</p>}
                                                {item.email && item.email.length > 0 && <p>Email:{item.email}</p>}
                                                {item.schedule && item.schedule.length > 0 && <p>Графік прийому: {item.schedule}</p>}
                                                {item.address && item.address.length > 0 && <p>Адреса:{item.address}</p>}
                                            </div>
                                            <div className='flex gap-2 ml-2 mt-2'>
                                                {item.instagram && item.instagram.length > 0 && <a href={item.instagram} alt="alt10"><img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Vector.png' alt='alt7' className='w-5' /></a>}
                                                {item.facebook && item.facebook.length > 0 && <a href={item.facebook} alt="alt10"><img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Vector-2.png' alt='alt7' className='w-3' /></a>}
                                                {item.telegram && item.telegram.length > 0 && <a href={item.telegram} alt="alt10"><img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Vector-3.png' alt='alt7' className='w-5' /></a>}
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-6 w-full justify-center'>
                                            <button className="rounded-lg bg-indigo-600 p-2 text-white" onClick={() => handleEditItem(item._id)}>Редагувати</button>
                                            <button className="rounded-lg bg-rose-600 p-2 text-white " onClick={() => handleDeleteItem(item._id)}>Видалити</button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                    ))}

                </div>

            </div>
        </AdminLayout>
    );
}

export default SecurityPage;