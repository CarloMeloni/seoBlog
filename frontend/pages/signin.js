import Layout from '../components/Layout';
import Link from 'next/link';

const Signin = () => 
        <Layout>
            <h2>Signin.js</h2>
            <Link href='/'>
                <a>home</a>
            </Link>
        </Layout>;

export default Signin;