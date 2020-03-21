import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterBlock>
            <p>Copyright ⓒ 2020. All Rights Reserved.</p>
        </FooterBlock>
    )
}

export default Footer;

const FooterBlock = styled.footer`
    max-width:960px;
    border-top:1px solid #eee;
    padding:2em 0;
    margin:0 auto;
    text-align:center;
    color:#888;
`