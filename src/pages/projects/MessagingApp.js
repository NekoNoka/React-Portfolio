import {
  Header,
  Segment
} from "semantic-ui-react";

export default function Home() {
  return (
    <>
      <Header style={{ fontSize: "3em" }}>
        Messaging App
      </Header>
      <Segment vertical>
        <p style={{ fontSize: "1.33em" }}>
          <a href="https://github.com/NekoNoka/Messaging-App" target="_blank" rel="noopener noreferrer">
            Messaging App Repository
          </a>
        </p>
        <p style={{ fontSize: "1.33em" }}>
          Created by me,&nbsp;
          <a href="https://github.com/mrbll48" target="_blank" rel="noopener noreferrer">
            Mark
          </a>,&nbsp;
          <a href="https://github.com/hdezlilia" target="_blank" rel="noopener noreferrer">
            Hdez
          </a>&nbsp;
          and&nbsp;
          <a href="https://github.com/Cecilj24" target="_blank" rel="noopener noreferrer">
            Cecil
          </a>.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          We made a project which lets people chat on a website using the websocket technology.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          This lets users create accounts, create chat channels, and subsequently talk in those channels to other people in real time!
        </p>
        <p style={{ fontSize: "1.33em" }}>
          It was one of my favorite projects to setup since I was responsible for handling and fixing anything related to the websocket connections.
        </p>
      </Segment>
    </>
  );
}