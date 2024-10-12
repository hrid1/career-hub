
import { Outlet } from 'react-router-dom';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;