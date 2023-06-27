import { useEffect, useState } from 'react';
import smallLogo from '../images/DM.png'
import logo from "../images/Dean-Munday.png";
import BurgerMenu from './BurgerMenu';
import burgerMenu from '../images/icons/burgermenu.png';
import NavbarList from './Lists/NavbarList';

const MobileNav = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
    }, [isOpen])

    return <>
        {props.isMobile ? <nav className="navbar">
            <div className="d-flex justify-content-between px-2 align-items-center w-100">
                <img className="logo-small d-inline-block align-text-top" src={smallLogo} alt="" width="75" height="75" />
                <img src={burgerMenu} width="60" height="60" onClick={handleOnClick} alt="" />
            </div>
            <BurgerMenu isMobile={props.isMobile} open={isOpen} onClose={handleOnClick} />
        </nav> : <nav className="desktop navbar navbar-light bg-light">
            <div className="container-fluid">
                <img src={logo} className="logo d-inline-block align-text-top" alt="" width="300" height="75" />
                <NavbarList />
            </div>
        </nav>}

    </>
}

export default MobileNav