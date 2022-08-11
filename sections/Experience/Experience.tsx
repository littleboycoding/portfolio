import {
  AspectRatio,
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InViewTransition from "../../components/InViewTransition";
import Section from "../../components/Section";

import kilogramExam from "../../public/kilogram_exam.png";
import writeLetter from "../../public/write_letter.png";
import award1 from "../../public/award1.jpg";
import award2 from "../../public/award2.jpg";
import award3 from "../../public/award3.jpg";

const Experience = () => {
  return (
    <Section bg="white" position="relative">
      <VStack spacing="1em">
        <VStack>
          <Heading id="experience">{"Experience"}</Heading>
          <Text fontSize={["sm", null, "md"]} color="#5e5e5e">
            {"Projects, Competitions, Certificates"}
          </Text>
        </VStack>
        <VStack alignItems="stretch" spacing="1em">
          <Heading fontSize="lg">{"Projects / Works"}</Heading>
          <SimpleGrid spacing={4} columns={[1, null, 2]}>
            <InViewTransition>
              <VStack alignItems="stretch" spacing="1em">
                <AspectRatio boxShadow="md" ratio={3 / 2} w="full">
                  <Image alt="kilogram exam" src={kilogramExam.src} />
                </AspectRatio>
                <Heading textAlign="center" fontSize="xl">
                  {"Kilogram Exam"}
                </Heading>
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
                    {"สิ่งประดิษฐ์คนรุ่นใหม่ ประจำปี 2563"}
                  </Link>
                </Text>
                <Box>
                  <Link
                    color="teal"
                    fontSize="0.9em"
                    target="_blank"
                    href="https://github.com/littleboycoding/kilogram-exam-desktop"
                  >
                    <FontAwesomeIcon icon={faGithub} /> Repository
                  </Link>
                </Box>
              </VStack>
            </InViewTransition>
            <InViewTransition>
              <VStack alignItems="stretch" spacing="1em">
                <AspectRatio boxShadow="md" ratio={3 / 2} w="full">
                  <Image alt="write letter" src={writeLetter.src} />
                </AspectRatio>
                <Heading textAlign="center" fontSize="xl">
                  {"Write Letter"}
                </Heading>
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
                <Box>
                  <Link
                    fontSize="0.9em"
                    color="teal"
                    target="_blank"
                    href="https://github.com/littleboycoding/write-letter"
                  >
                    <FontAwesomeIcon icon={faGithub} /> Repository
                  </Link>
                </Box>
              </VStack>
            </InViewTransition>
          </SimpleGrid>
        </VStack>
        <VStack alignItems="stretch" spacing="1em">
          <Heading fontSize="lg">{"Competitions / Certificates"}</Heading>
          <SimpleGrid
            spacing={4}
            columns={[1, null, 3]}
            w="full"
            justifyItems="center"
          >
            <InViewTransition>
              <VStack spacing={4}>
                <AspectRatio boxShadow="md" ratio={3 / 2} w="full">
                  <Image alt="awarded since 2563" src={award3.src} />
                </AspectRatio>
                <Heading fontSize="l">
                  {"รองชนะเลิศอันดับสามสิ่งประดิษฐ์คนรุ่นใหม่ประจำปี 2563"}
                </Heading>
              </VStack>
            </InViewTransition>
            <InViewTransition>
              <VStack spacing={4}>
                <AspectRatio boxShadow="md" ratio={3 / 2} w="full">
                  <Image alt="awarded since 2562" src={award2.src} />
                </AspectRatio>
                <Heading fontSize="l">
                  {"ชนะเลิศการแข่งขันพัฒนาเว็บไซต์ระบบ E-Commerce ประจำปี 2562"}
                </Heading>
              </VStack>
            </InViewTransition>
            <InViewTransition>
              <VStack spacing={4}>
                <AspectRatio boxShadow="md" ratio={3 / 2} w="full">
                  <Image alt="awarded since 2561" src={award1.src} />
                </AspectRatio>
                <Heading fontSize="l">
                  {"ชนะเลิศการแข่งขันพัฒนาเว็บไซต์ระบบ E-Commerce ประจำปี 2561"}
                </Heading>
              </VStack>
            </InViewTransition>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Section>
  );
};

export default Experience;
