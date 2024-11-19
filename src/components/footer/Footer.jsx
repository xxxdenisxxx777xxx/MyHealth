import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const { pathname } = useLocation();
    return (
        <>
            {pathname.includes('admin') ? null : <footer className="">
                <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Component%201.png" className='fotter-dnipro' alt="alt-fotter" />
            </footer>}
        </>

    )
}
export default Footer;