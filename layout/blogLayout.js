import React, { Children } from "react";

function blogLayout({ ...props }) {
  return (
    <div className="theme-container">
      <header className="navbar">
        <div className="sidebar-button">
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
          <span className="site-name">VuePress</span>
        </a>
        <div className="links">
          <form
            id="search-form"
            role="search"
            className="algolia-search-wrapper search-box"
          >
            <span
              className="algolia-autocomplete"
              
            >
              <input
                id="algolia-search-input"
                className="search-query ds-input"
                placeholder=""
                autocomplete="off"
                spellcheck="false"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded="false"
                aria-label="search input"
                aria-owns="algolia-autocomplete-listbox-0"
                dir="auto"
              />
              <pre
                aria-hidden="true"
              ></pre>
              <span
                className="ds-dropdown-menu"
                role="listbox"
                id="algolia-autocomplete-listbox-0"
              >
                <div className="ds-dataset-1"></div>
              </span>
            </span>
          </form>{" "}
          <nav className="nav-links can-hide">
            <div className="nav-item">
              <a
                href="/guide/"
                className="nav-link router-link-exact-active router-link-active"
              >
                Guide
              </a>
            </div>
            <div className="nav-item">
              <a href="/config/" className="nav-link">
                Config Reference
              </a>
            </div>
            <div className="nav-item">
              <a href="/plugin/" className="nav-link">
                Plugin
              </a>
            </div>
            <div className="nav-item">
              <a href="/theme/" className="nav-link">
                Theme
              </a>
            </div>
            <div className="nav-item">
              <div className="dropdown-wrapper">
                <button
                  type="button"
                  aria-label="Learn More"
                  className="dropdown-title"
                >
                  <span className="title">Learn More</span>{" "}
                  <span className="arrow right"></span>
                </button>{" "}
                <ul className="nav-dropdown" >
                  <li className="dropdown-item">
                    <h4>API</h4>{" "}
                    <ul className="dropdown-subitem-wrapper">
                      <li className="dropdown-subitem">
                        <a href="/api/cli.html" className="nav-link">
                          CLI
                        </a>
                      </li>
                      <li className="dropdown-subitem">
                        <a href="/api/node.html" className="nav-link">
                          Node
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <h4>Contributing Guide</h4>{" "}
                    <ul className="dropdown-subitem-wrapper">
                      <li className="dropdown-subitem">
                        <a
                          href="/miscellaneous/local-development.html"
                          className="nav-link"
                        >
                          Local Development
                        </a>
                      </li>
                      <li className="dropdown-subitem">
                        <a
                          href="/miscellaneous/design-concepts.html"
                          className="nav-link"
                        >
                          Design Concepts
                        </a>
                      </li>
                      <li className="dropdown-subitem">
                        <a href="/faq/" className="nav-link">
                          FAQ
                        </a>
                      </li>
                      <li className="dropdown-subitem">
                        <a
                          href="/miscellaneous/glossary.html"
                          className="nav-link"
                        >
                          Glossary
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <h4>Miscellaneous</h4>{" "}
                    <ul className="dropdown-subitem-wrapper">
                      <li className="dropdown-subitem">
                        <a
                          href="/miscellaneous/migration-guide.html"
                          className="nav-link"
                        >
                          Migrate from 0.x
                        </a>
                      </li>
                      <li className="dropdown-subitem">
                        <a
                          href="https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-link external"
                        >
                          Changelog
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            width="15"
                            height="15"
                            className="icon outbound"
                          >
                            <path
                              fill="currentColor"
                              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                            ></path>{" "}
                            <polygon
                              fill="currentColor"
                              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                            ></polygon>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-item">
              <a
                href="https://v0.vuepress.vuejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link external"
              >
                0.x
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  className="icon outbound"
                >
                  <path
                    fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                  ></path>{" "}
                  <polygon
                    fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                  ></polygon>
                </svg>
              </a>
            </div>
            <div className="nav-item">
              <div className="dropdown-wrapper">
                <button
                  type="button"
                  aria-label="Select language"
                  className="dropdown-title"
                >
                  <span className="title">Languages</span>{" "}
                  <span className="arrow right"></span>
                </button>{" "}
                <ul className="nav-dropdown" >
                  <li className="dropdown-item">
                    {" "}
                    <a
                      href="/guide/"
                      className="nav-link router-link-exact-active router-link-active"
                    >
                      English
                    </a>
                  </li>
                  <li className="dropdown-item">
                    {" "}
                    <a href="/zh/guide/" className="nav-link">
                      简体中文
                    </a>
                  </li>
                </ul>
              </div>
            </div>{" "}
            <a
              href="https://github.com/vuejs/vuepress"
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                width="15"
                height="15"
                className="icon outbound"
              >
                <path
                  fill="currentColor"
                  d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                ></path>{" "}
                <polygon
                  fill="currentColor"
                  points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                ></polygon>
              </svg>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default blogLayout;
