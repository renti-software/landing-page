import React from 'react';

function Services() {
    return (
        <div id="services">
            <section id="fh5co-services" data-section="services">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 section-heading text-left">
                            <h2 class=" left-border to-animate">Product</h2>
                            <div class="row">
                                <div class="col-md-8 subtext to-animate">
                                    <h3 style={{fontSize:30,fontWeight:'normal'}}>Check below what we are all about!</h3>
                                    <h3 style={{fontSize:30,fontWeight:'normal'}}>Or check our <a href="https://gitlab.com/renti-software/">repository</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i class="icon to-animate-2 fas fa-robot"></i>
                            <h3>Code Quality Analysis</h3>
                            <p>In order to improve our Code Quality and Security, we have implemented Static Code Analysis metrics in our project. This is done using <a href="https://docs.gitlab.com/ee/user/project/merge_requests/code_quality.html">GitLab Code Quality<a>, which uses <a href="https://codeclimate.com/">Code Climate Engines<a>. This steps are incorporated into our Continuous Integration and Deployment pipeline, so that it is embed in each commit, and easily readable in each Merge Request</p>
                        </div>

                        <div class="clearfix visible-sm-block"></div>

                        <div class="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i class="icon to-animate-2 fas fa-laptop"></i>
                            <h3>Mobile and Web applications</h3>
                            <p>In order to interact with the different users of our system, we will develop different applications for each one. For the patients, we will be developing both a mobile app and a web app. For the doctor and the admin of the hospital, both will have a customized web app. Both the applications will be developed with <strong>React.</strong></p>
                        </div>
                        <div class="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i class="icon to-animate-2 fas fa-cloud-meatball"></i>
                            <h3>Service layer REST API</h3>
                            <p>This module is the core of our information system, responsible to communicate with all the other components. This <strong>REST API</strong>, built in <strong>Django</strong>, will do CRUD operations to a <strong>PostgreSQL</strong> database and send data to the clients applications.</p>
                        </div>
                        <div class="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i class="icon to-animate-2 fas fa-sync-alt"></i>
                            <h3>Continuous Integration / Continuous Deployment</h3>
                            <p>We will be using the <strong>CI/CD</strong> practise to develop and deploy all our components. For that, we will be using <strong>Docker containers</strong> and also <strong>Gitlab pipelines.</strong></p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
