import { OpenAIStream, StreamingTextResponse, streamText } from "ai";
import { OpenAI } from "openai";
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
    const { messages } = await req.json();
    console.log('messsages ', messages)

    //const openai = new OpenAI({ baseURL: 'https://api.openai.com/v1' });

    const result = await streamText({
        model: openai('gpt-4o-mini'),
        messages,
    })
    return result.toAIStreamResponse();
    // console.log('key :', openai.apiKey)
    // const result = await openai.chat.completions.create(
    //     {
    //         model: "gpt-4o-mini",
    //         messages: messages,
    //         stream: true,
    //     }
    // );

    // const stream = OpenAIStream(result)
    // return new StreamingTextResponse(stream);
}
