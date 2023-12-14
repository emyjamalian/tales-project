import OpenAI from "openai";

const openai = new OpenAI();

export default async function (req, res) {
  const idea = req.body.animal || "";
  if (idea.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid idea",
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: generatePrompt(idea),
      temperature: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(idea) {
  const capitalizedIdea = idea[0].toUpperCase() + idea.slice(1).toLowerCase();
  return `here's the story...

Idea: ${capitalizedIdea}
Story:`;
}
