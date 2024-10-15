import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Collapse, CardBody, Card } from 'reactstrap';
import {Link} from 'react-router-dom'
import './style.css';

export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: false,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="close" onClick={this.menuHandler}><i className='fa fa-close'></i></div>
                    <div className="logo2">
                        <h2><Link to='/home'>Bính & Hiền</Link></h2>
                    </div>
                    <ul className="responsivemenu">
                        <li><AnchorLink href='#home'>HOME</AnchorLink></li>
                        {/* <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                    <li><Link to='/'>Home Style 1</Link></li>
                                    <li><Link to='/home2'>Home Style 2</Link></li>
                                    <li><Link to='/home3'>Home Style 3</Link></li>
                                    <li><Link to='/home4'>Home Style 4</Link></li>
                                </CardBody>
                            </Card>
                        </Collapse> */}
                        <li><AnchorLink href='#couple'>ABOUT US</AnchorLink></li>
                        <li><AnchorLink href='#story'>STORY</AnchorLink></li>
                        {/* <li><AnchorLink href='#people'>People</AnchorLink></li> */}
                        <li><AnchorLink href='#event'>EVENTS</AnchorLink></li>
                        <li><AnchorLink href='#gallery'>GALLERY</AnchorLink></li>
                        <li><AnchorLink href='#celebration'>CELEBRATION</AnchorLink></li>
                        {/* <li><AnchorLink  href='#rsvp'>RSVP</AnchorLink></li> */}
                    </ul>
                    
                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
            </div>
        )
    }
}
