import AnimatedPortfolio from "../../assets/animated-portfolio.jpg";
import NextBlogCMS from "../../assets/next-blog-cms.png";
import MovieLand from "../../assets/movieland.jpg";
import AdventurePortfolio from "../../assets/adventure-portfolio.jpg";
import MultiAuth from "../../assets/multi-auth-nextjs.png";
import CountryAPI from "../../assets/country-api-next.png";

export const projectsData = [
  {
    id: 1,
    image: NextBlogCMS,
    title: "Next Blog CMS",
    desc: "Next.js 14, Sanity CMS, Tailwind",
    link: "https://next-blog-cms-theta.vercel.app/",
    category: "web",
  },
  {
    id: 2,
    image: MultiAuth,
    title: "Multi Auth",
    desc: "Next.js 14, Next-Auth, Tailwind",
    link: "https://multi-auth-nextjs.vercel.app/sign-in",
    category: "web",
  },
  {
    id: 3,
    image: CountryAPI,
    title: "Country API Search",
    link: "https://country-api-nextjs.vercel.app/",
    category: "web",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "design",
  },
];
