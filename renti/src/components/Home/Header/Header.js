import React from 'react';

import { useHistory } from 'react-router-dom';
import { Button } from "reactstrap";

import baseURIs from '../../../variables/baseURIs';

function Header() {

    let history = useHistory();


    return (
        <div id="header">
            <header role="banner" id="fh5co-header">
                <div class="container">
                    <nav class="navbar navbar-default">
                        <div class="navbar-header">
                            <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                            <a class="navbar-brand" href="index.html">Renti</a>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <ul class="nav navbar-nav navbar-right">
                                <li class="active"><a href="#" data-nav-section="home"><span>Home</span></a></li>
                                <li><a href="#" data-nav-section="services"><span>Product</span></a></li>
                                <li><a href="#" data-nav-section="about"><span>About</span></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );

}

export default Header;