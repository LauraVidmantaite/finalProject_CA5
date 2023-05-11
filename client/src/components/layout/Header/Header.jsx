import React from "react";
import {
    StyledHeaderWrapper,
    StyledHeader,
    StyledLogo,
    StyledHeaderContent,
    StyledUserContainer,
    StyledLogoutButton,
    StyledUserAvatar,
    StyledUserInfo,
    StyledUserName,
    StyledUserRole
} from './styles';

const Header = () => {
    return (
        <StyledHeaderWrapper>
            <StyledHeader>
                <StyledLogo></StyledLogo>
                <StyledHeaderContent>
                    <StyledUserContainer>
                        <StyledUserAvatar><p>M</p></StyledUserAvatar>
                        <StyledUserInfo>
                            <StyledUserName>Michael</StyledUserName>
                            <StyledUserRole>Admin</StyledUserRole>
                        </StyledUserInfo>
                    </StyledUserContainer>
                    <StyledLogoutButton></StyledLogoutButton>
                </StyledHeaderContent>
            </StyledHeader>
        </StyledHeaderWrapper>
    )
};

export default Header;
