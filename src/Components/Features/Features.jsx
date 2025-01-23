
export function Featureweb(){

    return(
        <div className="container-fluid feature overflow-hidden py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "900px"}}>
                    <h4 className="text-primary">Our Feature</h4>
                    <h1 className="display-5 mb-4">Important Features For Email Marketing</h1>
                    <p className="mb-0">Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.
                    </p>
                </div>
                <div className="row g-4 justify-content-center text-center mb-5">
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="text-center p-4">
                            <div className="d-inline-block rounded bg-light p-4 mb-4"><i className="fas fa-envelope fa-5x text-secondary"></i></div>
                            <div className="feature-content">
                                <a href="#" className="h4">Email Marketing <i className="fa fa-long-arrow-alt-right"></i></a>
                                <p className="mt-4 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="text-center p-4">
                            <div className="d-inline-block rounded bg-light p-4 mb-4"><i className="fas fa-mail-bulk fa-5x text-secondary"></i></div>
                            <div className="feature-content">
                                <a href="#" className="h4">Email Builder <i className="fa fa-long-arrow-alt-right"></i></a>
                                <p className="mt-4 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="text-center rounded p-4">
                            <div className="d-inline-block rounded bg-light p-4 mb-4"><i className="fas fa-sitemap fa-5x text-secondary"></i></div>
                            <div className="feature-content">
                                <a href="#" className="h4">Customer Builder <i className="fa fa-long-arrow-alt-right"></i></a>
                                <p className="mt-4 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="text-center rounded p-4">
                            <div className="d-inline-block rounded bg-light p-4 mb-4"><i className="fas fa-tasks fa-5x text-secondary"></i></div>
                            <div className="feature-content">
                                <a href="#" className="h4">Campaign Manager <i className="fa fa-long-arrow-alt-right"></i></a>
                                <p className="mt-4 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="my-3">
                            <a href="#" className="btn btn-primary d-inline rounded-pill px-5 py-3">More Features</a>
                        </div>
                    </div>
                </div>
                <div className="row g-5 pt-5" style={{marginTop: "3rem"}}>
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="feature-img RotateMoveLeft h-100" style={{objectFit: "cover"}}>
                            <img src="/images/features-1.png" className="img-fluid w-100 h-100" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
                        <h4 className="text-primary">Fearutes</h4>
                        <h1 className="display-5 mb-4">Push Your Visitors Into Happy Customers</h1>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, suscipit itaque quaerat dicta porro illum, autem, molestias ut animi ab aspernatur dolorum officia nam dolore. Voluptatibus aliquam earum labore atque.
                        </p>
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex">
                                    <i className="fas fa-newspaper fa-4x text-secondary"></i>
                                    <div className="d-flex flex-column ms-3">
                                        <h2 className="mb-0 fw-bold">285</h2>
                                        <small className="text-dark">Created Projects</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex">
                                    <i className="fas fa-users fa-4x text-secondary"></i>
                                    <div className="d-flex flex-column ms-3">
                                        <h2 className="mb-0 fw-bold">6560</h2>
                                        <small className="text-dark">Happy Clients</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <a href="#" className="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}