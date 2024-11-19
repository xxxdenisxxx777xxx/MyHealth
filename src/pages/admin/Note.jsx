import './SecurityPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Example from '../../components/admin/listbox/ListBox';
import { AdminLayout } from '../../components/layouts/AdminLayout';

function Note() {





    return (
        <AdminLayout>
            <div>
                <div className="bg-white px-6 py-60 sm:py-20 lg:px-8 rounded-lg drop-shadow-md">
                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7274e8] to-[#261da0] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
                    </div>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Записи на прийом</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">До депутатів</p>
                    </div>
                    <br />
                    <Example />
                    <br />

                </div>
            </div>
        </AdminLayout>

    );
}

export default Note;
