import { Center } from "@chakra-ui/react";
import Section from "../../components/Section";
import Teletype from "../../components/Teletype";

const Bio = () => {
  return (
    <Section
      expand
      container={{
        maxW: "80ch",
        py: 0,
      }}
    >
      <Center position="relative" h="full">
        <Teletype
          title="About me"
          lines={[
            `สวัสดีครับผมนายธณวัฒน์ ยอดนิล ชื่นชอบการโปรแกรมมิ่งเป็นอย่างมาก โดยเฉพาะอย่างยิ่งการพัฒนาเว็บไซต์ครับ`,
            `ผมเริ่มต้นมาจากการทดลองเขียนสคริปต์เกม ทดลองสร้างเกมและเว็บไซต์ของตัวเอง ตอนนี้เริ่มสนใจจึงเริ่มศึกษาการเขียนโปรแกรมอย่างจริงจังครับ`,
            `ตอนนี้ผมก็ยังค้นหาโอกาสที่จะได้เรียนรู้และทดลองสิ่งใหม่ ๆ อยู่เสมอครับ 🚀`,
          ]}
        />
      </Center>
    </Section>
  );
};

export default Bio;
