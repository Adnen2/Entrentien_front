import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div
            style={{
                background: `url('https://www.atomicdust.com/wp-content/uploads/2017/11/atomicdust-branding-executive-dining-header.jpg') center/cover no-repeat`,
                height: '600px', // Adjust the height as needed
                position: 'relative',
                textAlign: 'center',
                color: 'white', // Text color
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end', // Align to the right
                alignItems: 'center',
            }}
        >
            {/* Circular Image */}
            <div
                style={{
                    width: '450px',
                    height: '450px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '5px solid red',
                    position: 'absolute',
                    top: '50%',
                    left: '100px',
                    transform: 'translateY(-50%)',
                }}
            >
                <img
                    src="https://images.deliveryhero.io/image/talabat/Menuitems/Texas_Cheese_Fries__Half_638156199545101729.jpg"
                    alt="Circular Image"
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            {/* Logo */}
            <img
                src="/images/aaa.png" // Replace with the path to your logo file
                alt="Chili's Tunisie Logo"
                style={{ width: '100px', height: 'auto', position: 'absolute', top: '10px', left: '10px' }}
            />

            {/* Text and Link */}
            <div style={{ marginRight: '200px', textAlign: 'left' }}>
                <h1 style={{ color: 'white', fontSize: '16px', fontFamily: 'cursive' }}>Chili's Tunisie</h1>
                <h1 style={{ marginTop: '5px', fontFamily: 'Forte', color: '#0cb710' }}>
                    Découvrez les<br />
                    meilleures recettes<br />
                    syriennes
                </h1>
                <Link
                    to="#menu"
                    style={{
                        backgroundColor: 'red', // Change to your desired button color
                        color: 'white', // Button text color
                        padding: '10px 20px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        marginTop: '10px',
                        fontWeight: 'bold',
                        display: 'block', // Make the link a block to take full width
                    }}
                >
                    Voir notre menu
                </Link>
            </div>
        </div>
    );
};

export default Header;
