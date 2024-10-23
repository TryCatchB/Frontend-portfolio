import Contacts from "../pages/Contacts";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import Projects from "../pages/Projects";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/project/:id",
    component: ProjectDetails,
  },
  {
    path: "/contacts",
    component: Contacts,
  },
];
