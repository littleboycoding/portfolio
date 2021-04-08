import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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

const About = styled.section`
  display: grid;
  grid-template-areas: "p img";
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;

  .paragraph {
    grid-area: p;
  }

  img {
    grid-area: img;
    width: 100%;
    height: 500px;
    object-fit: cover;
    border: 1px solid white;
    box-shadow: 3px 3px 0 0 black;
  }

  @media (max-width: 1024px) {
    grid-template-areas:
      "img"
      "p";
    grid-template-columns: 1fr;

    img {
      height: 300px;
    }
  }
`;

const Skill = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;

  span {
    grid-column: 1 / 3;
  }

  margin-top: 100px;

  @media (max-width: 800px) {
    margin-top: 0;

    span {
      grid-column: 1 / 1;
    }
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.div`
  text-align: center;
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
    background-color: #353a47;
    border: 1px solid black;
    box-shadow: 3px 3px 0 0 black;
    transition: all 0.1s;
    padding: 5% 5%;
  }

  transition: all 0.1s;
  padding: 10px;

  &:hover {
    cursor: pointer;
    transition: all 0.1s;

    .link {
      text-decoration: underline;
    }

    img {
      transform: scale(1.03);
      transition: all 0.2s;
    }
  }
`;

const Project = styled.section`
  margin-top: 100px;
`;
function ContactStyled() {
  // const [message, setMessage] = useState("");
  // const [email, setEmail] = useState("");

  // function onMessageChange(event) {
  //   setMessage(event.target.value);
  // }

  // function onEmailChange(event) {
  //   setEmail(event.target.value);
  // }

  return (
    <Contact id="contact">
      <h2>ติดต่อ 🔥</h2>
      <p>ติดต่อ พูดคุย แลกเปลี่ยนความคิดเห็น 🚀</p>
      <span>
        {/* <FontAwesomeIcon icon={faEnvelope} />{" "} */}
        <u>
          <a href="mailto:littleboycoding@gmail.com">
            littleboycoding@gmail.com
          </a>
        </u>
      </span>
      {/* Need server to function */}
      {/* <p>ติดต่องาน, สอบถาม, พูดคุย</p> */}
      {/* <form action="#"> */}
      {/*   <input */}
      {/*     name="email" */}
      {/*     required */}
      {/*     type="email" */}
      {/*     value={email} */}
      {/*     onChange={onEmailChange} */}
      {/*     placeholder="อีเมล" */}
      {/*   /> */}
      {/*   <textarea */}
      {/*     name="message" */}
      {/*     value={message} */}
      {/*     onChange={onMessageChange} */}
      {/*     placeholder="ข้อความ" */}
      {/*     required */}
      {/*     cols={100} */}
      {/*     rows={3} */}
      {/*   /> */}
      {/*   <input type="submit" name="submit" value="ส่งข้อความ" /> */}
      {/* </form> */}
    </Contact>
  );
}

const Contact = styled.section`
  margin-top: 100px;
  height: 50vh;
  border-top: 1px solid black;
  // color: white;
  // background-color: #555;
  // width: 100%;
  // position: absolute;
  // left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: grid;
    width: 50%;
    min-width: 300px;
  }

  input[type="text"],
  input[type="email"],
  input[type="submit"],
  textarea {
    padding: 10px;
    box-shadow: 5px 5px 0 0 black;
    border: 1px solid black;
    width: 100%;
    background-color: white;
  }

  input[type="submit"]:hover {
    background-color: grey;
    color: white;
    cursor: pointer;
  }

  textarea {
    resize: none;
  }
`;

function ProjectStyled() {
  return (
    <Project id="project">
      <h2>โปรเจค 📚</h2>
      <CardContainer>
        <CardStyled
          img="/kilogram_exam2.png"
          title="Kilogram Exam"
          info="โปรแกรมตรวจข้อสอบด้วยระบบสแกนนิ่ง"
          link="/project/kilogram_exam"
        />
        <CardStyled
          img="/write_letter.png"
          title="Write Letter"
          info="เว็บบริการบอร์ดสำหรับพูดคุย แบบเสรี"
          link="/project/write_letter"
        />
        <CardStyled
          img="https://via.placeholder.com/500"
          title="Placeholder"
          info="Placeholder"
          link="/placeholder"
        />
      </CardContainer>
    </Project>
  );
}

function CardStyled({ link, img, title, info }) {
  return (
    <Link href={link}>
      <Card>
        <img src={img} alt={"screenshot " + title} />
        <h2>{title}</h2>
        <p>{info}</p>
        <p class="link">อ่านรายละเอียด</p>
      </Card>
    </Link>
  );
}

function SkillStyled() {
  return (
    <Skill>
      <span>
        <h2>ความสามารถ/เครื่องมือ 🔧</h2>
        <p>
          มีความรู้ครอบคลุม ตั้งแต่การสร้าง Front-End, Back-End การ Bundling
          ไปจนถึงการ Deploy, คุ้นเคยกับการใช้งาน Unix (Linux),
          นี่คือรายการตัวอย่างเครื่องมือที่ใช้
        </p>
      </span>
      <ul>
        <b>
          ภาษา/มาร์คอัพ <FontAwesomeIcon icon={faHtml5} />
        </b>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>PHP</li>
        <li>SQL</li>
      </ul>
      <ul>
        <b>
          ไลบรารี่/เฟรมเวิร์ค <FontAwesomeIcon icon={faReact} />
        </b>
        <li>React/React Native</li>
        <li>Next.js</li>
        <li>GraphQL/Apollo</li>
        <li>Vue</li>
        <li>Express</li>
        <li>Electron</li>
        <li>Styled-components</li>
      </ul>
      <ul>
        <b>
          ทดสอบ <FontAwesomeIcon icon={faCubes} />
        </b>
        <li>Chai</li>
        <li>Mocha</li>
        <li>Jest</li>
      </ul>
      <ul>
        <b>
          เครื่องมือ <FontAwesomeIcon icon={faGit} />
        </b>
        <li>Git</li>
        <li>Docker</li>
        <li>NPM</li>
      </ul>
      <ul>
        <b>
          ฐานข้อมูล <FontAwesomeIcon icon={faDatabase} />
        </b>
        <li>Mysql</li>
        <li>Postgres</li>
        <li>MongoDB</li>
      </ul>
    </Skill>
  );
}

function AboutStyled() {
  return (
    <About>
      <div className="paragraph">
        <h2 id="about">เกี่ยวกับผม 💻</h2>
        <p>
          สวัสดีครับ ผม นายธณวัฒน์ ยอดนิล ชื่นชอบศาสตร์ด้านการ
          Programming/Computing มาตั้งแต่จำความได้
        </p>
        <p>
          จุดเริ่มต้นคือการ Scripting เกม ด้วยความคิดที่ว่าอยากลองสร้างสรรค์
          ดัดแปลงเกมเป็นรูปแบบของตัวเอง หลักจากนั้นก็เริ่มเปลี่ยนจาก Scripting
          เกมมาเป็นสร้างเกมแทน (ร่วมทีมกับเพื่อนที่เจอกันในเกม ผมทำด้าน
          Programming)
        </p>

        <p>
          ทำให้เกิดแรงบรรดาลใจอยากจะทำอะไรได้มากกว่านั้น
          เลยเริ่มศึกษาค้นคว้าการโปรแกรมมิ่งเรื่อยมาทั้งจากโรงเรียน วิทยาลัย
          และจากการค้นคว้าด้วยตัวเอง ทำให้รู้ว่าตัวเองชอบการเขียนเว็บมากที่สุด
          เพราะการเขียนเว็บไซต์มีความยืดหยุ่นมากสามารถเขียนและใช้ได้ทุกที่
        </p>
        <p>
          ตอนนี้ผมก็ยังคงค้นหาโอกาสที่จะได้เรียนรู้สิ่งใหม่ ๆ อยู่ตลอด
          เป็นมันความตื่นเต้นและท้าท้ายที่ขาดไม่ได้สำหรับผม
        </p>
      </div>
      <img
        alt="boy coding"
        src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/110149561_1996818190451402_2892614541177617279_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=iomdNIjJprcAX-jqLmj&_nc_ht=scontent.fbkk5-1.fna&oh=215f22eefcfc06b294b41063ff6f5af3&oe=6091F5A8"
      />
    </About>
  );
}

const ImageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  // grid-template-rows: 200px 150px;
  // grid-gap: 10px;

  img {
    background-color: #353a47;
    object-fit: cover;
    box-shadow: 3px 3px 0 0 black;
    border: 1px solid black;
    width: 100%;
    height: 300px;
  }

  @media (max-width: 1024px) {
    overflow-x: auto;
    grid-template-columns: 300px 300px 300px 300px;
    grid-template-rows: 1fr;
  }

  z-index: 2;

  .instruction {
    position: absolute;
    // background-color: rgba(0, 0, 0, 0.3);
    background-color: black;
    z-index: 1;
    height: 100%;
    width: 100%;
  }
`;

const Award = styled.section`
  margin-top: 100px;
`;

function AwardStyled() {
  return (
    <Award>
      <h2>รางวัล 🏆</h2>
      <ImageContainer>
        {/* <div className="instruction"></div> */}
        <img
          src="https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.6435-9/87483271_1842948275838395_7544665665278312448_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=irLZWwkSqCoAX8Sxxpo&_nc_ht=scontent.fbkk5-8.fna&oh=382dfdc63933978761d31afebdbcbbab&oe=6092AD2B"
          alt="reward"
        />
        <img
          src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.6435-9/87370936_1842948229171733_6564360317931880448_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=pnwcLGohSoIAX8191lp&_nc_ht=scontent.fbkk5-6.fna&oh=ddf7982f28d43fcdc671eaa033a32ffc&oe=60946BBA"
          alt="reward"
        />
        <img
          src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/87028982_1842948219171734_2853093487073558528_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=RpQSMNqA9PkAX_ikYRd&_nc_ht=scontent.fbkk5-7.fna&oh=82ea2bfecd14e766cc867fc0abba4af8&oe=60917EDA"
          alt="reward"
        />
        <img src="/award.png" alt="reward" />
      </ImageContainer>
      <p>
        ได้มีโอกาสเป็นตัวแทนเข้าแข่งขันทักษะด้านคอมพิวเตอร์ เช่น การสร้างเกม
        เขียนเว็บไซต์และโปรแกรม
      </p>
      <ul>
        <b>รางวัลเด่น ๆ</b>
        <li>
          รางวัลชนะเลิศระดับชาติ การสร้างเว็บไซต์ขายสินค้าออนไลน์ ประจำปี 2018
        </li>
        <li>
          รางวัลชนะเลิศระดับชาติ การสร้างเว็บไซต์ขายสินค้าออนไลน์ ประจำปี 2019
        </li>
        <li>
          รางวัลรองชนะเลิศอันดับสามระดับชาติ สิ่งประดิษฐ์คนรุ่นใหม่ ประจำปี 2020
        </li>
      </ul>
    </Award>
  );
}

export { AwardStyled, ProjectStyled, AboutStyled, ContactStyled, SkillStyled };
