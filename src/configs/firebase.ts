import 'server-only';

import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const {
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY_BASE64,
} = process.env;

const decodedPrivateKey = Buffer.from(
  FIREBASE_PRIVATE_KEY_BASE64!,
  'base64'
).toString('utf-8');

export const firebaseCert = cert({
  projectId: FIREBASE_PROJECT_ID,
  clientEmail: FIREBASE_CLIENT_EMAIL,
  privateKey: decodedPrivateKey,
});

if (!getApps().length) {
  initializeApp({ credential: firebaseCert });
}

export const firestoreDatabase = getFirestore();
