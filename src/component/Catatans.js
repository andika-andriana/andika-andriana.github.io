import React from "react";
import { Segment, Label } from "semantic-ui-react";
import IframeC from './IframeC';

const Catatans = () => {
  return (
    <Segment>
      <IframeC title="Andriana Notes" src="https://andriana-notes.netlify.com/" height="100%" width="100%"/>
      <Label attached="bottom" color="green">
        Iframe:&nbsp;
        <a
          href="https://andriana-notes.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://andriana-notes.netlify.com/
        </a>
      </Label>
    </Segment>
  );
};

export default Catatans;
