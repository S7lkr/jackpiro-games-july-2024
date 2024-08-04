export default function Header() {
    return (
        <header>
            {/* <!-- header inner --> */}
            <div className="header-top">
                <div className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">

                                <ul className="top_icon">
                                    <li className="button_login"> <a href="#">Home</a> </li>
                                    <li className="button_login"> <a href="#">Login</a> </li>
                                    <li> <a href="#about">Signup</a> </li>
                                    <li className="mean-last">
                                        <a href="#"><img src="images/search_icon.png" alt="#" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end header inner --> */}

                {/* <!-- end header --> */}
                <section className="slider_section">
                    <div className="banner_main">

                        <div className="container-fluid">
                            <div className="row">
                                {/* <div className="col-md-2 padding_left0">
                                    <div className="menu-area">
                                        <div className="limit-box">
                                            <nav className="main-menu">
                                                <ul className="menu-area-main">
                                                    <li className="active"> <a href="#game">Game</a> </li>
                                                    <li> <a href="#software">Software</a> </li>
                                                    <li> <a href="#about">About</a> </li>
                                                    <li> <a href="#testimonial">Testimonial</a> </li>
                                                    <li> <a href="#contact">Contact</a> </li>

                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
                                    <div className="text-bg">
                                        <h1>amazing<br /> 3d games!</h1>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut</span>
                                        <a href="#">download</a>
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                                    <div className="text-img">
                                        <figure><img src="images/img.png" alt="#" /></figure>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    );
}