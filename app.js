import dotenv from 'dotenv';
dotenv.config();

import OpenAI from "openai/index.mjs";

const openAi = new OpenAI ({
    apiKey: `${process.env.OPENAI_API_KEY}`,
    
});

const message = [
    {
        role : 'system',
        content : 'You are a general knowledge expert and can have a go at answering most queries.'
    },
    {
        role : 'user',
        content : 'Why is the sky blue?'
    }
];

const response = await openAi.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: message
});

const answer = JSON.stringify(response.choices[0].message.content);

console.log(answer);
