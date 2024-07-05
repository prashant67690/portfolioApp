export const products = [
  {
    href: "https://github.com/prashant67690/projectQ",
    title: "ProjectQ",
    description: "A Platform For Colleges To Do Major Project Coordination",
    thumbnail: "/images/mp-16.png",
    images: ["/images/mp-16.png", "/images/mp-17.png"],
    stack: [
      "Reactjs",
      "Tailwindcss",
      "Express.js",
      "Redux",
      "TypeScript",
      "PostgresSql",
    ],
    slug: "ProjectQ",
    content: (
      <div>
        <p>
          ProjectQ is a web application developed to enhance student-faculty
          advisor interactions for major project coordination, utilizing
          technologies such as React.js, Express.js, Redux, TypeScript,
          PostgreSQL, and Tailwind. The application allows students to select
          project topics and choose their preferred mentors, facilitating a
          streamlined and personalized project initiation process. With
          real-time tracking of document submissions, ProjectQ offers a
          significant improvement over traditional tracking methods like Google
          or Microsoft Forms, ensuring that all submissions are promptly and
          accurately monitored.{" "}
        </p>
        <p>
          Additionally, ProjectQ includes functionality for professors to assign
          marks for internal and external semester presentations, simplifying
          the grading process. The application also features a secure dashboard
          for project coordinators, enabling them to access and manage metadata,
          view all submitted documents, and lock the marks uploading domain to
          maintain the integrity of the grading system. These features make
          ProjectQ a comprehensive tool for managing and enhancing the
          coordination of major projects within academic institutions.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://zumba-foods.onrender.com/",
    title: "Zumba",
    description:
      "A food Ordering Application Created to Connect Local Food Vendors Where Zomato and Swiggy are not avialable",
    thumbnail: "/images/page1.png",
    images: ["/images/page1.png", "/images/cart.png"],
    stack: ["ReactJs", "Scss", "Express.js", "Redux", "MongoDB"],
    slug: "Zumba",
    content: (
      <div>
        <p>
          Zumba is a dynamic food ordering app implemented using the MERN
          (MongoDB, Express.js, React, Node.js) stack, designed to provide a
          seamless experience for users looking to order food online. The app
          features user registration and login functionality via Google
          authentication, ensuring secure access. Users can easily add, modify,
          or remove items from their cart before proceeding to checkout,
          enhancing their shopping experience. Once the order is placed, the app
          provides real-time updates on the status of the order, from
          confirmation to preparation and delivery, ensuring users are always
          informed about their order's progress.{" "}
        </p>
        <p>
          The app also includes a robust admin portal, which is secured with
          user authentication and authorization checks, allowing restaurant
          administrators to manage their operations efficiently. This portal
          enables admins to oversee orders, manage menu items, and ensure smooth
          service delivery. To facilitate secure online transactions, the app
          integrates with Razorpay, providing a reliable payment gateway for
          users to complete their order payments with confidence. The
          combination of these features makes Zumba a comprehensive and
          user-friendly food ordering solution.
        </p>{" "}
      </div>
    ),
  },

  {
    href: "https://github.com/prashant67690/the-todolist-app",
    title: "Task Manager",
    description: "A basic Application for Task Management",
    thumbnail: "/images/todo.png",
    images: ["/images/todo.png"],
    stack: ["Nodejs", "Css", "Ejs"],
    slug: "todoApp",
    content: (
      <div>
        <p>
          The Task Manager is a web application designed to help users
          efficiently organize and manage their tasks. Developed using
          Express.js, MongoDB, HTML, CSS, and JavaScript, this application
          offers robust functionality for handling tasks with ease. The
          integration of MongoDB enables efficient storage, retrieval, and
          manipulation of task data, ensuring a smooth user experience.
        </p>
        <p>
          The application supports Create, Read, Update, and Delete (CRUD)
          operations, allowing users to add new tasks, view existing ones, edit
          task details, and remove tasks as needed. To enhance user experience
          and data integrity, form validation has been implemented, ensuring
          that users enter valid and complete data for each task. This
          comprehensive approach makes the Task Manager a reliable tool for
          keeping track of tasks and staying organized.
        </p>{" "}
      </div>
    ),
  },
];
