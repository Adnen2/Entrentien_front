import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ menus }) => {
    // Assuming 'menus' is an array of menu objects passed as props

    // Display only the first 6 menus
    const visibleMenus = menus.slice(0, 6);

    return (
        <div style={{ paddingTop: '20px', paddingLeft: '20px', paddingBottom: '20px', paddingRight: '20px' }}>
            <img src='' />
            <h1 style={{ color: 'red', textAlign: 'center', fontFamily: 'Forte', borderBottom: '2px solid red', paddingBottom: '10px', marginBottom: '20px' }}>Notre Menu</h1>

            <h3 style={{ marginTop: '10px',fontFamily: 'Forte',color:'#0cb710' }}>Nos Fajitas</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                
                {visibleMenus.map((menu) => (
                    <div key={menu._id}>
                        <img src={menu.image} alt={menu.titre} style={{ width: '100%', borderRadius: '5px' }} />
                        <h3 style={{ marginTop: '10px',fontFamily: 'Forte',color:'red' }}>{menu.titre}</h3>
                        <p style={{ marginTop: '10px',fontWeight: 'bold',color:'#0cb710' }}>Prix: {menu.prix}</p>
                    </div>
                ))}
            </div>
            <Link to="/all-menus" style={{ display: 'block', textAlign: 'center', marginTop: '20px', color: 'red', fontFamily: 'Forte', textDecoration: 'none' }}>Voir Plus</Link>
        </div>
    );
};

export default Menu;
