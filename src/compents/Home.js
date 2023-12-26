import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Contact from './Contact';

const Home = ({ menus }) => {
    // Assuming 'menus' is an array of menu objects passed as props

    return (
        <div>
            <Header />
            <Menu menus={menus} />
            <Contact />
        </div>
    );
};

export default Home;
