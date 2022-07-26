import * as React from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import "./Stacks.css";
export default function DirectionStack() {
  return (
    <div class="container-stack">
      <Stack direction="row" spacing={4}>
        <div class="cardstyling">
          <Card class="c1" variant="outlined">
            <h1 class="cards-heading">Best Quality Work</h1>
            <p class="cards-content">
              InSoftLink Software is known for serving out the best Web
              development, Mobile application development. We are developing
              websites which are quick, responsive, user friendly and
              functionally effective.
            </p>
          </Card>
        </div>
        <div class="cardstyling">
          <Card class="c1" variant="outlined">
            <h1 class="cards-heading">Dedicated Team</h1>
            <p class="cards-content">
              With the expert team of certified engineers, who are passionate
              about their work. Working comprehensively to meet the requirements
              of the clients, they are committed to providing quality software
              solutions.
            </p>
          </Card>
        </div>
        <div class="cardstyling">
          <Card class="c1" variant="outlined">
            <h1 class="cards-heading"> 24*7 Available</h1>
            <p class="cards-content">
              Our dedicated team is involved in the development process 24*7,
              with the continuous involvement of managing regulatory
              requirements coupled with optimized architectures result in rapid
              and effective development, which help us to grow better.
            </p>
          </Card>
        </div>
      </Stack>
    </div>
  );
}
