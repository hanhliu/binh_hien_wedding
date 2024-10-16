import React from 'react'
import {Link} from 'react-router-dom'
import strory1 from '../../images/story/600x421_1.jpg'
import strory2 from '../../images/story/600x421_2.jpg'
import strory3 from '../../images/story/600x421_3.jpg'
import strory4 from '../../images/story/600x421_4.jpg'
import './style.css'


const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Our Story</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="story clearfix">
                            <div className="story-top"></div>
                            <div className="content-wrapper">
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory1} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Lần Gặp Đầu Tiên</h2>
                                        <span className="date">09/06/2021</span>
                                        <p>Lần đầu tiên cô dâu và chú rể gặp nhau là vào mùa hè năm 2021. Cô dâu, vốn là bạn của em chú rể, đã ghé thăm nhà chú rể, và từ đó, những tình cảm ban đầu đã nảy nở, mở ra chặng đường tìm hiểu và gắn kết giữa hai người.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Khoảnh Khắc Ngỏ Lời Yêu</h2>
                                        <span className="date">16/07/2021</span>
                                        <p>"Vào một buổi tối năm 2021, khi dịch COVID đã được kiểm soát, tại khuôn viên yên tĩnh sau bệnh viện huyện Đông Anh, anh đã thổ lộ với em những lời yêu thương chân thành. Trái tim đập liên hồi, tay run rẩy, nhưng anh vẫn nói ra từ tận đáy lòng. Và rồi, anh được nghe câu trả lời ngọt ngào nhất từ em, đánh dấu bước ngoặt quan trọng trong tình yêu của chúng mình." - Chú rể chia sẻ.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory3} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Quyết Định Về Chung Một Nhà</h2>
                                        <span className="date">11/09/2024</span>
                                        <p>Vào một ngày tháng 9, tình cờ trời đổ mưa, như thể càng làm cho câu chuyện của chúng mình thêm phần đặc biệt. Hôm đó, hai gia đình đã quyết định tổ chức lễ dạm ngõ cho đôi trẻ, như một lời hứa hôn thiêng liêng giữa hai bên. Không cần một màn cầu hôn cầu kỳ, chỉ với cái gật đầu đồng ý từ bố mẹ hai bên là đủ. Và thế là, trong buổi gặp gỡ giản dị, ấm cúng ấy, chúng mình đã chính thức quyết định về chung một nhà, bắt đầu hành trình cùng nhau xây dựng tổ ấm.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory4} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Ngày Lễ Thành Hôn</h2>
                                        <span className="date">10/11/2024</span>
                                        <p>Tình yêu của chúng tôi đã trải qua biết bao khoảnh khắc đáng nhớ, và giờ đây, lễ cưới chính là cột mốc đánh dấu sự trưởng thành của cả hai trong chặng đường yêu thương. Đó là lời khẳng định cho một quyết định đầy chín chắn, và cũng là lời hứa sẽ luôn yêu thương, đồng hành cùng nhau trên mọi nẻo đường của cuộc sống.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="story-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;