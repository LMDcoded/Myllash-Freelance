import Link from 'next/link';
import React from 'react';
import useSticky from '../../hooks/use-sticky';
import MobileMenu from './mobile-menu';
import NavMenus from './nav-menus';

const HeaderThree = () => {
  const { headerSticky } = useSticky();
  return (
    <>
      <header className="d-none d-lg-block">
        <div id="header-sticky" className={`tp-header-area header-transparent hasdropdown-white pl-170 
        pr-170 ${headerSticky ? 'header-sticky' : ''}`}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                  <Link href="/">
                    <a><img src="/assets/img/logo/logo-white.png" alt="" /></a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 tp-menu-white">
                <div className="tp-main-menu">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-header-left d-flex align-items-center justify-content-end">
                  <div className="tp-header-login tp-login-primary  d-lg-none d-xl-block">
                    <Link href="/login">
                      <a>Login</a>
                    </Link>
                  </div>
                  <div className="tp-header-yellow-button ml-55">
                    <Link href="/contact">
                      <a className="tp-btn-yellow-semilar">Get Collax Free</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"logo-white.png"} bg={'tp-green-bg'} />
      {/* <!-- mobile-menu-area-end --> */}
    </>
  );
};

export default HeaderThree;