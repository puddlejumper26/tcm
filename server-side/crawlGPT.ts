let express = require("express");
let bodyParser = require("body-parser");
let OpenAI = require("openai");
const { Configuration, OpenAIApi } = require("openai");
const app = express();

const openai = new OpenAI.OpenAI({
  apiKey: "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", // This is the default and can be omitted
});

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure there is no trailing space in the env key
// });
// const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.get("/", async (req: any, res: any) => {
  let content = await main();
  console.log(222222, content);
  res.send(content);
});

app.listen(3000, () => {
  console.log();
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });

  console.log(33333);

  return chatCompletion.choices[0].message.content;
}
