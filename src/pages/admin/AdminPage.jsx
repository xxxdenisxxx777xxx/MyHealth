import './AdminPage.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AdminHome } from './AdminHome';
import axios from 'axios';


function AdminPage() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('auth'))
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3020/api/login', { email: email, password: password }, { headers: { 'Content-Type': 'application/json' } });
      if (response.status === 200) {
        localStorage.setItem('auth', JSON.stringify(response.data.user));
        setIsAuth(true)
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handleSignOut = () => {
    const isAuthData = localStorage.getItem('auth');
    if (isAuthData) {
      localStorage.removeItem('auth');
      setIsAuth(false)
    }
  }


  return (
    <>
      {isAuth ? <>
        <header>

          <nav className="bg-white-400">
            <div className="ml-2 w-90">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="absolute -inset-0.5"></span>
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center z-50">
                    <Link to="/admin">
                      <img className="h-10 w-auto" src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/LogoAI.png" alt="Your Company" />
                    </Link>
                  </div>
                  <h6>Admin</h6>
                </div>
                <div className=" sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <p className="bg-white-400 text-gray-600 rounded-md px-3 z-50 py-2 text-sm font-medium" aria-current="page"><Link to="/admin/note"><span className='text-lg'>Записи</span></Link></p>
                    <p className="bg-white-400 text-gray-600 rounded-md px-3 z-50 py-2 text-sm font-medium" aria-current="page"><Link to="/admin/security"><span className='text-lg'>Депутаты</span></Link></p>
                    <button className='relative z-50' type='button' onClick={handleSignOut}><img className='w-6 mt-[-3px]' src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/exit-icon.png" alt="alt29" /></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <p className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</p>
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</p>
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</p>
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</p>
              </div>
            </div>
          </nav>


        </header>



        <AdminHome /></> : <div className="relative z-50">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 " aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
        </div>
        <form className='mt-[100px]'>
          <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex flex-1 items-center justify-center sm:items-stretch ">
              <div className="flex flex-shrink-0 items-center z-50">
                <Link to="/admin">
                  <img className="mx-auto h-[65px] w-auto" src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/LogoAI.png" alt="Your Company" />
                </Link>
              </div>
              <h6>Admin</h6>
            </div>
            <br />
            <br />
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label for="email" class="block text-base font-medium leading-6 text-gray-900">Електронна пошта</label>
                  <div class="mt-2">
                    <input required class="block w-full h-11 rounded-md border-0 py-1.5 pl-3 placeholder:pl-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6" type="text"
                      placeholder="Введіть email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-base font-medium leading-6 text-gray-900">Пароль</label>
                    <div class="text-sm">
                      <a class="font-semibold text-sky-700 hover:text-sky-950">Забули пароль?</a>
                    </div>
                  </div>
                  <div class="mt-2">
                    <input autocomplete="current-password" required class="block w-full h-11 pl-3 placeholder:pl-0 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-900 sm:text-sm sm:leading-6" type="password"
                      placeholder="Введіть пароль"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>

                <div>
                  <button type="submit" class="flex w-full justify-center h-9 rounded-md bg-sky-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950" onClick={(e) => { e.preventDefault(), handleLogin() }}>Sign in</button>
                </div>
              </form>
              <p class="mt-7 text-center text-sm text-gray-500">
                Немає профілю ?
                <p class="font-semibold leading-6 text-sky-700 hover:text-sky-950">ednipro.program@gmail.com</p>
              </p>
            </div>
          </div>

        </form>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-33rem)] ml-14" aria-hidden="true">
          <div className="relative left-[calc(70%+3rem)] aspect-[1155/678] w-[90.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+35rem)] sm:w-[72.1875rem]" ></div>
        </div>
      </div>}







    </>

  );
}

export default AdminPage;
