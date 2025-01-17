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

        // Simular progresso inicial
        await new Promise(resolve => setTimeout(resolve, 1500));

        const message = await anthropic.messages.create({
            model: 'claude-3-haiku-20240307',
            max_tokens: 300,
            messages: [{
                role: 'user',
                content: systemPrompt
            }]
        });

        const rawResponse = message.content[0].text;
        console.log('Raw response:', rawResponse);
        
        const response = rawResponse.trim();
        console.log('Trimmed response:', response);

        // Simular mais tempo nas etapas iniciais
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ 
            response,
            success: true,
            progress: {
                startTime: Date.now(),
                steps: ['interpreting', 'matching', 'thinking']
            }
        });
    } catch (error) {
        console.error('Error analyzing user need:', error);
        return NextResponse.json(
            { 
                error: "Failed to analyze the request",
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
