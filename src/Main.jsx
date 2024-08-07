import React from "react";
import Topbar from "./component/Topbar";
import Footer from "./component/Footer";

const Main = ({ children }) => {
    return (
        <>
            <Topbar />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default Main;
