import {Fragment} from "react";
import {StyledHeader} from "./Layout.styled";
import MainNavigation from "../MainNavigation/MainNavigation";

const Layout = (props:any) => {
    return (
        <Fragment>
            <MainNavigation/>
            <StyledHeader>{props.children}</StyledHeader>
        </Fragment>
    );
};

export default Layout;