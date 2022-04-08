import React from 'react';
import image from './email.jpeg';

function Contact (){
    return (
        <div className='HomeTitle'>
            <h1 className='HomeTitle'>
                Want to get in touch with me? 
            </h1>
            <br></br>
            <img alt="emailpic" src={image} height={200} width={400}/><br></br>
            <br></br>
            <h3 className='HomeTitle'> Contact me at: sipsnhappyhour@gmail.com</h3>
            <p className='HomeTitle'>Phone: 345-645-5676</p>
        </div>
    )
}

export default Contact;