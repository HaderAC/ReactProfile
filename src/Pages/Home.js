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

                            <div className="card-body">
                                <p className="card-text">
                                    “Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.
                                    So throw off the bowlines. Sail away from the safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover.”
                                    MT. 😆
                        </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>


        </div>
    );
};

export default Home;