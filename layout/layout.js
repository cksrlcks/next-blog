import Nav from '../components/header';
import Footer from '../components/footer'
import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <Container className="global-inner">
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout;

const Container = styled.div`
    margin:2em auto 5em;
    min-height:80vh;
`
