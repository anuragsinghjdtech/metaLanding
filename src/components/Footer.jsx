import React from 'react';
import certification1 from '../img/AB-seal-horz.svg.svg';
import googlePartners from '../img/googlePartners.png';
import indian from '../img/indian.png';
import american from '../img/flag.png'
export default function Footer() {
    return (
        <>
             <div className="container-fluid footer py-5" style={{fontsize:'14px'}}>
            <div className="container py">                
            <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item1 d-flex flex-column">
                            <h4 className="mb-4 text-white">Get In Touch</h4>
                            <a href="" style={{textDecorationLine:'none',fontSize:'14px'}}><i className="fas fa-home me-2" ></i>B-1, Soldier Tower, Commercial <span style={{marginLeft:'27px'}}> Complex, Vikas Puri, New Delhi-<span style={{marginLeft:'27px'}}>India,110018</span></span></a>
                            <a href="" style={{textDecorationLine:'none',fontSize:'14px'}}><i className="fas fa-home me-2"></i>7611 W Thomas Rd, Phoenix, AZ <span style={{marginLeft:'27px'}}>85033, United States</span></a>

                            <a href="" style={{textDecorationLine:'none',fontSize:'14px'}}><i className="fas fa-envelope me-2"></i> support@jdtechnicalsolution.com</a>
                            <a href="tel: +91 9971979794" style={{textDecorationLine:'none',fontSize:'14px'}}><i className="fas fa-phone me-2"></i>India <img className='flags' src={indian} alt="" /><span className='phone-number'>+91 9971979794</span></a>
                            <a href="tel: +1-888-821-5749 " style={{textDecorationLine:'none',fontSize:'14px'}}><i className="fas fa-phone me-2"></i>USA: <img className='flags'src={american} alt="" /><span className='phone-number'>+1-888-821-5749</span></a>

                            <div className="mt-5 d-flex align-items-center">
                                <i className="fas fa-share fa-2x text-white me-2"></i>
                                {/* <a className="btn-square btn btn-primary rounded-circle mx-1" to="https://www.facebook.com/profile.php?id=61552474081957"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" to=""><i className="fab fa-twitter"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" to="https://www.instagram.com/jdtechnicalsolution?igsh=c3pwdmwxZW1sOXN3"><i className="fab fa-instagram"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" to=""><i className="fab fa-linkedin-in"></i></a> */}
                                <a className="btn-square btn btn-primary rounded-circle mx-1" to="https://wa.me/qr/HIJ6WMUCWSAQO1"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-white">Company</h4>
                            <div ><a to="/"><i className="fas fa-angle-right me-2"></i> About</a></div>
                            {/* <a href=""><i className="fas fa-angle-right me-2"></i> Products</a> */}
                            {/* <a href=""><i className="fas fa-angle-right me-2"></i> Services</a> */}
                            <div ><a to="/websiteDevelopment"><i className="fas fa-angle-right me-2"></i> Plan</a></div>
                            <div ><a to="/"><i className="fas fa-angle-right me-2"></i> Testimonial</a></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-white">Support</h4>
                            <div ><a to="/contact"><i className="fas fa-angle-right me-2"></i> Contact</a></div>
                            <div  ><a to="/SLA"><i className="fas fa-angle-right me-2"></i> SLA</a></div>
                            <div ><a to="/privacyPolicy"><i className="fas fa-angle-right me-2"></i> Privacy Policy</a></div>
                            <div ><a to="/t&c"><i className="fas fa-angle-right me-2"></i> Terms and Conditions</a></div>
                            {/* <a href=""><i className="fas fa-angle-right me-2"></i> Sitemap</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Cookie policy</a> */}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item">
                            <div className="row gy-3 gx-2 mb-4">
                                <div className="col-xl-6">
                                    <form>
                                        <div className="form-floating">
                                            <select className="form-select bg-dark border" id="select1">
                                                <option value="1">Arabic</option>
                                                <option value="2">German</option>
                                                <option value="3">Greek</option>
                                                <option value="3">New York</option>
                                            </select>
                                            <label htmlFor="select1">English</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xl-6">
                                    <form>
                                        <div className="form-floating">
                                            <select className="form-select bg-dark border" id="select1">
                                                <option value="1">USD</option>
                                                <option value="2">EUR</option>
                                                <option value="3">INR</option>
                                                <option value="3">GBP</option>
                                            </select>
                                            <label htmlFor="select1">$</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <h4 className="text-white mb-3">Payments</h4>
                            <div className="footer-bank-card">
                                <a to="/" className="text-white me-2"><i className="fab fa-cc-amex fa-2x"></i></a>
                                <a to="/" className="text-white me-2"><i className="fab fa-cc-visa fa-2x"></i></a>
                                <a to="/" className="text-white me-2"><i className="fas fa-credit-card fa-2x"></i></a>
                                <a to="/" className="text-white me-2"><i className="fab fa-cc-mastercard fa-2x"></i></a>
                                <a to="/" className="text-white me-2"><i className="fab fa-cc-paypal fa-2x"></i></a>
                                <a to="/" className="text-white"><i className="fab fa-cc-discover fa-2x"></i></a>
                            </div>
                            <div className='footer-bank-card my-3'>
                            <img className=' social-links ms-3' src={certification1} alt="" style={{ width: '35%' }} />&nbsp;&nbsp;&nbsp;
                            <img src={googlePartners} alt="" style={{ width: '35%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid p-0 copyright text-body">
            <div className="container p-0 mt-0">
                <div className="row g-4 align-items-center mt-0 p-0">
                    <div className="col text-center mt-0 text-white mb-md-0 p-0">
                        <span className='text-white'>Copyright </span><i className="fas fa-copyright text-white me-2"></i>2014 | All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
