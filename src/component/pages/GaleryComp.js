import React from 'react';
import './GaleryComp.css';

// import image
import image1 from '../../img/image1.JPG';
import image2 from '../../img/image2.jpg'
import image3 from '../../img/image3.JPG'
import image4 from '../../img/image4.jpg'
import image5 from '../../img/image5.jpg'
import image6 from '../../img/image6.JPG'

function GaleryComp() {
    return (
        <>
            <h1>Gallery</h1>
            <div className="galery">
                <div className="galery-container container">
                    <div className="galery-row">
                        <div className="col">
                            <img src={image1} alt='image' />
                            <img src={image2} alt='image' />
                            <img src={image3} alt='image' />
                        </div>
                        <div className="col">
                            <img src={image4} alt='image' />
                            <img src={image5} alt='image' />
                            <img src={image6} alt='image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GaleryComp