
import Link from 'next/link';
import Layout from '../components/Layoout';
const Index = () => {

    return (
        <Layout>

        <nav className="navbar navbar-light bg-light">
        <Link href="/about">
  <a className="navbar-brand" href="#">Navbar</a>
  </Link>
</nav>
 </Layout>
    )
}

export default Index;