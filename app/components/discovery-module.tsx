'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type AnalysisStatus = 'idle' | 'interpreting' | 'matching' | 'thinking' | 'answering';

interface DiscoveryModuleProps {
    careerData: any;
}

export function DiscoveryModule({ careerData }: DiscoveryModuleProps) {
    const [userNeed, setUserNeed] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [currentTypedText, setCurrentTypedText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [analysisStatus, setAnalysisStatus] = useState<AnalysisStatus>('idle');
    const [typingInterval, setTypingInterval] = useState<NodeJS.Timeout | null>(null);

    // Efeito para simular a progressão dos estados de análise
    useEffect(() => {
        if (!isLoading) return;

        const statusSequence: AnalysisStatus[] = ['interpreting', 'matching', 'thinking', 'answering'];
        let currentIndex = 0;

        const timings = [2000, 2000, 2000, 1000]; // Tempos ajustados para cada estado

        const updateStatus = () => {
            if (currentIndex < statusSequence.length) {
                setAnalysisStatus(statusSequence[currentIndex]);
                currentIndex++;
                
                if (currentIndex < statusSequence.length) {
                    setTimeout(updateStatus, timings[currentIndex]);
                }
            }
        };

        // Iniciar a sequência
        setTimeout(updateStatus, timings[0]);

        return () => {
            // Cleanup não é mais necessário pois estamos usando setTimeout
        };
    }, [isLoading]);

    useEffect(() => {
        return () => {
            if (typingInterval) {
                clearInterval(typingInterval);
            }
        };
    }, [typingInterval]);

    const simulateTyping = (text: string) => {
        console.log('Starting typing simulation with text:', text);
        setIsTyping(true);
        setIsLoading(false);
        setCurrentTypedText('');
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < text.length) {
                const nextChar = text[index];
                setCurrentTypedText(prev => prev + nextChar);
                index++;
            } else {
                console.log('Finished typing');
                clearInterval(typingInterval);
                setIsTyping(false);
                setAnalysisStatus('idle');
            }
        }, 50);

        return () => clearInterval(typingInterval);
    };

    const handleAnalyze = async () => {
        if (!userNeed.trim()) return;
        
        // Clear any existing typing interval
        if (typingInterval) {
            clearInterval(typingInterval);
            setTypingInterval(null);
        }

        setIsLoading(true);
        setAnalysisStatus('interpreting');
        setCurrentTypedText('');
        
        try {
            console.log('Making API request...');
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userNeed,
                    careerData
                }),
            });

            const data = await response.json();
            console.log('API Response:', data);
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to analyze');
            }

            // Update status and clear input for new questions
            setAnalysisStatus('answering');
            setIsTyping(true);
            setIsLoading(false);
            setUserNeed(''); // Clear input for new question

            const cleanResponse = data.response.trim();
            let index = 0;

            // Simulate natural typing speed
            const interval = setInterval(() => {
                if (index < cleanResponse.length) {
                    const nextChar = cleanResponse[index];
                    setCurrentTypedText(prev => prev + nextChar);
                    index++;
                } else {
                    clearInterval(interval);
                    setTypingInterval(null);
                    setIsTyping(false);
                    setAnalysisStatus('idle');
                }
            }, 30);

            setTypingInterval(interval);

        } catch (error) {
            console.error('Error in handleAnalyze:', error);
            setCurrentTypedText("I apologize, but I'm having trouble analyzing your request right now. Please try again later.");
            setIsLoading(false);
            setIsTyping(false);
            setAnalysisStatus('idle');
            if (typingInterval) {
                clearInterval(typingInterval);
                setTypingInterval(null);
            }
        }
    };

    const getStatusMessage = () => {
        switch (analysisStatus) {
            case 'interpreting':
                return 'Analyzing your request...';
            case 'matching':
                return 'Finding relevant experience...';
            case 'thinking':
                return 'Preparing response...';
            case 'answering':
                return 'Here is my analysis...';
            default:
                return '';
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isLoading && userNeed.trim()) {
            handleAnalyze();
        }
    };

    return (
        <Card className="w-full mb-6">
            <CardHeader>
                <CardTitle className="text-xl text-center">
                    {currentTypedText || 'Write here what challenge you are facing and discover if I can help you with.'}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            placeholder="Insert your need here..."
                            value={userNeed}
                            onChange={(e) => setUserNeed(e.target.value)}
                            onKeyDown={handleKeyPress}
                            className="flex-1 h-10"
                            disabled={isLoading}
                        />
                        <Button 
                            onClick={handleAnalyze}
                            className={`bg-primary hover:bg-primary/90 h-10 px-8 sm:w-auto w-full relative overflow-hidden ${
                                isLoading ? 'cursor-not-allowed' : ''
                            }`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <div className="flex flex-col items-center">
                                        <span className="text-sm text-white/80">{getStatusMessage()}</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-1 bg-white/30 animate-fill-left w-full transform origin-left" 
                                        style={{
                                            animation: 'fill 8s linear forwards'
                                        }}
                                    />
                                </>
                            ) : (
                                'Discover'
                            )}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
