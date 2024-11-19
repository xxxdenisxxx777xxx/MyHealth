
import React, { } from 'react';
import { Link } from 'react-router-dom';



export function AdminHome() {

  return (

    <div className="relative isolate ">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 " aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
      </div>
      <div className="mx-auto max-w-2xl py-32 mt-[-70px] sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            eDnipro Admin System <p className="font-semibold text-indigo-600"></p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Админ cистема</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Для створення та змінення контенту Депутатів на сайті єДніпро.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <p className="rounded-md bg-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950"><Link to="/admin/security">Перейти</Link></p>
            <p className="text-sm font-semibold leading-6 text-gray-900"><Link to="/admin/security">до Депутатів<span aria-hidden="true"></span></Link></p>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
      </div>
    </div>


  );
}

