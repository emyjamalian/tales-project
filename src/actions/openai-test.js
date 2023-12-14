import OpenAI from "openai";
import StoryForm from "../components/Form/Form";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "assistant", content: StoryForm.story }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
