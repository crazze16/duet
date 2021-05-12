import React from 'react'

import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {CreatedSC, FooterInfoSC, FooterSC, FooterWrapperSC, LinkSC, MailSC, SocialLinksSC } from './footer.styles';
import {socialLinks} from "../../constants/constants";

export const Footer:React.FC = () => {
    return (
        <FooterSC>
            <FooterWrapperSC>
                <FooterInfoSC>
                    <SocialLinksSC>
                        <LinkSC target="_blank" href={socialLinks.GIT + 'crazze16'}>
                            <FaGithub size={'24px'}/>
                        </LinkSC>
                        <LinkSC target="_blank" href={socialLinks.INSTAGRAM + 'because_nekoz'}>
                            <FaInstagram size={'24px'}/>
                        </LinkSC>
                        <LinkSC target="_blank" href={socialLinks.LINKEDIN + 'in/vladimir-nekoz-099173204/'}>
                            <FaLinkedin size={'24px'}/>
                        </LinkSC>
                    </SocialLinksSC>
                    <CreatedSC>created by</CreatedSC>
                    <MailSC>{socialLinks.PERSONAL_MAIL}</MailSC>
                </FooterInfoSC>
            </FooterWrapperSC>
        </FooterSC>
    )
}