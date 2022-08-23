import React from "react";
import Container from "./container";

export default function content() {
  return (
    <Container extraClasses="Content-Container   py-12   lg:py-32">
      <div class="grid h-full lg:grid-cols-2 gap-8 lg:gap-12 ">
        <div class=" grid-left  md: bg-gray-100 overflow-hidden ">
          <img
            src="https://images.frandroid.com/wp-content/uploads/2020/12/apple-macbook-pro-m1-frandroid-scaled.jpg"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            class=" max-w-full h-auto md:w-full md:h-full object-cover object-center aspect-auto"
          />
        </div>

        <div class=" grid-right   ">
          <img
            src="https://images.frandroid.com/wp-content/uploads/2020/12/apple-macbook-pro-m1-frandroid-scaled.jpg"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            class=" max-w-full h-auto md:w-full md:h-full object-cover object-center aspect-auto"
          />
        </div>
      </div>
    </Container>
  );
}
