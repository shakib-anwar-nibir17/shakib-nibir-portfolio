import StayFinderImg from "@/public/Projects/StayFinder.png";
import InventiSyncImg from "../public/Projects/inventory-mangement-sn17-web-app-1024x768desktop-8644d8.png";
import LuminaLibRaryImg from "../public/Projects/library-lumina-sn17-web-app-1024x768desktop-3f5818.png";
import PandaEstateImg from "../public/Projects/panda-estate-sn17-web-app-1024x768desktop-60d302.png";
import PluraImg from "../public/Projects/plura.png";
import VelocityDriveImg from "../public/Projects/velocity-drive-sn17-web-app-1024x768desktop-106b3f.png";
import YzStoreImg from "../public/Projects/yz-store-ssn17-web-app-1024x768desktop-5fad22.png";

export const projects = [
  {
    id: 1,
    slug: "stay-finder",
    title: "Stay Finder",
    type: "Featured(Mern)",
    summary: "Stay Finder is a home stay website where it connects hosts with users to give them the best experience when it comes to home stay. The application is fully based on MERN where the authentication system has been built using the firebase authentication. JWT and Cookies were also introduced for added security. The website has multiple authorization like User, Hosts and Admin. Each user has different individual dashboard where they can access different features of the website",
    description: "Stay Finder is a comprehensive vacation rental platform designed to bridge the gap between travelers and hospitality hosts. Built on the MERN (MongoDB, Express, React, Node.js) stack, it offers a seamless experience for finding and booking unique accommodations. Key features include a robust multi-role dashboard for Admins, Users, and Hosts, secure authentication via Firebase, and protected routing with JWT and Cookies. Hosts can manage their listings in real-time, while guests enjoy an intuitive booking flow and personalized reservation history.",
    img: StayFinderImg,
    link: "https://stay-finder-client.vercel.app",
    github: "https://github.com/shakib-anwar-nibir17/stay-finder-client",
    github_server: "https://github.com/shakib-anwar-nibir17/stay-finder-server",
    featured: true,
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth", "JWT", "Tailwind CSS"],
    features: [
      "Multi-role Authentication (Admin, Host, User)",
      "Secure payment integration placeholder",
      "Dynamic dashboard for each user type",
      "Real-time listing management for hosts",
      "Advanced filtering and search for stays",
      "Responsive design for all device types"
    ]
  },
  {
    id: 2,
    slug: "panda-estate",
    title: "Panda Estate",
    type: "Featured(Mern)",
    summary: "Panda Estate is a real estate management application where the authentication system has been designed from scratch that includes both use registration and user sign-in. JWT for added security in the application and cookies to verify valid users. The server has been designed by node js with the help of Express to create the API routes for the application. MongoDB is the database with Mongoose to help design user and listing models and schema validations. The application also houses Firebase to incorporate Google login.",
    description: "Panda Estate redefined modern real estate discovery with a focus on simplicity and security. The application features a custom-built authentication system, allowing users to register, log in, and securely manage their property listings. Performance is optimized using Redux Toolkit for state management, while Firebase Storage handles dynamic image uploads effortlessly. The clean, minimalist UI ensures that property details and high-quality visuals remain at the forefront of the user experience.",
    img: PandaEstateImg,
    link: "https://panda-estate-sn17.web.app",
    github: "https://github.com/shakib-anwar-nibir17/panda-estate-client",
    github_server: "https://github.com/shakib-anwar-nibir17/panda-estate-server",
    featured: true,
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Firebase Storage", "JWT"],
    features: [
      "Custom authentication system from scratch",
      "Property listing CRUD operations",
      "Image upload via Firebase Storage",
      "Google Sign-In integration",
      "State management with Redux Toolkit",
      "Secure API access with JWT"
    ]
  },
  {
    id: 3,
    slug: "plura",
    title: "Plura",
    type: "Featured(Next js)",
    summary: "Plura is dynamic and collaborative web applications where users are able to work on ideas collaboratively and brainstorm for new challenges. Its team experience makes it really easy for users to work on a group project. The Clerk authentication provides utmost security for user authentication and authorization with Liveblocks creating a seamless collaborative experience.",
    description: "Plura represents the next generation of collaborative tools, bringing teams together in a shared digital workspace. Built with Next.js and powered by Liveblocks, it enables real-time brainstorming and task synchronization. The integration with Clerk ensures enterprise-grade security for user data and organizational silos. Whether you're planning a project or solving complex problems, Plura's collaborative environment makes collective intelligence more accessible than ever.",
    img: PluraImg,
    link: "https://test-deployment-mocha-sigma.vercel.app",
    github: "https://github.com/shakib-anwar-nibir17/realtime-collab-webapp",
    github_server: "https://github.com/shakib-anwar-nibir17/realtime-collab-webapp",
    featured: true,
    tech: ["Next.js", "Clerk Auth", "Liveblocks", "Shadcn UI", "Tailwind CSS", "Framer Motion"],
    features: [
      "Real-time multiplayer collaboration",
      "Advanced user permissions with Clerk",
      "Seamless brainstorming boards",
      "Responsive and modern UI with Shadcn",
      "Optimized for high-concurrency interaction",
      "Serverless architecture with Next.js API routes"
    ]
  },
  {
    id: 4,
    slug: "inventisync",
    title: "InventiSync",
    type: "MERN Stack Project",
    summary: "InventiSync is an enterprise resource management web application that aims to make inventory management easier. The web application has a fully functional user authentication system built using the latest technology like Firebase in addition to having features like Google authentication. The user can create stores to manage his inventory and sell the products to customers. The web application has an admin panel to help monitor both the users and track their sales records.",
    description: "InventiSync empowers small to medium businesses with tools to track inventory, manage sales, and optimize operations. It streamlines the complex task of resource management through an intuitive interface. Business owners can monitor stock levels in real-time, generate sales reports, and manage multi-store configurations. The admin panel provides high-level oversight, making it a complete ERP solution for modern retail environments.",
    img: InventiSyncImg,
    link: "https://inventory-mangement-sn17.web.app",
    github: "https://github.com/shakib-anwar-nibir17/inventisync-sn17-client",
    github_server: "https://github.com/shakib-anwar-nibir17/inventisync-sn17-server",
    featured: true,
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase", "Recharts"],
    features: [
      "Inventory and Stock tracking",
      "Sales data visualization with charts",
      "Admin and User role separation",
      "Multi-store management capability",
      "Google login integration",
      "Inventory transaction history"
    ]
  },
  {
    id: 5,
    slug: "lumina-library",
    title: "Lumina Library",
    type: "MERN Stack",
    summary: "A modern library management system.",
    description: "Lumina Library is a digital solution for modernizing book tracking and member management. It allows librarians to manage their collection with ease while providing members with an interactive platform to browse and borrow titles.",
    img: LuminaLibRaryImg,
    link: "https://library-lumina-sn17.web.app",
    github: "https://github.com/shakib-anwar-nibir17/lumina-library-sn17-client",
    github_server: "https://github.com/shakib-anwar-nibir17/lumina-library-sn17-server",
    featured: false,
    tech: ["React", "Express", "MongoDB", "Node.js"]
  },
  {
    id: 6,
    slug: "velocity-drive",
    title: "Velocity Drive",
    type: "MERN Stack",
    summary: "A car rental and management platform.",
    description: "Velocity Drive offers a streamlined experience for car enthusiasts and renters. From luxury sedans to rugged off-roaders, users can browse availability and book vehicles for their next journey.",
    img: VelocityDriveImg,
    link: "https://velocity-drive-sn17.web.app",
    github: "https://github.com/shakib-anwar-nibir17/velocity-drive-sn17-client",
    github_server: "https://github.com/shakib-anwar-nibir17/velocity-drive-sn17-server",
    featured: false,
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 7,
    slug: "yz-store",
    title: "YZ store",
    type: "MERN Stack",
    summary: "An e-commerce clothing store.",
    description: "YZ store is a stylish e-commerce platform for fashion-forward shoppers. It features a curated collection of clothing with a focus on ease of use and secure checkout.",
    img: YzStoreImg,
    link: "https://yz-store-ssn17.web.app",
    github: "https://github.com/shakib-anwar-nibir17/clothing-store-client",
    github_server: "https://github.com/shakib-anwar-nibir17/clothing-store-server",
    featured: false,
    tech: ["React", "Tailwind CSS", "Express", "MongoDB"]
  }
];
