import React from "react";
import {Box,Container,Row,Column,FooterLink,Heading,} from "./ResponsiveFooterStyle";

const ResponsiveFooter = (props) => {
return (
	<Box>
        <Container>
            <Row>
                {props.responsiveFooterFooter.map(footer =>{
                    return (
                        <Column key={footer.id}>
                            <Heading>{footer.heading}</Heading>
                            <FooterLink href={footer.link}>{footer.footerLink1}</FooterLink>
                            <FooterLink href={footer.link}>{footer.footerLink2}</FooterLink>
                            <FooterLink href={footer.link}>{footer.footerLink3}</FooterLink>
                        </Column>
                    )
                })}
            <Column>
                <Heading>Social Media</Heading>
                {props.responsiveFooterSocial.map(social =>{
                    return (
                        <FooterLink key={social.id} href={social.link}>
                            <i className={social.class}>
                                <span style={social.style}>
                                {social.footerLink}
                                </span>
                            </i>
                        </FooterLink>
                    )
                })}
            </Column>
            </Row>
        </Container>
	</Box>
);
};
export default ResponsiveFooter;
