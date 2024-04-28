import AnimateText from "@/components/AnimateText";

import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";
import InventiSyncImg from "../../public/Projects/inventory-mangement-sn17-web-app-1024x768desktop-8644d8.png";
import LuminaLibRaryImg from "../../public/Projects/library-lumina-sn17-web-app-1024x768desktop-3f5818.png";
import PandaEstateImg from "../../public/Projects/panda-estate-sn17-web-app-1024x768desktop-60d302.png";
import VelocityDriveImg from "../../public/Projects/velocity-drive-sn17-web-app-1024x768desktop-106b3f.png";
import YzStoreImg from "../../public/Projects/yz-store-ssn17-web-app-1024x768desktop-5fad22.png";

const ProjectPage = () => {
  return (
    <>
      <AnimateText
        text="My Projects"
        className="text-6xl lg:text-5xl sm:text-4xl mt-20 mb-16"
      />
      <div className="grid w-full grid-cols-1 gap-24">
        <div>
          <FeaturedProject
            img={PandaEstateImg}
            title="Panda Estate"
            type="Featured"
            summary="Panda Estate is a real estate management application where the authentication system has been designed from scratch that includes both use registration and user sign-in. JWT for added security in the application and cookies to verify valid users. The server has been designed by node js with the help of Express to create the API routes for the application. MongoDB is the database with Mongoose to help design user and listing models and schema validations. The application also houses Firebase to incorporate Google login. 6. The Front End used React for styling. The state has been managed using the Redux toolkit. 8. A dynamic photo uploading system has been implemented using Firebase Storage. Create a description based on these points"
            link="https://panda-estate-sn17.web.app"
            github="https://github.com/shakib-anwar-nibir17/panda-estate-client"
            github_server="https://github.com/shakib-anwar-nibir17/panda-estate-server"
          />
        </div>
        <div>
          <FeaturedProject
            img={InventiSyncImg}
            title="InventiSync"
            type="MERN Stack Project"
            summary="InventiSync is an enterprise resource management web application that aims to make inventory management easier. The web application has a fully functional user authentication system built using the latest technology like Firebase in addition to having features like Google authentication. The user can create stores to manage his inventory and sell the products to customers. The web application has an admin panel to help monitor both the users and track their sales records."
            link="https://inventory-mangement-sn17.web.app"
            github="https://github.com/shakib-anwar-nibir17/inventisync-sn17-client"
            github_server="https://github.com/shakib-anwar-nibir17/inventisync-sn17-server"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 mt-10 xs:gap-2 md:gap-8 lg:gap-6 gap-10">
        <div className="col-span-6 md:col-span-12">
          <Project
            type="MERN Stack"
            img={LuminaLibRaryImg}
            title="Lumina Library"
            link="https://library-lumina-sn17.web.app"
            github="https://github.com/shakib-anwar-nibir17/lumina-library-sn17-client"
            github_server="https://github.com/shakib-anwar-nibir17/lumina-library-sn17-server"
          />
        </div>
        <div className="col-span-6 md:col-span-12">
          <Project
            type="MERN Stack"
            img={VelocityDriveImg}
            title="Velocity Drive"
            link="https://velocity-drive-sn17.web.app"
            github="https://github.com/shakib-anwar-nibir17/velocity-drive-sn17-client"
            github_server="https://github.com/shakib-anwar-nibir17/velocity-drive-sn17-server"
          />
        </div>
        <div className="col-span-6 md:col-span-12">
          <Project
            type="MERN Stack"
            img={YzStoreImg}
            title="YZ store"
            link="/"
            github="/"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
