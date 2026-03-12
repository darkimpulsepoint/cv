import { useState } from "react";
import { Work } from "./Work.jsx";

const PROJECTS_STATE = [
  {
    id: 1,
    title: "Gallery",
    description:
      "Gallery application showcasing paintings of historical figures.",
    technologies: ["html", "js", "python", "django"],
    gitlab: "https://gitlab.com/darkimpulsepoint/gallery",
  },
  {
    id: 2,
    title: "SPA-routing",
    description:
      "This application is a Single Page Application (SPA) that dynamically displays user information. It features a user list fetched from https://jsonplaceholder.typicode.com/users, accessible via a URL like #users. When a user is selected, their albums are shown, sourced from https://jsonplaceholder.typicode.com/albums, with URLs such as #users/1/albums. Upon clicking an album, the app loads photos from https://jsonplaceholder.typicode.com/photos, utilizing an infinite scroll mechanism to display 15 photos at a time",
    technologies: ["html", "js", "svelte"],
    gitlab: "https://gitlab.com/darkimpulsepoint/spa-routing",
  },
  {
    id: 3,
    title: "API & SPA",
    description:
      "This multi-page application, built using React and the react-router-dom library, interacts with the JSONPlaceholder API to provide a user-friendly experience. Users can view a list of registered users and access detailed profiles, which include information and links to their photo albums. The application also features a dedicated page for each album, showcasing photos and the name of the creator, complete with a loading indicator while data is being fetched. Additionally, a custom 404 page enhances navigation by guiding users back to the homepage if they encounter an invalid URL. Overall, the app combines seamless navigation with efficient data handling to deliver a smooth user experience.",
    technologies: ["html", "js", "react", "react-router-dom"],
    gitlab: "https://gitlab.com/darkimpulsepoint/api-spa",
  },
  {
    id: 4,
    title: "Notion",
    description:
      "This multi-user note-taking application allows each user to create, edit, and delete their own notes. Designed for collaboration, the app provides a simple and intuitive interface where users can easily manage their notes. With features like real-time updates and user-specific access, it ensures that each user's notes are securely stored and accessible only to them. Whether for personal use or team collaboration, this application streamlines the note-taking process for all users.",
    technologies: ["react", "node.js", "CSS"],
    gitlab: "https://gitlab.com/darkimpulsepoint/notion",
  },
  {
    id: 5,
    title: "Todo list",
    description:
      "A todo list is a simple yet effective tool for organizing tasks and managing time. It serves as a written reminder of what needs to be done, helping individuals prioritize and track their responsibilities.",
    technologies: ["html", "js", "react", "node.js", "db-json"],
    gitlab: "https://gitlab.com/darkimpulsepoint/todo-list",
  },
];

export const Works = () => {
  const [projects, setProjects] = useState(PROJECTS_STATE);

  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="font-bold text-2xl md:text-3xl text-center md:text-left mb-4">
        Projects
      </h1>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Work key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
