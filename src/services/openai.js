//config
const OpenAI = require('openai');
//config
require('dotenv').config();


async function generateResponse(prompt) {
    try {
        const apiKey = process.env.OPENAI_API_KEY;
        const openai = new OpenAI({ key: apiKey });
        //console.log(apiKey, openai)
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages:[{role: 'user', content: prompt}] ,
            max_tokens: 50,
        });
        console.log(response)
        return response.choices[0].message;
    } catch (error) {
        console.error('Error:', error);
        return 'An error occurred while processing your request.';
    }
}

// Usage
// const prompt = "Tell me a halloween joke";
// generateResponse(prompt)
//     .then((response) => {
//         console.log('GPT-3 Response:', response);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
const openAiServices = {generateResponse}
module.exports = openAiServices