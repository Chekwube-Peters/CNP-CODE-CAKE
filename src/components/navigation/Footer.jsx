import React from "react";

const Footer = () => {
  return (
    <div id="community">
      <img
        src="/images/footer_art_grid.png"
        className="background-art"
        alt=""
      />
      <div className="footer-content">
        <div className="community-card">
          <p className="heading text-center">Join the community</p>
          <div className="nav">
            <a href="https://discord.gg/PMaxvbW4" target="_blank">
              <button className="btn btn-white">Discord</button>
            </a>
            <a href="https://twitter.com/ftmnecromancers1" target="_blank">
              <button className="btn btn-white">Twitter</button>
            </a>
            <a
              href="https://medium.com/@ftmnecromancers/ftmnecromancers-is-the-first-grim-nft-game-on-the-fantom-blockchain-dce01669facd"
              target="_blank"
            >
              <button className="btn btn-white">Medium</button>
            </a>
          </div>
        </div>
        <div className="copyright-content">
          <p className="copyright">Copyright © Fantom Necromancer 2022</p>
          <div className="icons">
            <a href="https://twitter.com/ftmnecromancers1" target="_blank">
              <img src="/icons/twitter.svg" alt="" />
            </a>
            <a href="https://discord.gg/PMaxvbW4" target="_blank">
              <img src="/icons/discord.svg" alt="" />
            </a>
            <a href="https://t.me/FTMNecromancers" target="_blank">
              <img src="/icons/telegram.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/ftmnecromancers_/"
              target="_blank"
            >
              <img src="/icons/instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
