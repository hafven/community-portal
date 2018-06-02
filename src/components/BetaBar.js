import React from "react";
import styled from "react-emotion";

const Bar = styled("div")`
  padding: 0.3rem;
  background-color: #dc3545;
  text-align: center;
`;

const Link = styled("a")`
  color: #f8f9fa;
  font-size: 80%;
  text-decoration: none;
`;

const BetaBar = () => (
  <Bar>
    <Link
      href="https://hafvencommunity.slack.com/messages/CACTF6E94/team/U2TB71YNR/"
      target="_blank"
    >
      Beta Test — Hilf mit und sende Fehlerreports mit Screenshot in Slack
    </Link>
  </Bar>
);

export default BetaBar;
