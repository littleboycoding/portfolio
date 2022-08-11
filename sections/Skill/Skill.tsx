import {
  VStack,
  Text,
  Heading,
  Grid,
  GridItem,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import {
  faCode,
  faCodeBranch,
  faServer,
  faWindowMaximize,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InViewTransition from "../../components/InViewTransition";
import Section from "../../components/Section";

const SkillExample = ({ children }: { children: React.ReactNode }) => {
  return (
    <SimpleGrid spacing="1em" minChildWidth="20ch">
      {children}
    </SimpleGrid>
  );
};

const SkillBlock = ({
  title,
  faIcon,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  faIcon: IconDefinition;
  children: React.ReactNode;
}) => {
  return (
    <InViewTransition style={{ height: "100%" }}>
      <VStack
        alignItems="stretch"
        spacing="1em"
        boxShadow="sm"
        p="1em"
        h="full"
        bg="white"
      >
        <VStack alignItems="stretch">
          <HStack>
            <FontAwesomeIcon icon={faIcon} />
            <Heading fontSize="xl">{title}</Heading>
          </HStack>
          <Text color="grey" fontSize="0.9em">
            {subtitle}
          </Text>
        </VStack>
        {children}
      </VStack>
    </InViewTransition>
  );
};

const Skill = () => {
  return (
    <Section bg="#f3f3f3" pos="relative">
      <VStack>
        <Heading id="skill">Skill set</Heading>
        <Text fontSize={["sm", null, "md"]} pb="1em" color="#5e5e5e">
          {"Skill set and tooling that I am experienced"}
        </Text>
        <Grid
          gap="1em"
          gridTemplateAreas={[
            `"backend"
          "frontend"
          "languages"
          "others"`,
            `"backend backend"
      "frontend frontend"
      "languages others"`,
          ]}
        >
          <GridItem area="backend">
            <SkillBlock
              faIcon={faServer}
              title="Backend"
              subtitle="API development, Database, Caching"
            >
              <Text>
                {
                  "พัฒนา API (RESTful, GraphQL) สร้างระบบสื่อสารแบบเรียลไทม์ด้วย WebSocket, WebRTC ทำงานกับฐานข้อมูลได้ (SQL, NoSQL)"
                }
              </Text>
              <Text color="grey" fontSize="0.9em">
                {"ตัวอย่างเครื่องมือที่สามารถใช้งานได้"}
              </Text>
              <SkillExample>
                <Text>Express/Fastify</Text>
                <Text>MongoDB</Text>
                <Text>Postgres/MySQL</Text>
                <Text>FastAPI</Text>
                <Text>GraphQL</Text>
                <Text>WebSocket</Text>
                <Text>Redis</Text>
                <Text>Gin</Text>
              </SkillExample>
            </SkillBlock>
          </GridItem>
          <GridItem area="frontend">
            <SkillBlock
              faIcon={faWindowMaximize}
              title="Frontend"
              subtitle="Semantic HTML, Responsive, Optimization, Accessibility, Basic UI/UX"
            >
              <Text>
                {
                  "พัฒนาเว็บแอปพลิเคชั่นด้วยไลบารี่อย่างเช่น  React, Vue, Svelte คุ้นเคยกับเครื่องมืออย่าง Webpack, Storybook สามารถพัฒนาแอปพลิเคชั่นด้วย Flutter และ Electron ได้"
                }
              </Text>
              <Text color="grey" fontSize="0.9em">
                {"ตัวอย่างเครื่องมือที่สามารถใช้งานได้"}
              </Text>
              <SkillExample>
                <Text>React</Text>
                <Text>Vue</Text>
                <Text>Storybook</Text>
                <Text>Flutter</Text>
                <Text>Electron</Text>
                <Text>Webpack</Text>
              </SkillExample>
            </SkillBlock>
          </GridItem>
          <GridItem area="languages">
            <SkillBlock
              faIcon={faCode}
              title="Programming languages"
              subtitle="Object-oriented, Functional"
            >
              <SkillExample>
                <Text>JavaScript</Text>
                <Text>TypeScript</Text>
                <Text>Go</Text>
                <Text>Python</Text>
                <Text>PHP</Text>
                <Text>Dart</Text>
              </SkillExample>
            </SkillBlock>
          </GridItem>
          <GridItem area="others">
            <SkillBlock
              faIcon={faCodeBranch}
              title="Others"
              subtitle="Version Control, Containerization, Collaboration"
            >
              <SkillExample>
                <Text>Git</Text>
                <Text>Linux</Text>
                <Text>Docker</Text>
                <Text>Postman</Text>
              </SkillExample>
            </SkillBlock>
          </GridItem>
        </Grid>
      </VStack>
    </Section>
  );
};

export default Skill;
