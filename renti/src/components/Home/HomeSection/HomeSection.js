import React from 'react';

import whiteLogo from '../../../assets/home/white-logo.png'
import { Link } from "react-router-dom"
import { Button } from "reactstrap";

function HomeSection() {
    return (
        <div id="home">
            <section id="fh5co-home" data-section="home" data-stellar-background-ratio="0.5">
                <div class="gradient"></div>
                <div class="container">
                    <div class="text-wrap">
                        <div class="text-inner">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2">
                                    <img class="to-animate" style={{marginTop: "-200px", width: "250px", height:"250px"}} src={whiteLogo}/>
                                    <h2 class="to-animate">You have more items laying around unused,</h2>
                                    <h2 class="to-animate">than you imagine</h2>
                                    <h1 class="to-animate">Start renting them today!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slant"></div>
            </section>
        </div>
    );
}

export default HomeSection;