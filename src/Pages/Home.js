import React from 'react';

const Home = () => {
    return (
        <div>


            <section className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://pbs.twimg.com/profile_images/483080110233628673/p6ucgGHR.jpeg" className="img-fluid"
                            alt="Me" />
                    </div>
                    <article className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">Hader Cortes</h3>
                            <p className="card-text"> Was born in colombia 35 years ago and for the last 10 years has been working
                            in T.V production. His curiosity and willingless to adapt is what lets him find new, innovative
                            ways to accomplish tasks. Most of all he likes to create things he's proud of and hopes you'll let
                    him be a part of your dream.</p>
                        </div>
                    </article>
                </div>
            </section>


            <section id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-25"
                            src="./Screenshots/PP.png"
                            alt="Coming soon..." />
                        <p>First Project</p>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-25"
                            src="./Screenshots/Moods.png"
                            alt="Coming soon..." />
                        <p>Second Project</p>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-25"
                            src="./Screenshots/codePub.png"
                            alt="Coming soon..." />
                        <p>Third Project</p>
                    </div>
                </div>
                <a className="carousel-control-prev"  role="button" data-slide="prev">
                    <i className="fas fa-arrow-left"></i>
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" role="button" data-slide="next">
                    <i className="fas fa-arrow-right"></i>
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span className="sr-only">Next</span>
                </a>
            </section>


        </div>
    );
};

export default Home;