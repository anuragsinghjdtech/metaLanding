import React from 'react';
import meta1 from '../img/meta1.webp'
import facebook from '../img/meta2.png';
import instagram from '../img/meta3.png';
import services from '../img/meta7.webp'

export default function Meta() {
    return (
        <div className='meta'>
            <div className='intro'>
                <div className='container-fluid row p-0'>
                    <div className='col-6'>
                        <div className='text'>
                            <p className='head'>The #1 Facebook Ads Agency to Help Your Small Business Scale</p>
                            <p className='content'>
                                Start driving sales and leads directly from Facebook ads! Our Facebook advertising agency has helped thousands of small businesses just like yours create a Facebook marketing strategy that drives revenue at an affordable cost. Get started with our Facebook ads agency today!
                            </p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img  className="image"src={meta1} alt="" />
                    </div>
                </div>
            </div>
            <div className='increase-revenue'>
                <p className='head text-center'>Increase the revenue our Meta Ads Agengy</p>
                <p className='content'>
                    Our Facebook advertising agency has over a decade of experience driving results for our clients from Facebook ads. With our social media advertising services, we create Facebook ad campaigns that not only reach your target audience but also convert them into buying customers. We’ve driven millions in conversion value for our clients, so we know how to put together a Facebook ad campaign that increases revenue for any small business!
                </p>
                <div>
                    <div className=" plans row row-cols-1 row-cols-md-3 g-4 p-5">
                        <div className="col">
                            <div className="card h-100">

                                <div className="card-body p-0">
                                    <div className="title bg-info text-white">Image Ads</div>
                                    <div className="card-text p-3">
                                        <p className='plan mt-3'>
                                            <i class="bi bi-shield-fill-check text-info"></i>
                                            <span className='ms-4 text-info fw-bold'>Image Ads</span>
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                        <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark' style={{lineHeight:'1'}}>2 Vertical Videos, 1 Actor per Quarter</div>
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                        <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark'>Advanced ad targeting</div>
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                        <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark'>Advertising creation</div>
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                        <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark'>Bid Management & Optimization</div>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">

                                <div className="card-body p-0">
                                    <div className="title bg-info text-white">Video Ads</div>
                                    <div className="card-text p-3">
                                        <p className='plan mt-3'>
                                            <i class="bi bi-shield-fill-check text-info"></i>
                                           <span className='ms-4 text-info fw-bold'>Video Ads</span> 
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                            <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark' style={{lineHeight:'1'}}>Custom Graphic and Branded Image</div>
                                           
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                            <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark'>Advanced ad targeting <br /></div>
                                            
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                            <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark'>Advertising creation</div>
                                            
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                            <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark'>Bid Management & Optimization</div>
                                        </p>
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">

                                <div className="card-body p-0">
                                    <div className="title bg-info text-white">Image + Video Ads</div>
                                    <div className="card-text p-3">
                                        <p className='plan mt-3'>
                                            <i class="bi bi-shield-fill-check text-info"></i>
                                            <span className='ms-4 fw-bold text-info'>Image + Video Ads</span>
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                            <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark' style={{lineHeight:'1'}}>2 Vertical Videos, 1 Actor per Quarter</div>
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                            <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark' style={{lineHeight:'1'}}>Custom Graphics and branded Image Ads</div>
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                            <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark'>Advertising creation</div>
                                        </p>
                                        <hr />
                                        <p className='plan'>
                                            <i class="bi bi-shield-fill-check"></i>
                                            <div className='text-dark'>Bid Management & Optimization</div>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='services'>
                <div className="services-cards row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={facebook} className="card-img-top fb-img" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Facebook Ads Management</h3>
                                <p className="card-text">
                                    <p><i class="bi bi-shield-fill-check">&nbsp;&nbsp;Locate and convert your specific target market with expert-made Facebook ads</i></p>
                                    <p><i class="bi bi-shield-fill-check">&nbsp;&nbsp;Take advantage of full-funnel targeting and lookalike audiences with our team’s guidance</i></p>
                                    Facebook has over 3 billion users, making it a lucrative platform for any business because any business can find and nurture their audience on the platform. Our team has generated millions and millions of dollars for small businesses via Facebook ads and we can do the same for you. Whether you want to increase sales directly on your website or increase leads and consultations, either way we have the experience and know-how to skyrocket your business with Facebook ads made just for you!                            
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={instagram} className="card-img-top insta-img" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Instagram Ads Management</h3>
                                <p className="card-text">
                                    <p><i className="bi bi-shield-fill-check">&nbsp;&nbsp;Capture more customers with strategically-made Instagram reels ads created just for your business and target market</i></p>
                                    <p><i className="bi bi-shield-fill-check">&nbsp;&nbsp;Identify people within your target market who are specifically likely to convert into a customer or lead with the help of our expert team</i></p>
                                    Our team leverages Facebook ads and Instagram ads together for one big powerful boost in your ROI! Our team looks at the bigger picture of your marketing funnel and creates Instagram ads that work in harmony with your Facebook ads and vice versa with the intention of moving followers to customers. We’ve managed over $5M in ad spend in Facebook and Instagram ad accounts, and it’s because small businesses know they can trust us to deliver the results they need as their Facebook ads agency!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='who-we-are my-5'>
                <div className='row container-fluid'>
                    <div className='col-6'>
                        <img className='img' src={services} alt="" />
                    </div>
                    <div className='col-6'>
                        <p className='head'>Mastering the Social Media Strategy Game</p>
                        <p className='content'>
                            It’s now more important than ever to make sure you’re making an effort to get your brand name out on the web in new and creative ways. With the popularity of social media marketing on the rise, you’re in for a big surprise if you don’t. And not a good one.
                            Sociallyin is equipped and ready to take your business, product, and company goals back to the drawing board.
                            Here we’ll spin it into a social media strategy that works for you and drives traffic and engagement with the help of our creative experts.
                        </p>
                    </div>
                    <div className='col-6'>
                        <p className='head'>Strategies to Boost Sales and Drive Traffic</p>
                        <p className='content'>
                            At Sociallyin, our creative team is not just focused on taking stunning photos, crafting compelling content, and designing eye-catching ads. We roll up our sleeves and get to work building your brand from the ground up!
                            We are dedicated to providing your business with the intelligence and thoughtfulness it deserves through a comprehensive process of oversight, research, and development, tailored to your company’s specific needs and targeted social media platforms.
                            We don’t rely on a one-size-fits-all approach. Instead, our social media management team creates customized strategies that are uniquely suited to your business goals.
                        </p>
                    </div>
                    <div className='col-6'>
                        <img className='img' src="https://sociallyin.com/wp-content/uploads/2023/01/SMS-Boost-Sales-and-Drive-Traffic-jpg.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className='end-meta'>
                <p className='head1 text-center'>What are you wating for</p>
                <p className='head2 text-center'>Work With US!</p>
            </div>
            <div style={{ height: '45px',textAlign:'center' }}><a href="tel: +1-888-821-5749 " className="btn-hover-bg btn btn-primary bubble-btn rounded-pill text-white py-md-3 py-1 px-md-5 px-2 mb-5"><span className=''>Book your Free Consultation Now!</span></a></div>
        </div>
    )
}
