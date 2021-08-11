import Link from "next/link";
import {StyledNoQuotes, StyledNoPostsText} from "./NoPostsFound.styled";


const NoPostsFound = () => {
    return (
        <StyledNoQuotes>
            <StyledNoPostsText>No posts found!</StyledNoPostsText>
            <Link href='/NewPost'>
                Add a Quote
            </Link>
        </StyledNoQuotes>
    );
};

export default NoPostsFound;