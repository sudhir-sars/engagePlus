const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

const Configuration = require('openai-api/configuration');
const OpenAIApi = require('openai-api');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getResponse(userInput) {
    const response = await openai.chat.completions.create({
        messages: [
            {
                role: "user",
                content: userInput,
            },
        ],
        model: "text-davinci-003", // Replace with a model similar to ChatGPT (e.g., text-davinci-003)
    });

    return response.choices[0].message.content.trim();
}

// Example usage
(async () => {
    const userInput = "Write a poem about nature";
    const response = await getResponse(userInput);
    console.log(response);
})();
