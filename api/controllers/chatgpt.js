import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-i9gIcxPwHhTFrnafEIdLat4S",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const PostPrompt = async (req, res) => {
  const { prompt } = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 600,
    temperature: 0,
    prompt: prompt,
  });

  res.status(200).json(completion.data.choices[0].text);
};
export default PostPrompt;
