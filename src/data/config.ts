const config = {
  title: "Daniel Bernardino | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Daniel, a full-stack developer and creative technologist specializing in interactive web experiences, and innovative projects. Discover my latest work. Let's build something amazing together!",
    short:
      "Discover the portfolio of Daniel, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Daniel",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "interactive websites",
    "web design",
    "React",
    "Next.js",
    "Framer Motion",
  ],
  author: "Daniel Bernardino",
  email: "hello@teamdbsolutions.com",
  site: "https://teamdbsolutions.com",

  // for github stars button
  githubUsername: "daniel-bernardino747",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/DanielB43864006",
    linkedin: "https://www.linkedin.com/in/danielbernardinodesouza/",
    instagram: "https://www.instagram.com/daniel__bernardino",
    github: "https://github.com/daniel-bernardino747",
    facebook: "https://www.facebook.com/danielbernardinodesouza/",
  },
};
export { config };

