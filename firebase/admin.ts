import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const initFirebaseAdmin = () => {
    const apps = getApps();
    if (!apps.length) {
        const projectId = process.env.FIREBASE_PROJECT_ID;
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
        let privateKey = process.env.FIREBASE_PRIVATE_KEY;

        // Safety check
        if (!projectId || !clientEmail || !privateKey) {
            throw new Error("Missing Firebase env vars: projectId, clientEmail, or privateKey");
        }

        // Fix \n in private key (for Vercel)
        privateKey = privateKey.replace(/\\n/g, "\n");

        initializeApp({
            credential: cert({
                projectId,
                clientEmail,
                privateKey,
            }),
        });
    }
    return {
        auth: getAuth(),
        db: getFirestore(),
    };
};

export const { auth, db } = initFirebaseAdmin();
