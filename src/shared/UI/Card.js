import React from "react";
import { Card, Heading, Box, Text, Button } from "rimble-ui";

const CardComponent = ({ children }) => (
  <Card width={"auto"} maxWidth={"600px"} mx={"auto"} px={[3, 3, 4]}>
    <Heading>Chainlink One-time Pad (OTP)</Heading>
    {children}
  </Card>
);

export default CardComponent;
