import React from 'react';
import dayjs from 'dayjs';
import { StyledFooterWrapper, StyledFooter, StyledFooterContent } from './styles';

const DATE_FORMAT = 'YYYY';
const now = dayjs();

const Footer = () => {
    return (
        <StyledFooterWrapper>
            <StyledFooter>
                <StyledFooterContent>©{now.format(DATE_FORMAT)} FitClub. All rights reserved.</StyledFooterContent>
            </StyledFooter>
        </StyledFooterWrapper>
    );
};

export default Footer;
