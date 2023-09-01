import {
  Grid,
  Header
} from "semantic-ui-react";

import BioFace from '../segments/BioFace';

export default function Home() {
  return (
    <>
      <Grid container stackable verticalAlign="middle" style={{ padding: "6em 0em" }}>
        <Grid.Row centered>
          <Grid.Column width={14}>
            <BioFace />
            <Header style={{ fontSize: "3em" }}>
              About Me
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              I'm a passionate Full Stack Developer with a love for programming that began in 2014 when I was just 11 years old.
              Since then I've honed my skills in various programming languages, including JavaScript, C#, Python, HTML, CSS, Lua, and Java.
              My journey in coding has been driven by a relentless desire to understand the intricate workings of different languages, enabling me to harness their unique capabilities effectively.
            </p>
            <p style={{ fontSize: "1.33em" }}>
              One of the aspects of programming that fascinates me is diving into niche concepts that can greatly enhance code efficiency.
              For instance, I find joy in exploring concepts like destructuring assignment in JavaScript, which simplifies variable swapping, among other things.
            </p>
            <p style={{ fontSize: "1.33em" }}>
              As a developer, I thrive on learning and staying at the forefront of technology.
              My goal is to continually broaden my scope of knowledge and deepen my understanding of programming languages to create innovative and efficient solutions. At the age of 21, I'm excited to bring my expertise to the world of web development.
            </p>
            <p style={{ fontSize: "1.33em" }}>
              Thank you for visiting my portfolio website, where you'll find a showcase of my projects and a glimpse into my coding journey.
              Feel free to explore and get in touch if you'd like to collaborate or have any questions.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}