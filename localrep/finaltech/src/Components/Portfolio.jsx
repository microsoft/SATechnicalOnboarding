/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Blog",
    description:
      "Dive into my coding adventures and insights on QuantumQuill Diaries, where I share my journey in the world of technology and code.",
    url: "https://www.blogger.com/u/2/blog/posts/8559546434885609178",
  },
  {
    title: "GitHub Link",
    description: "Explore my coding adventures and collaborative projects on GitHub",
    url: "https://github.com/student-ambassador",
  },
  {
    title: "My Resume",
    description: "Explore my professional journey and qualifications by downloading my resume here",
    url: "https://drive.google.com/file/d/1YJfSjO1ygt8faFoYQigZgbfEJHaDPD5F/view?usp=drivesdk",
  },
  {
    title: "LinkedIn Profile",
    description:
      "Connect with me on LinkedIn to explore my professional network and stay updated on my latest endeavors",
    url: "https://www.linkedin.com/in/tumu-sai-snehitha-239183235/",
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
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
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
