import React from 'react';
import './portfolioStyles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};


const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

const SlideshowModal = ({ isOpen, onClose, images }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <>
            
                    <div className="slideshow-container" key={index} style={{display: 'flex'}}>
                        <div className="slideshow-image" style={{border: 'solid 1px #aaaaaa'}}>
                        <Image
                                    src={img.link}
                                    alt="Slideshow image"
                                    layout="responsive"
                                    width={500} /* Original width */
                                    height={500} /* Original height */
                                />
                            
                        </div>
                        <div className="slideshow-blurb">
                            <p dangerouslySetInnerHTML={{ __html: img.text }}></p>
                        </div>
                    </div>
                    </>
                ))}
            </Slider>
        </Modal>
    );
};

export default SlideshowModal;
