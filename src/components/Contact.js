// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    return (
        <div className='card'>
            <img className='card_image' src={data.photo} alt={data.name} />
            <div className='card_content'>
                <h2 className='card_title'>{data.name}</h2>
                <h5 className='card_phone'>{data.phone}</h5>
                <p className='card_email'>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;