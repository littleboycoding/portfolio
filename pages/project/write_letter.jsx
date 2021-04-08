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
  // box-shadow: 0 3px 0 0 black;
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
        <title>Thanawat - Write Letter</title>
      </Head>
      <Link href="/">
        <ButtonStyled color="black">กลับหน้าหลัก</ButtonStyled>
      </Link>
      <Thumbnail
        src="/portfolio/write_letter.png"
        alt="write letter screenshot"
      />
      <h1>Write Letter</h1>
      <p>
        เว็บบอร์ดสำหรับพูดคุยแบบเสรี
        ให้อารมณ์เหมือนกับกระดานบอร์ดที่อยากจะพูดเกี่ยวกับอะไรก็ได้
      </p>
      <span>
        <FontAwesomeIcon icon={faGithub} />{" "}
        <a
          target="_blank"
          href="https://github.com/littleboycoding/write-letter"
        >
          Source Code (Front end)
        </a>
        <br />
        <FontAwesomeIcon icon={faGithub} />{" "}
        <a
          target="_blank"
          href="https://github.com/littleboycoding/write-letter-apollo"
        >
          Source Code (Apollo Implmentation)
        </a>
      </span>
      <Section>
        <h2>เทคโนโลยีที่ใช้</h2>
        <ul>
          <li>React</li>
          <li>MongoDB with MongoDB Atlas</li>
          <li>Styled-components</li>
          <li>GraphQL (Apollo)</li>
          <li>DigitalOcean (App Platform)</li>
        </ul>
        <p>
          DigitalOcean App Platform เป็นบริการใหม่ของ DigitalOcean ทำให้ Build &
          Deploy แอพของเราง่ายขึ้น เป็นส่วนหนึ่งของการแข่งขันนี้
        </p>
      </Section>
      <Section>
        <h2>จุดเริ่มต้น/แรงบันดาลใจ</h2>
        <p>
          โปรเจคนี้สร้างเพื่อส่งเข้าแข่ง DigitalOcean Hackathon{" "}
          <Link
            target="_blank"
            href="https://dev.to/littleboycoding/write-letter-submission-digitalocean-app-platform-hackathon-571k"
          >
            รายละเอียด
          </Link>{" "}
          ในตอนนั้นมีความตั้งใจที่จะลองใช้ React + Apollo + MongoDB อยู่แล้วด้วย
        </p>
        <p>
          จุดเริ่มต้นคือ พักหลังมารู้สึกว่า Social Network
          ปัจจุบันไม่ค่อยเป็นมิตรเท่าไหร่
          ผมเลยตัดสินใจสร้างเว็บแอพนี้ขึ้นมาเพื่อแก้ไขปัญหาเหล่านั้น
        </p>
        <p>
          โดยข้อแตกต่างที่สำคัญที่สุดคือ ในบริการนี้จะเป็นนิรนาม
          ไม่จำเป็นต้องลงชื่อก็สามารถใช้ได้เลย และอีกความสามารถคือ
          ส่งข้อความแบบสุ่ม ๆ ซึ่งจะมีเพียงคนเดียวที่ได้รับ
          และนั่นเป็นที่มาของแอพนี้ครับ
        </p>
      </Section>
      <Section>
        <h2>กระบวนการพัฒนา/อุปสรรค</h2>
        <Development>
          <span>
            <p>
              จุดที่ยากที่สุดของ Project นี้คือการทำ Pagination
              ทั้งในส่วนความคิดเห็นและการดึงข้อมูลโพสต์ใหม่ล่าสุด รวมถึงการ
              Caching ด้วย เพราะกว่าจะทำให้ใช้งานได้สมบูรณ์จริง ๆ ต้องมี
              Boilerplate เยอะมาก
            </p>
            <p>
              ขั้นตอนในการ Deploy ค่อนข้างจะงง ๆ หน่อยสำหรับแรก ๆ
              เพราะเป็นบริการใหม่ของ DigitalOcean ยังมีข้อจำกัดอยู่บ้าง
            </p>
          </span>
          <Figure>
            <img
              alt="Commenting"
              src="/portfolio/write_letter_prototype1.png"
            />
            <figcaption>แสดงความคิดเห็น</figcaption>
          </Figure>
        </Development>
      </Section>
      <Section>
        <h2>สิ่งที่ได้เรียนรู้</h2>
        <ul>
          <li>ได้เรียนรู้การใช้งาน Apollo, MongoDB</li>
          <li>การใช้งาน React + Apollo</li>
          <li>
            การใช้งาน Theme API ของ Styled-components เพื่อทำโหมด Light/Dark
          </li>
          <li>ได้ลองใช้งาน DigitalOcean App Platform</li>
        </ul>
      </Section>
      <ProjectStyled />
      <ContactStyled />
    </>
  );
}

export default Main;
