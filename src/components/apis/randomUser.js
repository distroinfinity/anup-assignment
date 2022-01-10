import axios from "axios";

export const randUser = async (text) => {
  try {
    const res = await axios.get("https://randomuser.me/api/");
    const user = res.data.results[0];
    // console.log(user);

    const name = user.name.first;
    const image = user.picture.medium;
    // console.log(image);

    return { name: name, image: image, text: text, likes: 0, comments: [] };
  } catch (err) {
    console.log(err);
  }
};
