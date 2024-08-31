import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdDetails } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import "./../Home/styles.css"; // Make sure to adjust the path based on your project structure

const SkilledStack = () => {
  const skills = [
    {
      name: "JavaScript",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      details:
        "The granddaddy of web interactivity. JavaScript brings web pages to life by allowing you to create dynamic elements, respond to user actions, and even build complex web applications. It's like adding a sprinkle of magic to your HTML and CSS. Here's a breakdown of its capabilities:\n* **Interactive Elements:** Create elements that respond to user clicks, hovers, and other events, making web pages more engaging.\n* **Dynamic Updates:** Update content on a web page without reloading the entire page, providing a smoother user experience.\n* **Complex Applications:** Build single-page applications (SPAs) and other sophisticated web experiences with JavaScript frameworks and libraries.",
    },
    {
      name: "React",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      details:
        "Think of React as a Lego set for building user interfaces. It allows you to break down complex interfaces into smaller, reusable components, making development faster and more maintainable. React excels at keeping your web pages efficient by only updating the parts that actually change, ensuring a smooth user experience. Here are some key features:\n* **Component-Based Architecture:** Break down UIs into reusable components, promoting code reusability and maintainability.\n* **Virtual DOM:** React efficiently updates the real DOM by creating a virtual representation first, resulting in faster performance.\n* **JSX Syntax:** Combines HTML-like elements with JavaScript for a more intuitive way to write UI code.",
    },
    {
      name: "Node.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      details:
        "Unleashing JavaScript's power beyond the browser. Node.js lets you run JavaScript code outside of a web browser, opening doors for building web servers, real-time applications, and data streaming services. Node.js shines in building efficient and scalable applications that handle a lot of data and user interactions. Here are some of its strengths:\n* **Event-Driven Architecture:** Handles requests asynchronously, making it ideal for real-time applications and high-concurrency scenarios.\n* **I/O Bound Operations:** Efficiently handles I/O operations like network requests and file access, making it suitable for building scalable web servers.\n* **Large Ecosystem:** Benefits from a vast ecosystem of libraries and frameworks for various functionalities.",
    },
    {
      name: "Express",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      details:
        "The expressway for building web applications with Node.js. This web framework simplifies the process of structuring your application, handling incoming requests, and managing different functionalities. Express helps you write clean and organized code, making it easier to maintain and collaborate on larger projects. Here's what it offers:\n* **Routing:** Define how incoming requests are mapped to specific functions in your application.\n* **Middleware:** Leverage middleware for common tasks like logging, authentication, and parsing request bodies.\n* **Flexibility:** Build web applications tailored to your project's specific needs with Express's customizable framework.",
    },
    {
      name: "MongoDB",
      logo: "https://raw.githubusercontent.com/devicons/devicons/master/icons/mongodb/mongodb-original.svg",
      details:
        "The flexible data storage solution for modern applications. MongoDB is a NoSQL database that stores data in JSON-like documents, offering a more flexible approach compared to traditional relational databases. This makes it ideal for storing large amounts of unstructured or frequently changing data, a common scenario in web applications. Here's why MongoDB is a great choice:\n* **Schema-Less Design:** Data can be stored without a predefined schema, allowing for flexible data structures.\n* **Horizontal Scaling:** Scale your database by adding more servers to handle growing data volumes.\n* **Rich Querying:** Perform complex queries on your data using a variety of operators.",
    },
    {
      name: "HTML",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      details:
        "The building blocks of web pages. HTML provides the foundation for web pages by defining the structure and content. It uses a set of tags to represent different elements like headings, paragraphs, images, and forms.  Think of HTML as the skeleton of your web page, holding everything together.",
    },
    {
      name: "CSS",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      details:
        "The stylist for your web pages. CSS allows you to control the visual appearance of your web pages, defining things like colors, fonts, sizes, and layouts.  With CSS, you can transform a plain HTML page into a visually appealing and user-friendly experience.",
    },
    {
      name: "Git",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      details:
        "The time machine for your code. Git is a version control system that tracks changes made to your code over time. It allows you to revert to previous versions if needed, collaborate with other developers, and maintain a clear history of your project's evolution.  Think of Git as a safety net and a history book for your code.",
    },
    {
      name: "Tailwind CSS",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
      details:
        "The utility belt for rapid web development. Tailwind CSS provides a collection of pre-built CSS classes that cover common styling needs. This allows you to quickly build responsive web interfaces without writing a lot of custom CSS code.  Tailwind CSS helps you streamline your development process and achieve consistent styling throughout your application.",
    },
  ];

  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 px-4 lg:pt-24 lg:pl-24">
      <div className="flex justify-center items-center min-h-[calc(100vh-68px)]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="w-full">
            {skills.map((skill, index) => (
              <div key={skill.logo} className="collapse rounded-none  m-2 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-black font-noto border-gray-600 border">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium flex items-center justify-between">
                {skill.name} <FcViewDetails className="detailIcon hover:text-yellow-400"/>
              </div>
              <div className="collapse-content">
                <p>{skill.details}</p>
              </div>
            </div>
            ))}
          </div>
          <div className="w-full">
            <Slider {...settings}>
              {skills.map((skill, index) => (
                <div key={index} className="p-4 my-4">
                  <img
                    src={skill.logo}
                    className="w-[200px] mx-auto shadow-2xl p-2 rounded shadow-black"
                    alt={skill.name}
                  />
                  <p className="text-center bg-yellow-400 text-black font-bold">
                    {skill.name}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkilledStack;
