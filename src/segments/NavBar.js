import { Component } from "react";
import {
  Container,
  Menu,
  Segment
} from "semantic-ui-react";

import { InView } from "react-intersection-observer";

import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {};
  toggleFixedMenu = (inView) => this.setState({ fixed: !inView });
  render() {
    const { fixed } = this.state;
    return (
      <>
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign="center"
            style={{ padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                {/* <Link to="/React-Portfolio/">
                  <Menu.Item>
                    Home
                  </Menu.Item>
                </Link>
                <Link to="/React-Portfolio/projects">
                  <Menu.Item>
                    My Projects
                  </Menu.Item>
                </Link> */}
                <Link to="/React-Portfolio/">
                  <Menu.Item>
                    My Projects
                  </Menu.Item>
                </Link>
                <Link to="/React-Portfolio/aboutme">
                  <Menu.Item>
                    About Me
                  </Menu.Item>
                </Link>
                <Menu.Item position="right">
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </InView>
      </>
    );
  }
}