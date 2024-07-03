import React from "react";
import image from "../images/portfolio.jpg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "My Portfolio",
    description:
      "Welcome to My Portfolio, a window into my professional journey, skills, and creative projects. This platform is designed to highlight my expertise, showcase my work, and provide a space for potential employers, clients, and collaborators to learn more about me.",
    url: "https://portofolio-two-lac.vercel.app/",
  },
  {
    title: "Youtube Clone",
    description:
      "Welcome to YouTube Clone, a dynamic video sharing platform that brings creators and viewers together. Whether you're looking to share your videos with the world, discover new content, or connect with other enthusiasts, YouTube Clone has everything you need.",
    url: "https://youtz-kaisar-rashids-projects.vercel.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Welcome to My Resume Site, the perfect platform to present your professional achievements, skills, and experiences to potential employers and collaborators. Create a stunning online resume that highlights your unique talents and sets you apart from the competition.",
    url: "https://drive.google.com/file/d/15aBhfNfgXwytVO8rDX0k3F6GQLS-3Ds6/view?usp=drivesdk",
  },
  {
    title: "Foodies App",
    description:
      "Welcome to Foodies App, the go-to platform for all food enthusiasts! Whether you're a seasoned chef, a home cook, or simply someone who loves to explore new flavors, Foodies App is designed to elevate your culinary experiences.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "560px", width: "500px", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
