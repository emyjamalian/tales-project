import { useState } from "react";
import "./Form.css";
import OpenAI from "openai";

const StoryForm = () => {
  const [story, setStory] = useState("");
  const [language, setLanguage] = useState("");
  const [age, setage] = useState("0");
  const [writingStyle, setWritingStyle] = useState("");
  const [storyLength, setStoryLength] = useState("1");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ story, language, age, writingStyle, storyLength });
    // Add your form submission logic here
  };

  return (
    <form className="story-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="story">Story:</label>
        <textarea
          id="story"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="language">Language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {/* language options here */}
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Persian">Persian</option>
          {/* language options here */}
        </select>
      </div>
      <div>
        <label htmlFor="age">Readers Age: {age}</label>
        <input
          type="range"
          id="age"
          min="0"
          max="18"
          value={age}
          onChange={(e) => setage([Number(e.target.value)])}
        />
      </div>
      <div>
        <label htmlFor="writingStyle">Writing Style:</label>
        <select
          id="writingStyle"
          value={writingStyle}
          onChange={(e) => setWritingStyle(e.target.value)}
        >
          {/* writing style options here */}
          <option value="Imaginative">
            Imaginative: Creative, whimsical, fantastical elements.
          </option>
          <option value="Funny">
            Funny: Humorous, witty, lighthearted tone.
          </option>
          <option value="Heartwarming">
            Heartwarming: Uplifting, positive messages, emotional connections.
          </option>
          <option value="Action-packed">
            Action-packed: Fast-paced, thrilling, adventure-filled.
          </option>
          <option value="Nostalgic">
            Nostalgic: Familiar settings, relatable experiences, memories.
          </option>
          <option value="Empowering">
            Empowering: Confidence-building, inspiring, strong characters.
          </option>
          <option value="Spooky">
            Spooky: Mild scares, eerie settings, suspenseful.
          </option>
          <option value="Educational">
            Educational: Informative, engaging, age-appropriate lessons.
          </option>

          {/* writing style options here */}
        </select>
      </div>
      <div>
        <label htmlFor="storyLength">Number of Pages: {storyLength}</label>
        <input
          type="range"
          id="storyLength"
          value={storyLength}
          onChange={(e) => setStoryLength([Number(e.target.value)])}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StoryForm;
