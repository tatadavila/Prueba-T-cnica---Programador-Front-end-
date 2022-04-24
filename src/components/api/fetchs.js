import axios from "axios";

export const getNames = async (name) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${name}`,
    );

    return data.items;
  } catch (error) {
    console.log("Error in API fetch", error);
  }
};
