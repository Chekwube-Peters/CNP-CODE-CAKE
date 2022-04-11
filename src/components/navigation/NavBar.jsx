import React, { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div id="navbar">
      <div className="logo"></div>
      <div className="nav-links">
        <a href="#intro">
          <p>INTRO</p>
        </a>
        <a href="#vision">
          <p>VISION</p>
        </a>
        <a href="#roadmap">
          <p>ROADMAP</p>
        </a>
        <a href="#faqs">
          <p>FAQ</p>
        </a>
        <a href="#community">
          <p>COMMUNITY</p>
        </a>
      </div>
      <div className="action-links">
        <div className="icons">
          <a href="https://twitter.com/ftmnecromancers1" target="_blank">
            <div className="twitter">
              <img src="/icons/twitter.svg" alt="" />
            </div>
          </a>
          <a href="https://discord.gg/PMaxvbW4" target="_blank">
            <div className="discord">
              <img src="/icons/discord.svg" alt="" />
            </div>
          </a>
        </div>
        <button className="btn btn-primary">CONNECT WALLET</button>
      </div>
      <div className={`off-canvas ${openMenu ? "open" : ""}`}>
        <div className="menu-icon" onClick={toogleMenu}>
          <img
            src={!openMenu ? "/icons/menu.png" : "/icons/close.png"}
            alt=""
          />
        </div>
        <div className="nav-container">
          <div className="nav-links">
            <a href="#intro">
              <p onClick={toogleMenu}>INTRO</p>
            </a>
            <a href="#vision">
              <p onClick={toogleMenu}>VISION</p>
            </a>
            <a href="#roadmap">
              <p onClick={toogleMenu}>ROADMAP</p>
            </a>
            <a href="#faqs">
              <p onClick={toogleMenu}>FAQ</p>
            </a>
            <a href="#community">
              <p onClick={toogleMenu}>COMMUNITY</p>
            </a>
          </div>
          <div className="action-links">
            <div className="icons">
              <a href="https://twitter.com/ftmnecromancers1" target="_blank">
                <div className="twitter">
                  <img src="/icons/twitter.svg" alt="" />
                </div>
              </a>
              <a href="https://discord.gg/PMaxvbW4" target="_blank">
                <div className="discord">
                  <img src="/icons/discord.svg" alt="" />
                </div>
              </a>
            </div>
            <button className="btn btn-primary">CONNECT WALLET</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
