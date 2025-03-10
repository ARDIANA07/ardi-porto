import {Groq} from 'groq-sdk';

const GROQ_API = import.meta.env.VITE_GROQ;
const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true
});

export const requestToGroqAI = async(content) => {
  const reply = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content,
        },
      ],
  });

  return reply.choices[0].message.content;
}