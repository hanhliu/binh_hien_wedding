import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import qrbinh from '../../images/gift/img_qr_binh.jpg'
import qrhien from '../../images/gift/img_qr_hien.jpg'
import './style.css'

class Celebration extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:1500,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <div id='celebration' className="gift-area">
            <div className="container">
                  <div className="col-12">
                    <div className="section-title text-center">
                        <h2>Celebration</h2>
                        <p>Thật vui vì được gặp và đón tiếp các bạn trong đám cưới của chúng tôi.
                        Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!</p>
                    </div>
                </div>
                <div className="container">
                  <div className="couple-wrap">
                    <div className="row">
                      <div className="col-md-6 ">
                      <div className= "person-content">
                          <h2>Chú rể</h2>
                          <div className="couple-imgg">
                            <img src={qrbinh} alt="QR binh" />
                          </div>
                      </div>
                      </div>
                      <div className="col-md-6">
                        <div className= "person-content">
                          <h2>Cô dâu</h2>
                          <div className="couple-imgg">
                            <img src={qrhien} alt="QR hien" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}


// class Gift extends Component {
//     render() {
//       var settings = {
//         dots: false,
//         arrows: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay:true,
//         autoplaySpeed:1500,
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             }
//           ]
//       };
//       return (
//           <div className="gift-area">
//               <div className="container">
//                     <div className="col-12">
//                       <div className="section-title text-center">
//                           <h2>Gift Registration</h2>
//                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
//                       </div>
//                   </div>
//                   <div className="row gift-item">
//                       <div className="col-lg-12">
//                         <Slider {...settings}>
//                             <div className="item">
//                                 <img src={gift1} alt=""/>
//                             </div>
//                             <div className="item">
//                                 <img src={gift2} alt=""/>
//                             </div>
//                             <div className="item">
//                                 <img src={gift3} alt=""/>
//                             </div>
//                             <div className="item">
//                                 <img src={gift4} alt=""/>
//                             </div>
//                             <div className="item">
//                                 <img src={gift1} alt=""/>
//                             </div>
//                             <div className="item">
//                                 <img src={gift2} alt=""/>
//                             </div>
//                             <div className="item">
//                                 <img src={gift3} alt=""/>
//                             </div>
//                             <div className="item">
//                                 <img src={gift4} alt=""/>
//                             </div>
//                             </Slider>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       );
//     }
//   }

export default Celebration;