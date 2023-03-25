import React, { useState } from "react";
import "./Home.scss";
import axios from "axios";
const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:2300/api/chat/chat", {
        prompt,
      });
      console.log(res);
      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Cornelius ChatGPT Api Test</h1>
        <p>Ask me anything!</p>
      </header>
      <main>
        <div className="chat-window">
          <div className="response">{response}</div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your message"
            value={prompt}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Home;
