import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { randUser } from "./components/apis/randomUser";

function App() {
  const [userList, setUserList] = useState({
    users: [],
  });

  async function fetchUser(text) {
    const newUser = await randUser(text);
    console.log(newUser);
    setUserList({
      ...userList,
      users: [...userList.users, newUser],
    });
  }

  useEffect(() => {
    console.log("Total ", userList.users);
  }, [userList]);

  const [text, setText] = useState("");
  function handleChange(event) {
    // console.log(event.target.value);
    setText(event.target.value);
  }
  return (
    <div>
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <button
          onClick={() => {
            fetchUser(text);
          }}
        >
          Create new post
        </button>
        {userList.users.length > 0 ? (
          <div>
            <p>News Feed</p>
            <ul>
              {userList.users.map((user) => {
                return (
                  <li>
                    <p>{user.name}</p>
                    <p>{user.text}</p>
                    <img src={user.image} alt="user image"></img>
                    <p>Likes {user.likes}</p>
                    <p>
                      Comments:{" "}
                      {user.comments.length > 0
                        ? "Comments are"
                        : "No comments yet"}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>
            <p>No posts yet</p>
            {/* {userList.users.length} */}
          </div>
        )}
        <br></br>
      </div>
    </div>
  );
}

export default App;
