import React from "react";

function Footer() {
  const icons = [
    {
      name: "Github",
      link: "https://github.com/PintoDrop",
    },
  ];

  return (
    <footer className="text-center">
      {icons.map((icon) => (
        <a href={icon.link} key={icon.name}></a>
      ))}
    </footer>
  );
}

export default Footer;
