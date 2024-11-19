import { Link, useLocation } from "react-router-dom";
import AppRoute from "../../Routes/AppRoute";

const Header = () => {
    const { pathname } = useLocation();

    return (
        <>
            {pathname.includes('admin') ? null : <header className="w-full max-w-screen-xl mx-auto flex justify-center items-center">
                <Link to={'/'}><img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Group%2013.png' className='img-
            header' alt='alt1' /></Link>
            </header>}
        </>
    )
}
export default Header;