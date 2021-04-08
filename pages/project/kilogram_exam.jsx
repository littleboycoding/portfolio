import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { ContactStyled, ProjectStyled } from "../../components/sections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../index";

const Thumbnail = styled.img`
  width: 100%;
  // height: 50vh;
  background-color: #ddd;
  padding: 15px;
  object-fit: contain;
`;

const Development = styled.div`
  display: grid;
  grid-template-columns: 1fr 45%;
  grid-gap: 20px;
  width: 100%;

  figure {
    justify-self: center;
  }

  img {
    max-width: 100%;
    height: 300px;
    object-fit: contain;
    background-color: #eee;
    // padding: 5px;
    box-shadow: 3px 3px 0 0 black;
    border: 1px solid black;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    img {
      width: 100%;
      grid-row: 1;
    }
    span {
      grid-row: 2;
    }
  }

  @media (min-width: 2000px) {
    grid-template-columns: 1fr 40%;
  }
`;

const Figure = styled.figure`
  figcaption {
    text-align: center;
    color: #555;
    font-style: italic;
  }

  margin: 0;
`;

const Section = styled.section`
  margin-top: 100px;
`;

const ButtonStyled = styled(Button)`
  @media (min-width: 1024px) {
    position: fixed;
    left: 50px;
    top: 50px;
  }

  margin: 0 0 15px 0;
`;

function Main() {
  return (
    <>
      <Head>
        <title>Thanawat - Kilogram Exam</title>
      </Head>
      <Link href="/">
        <ButtonStyled color="black">กลับหน้าหลัก</ButtonStyled>
      </Link>
      <Thumbnail
        src="/portfolio/kilogram_exam2.png"
        alt="kilogram exam screenshot"
      />
      <h1>Kilogram Exam</h1>
      <p>
        โปรแกรมตรวจข้อสอบด้วยระบบสแกนนิ่ง (ผ่านกล้องโทรศัพท์มือถือ)
        เพื่อช่วยลดภาระการตรวจข้อสอบและการสรุปผลคะแนน
      </p>
      <span>
        <FontAwesomeIcon icon={faGithub} />{" "}
        <a
          target="_blank"
          href="https://github.com/littleboycoding/kilogram-exam-web"
        >
          Source Code (โปรแกรมจัดการข้อมูล)
        </a>
        <br />
        <FontAwesomeIcon icon={faGithub} />{" "}
        <a
          target="_blank"
          href="https://github.com/littleboycoding/kilogram-exam-app"
        >
          Source Code (แอพสแกนกระดาษคำตอบ)
        </a>
      </span>
      <Section>
        <h2>เทคโนโลยีที่ใช้</h2>
        <ul>
          <li>React</li>
          <li>OpenCV (JavaScript)</li>
          <li>Google Drive API</li>
        </ul>
        <p>
          เหตุผลที่ใช้ OpenCV เวอร์ชั่น JavaScript
          เพราะว่าต้องการให้สามารถทำงานบน Client ได้ โดยไม่ต้องมี Server
          เป็นตัวกลาง และใช้ Google Drive
          เก็บข้อมูลข้อสอบและผลการสอบไว้ในพื้นที่ส่วนตัว
        </p>
      </Section>
      <Section>
        <h2>จุดเริ่มต้น/แรงบันดาลใจ</h2>
        <p>
          ผมมีความสนใจที่อยากจะเรียน Computer Vision มาก ๆ เพราะน่าสนุกน่าสนใจ
          และน่าจะนำไปใช้ประโยชน์ได้หลากหลาย
          เป็นจุดเริ่มต้นที่อยากลองทำโปรแกรมเกี่ยวกับ Computer Vision
        </p>
        <p>
          หลังจากนั้นได้ไปเห็นอาจารย์กำลังใช้แอพที่มีลักษณะเดียวกันอยู่
          คือตรวจข้อสอบด้วยโทรศัพท์ เลยเข้าไปขอรายละเอียด ข้อดีและข้อเสีย
        </p>
        <p>
          ผมที่ได้รับรู้ข้อเสียและข้อดีของแอพที่มีลักษณะใกล้เคียงกันหลาย ๆ
          แอพแล้ว เลยอยากจะลองทำแอพรูปแบบเดียวกันขึ้นมา
          แต่พัฒนาให้ดีกว่าที่มีอยู่ เป็นที่มาของแอพนี้ครับ
        </p>
      </Section>
      <Section>
        <h2>กระบวนการพัฒนา/อุปสรรค</h2>
        <Development>
          <span>
            <p>
              ผมเลือกใช้ OpenCV เวอร์ชั่น JavaScript (powered by WebAssembly)
              ซึ่งไม่ค่อยเป็นที่นิยมเท่าเวอร์ชั่น Python ทำให้ Document
              ค่อนข้างที่จะมีไม่มาก
            </p>
            <p>
              ผมเริ่มจากส่วน "ฟังก์ชั่น Crop กระดาษ" ก่อน
              เพื่อเตรียมกระดาษข้อสอบไปประมวลผลข้อคะแนนต่อ
            </p>
            <p>
              โปรเจคนี้เป็นโปรเจคแรกที่ได้นำ React หลังจากเรียนแล้วมาใช้ทำจริง
              โดยในตอนแรกส่วนของโปรแกรมจะใช้ Electron ส่วนของแอพสแกนจะใช้ React
              Native แต่อาจารย์หลายท่านให้คำแนะนำมาว่า ให้ทำเป็นเว็บแอพไปเลย
              จะได้สะดวกต่อผู้ใช้
            </p>
          </span>
          <Figure>
            <img
              alt="Document crop function"
              src="/portfolio/kilogram_exam_prototype1.png"
            />
            <figcaption>ฟังก์ชั่น Crop กระดาษ</figcaption>
          </Figure>
        </Development>
      </Section>
      <Section>
        <h2>สิ่งที่ได้เรียนรู้</h2>
        <ul>
          <li>ความรู้ด้านการใช้งาน OpenCV</li>
          <li>ทำให้เข้าใจโครงสร้างเว็บแอพด้วย React มากขึ้น</li>
          <li>ประสบการณ์ใช้งาน Google Drive API</li>
        </ul>
      </Section>
      <ProjectStyled />
      <ContactStyled />
    </>
  );
}

export default Main;
