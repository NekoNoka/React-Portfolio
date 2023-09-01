import {
  Grid,
  Header
} from "semantic-ui-react";
import adenPng from '../assets/aden.png';

export default function personalBios() {
  return (
    <>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "1em", paddingTop: "1em" }}>
            <img
              src={adenPng}
              alt=""
              className="ui small centered circular image"
            />
            <Header style={{ fontSize: "2em", margin: "4px" }}>
              Aden Eldred
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
