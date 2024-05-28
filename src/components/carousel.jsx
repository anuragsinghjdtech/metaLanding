import React, { useEffect, useState } from 'react'
import meta from '../img/metaBanner.avif';

export default function Carousel() {
    const [responsiveHead, setResponsiveHead] = useState('-10%');
    useEffect(() => {
        if (window.innerWidth < 844) {
            setResponsiveHead('10%')
        }
    })
    return (
        <>
            <div id='carousel' className="carousel-header" style={{ zIndex: '10' }}>
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active">
                            <img src={meta} className='autodial-img' alt='/'></img>

                            <div className="carousel-caption" style={{}}>


                                <div className="p-3 seo-head position-relative" style={{ maxWidth: "900px" }}>
                                    <p className="text-white text1 text-uppercase fw-bold mb-md-4 mb-0" style={{ letterSpacing: "3px" }}>
                                        Boost Your Web Traffic, Conversions & Sales                      </p>

                                    <p className="mb-md-5 mb-0 text2">
                                    </p>
                                    <div style={{ height: '45px' }}><a href="tel: +1-888-821-5749 " className="btn-hover-bg btn btn-primary bubble-btn rounded-pill text-white py-md-3 py-1 px-md-5 px-2"><span className=''>Book your Free Consultation Now!</span></a></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon btn" style={{ backgroundColor: "rgb(15, 195, 250)" }} aria-hidden="false"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon btn" style={{ backgroundColor: "rgb(15, 195, 250)" }} aria-hidden="false"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div id="form" className='container-fluid opacity-0 position-absolute' style={{ height: '5px', top: '1205px' }}></div>
                <div id="plan" className='container-fluid opacity-0 bg-dark position-absolute' style={{ height: '8px', top: '4110px' }}></div>
                <div id="about" className='container-fluid opacity-0 bg-dark position-absolute' style={{ height: '8px', top: '78rem' }}></div>

            </div>

        </>
    )
}
