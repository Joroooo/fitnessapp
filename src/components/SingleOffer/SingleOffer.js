import { Component } from "react";

import * as offersService from '../../services/offersServices.js';
import img from '../../images/class/yoga-class.jpg';
import renderedOffers from '../offers/Offers.js'

import '../../basecss/base.scss';
import '../../basecss/typography.css';
import './singleOffer.scss';

class SingleOffer extends Component {

    constructor(props){
        super(props);
        this.offer = props;
      
    }

    render() {
        return (
            <div className="col-lg-4 col-md-6 col-12">
            <div className="class-thumb">
                <img src={img} className="img-fluid" alt="Class" />
                <div className="class-info">
                    <h3 className="mb-1">{this.offer.name}</h3>

                    <span class="description">Number of Visits :<strong> {this.offer.visits}</strong></span>
                 
                    <span class="description" >Duration :<strong> {this.offer.duration}</strong></span>
                    <span className="class-price">${this.offer.price}</span>

                    <p className="mt-3">{this.offer.description}</p>
                </div>
            </div>
        </div>
        );
    }
}
export default SingleOffer;