import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://bpstr.github.io/snippets/",
  author: "bpstr",
  desc: "A collection of useful snippets hard to find.",
  title: "bpstr/snippets",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [];
