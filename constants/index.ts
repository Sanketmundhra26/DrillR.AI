import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage: "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 1.0,
    style: 0.5,
    useSpeakerBoost: false,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
  clientMessages: [],
  serverMessages: []
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2025-01-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2025-03-14T15:30:00Z",
  },
];

export const generator = {
  "name": "interview_prep",
  "nodes": [
    {
      "name": "start_node",
      "type": "start",
      "metadata": {
        "position": {
          "x": 0,
          "y": 0
        }
      }
    },
    {
      "name": "say",
      "type": "say",
      "metadata": {
        "position": {
          "x": -103.68624432215921,
          "y": 150
        }
      },
      "prompt": "Greetings, {{ username }}. Let's prepare your interview. I'll ask you a few questions and generate a perfect interview just for you. Are you ready?\n",
      "exact": ""
    },
    {
      "name": "conversation_1748547142334",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -106.3529109888259,
          "y": 465.3333333333333
        }
      },
      "prompt": "Help the user create a new AI interviewer which is professional and well spoken ",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [
              "Entry ",
              "Mid",
              "Senior"
            ],
            "type": "string",
            "title": "level",
            "description": "The job experience level"
          },
          {
            "enum": [],
            "type": "number",
            "title": "amount",
            "description": "How many questions would you like to generate?"
          },
          {
            "enum": [],
            "type": "string",
            "title": "techstack",
            "description": "A list of technologies to cover during the job interview. For example, React, Next.js, Express.js, Node and so on… "
          },
          {
            "enum": [],
            "type": "string",
            "title": "role",
            "description": "What role should would you like to train for? For example Frontend, Backend, Fullstack, Design, DSA,UX?"
          },
          {
            "enum": [
              "Technical",
              "Behavioral",
              "Mixed (Technical + Behavioral)"
            ],
            "type": "string",
            "title": "type",
            "description": "what type of interview should it be?"
          }
        ]
      },
      "messagePlan": {
        "firstMessage": ""
      }
    },
    {
      "name": "conversation_1748549862521",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -106.3529109888259,
          "y": 834.0000000000001
        }
      },
      "prompt": "Say the your interview will be generated shortly",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
      "messagePlan": {
        "firstMessage": ""
      }
    },
    {
      "name": "API Request",
      "type": "tool",
      "metadata": {
        "position": {
          "x": -106.35291098882584,
          "y": 1163.1704746463738
        }
      },
      "tool": {
        "url": `${process.env.NEXT_PUBLIC_BASE_URL}/api/vapi/generate`,
        "body": {
          "type": "object",
          "properties": {
            "role": {
              "type": "string",
              "value": "{{ role }}",
              "description": ""
            },
            "type": {
              "type": "string",
              "value": "{{ type }}",
              "description": ""
            },
            "level": {
              "type": "string",
              "value": "{{ level }}",
              "description": ""
            },
            "amount": {
              "type": "string",
              "value": "{{ amount }}",
              "description": ""
            },
            "userid": {
              "type": "string",
              "value": "{{ userid }}",
              "description": ""
            },
            "techstack": {
              "type": "string",
              "value": "{{ techstack }}",
              "description": ""
            }
          }
        },
        "name": "API Tool",
        "type": "apiRequest",
        "method": "POST",
        "function": {
          "name": "untitled_tool",
          "parameters": {
            "type": "object",
            "required": [],
            "properties": {}
          }
        }
      }
    },
    {
      "name": "conversation_1748550493345",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -106.35291098882585,
          "y": 1516.9717636271748
        }
      },
      "prompt": "Thank the user for their time and being patient and say that the interview has been generated successfully",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
      "messagePlan": {
        "firstMessage": ""
      }
    },
    {
      "name": "hangup_1748550556244",
      "type": "tool",
      "metadata": {
        "position": {
          "x": -14.352910988825855,
          "y": 1766.9717636271748
        }
      },
      "tool": {
        "type": "endCall"
      }
    }
  ],
  "edges": [
    {
      "from": "start_node",
      "to": "say"
    },
    {
      "from": "say",
      "to": "conversation_1748547142334",
      "condition": {
        "type": "ai",
        "prompt": "if the user said yes"
      }
    },
    {
      "from": "conversation_1748547142334",
      "to": "conversation_1748549862521",
      "condition": {
        "type": "ai",
        "prompt": "If user provided all the required variables"
      }
    },
    {
      "from": "conversation_1748549862521",
      "to": "API Request",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "API Request",
      "to": "conversation_1748550493345",
      "condition": {
        "type": "ai",
        "prompt": "if the user said yes"
      }
    },
    {
      "from": "conversation_1748550493345",
      "to": "hangup_1748550556244",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    }
  ],
  "model": {
    "model": "gpt-4o",
    "messages": [
      {
        "role": "system",
        "content": "You are a highly professional, voice-enabled AI Interviewer conducting mock job interviews. Your role is to simulate a real interviewer with empathy, insight, and relevance to the candidate's chosen job role.\n\nYou MUST follow this behavior and logic during the session:\n\n### 🎙️ Interview Objectives:\n- Simulate a structured behavioral and/or technical interview based on the candidate’s role.\n- Listen to the candidate’s response, analyze the content, tone, and clarity.\n- Ask adaptive follow-up questions based on gaps, strengths, or curiosity.\n- Remain calm, professional, and constructive throughout the conversation.\n\n---\n\n### 🧩 Input Structure (You’ll receive):\n- **jobRole**: e.g., \"Software Engineer\", \"Product Manager\", etc.\n- **experienceLevel**: e.g., \"Fresher\", \"Junior\", \"Senior\", \"Manager\"\n- **userResponse**: The most recent answer from the candidate.\n- **interviewHistory**: Log of previous Q&A (used to avoid repetition and keep context).\n- **questionIndex**: The current number of questions asked (used to end the session at a logical point).\n\n---\n\n### 🧠 Your Output Must Include:\n1. **nextQuestion** (required): The next question to ask the candidate. Make it clear and relevant.\n2. **followUpLogic**: Brief internal reasoning why you asked the next question.\n3. **interviewNotes**: Private assessment of user’s latest answer (e.g., fluency, clarity, accuracy, keyword presence, etc.)\n4. **endInterview**: Boolean (true/false). Set to true if the interview should wrap up.\n\n---\n\n### 💡 Interviewing Style Guidelines:\n- Tailor questions to the **jobRole** and **experienceLevel**.\n- Be naturally conversational. Vary question phrasing to sound human.\n- Use behavioral patterns like STAR (Situation, Task, Action, Result) when evaluating responses.\n- Don’t repeat questions from **interviewHistory**.\n- Add gentle probing like \"Could you elaborate?\" or \"How did you handle that?\" when responses are vague.\n- Be concise—keep each response under 3 sentences unless follow-up requires elaboration.\n\n---\n\n### ✅ Examples:\n\n**Job Role**: Software Engineer  \n**Experience**: Junior  \n**UserResponse**: \"I worked on a weather app using React and Node.\"  \n**Your output**:\n- **nextQuestion**: \"Interesting. What challenges did you face while building the weather app, and how did you solve them?\"\n- **followUpLogic**: \"Explore technical problem-solving and backend/frontend integration understanding.\"\n- **interviewNotes**: \"Confident but vague. Mentioned technologies but no specific challenges. Probe deeper.\"\n- **endInterview**: false\n\n---\n\n### 🔚 Ending Criteria:\n- After 6–8 meaningful questions, OR\n- If the user says “thank you”, “I’m done”, or signals wrap-up.\n- If **questionIndex** > 8, gracefully end with a summary.\n\nFinal message should be:\n\"Thank you for completing this mock interview. Based on your responses, we’ll now generate a personalized feedback report to help you improve. Good luck with your journey!\"\n\n\n"
      }
    ],
    "provider": "openai",
    "temperature": 0.7
  }
}