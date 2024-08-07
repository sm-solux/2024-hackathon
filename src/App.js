import React from "react";
import Main from './Main';
import { useMediaQuery } from 'react-responsive';

const App = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isPc = useMediaQuery({ query: "(min-width: 769px)" });

    return (
        <Main>
            {isMobile && !isPc ? <div> mobile </div> : null}
            {isPc && !isMobile ? <div> pc </div> : null}
        </Main>
    );
};

export default App;
