import 'react-app-polyfill/ie11';
import Layout from '../layout/layout';
import '../css/reset.css';
import '../css/layout.scss';
import '../css/markup.scss';
import '../fontawsome';


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