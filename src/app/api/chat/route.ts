import { OpenAIStream, StreamingTextResponse } from "ai";
import { OpenAI } from "openai";

export async function POST(req: Request) {
    const { messages } = await req.json();
    console.log('messsages ', messages)

    const openai = new OpenAI();

    console.log('key :', openai.apiKey)
    const result = await openai.chat.completions.create(
        {
            model: "gpt-4o-mini",
            messages: messages,
            stream: true,
        }
    );

    const stream = OpenAIStream(result)
    return new StreamingTextResponse(stream);
}
