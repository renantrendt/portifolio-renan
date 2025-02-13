# Portfolio Template

Welcome to this portfolio template! This guide will help you customize, run this project locally, and deploy it to Vercel.

## Prerequisites

Before you begin, make sure you have:
- [Windsurf](https://windsurf.codeium.com/) installed on your computer
- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account

## Customizing Your Portfolio

The main file you need to customize is `app/page.tsx`. Here's what you should modify:

1. **Personal Information** (around line 118):
   - Name
   - Location/Origin
   - Your professional tags/keywords

2. **Social Links** (around line 120):
   - GitHub URL
   - LinkedIn URL
   - X/Twitter URL
   - Other social media links

3. **Career Stages** (starting from line 20):
   - Education
   - Entrepreneurship & Business
   - Marketing & Growth
   - Product Management
   - Engineering Projects

Each section can be customized by modifying the `careerStages` array. Each project entry includes:
- `name`: Project/role title
- `url`: Link to the project
- `description`: Detailed description of your role/achievement

## Running Locally

1. Open Windsurf
2. Click on "Open Project" or use Command+O (Mac)
3. Navigate to where you want to store the project
4. Clone this repository using the GitHub URL
5. Create a `.env.local` file in the project root and add your API key:
   ```
   CLAUDE_API_KEY=your_api_key_here
   ```
6. In Windsurf's terminal, run:
   ```bash
   npm install
   npm run dev
   ```
7. Open your browser and visit `http://localhost:3000`

## Required API Key

This project requires a Claude API key to function:
1. Get your API key from [Claude](https://claude.ai)
2. Keep this key secure - you'll need it for both local development and deployment

## Deploying to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Add your environment variable:
   - Click on "Environment Variables"
   - Add `CLAUDE_API_KEY` and paste your Claude API key
6. Click "Deploy"

Your portfolio will be live at a Vercel URL! You can add a custom domain in the Vercel project settings.

## Need Help?

If you encounter any issues:
1. Check if all environment variables are set correctly
2. Ensure all dependencies are installed
3. Try restarting the development server

## License

MIT License

Copyright (c) 2025 Renan Serrano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
