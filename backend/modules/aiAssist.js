const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

const Groq = require("groq-sdk");
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const aiAssist=async (userInput)=> {
    
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: "user", content: userInput }],
            model: "mixtral-8x7b-32768"
        });

        const completionMessage = chatCompletion.choices[0]?.message?.content || "";
        console.log(completionMessage);
        return ({ success: true, message: completionMessage });
    } catch (error) {
        // console.error("Error:", error);
        return({ success: false, message: "An error occurred" ,error:error,});
    }
}
module.exports =  aiAssist;
