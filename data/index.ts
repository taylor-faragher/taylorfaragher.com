export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Resume", link: "#resume"},
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.webp",
      spareImg: "",
    },
    {
      id: 2,
      title: "Currently living in Smyrna, TN (CST), but can work remotely with any timezone.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start text-center",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Creating a full stack site for link shortening",
      description: "Current Projects Include:",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 md:w-96 md:h-full w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center max-w-1/2",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Interested in hiring me? Reach out!",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Weather SPA App",
      des: "A full production ready single page application website built with React, Typescript, and AWS",
      img: "/WeatherSPA.webp",
      iconLists: ["/re.svg", "/ts.svg", "awsIcon.svg", "jestIcon.svg", "CypressIcon.svg"],
      link: "https://github.com/taylor-faragher/WeatherWebsite-Vite-React",
    },
    {
      id: 2,
      title: "Mock Media App",
      des: "A full stack mock React Native app for uploading and viewing video content",
      img: "/MockMediaApp.webp",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://github.com/taylor-faragher/mock-media-app-reactnative",
    },
    {
      id: 3,
      title: "Weather Proxy Backend",
      des: "The production ready backend proxy lambda for my Weather SPA App",
      img: "/WeatherBackend.webp",
      iconLists: ["/js_small.svg", "ts.svg", "awsIcon.svg", "openWeatherMapIcon.svg"],
      link: "https://github.com/taylor-faragher/Weather-Lambda",
    },
    {
      id: 4,
      title: "Link Shortening Database",
      des: "An api backend with Postgresql database for link shortening site. More coming soon!",
      img: "/LinkShortenerBackend.webp",
      iconLists: ["/ts.svg", "postgresql.svg", "awsIcon.svg"],
      link: "https://github.com/taylor-faragher/link-shortening-backend",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Cypress",
      img: "",
      imgClasses: '',
      nameImg: "/Cypress_Logotype_White.svg",
      nameImgClasses: 'w-32',
    },
    {
      id: 2,
      name: "AWS Cloud Services",
      img: "",
      imgClasses: '',
      nameImg: "/AWSLogo.svg",
      nameImgClasses: 'md:w-28'
    },
    {
      id: 3,
      name: "JavaScript",
      img: "/javascriptLogo.svg",
      imgClasses: "",
      nameImg: "",
      nameImgClasses:""
    },
    {
      id: 4,
      name: "TypeScript",
      img: "/ts-logo-128.svg",
      imgClasses: '',
      nameImg: "/TSLogo.svg",
      nameImgClasses: 'w-24',
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      imgClasses: 'w-30',
      nameImg: "/dockerName.svg",
      nameImgClasses: '',
    },
    {
      id: 6,
      name: "nodejs",
      img: "",
      imgClasses: '',
      nameImg: "nodejsLight.svg",
      nameImgClasses: 'md:w-28',
    },
    {
      id: 7,
      name: 'styled-components',
      img: 'styled-components.svg',
      imgClasses: 'w-16',
      nameImg: '',
      nameImgClasses: 'text-lg md:text-[1.20rem]',
    },
    {
      id: 8,
      name: 'Tailwind CSS',
      img: '',
      imgClasses: '',
      nameImg: 'tailwindcss-logotype-white.svg',
      nameImgClasses: 'w-[170px]',
    }
    //React, React Native, HTML, CSS, Jest, Github, Git, Vite, Webpack, SQL, Postgresql, vscode, expo, next.js
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Engineer 2",
      desc: "Lead the development of a web-based platforms using React.js, Typescript and AWS Cloud",
      className: "md:col-span-2",
      thumbnail: "/SoftwareEngineer2.webp",
    },
    {
      id: 2,
      title: "Software Engineer 1",
      desc: "Developed and tested internal web-based CSM software used by 1500 daily users using Dart, Angular, and Bootstrap",
      className: "md:col-span-2",
      thumbnail: "/SoftwareEngineer1.webp",
    },
    {
      id: 3,
      title: "Software Developer Engineer in Test",
      desc: "Tested React and JavaScript based applications. Developed automated systems for production support.",
      className: "md:col-span-2",
      thumbnail: "/SDET.webp",
    },
    {
      id: 4,
      title: "SQA Analyst 2",
      desc: "Automated and manual tested a large internal CSM application along with React based applications",
      className: "md:col-span-2",
      thumbnail: "/SQAEngineer.webp",
    },
  ];
  
  export const socialMedia = [
    {
      img: "/git.svg",
      name: 'git',
      link: 'https://github.com/taylor-faragher'
    },
    {
      img: "/insta.svg",
      name: 'Instagram',
      link: 'https://www.instagram.com/smurd9/',
    },
    {
      img: "/link.svg",
      name: 'linkedIn',
      link: 'https://www.linkedin.com/in/taylor-faragher-71360560'
    },
  ];