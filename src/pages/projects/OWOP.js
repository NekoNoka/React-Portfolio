import {
  Header,
  Segment
} from "semantic-ui-react";

export default function Home() {
  return (
    <>
      <Header style={{ fontSize: "3em" }}>
        Neko OWOP Scripts
      </Header>
      <Segment vertical>
        <p style={{ fontSize: "1.33em" }}>
          <a href="https://github.com/NekoNoka/Neko-OWOP-Scripts" target="_blank" rel="noopener noreferrer">
            Neko OWOP Scripts Repository
          </a>
        </p>
        <p style={{ fontSize: "1.33em" }}>
          As one of my projects a year ago I created a script for a friend which turned viral in this niche website.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          As one of my proudest coding accomplishments I've created something people use a lot for assisting any of their creative needs in pixel art creation.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          It gives users new features that the website lacks like creating shades between colors, filling patterns inside of sections of areas, and more!
        </p>
      </Segment>
    </>
  );
}