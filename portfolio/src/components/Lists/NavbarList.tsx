interface ResponsiveValues {
    isMobile: boolean
}

const NavbarList = (props: any) => {

    return (
        <ul className={props.isMobile ? "d-flex flex-column p-0 justify-content-around" : "d-flex"}>
            {props.isMobile && <li className="pb-4"><a onClick={props.onClose}>X</a></li>}
            <li className="pb-2"><a href="#">My Story</a></li>
            <li className="pb-2"><a href="#">Projects</a></li>
            <li className="pb-2"><a href="#">Contact</a></li>
        </ul>
    )
}

export default NavbarList