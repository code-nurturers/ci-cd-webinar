//TODO read from config
const apiKey = 'YOUR_API_KEY';
const gpt3 = new openai({ key: apiKey });

async function generateResponse(prompt) {
    try {
        const response = await gpt3.Completion.create({
            engine: 'davinci',
            prompt: prompt,
            max_tokens: 50,
        });

        return response.choices[0].text;
    } catch (error) {
        console.error('Error:', error);
        return 'An error occurred while processing your request.';
    }
}

// Usage
// const prompt = "Translate the following English text to French: 'Hello, how are you?'";
// generateResponse(prompt)
//     .then((response) => {
//         console.log('GPT-3 Response:', response);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });