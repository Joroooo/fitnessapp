import { Component } from 'react';
import SingleOffer from '../SingleOffer/SingleOffer.js';

import offersService from '../../services/offersServices.js';

import '../../basecss/base.scss';
import '../../basecss/typography.css';
import './offers.scss';

import img from '../../images/class/yoga-class.jpg';

class Offers extends Component {
    constructor(props){
        super(props);


        this.state = {
            offers: [],  
        }
    }
    num = 0;

    icreace() {
        // normally ID in DB Table is used as key, but now since you use an arr....
        this.num++;
        return this.num.toString();
    }

    componentDidMount() {

        offersService.getAllOffers()
        .then(offers => {
            this.setState(() => ({offers: this.state.offers}));
        });

       // fetch('http://localhost:3000/offers')
        //    .then(res => res.json())
        //    .then(returnedOffers => {
        //        this.setState(() => ({returnedOffers: this.state.offers}));
       //     });
    }

    render() {

        const renderedOffers =  this.props.listOfOffers?.map(el => {
                return <SingleOffer
                key={this.icreace()}
                name={el.name}
                price={el.price}
                visits={el.visits}
                duration={el.duration}
                description={el.description}
                />
            });
            console.log(renderedOffers);
        return(
       
            <section className="class section" id="class">
                      <div className="container">
                           <div className="row">
       
                                   <div className="col-lg-12 col-12 text-center mb-5">
                                       <h6>Get A Perfect Body</h6>
       
                                       <h2 >Our Training Classes</h2>
                                    </div>

                                    {renderedOffers}

                           </div>
                      </div>
            </section>
        );
    }
}

export default Offers;
