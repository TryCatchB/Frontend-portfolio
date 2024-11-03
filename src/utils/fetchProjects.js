import axios from "axios";

const fetchProjects = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_BASE_API}/projects`);
  return data;
};

export default fetchProjects;
