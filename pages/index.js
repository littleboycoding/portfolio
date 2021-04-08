import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlogger,
  faFacebook,
  faGithub,
  faHtml5,
  faReact,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

import {
  faDatabase,
  faCubes,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  AboutStyled,
  ContactStyled,
  SkillStyled,
  ProjectStyled,
  AwardStyled,
} from "../components/sections";

const SlideIn = keyframes`
  from {
    margin-left: -100px;
    opacity: 0;
  }
  to {
    margin-left: 0;
    opacity: 1;
  }
  `;

const MyPicture = styled.img`
  border: 1px solid white;
  width: calc(15vw + 5vh);
  height: calc(15vw + 5vh);
  min-width: 175px;
  min-height: 175px;
  margin: 20px;
  box-shadow: 10px 10px 0px 0px black;
  opacity: 0;
  object-fit: cover;

  background-color: black;

  @media (min-width: 2560px) {
    width: 15vw;
  }

  animation: ${SlideIn} 1s;
  animation-fill-mode: forwards;
`;

const Greet = styled.h1`
  background-color: black;
  padding: 10px 15px;
  font-size: calc(8px + 0.7vh + 1vw);
  color: white;
  transform: skew(-10deg) rotate(-2deg);

  opacity: 0;
  animation: ${SlideIn} 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
`;

const Intro = styled.p`
  font-size: calc(6px + 0.4vh + 0.7vw);
  text-align: center;

  @media (max-width: 800px) {
    font-size: 1em;
    width: 90%;
  }

  opacity: 0;
  animation: ${SlideIn} 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

const NavigatorGroup = styled.div`
  display: flex;

  opacity: 0;
  animation: ${SlideIn} 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: ${(props) => props.color};
  box-shadow: 5px 5px 0px 0px black;
  color: white;
  border: 1px solid white;
  font-size: calc(6px + 0.3vw + 0.5vh);
  transition: all 0.1s;
  margin: 0px 5px;

  &:hover {
    background-color: #333;
    transition: all 0.1s;
    cursor: pointer;
  }
`;

const HeadStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Thanawat</title>
      </Head>
      <HeadStyled>
        <MyPicture src="/portfolio/profile.jpg" />
        <Greet>Hello, I'm Thanawat Yodnil 🖐</Greet>
        <Intro>
          นักพัฒนาเว็บไซต์ Full-Stack
          ที่สนใจและมองหาโอกาสที่จะได้เรียนรู้สิ่งใหม่ ๆ อยู่ตลอด หลงไหลในกาแฟ
          ☕ และ Lo-Fi 🎵 มาก ๆ
        </Intro>
        <NavigatorGroup>
          <a href="https://www.facebook.com/littleboycoding/">
            <Button color="#3b5998">
              Facebook <FontAwesomeIcon icon={faFacebook} />
            </Button>
          </a>
          <a href="https://github.com/littleboycoding">
            <Button color="#000">
              GitHub <FontAwesomeIcon icon={faGithub} />
            </Button>
          </a>
          <a href="https://littleboycoding.github.io">
            <Button color="#c03221">
              Blog <FontAwesomeIcon icon={faBlogger} />
            </Button>
          </a>
        </NavigatorGroup>
      </HeadStyled>
      <AboutStyled />
      {/* <AwardStyled /> */}
      <SkillStyled />
      <ProjectStyled />
      <ContactStyled />
    </>
  );
}

export { Button };
