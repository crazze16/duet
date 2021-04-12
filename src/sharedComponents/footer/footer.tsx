import React from 'react'

import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {CreatedSC, FooterInfoSC, FooterSC, FooterWrapperSC, LinkSC, MailSC, SocialLinksSC } from './footer.styles';

const GIT = 'https://github.com/crazze16';
const INST = 'https://www.instagram.com/because_nekoz/';
const LINKEDIN = 'https://www.linkedin.com/in/vladimir-nekoz-099173204/';
const MAIL = 'vladimirnekoz16@gmail.com';

export const Footer:React.FC = () => {
    return (
        <FooterSC>
            <FooterWrapperSC>
                <FooterInfoSC>
                    <SocialLinksSC>
                        <LinkSC target="_blank" href={GIT}>
                            <FaGithub size={'24px'}/>
                        </LinkSC>
                        <LinkSC target="_blank" href={INST}>
                            <FaInstagram size={'24px'}/>
                        </LinkSC>
                        <LinkSC target="_blank" href={LINKEDIN}>
                            <FaLinkedin size={'24px'}/>
                        </LinkSC>
                    </SocialLinksSC>
                    <CreatedSC>created by</CreatedSC>
                    <MailSC>{MAIL}</MailSC>
                </FooterInfoSC>
            </FooterWrapperSC>
        </FooterSC>
    )
}