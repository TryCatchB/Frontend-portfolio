import axios from "axios";

const fetchProjectById = async (id) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BASE_API}/projects/${id + 1}`
  );

  return data;
};

export default fetchProjectById;
