import {
  Grid,
  Header,
  Segment
} from "semantic-ui-react";
import adenPng from '../assets/aden.png';

export default function personalBios() {
  return (
    <>
      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <img
                  src={adenPng}
                  alt=""
                  className="ui small centered circular image"
                />
              <Header as="h1" style={{ margin: "4px" }}>
                Aden Eldred
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
