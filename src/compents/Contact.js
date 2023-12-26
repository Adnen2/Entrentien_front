import React from 'react';

const Contact = () => {
    return (
        <div
            style={{
                position: 'relative',
            }}
        >
            <div
                style={{
                    borderRadius: '12px',
                    background: `url('https://www.shutterstock.com/image-vector/chili-pattern-vector-wallpaper-free-600nw-2104407455.jpg') center/cover no-repeat`,
                    padding: '50px',
                    textAlign: 'center',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '85%',
                    position: 'absolute',
                    left: '50%',
                    top: 75,
                    transform: 'translateX(-50%)',
                    zIndex: '1000',
                }}
            >
                <h1 style={{ fontSize: '3em', fontFamily: 'Forte' }}>Prendre Contact</h1>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Inputs */}
                    <div style={{ textAlign: 'left', marginBottom: '20px', width: '40%' }}>
                        <input
                            type="text"
                            placeholder="Nom et Prénom"
                            id="nom_prenom"
                            name="nom_prenom"
                            style={{
                                width: '100%',
                                boxSizing: 'border-box',
                                border: 'none',
                                borderRadius: '5px',
                                height: '45px',
                                color: 'black',
                                marginBottom: '10px',
                            }}
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="Adresse Email"
                            name="email"
                            style={{
                                width: '100%',
                                boxSizing: 'border-box',
                                border: 'none',
                                borderRadius: '5px',
                                height: '45px',
                                color: 'black',
                                marginBottom: '10px',
                            }}
                        />
                        <textarea
                        id="message"
                        name="message"
                        placeholder="Votre message ici..."
                        rows="4"
                        style={{
                            width: '100%',
                            boxSizing: 'border-box',
                            border: 'none',
                            borderRadius: '5px',
                            height: '80px',
                            color: 'black',
                            padding: '10px',
                            marginBottom: '20px',
                        }}
                    />
                    <button
                        style={{
                            backgroundColor: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            width: '100%',
                            height: '45px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            display: 'block',
                        }}
                    >
                        Envoyer
                    </button>
                    </div>

                    {/* Image */}
                    <div style={{ width: '50%', textAlign: 'center' }}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcLi9jT83_RAEUzf_Xn93MwOLTTj7s9aKImbN4jCCF4Sg7YHyydeKrRXBLc1O8qXOv9Q&usqp=CAU"
                            alt="Logo"
                            style={{
                                borderRadius: '50%',
                                width: '250px',
                                height: '250px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'block',
                            }}
                        />
                    </div>
                </div>

                
            </div>
            <div style={{ textAlign: 'left', marginBottom: '20px' }}/>

        </div>
    );
};

export default Contact;
