import {
  Grid,
  Header,
  Segment
} from "semantic-ui-react";

export default function Home() {
  return (
    <>
      <Segment style={{ padding: "6em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row centered>
            <Grid.Column width={8}>
              <p style={{ fontSize: "1.33em" }}>
                Welcome to my portfolio. I'm a dedicated Full Stack Developer, and this space is a testament to my commitment to excellence. Explore my projects and experience the craftsmanship that defines my work.
                </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}