import React from 'react';
import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../../components/MobileMenu'

import './style.css'

const Header = () => {

    return(

        <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-10">
                            <div className="logo">
                                <h2><Link to='/home'>Bính<span><i className="fa fa-heart" aria-hidden="true"></i></span>Hiền</Link></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    <li><AnchorLink href='#home'>HOME</AnchorLink></li>
                                    <li><AnchorLink href='#couple'>COUPLE</AnchorLink></li>
                                    <li><AnchorLink href='#story'>STORY</AnchorLink></li>
                                    <li><AnchorLink href='#event'>EVENTS</AnchorLink></li>
                                    <li><AnchorLink href='#gallery'>GALLERY</AnchorLink></li>
                                    <li><AnchorLink href='#celebration'>CELEBRATION</AnchorLink></li>
                                    {/* <li><AnchorLink href='#rsvp'>RSVP</AnchorLink></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
             </div>
      </div>
        
    )
}

export default Header;
