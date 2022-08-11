import { Heading, SimpleGrid, VStack, Text, Link } from "@chakra-ui/react";

import Section from "../../components/Section";
import Project from "./Project";
import Award from "./Award";

// Projects assets
import kilogramExam from "../../public/kilogram_exam.png";
import writeLetter from "../../public/write_letter.png";

// Awards assets
import award1 from "../../public/award1.jpg";
import award2 from "../../public/award2.jpg";
import award3 from "../../public/award3.jpg";
import freeCodeCamp from "../../public/freeCodeCamp.jpeg";
import SectionTitle from "../../components/Section/SectionTitle";

const Experience = () => {
  return (
    <Section bg="white" position="relative">
      <VStack alignItems="stretch" spacing="1em">
        <SectionTitle
          title="Experience"
          subtitle="Projects, Competitions, Certificates"
        />
        <Heading fontSize="lg">{"Projects / Works"}</Heading>
        <SimpleGrid spacing={4} columns={[1, 2]}>
          <Project
            image={kilogramExam}
            imageAlt="kilogram exam"
            title="Kilogram Exam"
            repository="https://github.com/littleboycoding/kilogram-exam-desktop"
          >
            <Text>
              {
                "ชุดแอปพลิเคชั่นสำหรับการสร้างข้อสอบและตรวจคำตอบโดยใช้ระบบสแกนนิ่ง"
              }
            </Text>
            <Text>
              {"ถูกส่งเข้าแข่งขันในรายการ "}
              <Link
                color="teal"
                target="_blank"
                href="http://thaiinvention.net/detail.php?p=cHJvamVjdF9pZD00OTgzMCZjZmdfaWQ9MzQmY29tcGV0X2lkPTM=&cond=JnE94LiV4Lij4Lin4LiI4LiC4LmJ4Lit4Liq4Lit4LiaJnNfY29tcGV0PTE="
              >
                สิ่งประดิษฐ์คนรุ่นใหม่ ประจำปี 2563
              </Link>
            </Text>
          </Project>
          <Project
            image={writeLetter}
            imageAlt="write letter"
            title="Write Letter"
            repository="https://github.com/littleboycoding/write_letter"
          >
            <Text>
              {
                "บริการพื้นที่พูดคุยออนไลน์แบบเสรี เปิดโอกาสให้ผู้คนได้พูดคุยแลกเปลี่ยนความคิดเห็นกัน"
              }
            </Text>
            <Text>
              {"สร้างเพื่อส่งเข้าแข่งขันในรายการ "}
              <Link
                color="teal"
                target="_blank"
                href="https://dev.to/littleboycoding/write-letter-submission-digitalocean-app-platform-hackathon-571k"
              >
                DigitalOcean Hackathon
              </Link>
            </Text>
          </Project>
        </SimpleGrid>
        <Heading fontSize="lg">{"Competitions / Certificates"}</Heading>
        <SimpleGrid spacing={4} columns={[1, 2, null, 4]}>
          <Award
            image={award3}
            imageAlt="awarded since 2563"
            description="รองชนะเลิศอันดับสามสิ่งประดิษฐ์คนรุ่นใหม่ประจำปี 2563"
          />
          <Award
            image={award2}
            imageAlt="awarded since 2562"
            description="ชนะเลิศการแข่งขันพัฒนาเว็บไซต์ระบบ E-Commerce ประจำปี 2562"
          />
          <Award
            image={award1}
            imageAlt="awarded since 2561"
            description="ชนะเลิศการแข่งขันพัฒนาเว็บไซต์ระบบ E-Commerce ประจำปี 2561"
          />
          <Award
            image={freeCodeCamp}
            imageAlt="freeCodeCamp certificate"
            description="ใบประกาศนียบัตรจบหลักสูตร Full Stack จาก freeCodeCamp"
          />
        </SimpleGrid>
      </VStack>
    </Section>
  );
};

export default Experience;
