import Navbar from "./scenes/Navbar";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App (){
    const[selectedPage, setSelectedPage] = useState ('home');
    const isDesktop = useMediaQuery("(min-width: 1060px)");
    return <div className="app bg-deep-blue"></div>;

    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
}


export default App;