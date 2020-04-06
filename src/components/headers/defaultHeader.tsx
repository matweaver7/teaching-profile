import * as React from "react";
import Menu from "@components/Menu";

const defaultHeader = () => {
    return (
        <header>
            <Menu/>
            <div>This is the Header</div>
        </header>
    );
}

export default defaultHeader;