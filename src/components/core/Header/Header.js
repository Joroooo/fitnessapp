import { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import '../../../basecss/base.scss';
import './header.scss';
import '../../../basecss/typography.css';
import '../../../basecss/buttons.css';
import '../../../basecss/socialicons.css';


class Header extends Component {

    constructor(props) {

        super(props)

    }

    render() {

        return(
            <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
    
                <NavLink to="/" className="navbar-brand" >Just Fit</NavLink>
    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item">
                            <NavLink to="/" exact={true} className="nav-link smoothScroll">Home</NavLink>
                        </li>
    
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active" exact={true} className="nav-link smoothScroll">About Us</NavLink>
                        </li>
    
                        <li className="nav-item">
                            <NavLink to="/offers" activeClassName="active" exact={true} className="nav-link smoothScroll">Offers</NavLink>
                        </li>
    
                        <li className="nav-item">
                            <NavLink to="/schedule" activeClassName="active" exact={true} className="nav-link smoothScroll">Schedules</NavLink>
                        </li>
    
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="active" exact={true} className="nav-link smoothScroll">Contact</NavLink>
                        </li>
                    </ul>
    
                    <ul className="social-icon ml-lg-3">
                        <li><a href="https://fb.com/tooplate" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-instagram"></a></li>
                    </ul>
                </div>
    
            </div>
        </nav>
        );

    }


}

export default Header;
