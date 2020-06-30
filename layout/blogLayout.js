import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

function blogLayout(props ) {


  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  let containerClass = classNames({
    "theme-container": true,
    "sidebar-open": openMenu,
  });

  return (
    <div className={containerClass}>
      <header className="navbar">
        <div onClick={toggleMenu} className="sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            viewBox="0 0 448 512"
            className="icon"
          >
            <path
              fill="currentColor"
              d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
            ></path>
          </svg>
        </div>
        <a href="/" className="home-link router-link-active">
          <span className="site-name">JH</span>
        </a>
        <div className="links">
          <nav className="nav-links can-hide">
            <div className="nav-item">
              <Link href="/" as={process.env.BACKEND_URL + "/"}>
                <a className="nav-link router-link-exact-active ">Home</a>
              </Link>
            </div>
            <div className="nav-item">
              <Link href="/blog" as={process.env.BACKEND_URL + "/blog"}>
                <a className="nav-link router-link-exact-active ">Blog</a>
              </Link>
            </div>
            <div className="nav-item">
              <Link
                href="/javascript"
                as={process.env.BACKEND_URL + "/javascript"}
              >
                <a className="nav-link router-link-exact-active ">JS</a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <aside className="sidebar">
        <ul className="sidebar-links">
          <li>
            {/* <section className="sidebar-group depth-0">
              <p className="sidebar-heading open">
                <span>Guide</span>
              </p>
              <ul className="sidebar-links sidebar-group-items">
                 <li>
                  <a href="/guide/" className="active sidebar-link">
                    Introduction
                  </a>
                  <ul className="sidebar-sub-headers">
                    <li className="sidebar-sub-header">
                      <a
                        href="/guide/#how-it-works"
                        className="active sidebar-link"
                      >
                        How It Works
                      </a>
                    </li>
                    <li className="sidebar-sub-header">
                      <a href="/guide/#features" className="sidebar-link">
                        Features
                      </a>
                    </li>
                    <li className="sidebar-sub-header">
                      <a href="/guide/#why-not" className="sidebar-link">
                        Why Not ...?
                      </a>
                    </li>
                  </ul>
                </li> 
                <li>
                  <a
                    href="/guide/getting-started.html"
                    className="sidebar-link"
                  >
                    Getting Started
                  </a>
                </li>
              </ul>
            </section> */}
          </li>
          <li>
            <section className="sidebar-group depth-0">
              {props.menu.map((aside, i) => {
                return (
                  <div key={i+'section'}>
                    <p className="sidebar-heading">
                      <span>{aside.section}</span>
                    </p>
                    {aside.content.map((content, i) => {
                      return (
                        <ul className="sidebar-links sidebar-group-items" key={i+'option'}>
                          <li>
                            <a
                              href={`#${content.slug}`}
                              className="sidebar-link"
                            >
                              {content.name}
                            </a>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                );
              })}
            </section>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default blogLayout;
