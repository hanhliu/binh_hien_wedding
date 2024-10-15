import React from 'react'
import Sectiontitle from '../section-title'
import events1 from '../../images/events/600x430_1.jpg'
import events2 from '../../images/events/600x430_2.jpg'
import events3 from '../../images/events/600x430_3.jpg'
import LocationMap from '../LocationModal/LocationModal'

import './style.css'

const Location = () => {
    return (


        <div id="event" className="service-area section-padding">
            <div className="container">
                <Sectiontitle section={'Lễ Thành hôn của chúng tôi'} />
                <div className="service-area-menu">
                    <div className="Ceremony-wrap">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ceromony-img">
                                    <img src={events1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ceromony-content">
                                    <h3>Lễ Thành hôn</h3>
                                    <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                                    <span>256 Apay Road,Califonia Bong, London</span>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                                    {/* <LocationMap buttonClass={'location-btn'} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="ceromony-content ceromony-content2">
                                <h3>Tiệc cưới nhà trai</h3>
                                <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                                <span>256 Apay Road,Califonia Bong, London</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                                {/* <LocationMap buttonClass={'location-btn'} /> */}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={events2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={events3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                                <h3>Tiệc cưới nhà gái</h3>
                                <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                                <span>256 Apay Road,Califonia Bong, London</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                                {/* <LocationMap buttonClass={'location-btn'} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;