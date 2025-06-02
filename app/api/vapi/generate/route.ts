
// import {generateText} from "ai";
// import {google} from '@ai-sdk/google'
// import { getRandomInterviewCover } from "@/lib/utils";
// import { db } from "@/firebase/admin";
// import { getCurrentUser } from "@/lib/actions/auth.action";

// export async function GET(){
//     return Response.json({success:true,data:"Thankyou"},{status:200});
// }

// // post route responsible for generating questions from gemini and saving it in interview
// export async function POST(request:Request){
    
//     const { type,role,level,techstack,amount,userid} = await request.json();    
    
//     try{
//         const {text:questions} = await generateText({
//             model : google('gemini-2.0-flash-001'),
//             prompt: `Prepare questions for a job interview.
//                     The job role is ${role}.
//                     The job experience level is ${level}.
//                     The tech stack used in the job is: ${techstack}.
//                     The focus between behavioural and technical questions should lean towards: ${type}.
//                     The amount of questions required is: ${amount}.
//                     Please return only the questions, without any additional text.
//                     The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
//                     Return the questions formatted like this:
//                     ["Question 1", "Question 2", "Question 3"]
                    
//                     Thank you! <3
//                 `,
//         });

//         // const user = await getCurrentUser();

//         const interview = {
//             role,
//             type,
//             level,
//             techstack: techstack.split(','),
//             questions: JSON.parse(questions),
//             userid,
//             finalized: true,
//             coverImage : getRandomInterviewCover(),
//             createdAt: new Date().toISOString(),
//         }

//         await db.collection("interviews").add(interview);

//         return Response.json({success:true},{status:200});
        
//     }catch (error) {
//         console.log(error);
//         return Response.json({success:false,error},{status:500})
//     }
// }
import { generateText } from "ai";
import { google } from '@ai-sdk/google';
import { getRandomInterviewCover } from "@/lib/utils";
import { db } from "@/firebase/admin";
import { getCurrentUser } from "@/lib/actions/auth.action";

export async function GET() {
    return Response.json({ success: true, data: "Thank you" }, { status: 200 });
}

export async function POST(request: Request) {
    console.log("📩 POST /api/interviews hit");

    try {
        const body = await request.json();
        console.log("🧾 Request Body:", body);

        const { type, role, level, techstack, amount, userid: frontendUserId } = body;

        const { text: questionsText } = await generateText({
            model: google("gemini-2.0-flash-001"),
            prompt: `Prepare questions for a job interview.
                The job role is ${role}.
                The job experience level is ${level}.
                The tech stack used in the job is: ${techstack}.
                The focus between behavioural and technical questions should lean towards: ${type}.
                The amount of questions required is: ${amount}.
                Please return only the questions, without any additional text.
                The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
                Return the questions formatted like this:
                ["Question 1", "Question 2", "Question 3"]
                Thank you! <3
            `,
        });

        console.log("🤖 Gemini Response:", questionsText);

        const authUser = await getCurrentUser();
        console.log("🔐 Auth User:", authUser);

        const userId = authUser?.id || frontendUserId;
        if (!userId) {
            console.error("❌ No user ID found.");
            return Response.json({ success: false, error: "User not authenticated" }, { status: 401 });
        }

        let parsedQuestions: string[];
        try {
            parsedQuestions = JSON.parse(questionsText);
            if (!Array.isArray(parsedQuestions)) throw new Error("Not an array");
        } catch (e) {
            console.error("❌ Failed to parse questions:", e, questionsText);
            return Response.json({ success: false, error: "Invalid question format" }, { status: 400 });
        }

        const interview = {
            role,
            type,
            level,
            techstack: techstack.split(',').map((t: string) => t.trim()),
            questions: parsedQuestions,
            userid: userId,
            finalized: true,
            coverImage: getRandomInterviewCover(),
            createdAt: new Date().toISOString(),
        };

        console.log("📦 Final interview object:", interview);

        const result = await db.collection("interviews").add(interview);
        console.log("✅ Interview saved with ID:", result.id);

        return Response.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("🔥 Error in POST /api/interviews:", error);
        return Response.json({ success: false, error: "Internal server error" }, { status: 500 });
    }
}
