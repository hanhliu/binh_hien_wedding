import React from 'react'
import {Link} from 'react-router-dom'
import Sectiontitle from '../section-title'
import couple1 from '../../images/couple/img-1.jpg'
import couple2 from '../../images/couple/img-2.jpg'
import couple3 from '../../images/couple/2.png'
import './style.css'

const Couple = () => {
    return(
        <div id="couple" className="about-wrap">
            <div className="couple-area section-padding pb-70">
                <Sectiontitle section={'Happy Couple'}/>
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={couple1} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Ngọc Bính</h3>
                                            <p>Chú rể là một chàng trai đam mê khám phá khắp mọi nơi, yêu thích sự tự do trên những chặng đường vi vu. 
                                            Không chỉ vậy, anh còn có niềm say mê lớn với kỹ thuật. Từ khi gặp cô dâu, chú rể đã trưởng thành hơn, 
                                            luôn hướng về gia đình với trọn vẹn tình yêu và trách nhiệm.</p>
                                        </div>
                                        <div className="social-icon">
                                            <ul className="d-flex">
                                                <li><a href="https://www.facebook.com/profile.php?id=100004388221170" target="_blank" rel="noopener noreferrer">
                                                        <span className="fa fa-facebook"></span></a></li>
                                                {/* <li><a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
                                                        <span className="fa fa-zalo"></span></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 couple-single">
                                <div className="couple-shape">
                                   <img src={couple3} alt="shape"/>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={couple2} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Minh Hiền</h3>
                                            <p>Cô dâu là một cô gái có niềm đam mê cháy bỏng với khoa học kỹ thuật, đồng thời cũng yêu thích việc khám phá những miền đất mới. 
                                            Gặp được chú rể, cô như tìm thấy tri kỷ của đời mình, 
                                            người mà cô sẵn sàng đồng hành qua những hành trình mới, cùng chia sẻ niềm đam mê và khám phá cuộc sống.</p>
                                        </div>
                                        <div className="social-icon">
                                            <ul className="d-flex">
                                            <li><a href="https://www.facebook.com/profile.php?id=100009455429412" target="_blank" rel="noopener noreferrer">
                                                    <span className="fa fa-facebook"></span></a></li>
                                            {/* <li><a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
                                                    <span className="fa fa-instagram"></span></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
        
    )
}

export default Couple;