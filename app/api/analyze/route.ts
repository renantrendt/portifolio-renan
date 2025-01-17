import { Anthropic } from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    if (!process.env.ANTHROPIC_API_KEY) {
        console.error("Anthropic API key not found in environment variables");
        return NextResponse.json(
            { error: "Server configuration error. Please contact the administrator." },
            { status: 500 }
        );
    }

    try {
        const anthropic = new Anthropic({
            apiKey: process.env.ANTHROPIC_API_KEY,
        });

        const { userNeed, careerData } = await request.json();
        console.log('Received request:', { userNeed, hasCareerData: !!careerData });

        if (!userNeed || !careerData) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const systemPrompt = `You are an AI assistant helping to analyze if Renan can help with a user's need based on his career experience. 

Here is Renan's career data: ${JSON.stringify(careerData)}

Important formatting rules:
1. Use proper spacing between all words
2. Write naturally with standard punctuation
3. Each sentence should be on its own line
4. Do not add any special characters or extra spaces at the start

Analysis rules:
1. If you find relevant experience in Renan's career data that matches the user's need, explain why he would be a good fit
2. If you don't find relevant experience, politely suggest talk with Renan because maybe he can find someone in his network that can help
3. Keep responses concise and focused on specific experiences
4. Be creative and imaginative, bring potential solutions on how Renan can help

Analyze this user need: ${userNeed}`;

        // Real processing steps
        const stream = await anthropic.messages.create({
            model: 'claude-3-haiku-20240307',
            max_tokens: 300,
            messages: [{
                role: 'user',
                content: systemPrompt
            }],
            stream: true
        });

        let fullResponse = '';
        for await (const chunk of stream) {
            if (chunk.type === 'content_block_delta') {
                fullResponse += chunk.delta.text;
            }
        }

        return NextResponse.json({ 
            response: fullResponse
        });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: "Failed to process request. Please try again." },
            { status: 500 }
        );
    }
}
