import React from "react";
import { 
    Routes,
    Route
} from 'react-router-dom';
import Topbar from "./component/Topbar";
import Footer from "./component/Footer";
import AboutPage from "./pages/AboutPage";
import TimelinePage from "./pages/TimelinePage";
import HackathonPage from "./pages/HackathonPage";
import FaqPage from "./pages/FaqPage";
import { useMediaQuery } from 'react-responsive';
import "./App.css";

const App = () => {
    // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    // const isPc = useMediaQuery({ query: "(min-width: 769px)" });

    return (
        <>
        <Topbar />
        <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/hackathon" element={<HackathonPage />} />
            <Route path="/faq" element={<FaqPage />} />
        </Routes>
        <Footer />
        </>
        
        // <Main>
        //     {isMobile && !isPc ? <div> mobile </div> : null}
        //     {isPc && !isMobile ? <div> pc </div> : null}
        // </Main>
    );
};

export default App;
