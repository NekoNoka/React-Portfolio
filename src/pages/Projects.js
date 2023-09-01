import {
  Grid
} from "semantic-ui-react";

import OWOP from './projects/OWOP';
import MessagingApp from './projects/MessagingApp';

export default function Home() {
  return (
    <>
      <Grid container stackable verticalAlign="middle" style={{ padding: "6em 0em" }}>
        <Grid.Row centered>
          <Grid.Column width={8}>
            <OWOP/>
            <MessagingApp/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}