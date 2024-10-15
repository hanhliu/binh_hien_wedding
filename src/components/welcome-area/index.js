import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import LocationMap from '../LocationModal/LocationModal'

const Welcome = () =>{
    return(
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day</h2>
                            <p>Chào mừng bạn đến với ngày trọng đại của chúng tôi! Chúng tôi rất hạnh phúc khi được chia sẻ khoảnh khắc đặc biệt này với 
                            những người thân yêu và bạn bè. Đây không chỉ là dấu mốc khởi đầu cho hành trình mới của chúng tôi, mà còn là dịp để cảm ơn tất cả những ai đã luôn bên cạnh và ủng hộ. 
                            Hãy cùng chúng tôi kỷ niệm ngày tuyệt vời này với niềm vui và hạnh phúc trọn vẹn.</p>
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