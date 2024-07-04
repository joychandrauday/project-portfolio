import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SideBarHome from "./SideBarHome";
import HomeBannerElements from "./HomeBannerElements";
import './styles.css';
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import SkilledStack from './../skilled/SkilledStack';

const Home = () => {
  return (
    <div className="pt-[30px] md:pt-[10px] lg:pt-[60px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <Helmet>
        <title>Joy Chandra Uday | MERN Stack Developer</title>
      </Helmet>
      {/* Home Banner Section */}
      <Tabs >
        <TabList className={'lg:text-left lg:block text-center bg-[#1A1919]'}>
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab>Projects</Tab>
          <Tab>Skilled Stacks</Tab>
          <Tab>Resume</Tab>
          <Tab>Blog</Tab>
          <Tab>Contact</Tab>
        </TabList>

        <TabPanel>
          <HomeBannerElements />
        </TabPanel>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Projects />
        </TabPanel>
        <TabPanel>
          <SkilledStack />
        </TabPanel>
        <TabPanel>
          <Resume />
        </TabPanel>
        <TabPanel>
          <Blog />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;
