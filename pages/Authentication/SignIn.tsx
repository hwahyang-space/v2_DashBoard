import { FieldErrors, useForm } from "react-hook-form";
import Link from 'next/link';

import AuthFooter from '@/components/authFooter';

interface ISignInHookFormTypes {
    email: string;
    password: string;
    rememberMe: boolean;
  }

const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignInHookFormTypes>();

    const onValid = (data: ISignInHookFormTypes) => {
        console.log(data);
    };

    const onInValid = (errors: FieldErrors) => {
        console.log(errors);
    };

	return (<>
        <div className="container position-sticky z-index-sticky top-0">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                        <div className="container-fluid pe-0">
                            <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 Pretendard-Bold" href="https://dash.hwahyang.space" target="_blank">
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
                                <ul className="navbar-nav mx-auto ms-xl-auto me-xl-7" style={{marginRight: 0}}>
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
                                        <Link href="/SignUp" legacyBehavior>
                                            <a id="linkText-header" className="nav-link me-2">
                                                <i aria-hidden className="fas fa-key opacity-6 me-1"></i>
                                                Sign Up
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <main className="main-content mt-0">
            <section>
                <div className="page-header min-vh-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                                <div className="card card-plain mt-8">
                                    <div className="card-header pb-0 text-left bg-transparent">
                                        <h3 className="font-weight-bolder text-primary text-gradient Pretendard-Black">Welcome back!</h3>
                                        <p className="mb-0 Pretendard-Medium">Sign In is required to continue.</p>
                                    </div>
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert" id="warnBox" style={{display: 'none'}}>
                                        <span className="alert-icon">
                                            <i aria-hidden className="fa-solid fa-triangle-exclamation"></i>
                                        </span>
                                        <span className="alert-text Pretendard-Medium" id="warnText">
                                            {errors.email && '<strong>Warning!</strong> This is a warning alert—check it out!'}
                                            {errors.password && '<strong>Warning!</strong> This is a warning alert—check it out!'}
                                        </span>
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <form role="form" onSubmit={handleSubmit(onValid, onInValid)}>
                                            <label>Email</label>
                                            <div className="mb-3">
                                                <input type="email" {...register("email", { required: true })} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                                            </div>
                                            <label>Password</label>
                                            <div className="mb-3">
                                                <input type="password" {...register("password", { required: true })} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" {...register("rememberMe")} type="checkbox" id="rememberMe"/>
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                            <div className="text-center Pretendard-Bold">
                                                <button type="submit" className="btn bg-gradient-primary w-100 mt-4 mb-0">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center pt-0 px-lg-2 px-1 Pretendard-Regular">
                                        <p className="mb-4 text-sm mx-auto">Don't have an account? <Link href="/SignUp" legacyBehavior><a id="linkText-card" className="text-primary text-gradient font-weight-bolder">Sign up</a></Link></p>
                                        <p className="mb-4 text-sm mx-auto">Inquiry: <a className="text-dark font-weight-bolder" href="mailto:me@hwahyang.space">me@hwahyang.space</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                                    <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{backgroundImage:'url(\'https://cdn.hwahyang.space/hspace_v2/images/20200902_B.png?v=2023082501\')'}}></div>
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
