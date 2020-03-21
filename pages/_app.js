import Layout from '../layout/layout';
import '../css/reset.css';
import '../css/layout.scss'


const App = ({ Component, pageProps }) => {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}



export default App;