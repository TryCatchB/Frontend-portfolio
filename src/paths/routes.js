import Contacts from "../pages/Contacts";
import Home from "../pages/Home";
import Project from "../pages/Project";
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
    component: Project,
  },
  {
    path: "/contacts",
    component: Contacts,
  },
];
