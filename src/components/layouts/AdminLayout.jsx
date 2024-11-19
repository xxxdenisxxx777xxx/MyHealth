import { Link } from "react-router-dom"

export const AdminLayout = ({ children }) => {
    return (
        <>
            <header className="mb-7">
                <nav className="bg-white-400">
                    <div className="ml-2 w-90">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="absolute -inset-0.5"></span>
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
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <p className="bg-white-400 text-gray-600 rounded-md px-3 z-50 py-2 text-sm font-medium" aria-current="page"><Link to="/admin/note"><span className='text-lg'>Записи</span></Link></p>
                                    <p className="bg-white-400 text-gray-600 rounded-md px-3 z-50 py-2 text-sm font-medium" aria-current="page"><Link to="/admin/security"><span className='text-lg'>Депутаты</span></Link></p>

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
            {children}
        </>
    )
}

