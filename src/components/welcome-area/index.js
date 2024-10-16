import React from 'react'
import './style.css'


const Welcome = () =>{
    return(
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day</h2>
                            <p>Kính mời bạn bè gần xa, tất cả những người đã nhận được thư mời này vào lúc này. Bạn là người quan trọng nhất mà chúng tôi đã gặp ở những vĩ độ và kinh độ khác nhau trong cuộc đời. Vợ chồng chúng mình chân thành mời bạn đến dự lễ cưới của chúng tôi. Hy vọng bạn sẽ là nhân chứng cho tình yêu của chúng tôi trong ngày trọng đại này!</p>
                            {/* <div className="btn"><Link to="/home">RSVP</Link></div>
                            <LocationMap buttonClass={'location-btn'} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Welcome;