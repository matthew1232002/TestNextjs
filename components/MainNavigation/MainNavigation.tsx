import Link from "next/link";
import styled from "styled-components";

import {StyledHeader, StyledLi, StyledLogo, StyledUl} from "./MainNavigation.styled";

const StyledLink = styled(Link)`
      text-decoration: none;
      color: #88dfdf;
    `;

const MainNavigation = () => {

    return (
        <StyledHeader>
            <StyledLogo>Great Posts</StyledLogo>
            <nav>
                <StyledUl>
                    <StyledLi>
                        <StyledLink href='/'>All Posts</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink href='/NewPost'>Add a Post</StyledLink>
                    </StyledLi>
                </StyledUl>
            </nav>
        </StyledHeader>
    );
}

export default MainNavigation;