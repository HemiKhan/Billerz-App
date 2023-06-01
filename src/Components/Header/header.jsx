import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <>
      {/* Start Header Area  */}
      <header className="header-section d-none d-xl-block">
        <div className="header-wrapper">
          <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                  {/* Start Header Logo  */}
                  <div className="header-logo">
                    <div className="logo">
                      <Link to="/">
                        <img src="assets/images/logo/logo.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  {/* End Header Logo */}

                  {/* <!-- Start Header Main Menu --> */}
                  <div className="main-menu menu-color--black menu-hover-color--golden">
                    <nav>
                      <ul>
                        <li>
                          <Link to="/">HOME</Link>
                        </li>
                        <li>
                          <Link to="/">DROP</Link>
                        </li>
                        <li className="has-dropdown has-megaitem">
                          <Link to="/product-details-default">
                            MENS <i className="fa fa-angle-down"></i>
                          </Link>
                          {/* <!-- Mega Menu --> */}
                          <div className="mega-menu">
                            <ul className="mega-menu-inner">
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  SHORT SETS
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                TRACKSUITS
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                  </li>
                                </ul>
                              </li>                              
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  T-SHIRTS
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  SWEAT SHIRTS
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                    <Link to="/product-details-default">
                                      HOODIES
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  BOTTOMS
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  ACCESSORIES
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                    <Link to="/product-details-default">
                                      BAGS
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/product-details-default">
                                      HEADWEAR
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  OUTERWEAR
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <div className="menu-banner">
                              <Link to="/" className="menu-banner-link">
                                <img
                                  className="menu-banner-img"
                                  src="assets/images/banner/menu-banner.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="has-dropdown has-megaitem">
                          <Link to="/product-details-default">
                            WOMENS <i className="fa fa-angle-down"></i>
                          </Link>
                          {/* <!-- Mega Menu --> */}
                          <div className="mega-menu">
                            <ul className="mega-menu-inner">
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  Shorts Sets
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                TRACKSUITS
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                  </li>
                                </ul>
                              </li>                              
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  T-SHIRTS
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  SWEAT SHIRTS
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                    <Link to="/product-details-default">
                                      HOODIES
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  BOTTOMS
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  ACCESSORIES
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                    <Link to="/product-details-default">
                                      BAGS
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/product-details-default">
                                      HEADWEAR
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Mega Menu Sub Link --> */}
                              <li className="mega-menu-item">
                                <Link to="/" className="mega-menu-item-title">
                                  OUTERWEAR
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <div className="menu-banner">
                              <Link to="/" className="menu-banner-link">
                                <img
                                  className="menu-banner-img"
                                  src="assets/images/banner/menu-banner.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* <!-- End Header Main Menu Start --> */}

                  {/* <!-- Start Header Action Link --> */}
                  <ul className="header-action-link action-color--black action-hover-color--golden">
                    <li>
                      <a
                        href="#offcanvas-wishlish"
                        className="offcanvas-toggle"
                      >
                        <i className="icon-heart"></i>
                        <span className="item-count">3</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#offcanvas-add-cart"
                        className="offcanvas-toggle"
                      >
                        <i className="icon-bag"></i>
                        <span className="item-count">3</span>
                      </a>
                    </li>
                    <li>
                      <a href="#search">
                        <i className="icon-magnifier"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#offcanvas-about"
                        className="offacnvas offside-about offcanvas-toggle"
                      >
                        <i className="icon-menu"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- End Header Action Link --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Start Header Area  */}

      {/* <!-- Start Mobile Header --> */}
      <div className="mobile-header mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              {/* <!-- Start Mobile Left Side --> */}
              <div className="mobile-header-left">
                <ul className="mobile-menu-logo">
                  <li>
                    <Link to="/">
                      <div className="logo">
                        <img src="assets/images/logo/logo.png" alt="" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- End Mobile Left Side --> */}

              {/* <!-- Start Mobile Right Side --> */}
              <div className="mobile-right-side">
                <ul className="header-action-link action-color--black action-hover-color--golden">
                  <li>
                    <a href="#search">
                      <i className="icon-magnifier"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                      <i className="icon-heart"></i>
                      <span className="item-count">3</span>
                    </a>
                  </li>
                  <li>
                    <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                      <i className="icon-bag"></i>
                      <span className="item-count">3</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mobile-menu-offcanvas"
                      className="offcanvas-toggle offside-menu"
                    >
                      <i className="icon-menu"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- End Mobile Right Side --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Mobile Header --> */}

      {/* <!--  Start Offcanvas Mobile Menu Section --> */}
      <div
        id="mobile-menu-offcanvas"
        className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section"
      >
        {/* <!-- Start Offcanvas Header --> */}
        <div className="offcanvas-header text-right">
          <button className="offcanvas-close">
            <i className="ion-android-close"></i>
          </button>
        </div>
        {/* <!-- End Offcanvas Header --> */}
        {/* <!-- Start Offcanvas Mobile Menu Wrapper --> */}
        <div className="offcanvas-mobile-menu-wrapper">
          {/* <!-- Start Mobile Menu  --> */}
          <div className="mobile-menu-bottom">
            {/* <!-- Start Mobile Menu Nav --> */}
            <div className="offcanvas-menu">
              <ul>
                <li>
                  <Link to="/">
                    <span>HOME</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>DROP</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>MENS</span>
                  </Link>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">SHORT SETS</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">T-SHIRTS</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">SWEAT SHIRTS</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                          <Link to="/shop-grid-sidebar-left">
                            HOODIES
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">BOTTOMS</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">ACCESSORIES</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                          <Link to="/shop-grid-sidebar-left">
                            BAGS
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-grid-sidebar-left">
                          HEADWEAR
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">OUTWEAR</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">
                    <span>WOMENS</span>
                  </Link>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">SHORT SETS</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">T-SHIRTS</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">SWEAT SHIRTS</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                          <Link to="/shop-grid-sidebar-left">
                            HOODIES
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">BOTTOMS</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">ACCESSORIES</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                          <Link to="/shop-grid-sidebar-left">
                            BAGS
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-grid-sidebar-left">
                          HEADWEAR
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="/">OUTWEAR</Link>
                      <ul className="mobile-sub-menu">
                        <li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>                
              </ul>
            </div>
            {/* <!-- End Mobile Menu Nav --> */}
          </div>
          {/* <!-- End Mobile Menu --> */}

          {/* <!-- Start Mobile contact Info --> */}
          <div className="mobile-contact-info">
            <div className="logo">
              <Link to="/">
                <img src="assets/images/logo/logo.png" alt="" />
              </Link>
            </div>

            <address className="address">
              <span>Address: Your address goes here.</span>
              <span>Call Us: 0123456789, 0123456789</span>
              <span>Email: demo@example.com</span>
            </address>

            <ul className="social-link">
              <li>
                <Link to="/">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
            </ul>

            <ul className="user-link">
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
          </div>
          {/* <!-- End Mobile contact Info --> */}
        </div>

        {/* <!-- End Offcanvas Mobile Menu Wrapper --> */}
      </div>
      {/* <!-- ...:::: End Offcanvas Mobile Menu Section:::... --> */}

      {/* <!-- Start Offcanvas Mobile Menu Section --> */}
      <div
        id="offcanvas-about"
        className="offcanvas offcanvas-rightside offcanvas-mobile-about-section"
      >
        {/* <!-- Start Offcanvas Header --> */}
        <div className="offcanvas-header text-right">
          <button className="offcanvas-close">
            <i className="ion-android-close"></i>
          </button>
        </div>
        {/* <!-- End Offcanvas Header -->
        <!-- Start Offcanvas Mobile Menu Wrapper -->
        <!-- Start Mobile contact Info --> */}
        <div className="mobile-contact-info">
          <div className="logo">
            <Link to="/">
              <img src="assets/images/logo/logo_white.png" alt="" />
            </Link>
          </div>

          <address className="address">
            <span>Address: Your address goes here.</span>
            <span>Call Us: 0123456789, 0123456789</span>
            <span>Email: demo@example.com</span>
          </address>

          <ul className="social-link">
            <li>
              <Link to="/">
                <i className="fa fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
          </ul>

          <ul className="user-link">
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </div>
        {/* <!-- End Mobile contact Info --> */}
      </div>
      {/* <!-- ...:::: End Offcanvas Mobile Menu Section:::... --> */}

      {/* <!-- Start Offcanvas Addcart Section --> */}
      <div
        id="offcanvas-add-cart"
        className="offcanvas offcanvas-rightside offcanvas-add-cart-section"
      >
        {/* <!-- Start Offcanvas Header --> */}
        <div className="offcanvas-header text-right">
          <button className="offcanvas-close">
            <i className="ion-android-close"></i>
          </button>
        </div>
        {/* <!-- End Offcanvas Header --> */}

        {/* <!-- Start  Offcanvas Addcart Wrapper --> */}
        <div className="offcanvas-add-cart-wrapper">
          <h4 className="offcanvas-title">Shopping Cart</h4>
          <ul className="offcanvas-cart">
            <li className="offcanvas-cart-item-single">
              <div className="offcanvas-cart-item-block">
                <Link to="/" className="offcanvas-cart-item-image-link">
                  <img
                    src="assets/images/product/default/home-1/default-1.jpg"
                    alt=""
                    className="offcanvas-cart-image"
                  />
                </Link>
                <div className="offcanvas-cart-item-content">
                  <Link to="/" className="offcanvas-cart-item-link">
                    Car Wheel
                  </Link>
                  <div className="offcanvas-cart-item-details">
                    <span className="offcanvas-cart-item-details-quantity">
                      1 x{" "}
                    </span>
                    <span className="offcanvas-cart-item-details-price">
                      $49.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-cart-item-delete text-right">
                <Link to="/" className="offcanvas-cart-item-delete">
                  <i className="fa fa-trash-o"></i>
                </Link>
              </div>
            </li>
            <li className="offcanvas-cart-item-single">
              <div className="offcanvas-cart-item-block">
                <Link to="/" className="offcanvas-cart-item-image-link">
                  <img
                    src="assets/images/product/default/home-2/default-1.jpg"
                    alt=""
                    className="offcanvas-cart-image"
                  />
                </Link>
                <div className="offcanvas-cart-item-content">
                  <Link to="/" className="offcanvas-cart-item-link">
                    Car Vails
                  </Link>
                  <div className="offcanvas-cart-item-details">
                    <span className="offcanvas-cart-item-details-quantity">
                      3 x{" "}
                    </span>
                    <span className="offcanvas-cart-item-details-price">
                      $500.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-cart-item-delete text-right">
                <Link to="/" className="offcanvas-cart-item-delete">
                  <i className="fa fa-trash-o"></i>
                </Link>
              </div>
            </li>
            <li className="offcanvas-cart-item-single">
              <div className="offcanvas-cart-item-block">
                <Link to="/" className="offcanvas-cart-item-image-link">
                  <img
                    src="assets/images/product/default/home-3/default-1.jpg"
                    alt=""
                    className="offcanvas-cart-image"
                  />
                </Link>
                <div className="offcanvas-cart-item-content">
                  <Link to="/" className="offcanvas-cart-item-link">
                    Shock Absorber
                  </Link>
                  <div className="offcanvas-cart-item-details">
                    <span className="offcanvas-cart-item-details-quantity">
                      1 x{" "}
                    </span>
                    <span className="offcanvas-cart-item-details-price">
                      $350.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-cart-item-delete text-right">
                <a href="/" className="offcanvas-cart-item-delete">
                  <i className="fa fa-trash-o"></i>
                </a>
              </div>
            </li>
          </ul>
          <div className="offcanvas-cart-total-price">
            <span className="offcanvas-cart-total-price-text">Subtotal:</span>
            <span className="offcanvas-cart-total-price-value">$170.00</span>
          </div>
          <ul className="offcanvas-cart-action-button">
            <li>
              <Link to="/cart" className="btn btn-block btn-golden">
                View Cart
              </Link>
            </li>
            <li>
              <Link to="/compare" className=" btn btn-block btn-golden mt-5">
                Checkout
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- End  Offcanvas Addcart Wrapper --> */}
      </div>
      {/* <!-- End  Offcanvas Addcart Section --> */}

      {/* <!-- Start Offcanvas Mobile Menu Section --> */}
      <div
        id="offcanvas-wishlish"
        className="offcanvas offcanvas-rightside offcanvas-add-cart-section"
      >
        {/* <!-- Start Offcanvas Header --> */}
        <div className="offcanvas-header text-right">
          <button className="offcanvas-close">
            <i className="ion-android-close"></i>
          </button>
        </div>
        {/* <!-- ENd Offcanvas Header --> */}

        {/* <!-- Start Offcanvas Mobile Menu Wrapper --> */}
        <div className="offcanvas-wishlist-wrapper">
          <h4 className="offcanvas-title">Wishlist</h4>
          <ul className="offcanvas-wishlist">
            <li className="offcanvas-wishlist-item-single">
              <div className="offcanvas-wishlist-item-block">
                <Link to="/" className="offcanvas-wishlist-item-image-link">
                  <img
                    src="assets/images/product/default/home-1/default-1.jpg"
                    alt=""
                    className="offcanvas-wishlist-image"
                  />
                </Link>
                <div className="offcanvas-wishlist-item-content">
                  <Link to="/" className="offcanvas-wishlist-item-link">
                    Car Wheel
                  </Link>
                  <div className="offcanvas-wishlist-item-details">
                    <span className="offcanvas-wishlist-item-details-quantity">
                      1 x{" "}
                    </span>
                    <span className="offcanvas-wishlist-item-details-price">
                      $49.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-wishlist-item-delete text-right">
                <Link to="/" className="offcanvas-wishlist-item-delete">
                  <i className="fa fa-trash-o"></i>
                </Link>
              </div>
            </li>
            <li className="offcanvas-wishlist-item-single">
              <div className="offcanvas-wishlist-item-block">
                <Link to="/" className="offcanvas-wishlist-item-image-link">
                  <img
                    src="assets/images/product/default/home-2/default-1.jpg"
                    alt=""
                    className="offcanvas-wishlist-image"
                  />
                </Link>
                <div className="offcanvas-wishlist-item-content">
                  <Link to="/" className="offcanvas-wishlist-item-link">
                    Car Vails
                  </Link>
                  <div className="offcanvas-wishlist-item-details">
                    <span className="offcanvas-wishlist-item-details-quantity">
                      3 x{" "}
                    </span>
                    <span className="offcanvas-wishlist-item-details-price">
                      $500.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-wishlist-item-delete text-right">
                <Link to="/" className="offcanvas-wishlist-item-delete">
                  <i className="fa fa-trash-o"></i>
                </Link>
              </div>
            </li>
            <li className="offcanvas-wishlist-item-single">
              <div className="offcanvas-wishlist-item-block">
                <Link to="/" className="offcanvas-wishlist-item-image-link">
                  <img
                    src="assets/images/product/default/home-3/default-1.jpg"
                    alt=""
                    className="offcanvas-wishlist-image"
                  />
                </Link>
                <div className="offcanvas-wishlist-item-content">
                  <Link to="/" className="offcanvas-wishlist-item-link">
                    Shock Absorber
                  </Link>
                  <div className="offcanvas-wishlist-item-details">
                    <span className="offcanvas-wishlist-item-details-quantity">
                      1 x{" "}
                    </span>
                    <span className="offcanvas-wishlist-item-details-price">
                      $350.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="offcanvas-wishlist-item-delete text-right">
                <a href="/" className="offcanvas-wishlist-item-delete">
                  <i className="fa fa-trash-o"></i>
                </a>
              </div>
            </li>
          </ul>
          <ul className="offcanvas-wishlist-action-button">
            <li>
              <Link to="/" className="btn btn-block btn-golden">
                View wishlist
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- End Offcanvas Mobile Menu Wrapper --> */}
      </div>
      {/* <!-- End Offcanvas Mobile Menu Section --> */}

      {/* <!-- Start Offcanvas Search Bar Section --> */}
      <div id="search" className="search-modal">
        <button type="button" className="close">
          ×
        </button>
        <form>
          <input type="search" placeholder="type keyword(s) here" />
          <button type="submit" className="btn btn-lg btn-golden">
            Search
          </button>
        </form>
      </div>
      {/* <!-- End Offcanvas Search Bar Section --> */}
    </>
  );
}
