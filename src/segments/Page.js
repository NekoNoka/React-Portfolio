import {
  Grid,
  Segment
} from "semantic-ui-react";

export default function Home() {
  return (
    <>
      <Segment style={{ padding: "6em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row centered>
            <Grid.Column width={8}>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}