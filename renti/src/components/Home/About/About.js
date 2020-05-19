import React from 'react';

// import team pictures
import team01 from '../../../assets/home/team/team01.png';
import team02 from '../../../assets/home/team/team02.png';
import team03 from '../../../assets/home/team/team03.png';
import team04 from '../../../assets/home/team/team04.png';

function About() {
    return (
        <div id="about">
            <section id="fh5co-about" data-section="about">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 section-heading text-center">
                            <h2 class="to-animate">Our team</h2>
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 subtext to-animate">
                                    <h3>These are the actors of Renti project.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="fh5co-person text-center to-animate">
                                <figure><img src={team04} alt="Image" /></figure>
                                <h3>Tomás Costa</h3>
                                <span class="fh5co-position">Team Manager</span>
                                <ul class="social social-circle">
                                    <li><a href=""><i class="icon-globe"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/tomascostax/"><i class="icon-linkedin"></i></a></li>
                                    <li><a href="https://github.com/TomasCostaK"><i class="icon-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="fh5co-person text-center to-animate">
                                <figure><img src={team01} alt="Image" /></figure>
                                <h3>João Marques</h3>
                                <span class="fh5co-position">DevOps Master</span>
                                <ul class="social social-circle">
                                    <li><a href="https://jmarques.icu"><i class="icon-globe"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/joão-marques-62480119a/"><i class="icon-linkedin"></i></a></li>
                                    <li><a href="https://github.com/joao-p-marques"><i class="icon-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="fh5co-person text-center to-animate">
                                <figure><img src={team02} alt="Image" /></figure>
                                <h3>Francisco Jesus</h3>
                                <span class="fh5co-position">Product Owner</span>
                                <ul class="social social-circle">
                                    <li><a href=""><i class="icon-globe"></i></a></li>
                                    <li><a href="https://www.facebook.com/francisco.jesus.92"><i class="icon-facebook"></i></a></li>
                                    <li><a href="https://gitlab.com/franciscojesus"><i class="icon-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="fh5co-person text-center to-animate">
                                <figure><img src={team03} alt="Image" /></figure>
                                <h3>Miguel Matos</h3>
                                <span class="fh5co-position">QA Engineer</span>
                                <ul class="social social-circle">
                                    <li><a href=""><i class="icon-globe"></i></a></li>
                                    <li><a href="https://gitlab.com/miguelmatos"><i class="icon-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default About;