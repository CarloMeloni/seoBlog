import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => 
        <Layout>
            <h2>Index.js</h2>
            <Link href='/signin'>
                <a>signin</a>
            </Link>
            <Link href='/signup'>
                <a>signup</a>
            </Link>
        </Layout>;

export default Index;