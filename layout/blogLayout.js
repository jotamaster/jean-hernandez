import React, { useState } from "react";
import Link from "next/link";
import classNames from 'classnames';

function blogLayout({ ...props }) {
const [openMenu,setOpenMenu] = useState(false)
const toggleMenu = ()=>{
   setOpenMenu(!openMenu)
}

let containerClass = classNames({
  'theme-container': true,
  'sidebar-open': openMenu
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
          </nav>
        </div>
      </header>
      <aside className="sidebar">
        <ul className="sidebar-links">
          <li>
            <section className="sidebar-group depth-0">
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
                  <a href="/guide/getting-started.html" className="sidebar-link">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a
                    href="/guide/directory-structure.html"
                    className="sidebar-link"
                  >
                    Directory Structure
                  </a>
                </li>
                <li>
                  <a href="/guide/basic-config.html" className="sidebar-link">
                    Configuration
                  </a>
                </li>
                <li>
                  <a href="/guide/assets.html" className="sidebar-link">
                    Asset Handling
                  </a>
                </li>
                <li>
                  <a href="/guide/markdown.html" className="sidebar-link">
                    Markdown Extensions
                  </a>
                </li>
                <li>
                  <a href="/guide/using-vue.html" className="sidebar-link">
                    Using Vue in Markdown
                  </a>
                </li>
                <li>
                  <a href="/guide/i18n.html" className="sidebar-link">
                    Internationalization
                  </a>
                </li>
                <li>
                  <a href="/guide/deploy.html" className="sidebar-link">
                    Deploying
                  </a>
                </li>
              </ul>
            </section>
          </li>
          <li>
            <section className="sidebar-group depth-0">
              <p className="sidebar-heading">
                <span>Advanced</span>{" "}
              </p>{" "}
              <ul className="sidebar-links sidebar-group-items">
                <li>
                  <a href="/guide/frontmatter.html" className="sidebar-link">
                    Frontmatter
                  </a>
                </li>
                <li>
                  <a href="/guide/permalinks.html" className="sidebar-link">
                    Permalinks
                  </a>
                </li>
                <li>
                  <a href="/guide/markdown-slot.html" className="sidebar-link">
                    Markdown Slot
                  </a>
                </li>
                <li>
                  <a href="/guide/global-computed.html" className="sidebar-link">
                    Global Computed
                  </a>
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default blogLayout;
