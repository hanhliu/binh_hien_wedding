import React from 'react'
import Sectiontitle from '../section-title'
import events1 from '../../images/events/600x430_1.jpg'
import events2 from '../../images/events/600x430_2.jpg'
import events3 from '../../images/events/600x430_3.jpg'

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
                                    <span>Chủ nhật, ngày 10 tháng 11 năm 2024</span>
                                    <span>Nhà trai, Số 2, Ngõ 191 Phương Trạch, Vĩnh Ngọc, Đông Anh, Hà Nội</span>
                                    <p>Chú rể: 039 812 1590.         Cô dâu: 098 732 0472</p>
                                    <div className="location-btn">
                                        <a 
                                            href="https://maps.app.goo.gl/Fz1nBaL2R7hk88g16" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            Xem vị trí
                                        </a>
                                    </div>
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
                                <span>Thứ 7 - Chủ nhật, ngày 9, 10 tháng 11 năm 2024</span>
                                <span>Số 2, Ngõ 191 Phương Trạch, Vĩnh Ngọc, Đông Anh, Hà Nội</span>
                                <p>Chú rể: 039 812 1590</p>
                                <div className="location-btn">
                                        <a 
                                            href="https://maps.app.goo.gl/Fz1nBaL2R7hk88g16" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            Xem vị trí
                                        </a>
                                    </div>
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
                                <span>Thứ 7 - Chủ nhật, ngày 9, 10 tháng 11 năm 2024</span>
                                <span>Ngõ 43, Đồng Nhân, Hải Bối, Đông Anh, Hà Nội</span>
                                <p>Cô dâu: 098 732 0472</p>
                                <div className="location-btn">
                                        <a 
                                            href="https://goo.gl/maps/ajdBca4tx9YetXTH6" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            Xem vị trí
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;