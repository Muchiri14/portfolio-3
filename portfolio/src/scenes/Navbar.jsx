import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelecteedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
        className= {`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover:text-yellow transition dduration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelecteedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({selectedPage, setSelectedPage}) => {
    const [isMenuToogled, setIsMenuToogled] = useState(false);
    const isDesktop = useMediaQuery ("(min-width: 768px)");
    return ( 
        <nav className={'z-40 w-full fixed top-0 py-6'}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">DAN</h4>

                {/*DESKTOP NAV */}

                {isDesktop ? (
                <div className="flex justify-between gap-16 font font-openSans text-sm font font-semibold">
                    <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelecteedPage={setSelectedPage}
                    />

                </div>
                ) : (<div></div>)}

            </div>

        </nav>
    );
}
 
export default Navbar;