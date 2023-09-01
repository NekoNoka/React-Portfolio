import {
  Container,
  Divider,
  Grid,
  List,
  Segment
} from "semantic-ui-react";

export default function Footer() {
  return (
    <>
      <Segment inverted vertical style={{ padding: "2em 0em" }}>
        <Container text>
          <Divider
            className="header"
            horizontal
            style={{
              margin: "0em 0em",
              textTransform: "uppercase",
              padding: "1em 0em",
              color: "white",
            }}
          >
            <h3>Check my socials</h3>
          </Divider>
        </Container>
        <Container>
          <Grid centered divided stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <List link>
                  <List.Item>
                    <Container textAlign="center" href="https://github.com/NekoNoka" target="_blank">
                      GitHub
                    </Container>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  )
}