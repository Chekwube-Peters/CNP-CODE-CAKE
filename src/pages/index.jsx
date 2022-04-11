import React, { useEffect, useState } from "react";
import Accordion from "../components/accordion/Accordion";
import CharacterCard from "../components/CharacterCard";
import Layout from "../components/Layout";
import { characters } from "../shared/characters";
import { faqs } from "../shared/faqs.";
import { phase01, phase02, phase03 } from "../shared/roadmap";

const HomePage = () => {
  const [timer, setTimer] = useState({
    days: 10,
    hours: 10,
    mins: 10,
  });

  let countDownInterval;

  const launchDate = "02/18/2022 ";

  const countDownTimer = () => {
    let currentTime = new Date();
    let endDate = new Date(2022, 1, 28, 17);

    var totalSeconds = Math.abs(endDate - currentTime) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(totalSeconds / 86400);
    totalSeconds -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(totalSeconds / 3600) % 24;
    totalSeconds -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(totalSeconds / 60) % 60;
    totalSeconds -= minutes * 60;

    if (days === 0 && hours === 0 && minutes === 0) {
      clearInterval(countDownInterval);
      document.querySelector(".count-down").style.display = "none";
    }
    setTimer({
      ...timer,
      days: days,
      hours: hours,
      mins: minutes === 60 ? 59 : minutes,
    });
  };

  useEffect(() => {
    countDownInterval = setInterval(() => {
      countDownTimer();
    }, 60000);
    countDownTimer();
  }, []);

  return (
    <Layout>
      <div id="homepage">
        <div className="hero-section" id="intro">
          <p className="heading extralarge">Fantom</p>
          <p className="heading large">Necromancers</p>

          <div className="nav">
            <a href="https://t.me/FTMNecromancers" target="_blank">
              <button className="btn btn-white mr-3">Join Community</button>
            </a>
            <a href="https://discord.gg/PMaxvbW4" target="_blank">
              <button className="btn btn-white">Our Discord</button>
            </a>
          </div>
          <div className="bottom">
            <div className="coin-logos">
              <img src="/images/fantom.png" alt="" />
              <img src="/images/solana.png" alt="" />
              <img src="/images/polkadot.png" alt="" />
            </div>

            <div className="count-down">
              <p className="nft-text">
                <b>NFT</b>
                <br />
                LAUNCH:
              </p>
              <div className="count">
                <div className="mr-3">
                  <p>{timer.days}</p>
                  <p className="desc">DAYS</p>
                </div>
                <div className="mr-3">
                  <p>{timer.hours}</p>
                  <p className="desc">HOURS</p>
                </div>
                <div className="mr-3">
                  <p>{timer.mins}</p>
                  <p className="desc">MINS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="concept" id="vision">
          <img
            src="/images/concept_art_grid.png"
            className="background-grid"
            alt=""
          />
          <div className="content">
            <p className="heading">
              Game
              <br /> concept
            </p>
            <p className="desc">
              FTMNecromancers is based on a classic fantasy narrative with
              character development as well as territorial strategy. The
              objective is to develop your Necromancer and unlock its unique
              abilities. Each player starts out as an aspiring Necromancer who
              can study spells, craft artifacts and eventually graduate from one
              of four academies. In time, your Necromancer can attract their own
              apprentice and assemble an undead army of minions to rule the
              lands.
            </p>
          </div>
          <div className="line-red line">
            <div className="line-text">
              Story Teaser. Story Teaser. Story Teaser.
            </div>
            <div className="line-text">
              Story Teaser. Story Teaser. Story Teaser.
            </div>
          </div>
        </div>
        <div className="teaser">
          <img src="/images/teaser_bg.png" className="teaser-bg" alt="" />
          <div className="content">
            <p className="heading text-center mb-3">Story Teaser</p>
            <p className="text-center story">
              Jim the necromaniac opened the portal to the dead
              dimension(underWorld) and suddenly the gates to the underworld
              opened and 4,999 dead souls entered the earth realm from the other
              dimension. Each soul has a unique ability, and can be tamed if you
              possess the power to control it.
            </p>
            <p className="text-center story bottom">
              The dead make good soldiers
              <br /> he SAID. They can't disobey orders, never surrender, and
              don't stop fighting when a random body part falls off. <br />
              AND AS THE UNDEAD RISE UP HE SCREAMS “YOU SHALL WITNESS <br />
              THE POWER OF A TRUE NECROMANCER"!
            </p>
          </div>
        </div>
        <div className="characters">
          <p className="heading mb-3">
            Special
            <br /> Character
          </p>
          <div className="character-cards">
            {characters.map((character, i) => (
              <CharacterCard key={i} character={character} />
            ))}
          </div>
        </div>
        <div className="tokenomics">
          <p className="heading mb-3">Tokenomics</p>
          <div className="content">
            <div className="values">
              <h1>50</h1>
              <p className="amt">Million $FTMN</p>
              <p className="desc">
                50,000,000 $FTMN(FantomNecromacers) will be created
              </p>
            </div>
            <div className="charts">
              <div className="chart">
                <img src="/images/chart.png" alt="" />
              </div>
              <div className="description">
                <div className="chart-desc">
                  <p className="percentage">90%</p>
                  <p>Spooky swap/pre-sale</p>
                </div>
                <div className="chart-desc">
                  <p className="percentage">4%</p>
                  <p>Team token</p>
                </div>
                <div className="chart-desc">
                  <p className="percentage">6%</p>
                  <p>Marketing wallet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="roadmap" id="roadmap">
          <p className="heading mb-3 text-center">Roadmap</p>
          <div className="phases">
            <div className="road">
              <div className="title mb-2">
                <p>PHASE 01</p>
              </div>
              <ul>
                {phase01.map((item, i) => (
                  <li key={"index" + i} className="item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/images/roadmap_line.png"
              className="roadmap_line"
              alt=""
            />
            <div className="divider">
              <div className="road">
                <div className="title mb-2">
                  <p>PHASE 02</p>
                </div>
                <ul>
                  {phase02.map((item, i) => (
                    <li key={"index" + i} className="item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="road">
                <div className="title mb-2">
                  <p>PHASE 03</p>
                </div>
                <ul>
                  {phase03.map((item, i) => (
                    <li key={"index" + i} className="item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="faqs" id="faqs">
          <p className="heading mb-3">FAQs</p>
          <Accordion question={"How to mint with Metamask on a mobile phone?"}>
            <p>
              If you are using a mobile phone to mint our NFT FtmNecromancers,
              you need to go to your browser, go to{" "}
              <a href="https://nftkey.app">https://nftkey.app</a> to mint our
              NFTs. Click the connect wallet icon on the top right corner and
              select Metamask or TrustWallet and you’re go to go.
              <br />
              <br />
              Click the connect wallet icon on the top right corner and select
              Metamask or TrustWallet and you’re go to go.
            </p>
          </Accordion>
          <Accordion question={"How to find out that i got into Whitelist?"}>
            <p>
              Check our socials for announcements <br />
              Discord:{" "}
              <a href="https://discord.gg/PMaxvbW4">
                https://discord.gg/PMaxvbW4
              </a>
              <br />
              Telegram:{" "}
              <a href="https://t.me/FTMNecromancers">
                https://t.me/FTMNecromancers
              </a>
            </p>
          </Accordion>
          {/* {faqs.map(({ question, solution }, i) => (
            <Accordion key={i} question={question} solution={solution} />
          ))} */}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
