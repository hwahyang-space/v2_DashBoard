import Link from 'next/link';

import AuthFooter from '@/components/authFooter';

const Home = () => {
	return (<>
        <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
            <div className="container">
                <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white Pretendard-Bold" href="https://dash.hwahyang.space" target="_blank">
                    dash.hwahyang.space
                </a>
                <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon mt-2">
                        <span className="navbar-toggler-bar bar1"></span>
                        <span className="navbar-toggler-bar bar2"></span>
                        <span className="navbar-toggler-bar bar3"></span>
                    </span>
                </button>
                <div className="collapse navbar-collapse Pretendard-Medium" id="navigation">
                    <ul className="navbar-nav mx-auto ms-xl-auto me-xl-7">
                        <li className="nav-item">
                            <a className="nav-link me-2" href="https://hwahyang.space" target="_blank">
                                <i aria-hidden className="fa-solid fa-house opacity-6 me-1"></i>
                                Homepage
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center me-2 active" aria-current="page" href="https://pf.hwahyang.space" target="_blank">
                                <i aria-hidden className="fa fa-chart-pie opacity-6 me-1"></i>
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link href="/SignIn" legacyBehavior>
                                <a id="linkText-header" className="nav-link me-2">
                                    <i aria-hidden className="fas fa-key opacity-6 me-1"></i>
                                    Sign In
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main className="main-content mt-0">
            <section className="min-vh-100 mb-8">
                <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg" style={{backgroundImage: 'url(\'https://cdn.hwahyang.space/hspace_v2/images/20200902_B.png?v=2023082501\')'}}>
                    <span className="mask bg-gradient-dark opacity-6" style={{backgroundImage: 'none', backgroundColor: '#000'}}></span>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 text-center mx-auto">
                                <h1 className="text-white mb-2 mt-5 Pretendard-Black">Welcome!</h1>
                                <p className="text-lead text-white Pretendard-Medium">Sign Up is required to continue.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-lg-n10 mt-md-n11 mt-n10">
                        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                            <div className="card z-index-0">
                                <div className="card-header text-center pt-4">
                                    <h5 className="Pretendard-Bold">Sign Up</h5>
                                </div>
                                <div className="alert alert-warning alert-dismissible fade show" role="alert" id="warnBox" style={{display: 'none'}}>
                                    <span className="alert-icon">
                                        <i aria-hidden className="fa-solid fa-triangle-exclamation"></i>
                                    </span>
                                    <span className="alert-text Pretendard-Medium" id="warnText"><strong>Warning!</strong> This is a warning alert—check it out!</span>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="card-body">
                                    <form role="form text-left">
                                        <div className="mb-3">
                                            <input type="text" name="Name" className="form-control" placeholder="Name"/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" name="Email" className="form-control" placeholder="Email"/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" name="Password" className="form-control" placeholder="Password"/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" name="PasswordConfirm" className="form-control" placeholder="Password Confirm"/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" name="ApprovalCode" className="form-control" placeholder="Approval Code"/>
                                        </div>
                                        <div className="form-check form-check-info text-left">
                                            <input className="form-check-input" name="AcceptTerms" type="checkbox" id="acceptTerms"/>
                                            <label className="form-check-label" htmlFor="acceptTerms">I agree the <a href="javascript:;" className="text-dark font-weight-bolder">Terms and Conditions</a></label>
                                        </div>
                                        <div className="text-center Pretendard-Bold">
                                            <button type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2">Sign in</button>
                                        </div>
                                        <div className="text-center Pretendard-Regular">
                                            <p className="text-sm mt-3 mb-0">Already have an account? <Link href="/SignIn" legacyBehavior><a id="linkText-card" className="text-dark font-weight-bolder">Sign in</a></Link></p>
                                            <p className="text-sm mt-3 mb-0">Inquiry: <a className="text-dark font-weight-bolder" href="mailto:me@hwahyang.space">me@hwahyang.space</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <AuthFooter />
    </>)
}

export default Home;
