import React from "react";
import Container from "./container";

export default function Contact(props) {
  const items = [
    { title: "Email", subtitle: "agency@info.com", info: "+336655465" },
    {
      title: "Twitter",
      subtitle: "886 Walter Streets",
      info: "New York, NY 12345",
    },
    { title: "Instagram", subtitle: "agency@info.com", info: "+336655465" },
  ];
  return (
    <Container extraClasses="Contact-Container">
      <div class="contact flex" aria-labelledby="footer-heading">
        {items.map(({ title, subtitle, info }, index) => {
          return (
            <div class="">
              <h4 class="">{title}</h4>
              <p class="">{subtitle}</p>
              <p class="">{info}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
