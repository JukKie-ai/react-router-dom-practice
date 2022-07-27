import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  return (
    <div>
      This is the about page.
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est inventore
        dignissimos fuga temporibus, tempore a repudiandae ipsum expedita
        facilis molestias obcaecati, similique beatae possimus. Veniam odio
        dolores est aut deserunt.
      </p>
      <button
        onClick={() => {
          navigate("/easteregg");
        }}
      >
        CLICK ME FOR MORE INFORMATION!
      </button>
    </div>
  );
};

export default About;
