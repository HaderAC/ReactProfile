import React from 'react';

const Footer = () => {
    return (

        <footer className="page-footer font-small blue-grey lighten-5">

            <div id="footerdiv">
                <div className="container">


                    <div className="row py-4 d-flex align-items-center">


                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0"> Connect with us on social Media!</h6>
                        </div>



                        <div className="col-md-6 col-lg-7 text-center text-md-right">


                            <a className="fb-ic">
                                <i className="fab fa-facebook-f white-text mr-4"> </i>
                            </a>

                            <a className="tw-ic">
                                <i className="fab fa-twitter white-text mr-4"> </i>
                            </a>

                            <a className="gplus-ic">
                                <i className="fab fa-google-plus-g white-text mr-4"> </i>
                            </a>

                            <a className="li-ic">
                                <i className="fab fa-linkedin-in white-text mr-4"> </i>
                            </a>

                            <a className="ins-ic">
                                <i className="fab fa-instagram white-text"> </i>
                            </a>

                        </div>


                    </div>


                </div>
            </div>


            <div className="container text-center text-md-left mt-5">


                <div className="row mt-3 dark-grey-text">


                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">


                        <h6 className="text-uppercase font-weight-bold">Company name</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                        <p>Feel free to explore my page and see how we could service your needs.</p>

                    </div>


                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    </div>



                    <div className="col-md-3 col-lg-6 col-xl-2 mx-auto mb-4">


                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                        <p>
                            <a className="dark-grey-text" href="#!">Associate Account's</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">Become an Associate</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">Sample Rates</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">Help</a>
                        </p>

                    </div>


                    <aside className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                        <p>
                            <i className="fas fa-home mr-3"></i> Miami, FL 33143, US</p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> Hadercortes@gmail.com</p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> + 01 786 899 3520</p>

                    </aside>


                </div>


            </div>


            <div className="footer-copyright text-center text-black-50 py-3">© 2020 Copyright:
<a className="dark-grey-text" href="#"> HADER CORTES Co.</a>
            </div>


        </footer>


    );
};

export default Footer;