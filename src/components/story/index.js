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
                                        <span className="date">20/03/2021</span>
                                        <p>Lần đầu tiên cô dâu và chú rể gặp nhau là vào năm 2021. Cô dâu, vốn là bạn của em chú rể, đã ghé thăm nhà chú rể, và từ đó, những tình cảm ban đầu đã nảy nở, mở ra chặng đường tìm hiểu và gắn kết giữa hai người.</p>
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
                                        <p>Đến một ngày tháng 7 năm 2021, tại khuôn viên phía sau bệnh viện huyện Đông Anh, sau một thời gian tìm hiểu, chú rể đã quyết định ngỏ lời yêu. Theo cô dâu kể lại, chú rể phải nói mãi mới được câu 'Làm người yêu anh nhé', trong khi tim đập chân tay run rẩy. Từ khoảnh khắc đó, câu chuyện tình yêu đẹp của họ chính thức bắt đầu.</p>
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
                                        <h2>Phút Giây Cầu Hôn</h2>
                                        <span className="date">11/09/2024</span>
                                        <p>Vào một ngày trời thu tháng 9 yên bình tại Hà Nội, hai bên gia đình đã có một buổi gặp mặt thân mật. Chính trong không khí giản dị đó, như một lời cầu hôn tự nhiên từ chú rể và lời đồng ý chân thành từ cô dâu, họ đã cùng nhau quyết định xây dựng tổ ấm chung. Đó là một khoảnh khắc đầy ý nghĩa, đánh dấu bước ngoặt lớn trong hành trình gắn bó và sẻ chia của hai người, từ đây cùng nhau vun vén cho mái ấm của riêng mình.</p>
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
                                        <p>Và rồi, họ luôn mong chờ giây phút cùng nhau bước vào lễ đường, như một cột mốc quan trọng đánh dấu sự trưởng thành và chín chắn trong tình yêu. Đó là lời hứa đầy trách nhiệm mà họ dành cho nhau, cùng đồng hành và sẻ chia trong chặng đường phía trước. Từ đây, cả hai sẽ cùng nhau xây dựng và vun đắp tổ ấm, nơi chứa đựng những giá trị yêu thương và hạnh phúc trọn vẹn.</p>
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