import { Component } from "react";

import './aboutus.scss';
import '../../basecss/socialicons.css';
import '../../basecss/typography.css';
import trainerOne from '../../images/team/team-image.jpg';
import trainerTwo from '../../images/team/team-image01.jpg';

class Aboutus extends Component {
    constructor(props) {

        super(props)

    }

    render(){
        return (
      
            <section className="about section" id="about">
                      <div className="container">
                           <div className="row">
       
                                   <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
                                       <h2 className="mb-4">Hello, we are Gymso</h2>
       
                                       <p>Lorem*10
                    
                                       </p>
       
                                       <p>Lorem*10<a rel="nofollow" href="https://www.tooplate.com/view/2119-gymso-fitness" target="_parent">Gymso Fitness HTML template</a>, you can <a rel="nofollow" href="https://www.tooplate.com/contact" target="_parent">contact Tooplate</a> immediately. Thank you.</p>
       
                                   </div>
       
                                   <div className="ml-lg-auto col-lg-3 col-md-6 col-12">
                                       <div className="team-thumb">
                                           <img src={trainerOne} className="img-fluid" alt="Trainer"/>
       
                                           <div className="team-info d-flex flex-column">
       
                                               <h3>Mary Yan</h3>
                                               <span>Yoga Instructor</span>
       
                                               <ul className="social-icon mt-3">
                                                   <li><a href="#" className="fa fa-twitter"></a></li>
                                                   <li><a href="#" className="fa fa-instagram"></a></li>
                                               </ul>
                                           </div>
                                       </div>
                                   </div>
       
                                   <div className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12">
                                       <div className="team-thumb">
                                           <img src={trainerTwo} className="img-fluid" alt="Trainer"/>
       
                                           <div className="team-info d-flex flex-column">
       
                                               <h3>Catherina</h3>
                                               <span>Body trainer</span>
       
                                               <ul className="social-icon mt-3">
                                                   <li><a href="#" className="fa fa-instagram"></a></li>
                                                   <li><a href="#" className="fa fa-facebook"></a></li>
                                               </ul>
                                           </div>
                                       </div>
                                   </div>
       
                           </div>
                      </div>
            </section>
        );
    }
}
export default Aboutus;