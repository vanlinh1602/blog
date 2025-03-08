import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://blog.nvlinh.com", // your site url
  title: "Linh's blog",
  slogan: "Do something, or nothing",
  description: "Welcome to my blog! I'm Linh, a software engineer with a passion for building products that help people live better lives.",
  social: {
    github: "https://github.com/vanlinh1602", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/linhnv1622/", // leave empty if you don't want to show the linkedin
    email: "linhnv1622@gmail.com", // leave empty if you don't want to show the email
    rss: false, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
