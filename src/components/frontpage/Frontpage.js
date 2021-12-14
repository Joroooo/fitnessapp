import { Component } from "react";

import '../../basecss/typography.css';
import './frontpage.scss';

class Frontpage extends Component {

    constructor(props){

        super(props)
    }

    render(){
        return(
            <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">

            <div className="bg-overlay"></div>

               <div className="container">
                    <div className="row">

                         <div className="col-lg-8 col-md-10 mx-auto col-12">
                              <div className="hero-text mt-5 text-center">

                                    <h6 >new way to build a healthy lifestyle!</h6>

                                    <h1 className="text-white" >Upgrade your body at Gymso Fitness</h1>

                                    <a href="#feature" className="btn custom-btn mt-3">Get started</a>

                                    <a href="#about" className="btn custom-btn bordered mt-3" >learn more</a>
                                   
                              </div>
                         </div>

                    </div>
               </div>
     </section>
        );
    }
}

export default Frontpage;