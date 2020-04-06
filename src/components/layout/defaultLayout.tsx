import * as React from "react";

import Header from "@components/headers/defaultHeader";
import Footer from "@components/footers/defaultFooter";

const defaultLayout : React.FunctionComponent = ({ children }) => {
    return (
        <div>
            <Header/>
                <div
                    className="body"
                >
                    { children }
                </div>
            <Footer/>
        </div>
    );
}


export default defaultLayout;