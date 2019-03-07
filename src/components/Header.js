import React from "react";
import moment from "moment";

function Header() {
  return (
    <header>
      <nav className="nv-s nv-s--c">
                    <ul className="nv-s-l">
                        <li className="nv-s-l-i">
                            <a className=" nv-s-l-b" href="https://johnfleurimond.com">
                                Fleurimond
                            </a>
                        </li>

                        <li className="nv-s-l-i">
                            <a
                                className="nv-s-l-a nv-s-l-a--active"
                                href="https://johnfleurimond.com"
                                Fleurimond Weather App
                                title="Report a Problem"
                            >
                                Fleurimond Weather App
                            </a>
                        </li>
                        <li className="nv-s-l-i">
                            <a
                                href="https://github.com/JOHNFLEURIMOND"
                                title="Github"
                                className="nv-s-l-a"
                            >
                                Github
                            </a>
                        </li>
                        <li className="nv-s-l-i">
                            <a
                                href="https://twitter.com/tcodemonger"
                                title="Twitter"
                                className="nv-s-l-a"
                            >
                                Twitter
                            </a>
                        </li>
                        <li className="nv-s-l-i">
                            <a
                                href="https://www.linkedin.com/in/john-fleurimond/"
                                className="nv-s-l-a"
                                title="Linked"
                            >
                                Linkedin
                            </a>
                        </li>
                        <li className="nv-s-l-i">
                            <a
                                href="https://www.linkedin.com/in/john-fleurimond/"
                                className="nv-s-l-a"
                                title="Linked"
                            >
                              {moment().format("llll")}
                            </a>
                        </li>
                    </ul>
                </nav>
    </header>
  );
}

export default Header;
