// ═══════════════════════════════════════════════════════════════
//  FIREBASE CONFIGURATION
//  Project: ordinal-698c1
// ═══════════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDO_m3ECeswwJqGDC7Bpicnt8nQ9xb6oIc",
  authDomain:        "ordinal-698c1.firebaseapp.com",
  databaseURL:       "https://ordinal-698c1-default-rtdb.firebaseio.com",
  projectId:         "ordinal-698c1",
  storageBucket:     "ordinal-698c1.firebasestorage.app",
  messagingSenderId: "102527692497",
  appId:             "1:102527692497:web:bc6225ba04057ccd755ff0"
};

// ── FIREBASE SETUP CHECKLIST ────────────────────────────────
//
//  1. Go to https://console.firebase.google.com
//  2. Open your project: ordinal-698c1
//  3. Go to Build → Firestore Database → Create database
//     • Choose location: asia-southeast1 (Singapore) recommended
//     • Start in TEST MODE (you can lock rules later)
//
//  4. Set these Firestore Security Rules (Firestore → Rules):
//
//     rules_version = '2';
//     service cloud.firestore {
//       match /databases/{database}/documents {
//         match /{document=**} {
//           allow read, write: if true;
//         }
//       }
//     }
//
//     ⚠️ This allows anyone to read/write — fine for development.
//     Lock it down before going to production.
//
//  5. Collections used (created automatically on first write):
//     • students          – from LMS
//     • classes           – from LMS
//     • subjects          – from LMS
//     • lessons           – from LMS (includes story field)
//     • assessments       – from LMS
//     • questions         – from LMS
//     • exam_submissions  – written by student portal
//     • exam_grades       – written by teacher portal
//
//  6. DATA FLOW:
//     Your LMS writes: students, classes, subjects, lessons,
//                      assessments, questions
//     Student portal reads those + writes exam_submissions
//     Teacher portal reads all + writes exam_grades
//                    + updates exam_submissions status
//                    + updates lessons (stories)
//
//  7. TO MIGRATE EXISTING localStorage DATA TO FIRESTORE:
//     Open your LMS in the browser, open DevTools console, and run:
//
//     (async function migrate() {
//       const colls = ['students','classes','subjects','lessons','assessments','questions'];
//       for (const c of colls) {
//         const data = JSON.parse(localStorage.getItem('lms_' + c) || '[]');
//         for (const item of data) {
//           await firebase.firestore().collection(c).doc(item.id).set(item);
//         }
//         console.log(`✅ Migrated ${data.length} docs to "${c}"`);
//       }
//       // Also migrate any existing exam data
//       for (const c of ['exam_submissions','exam_grades']) {
//         const data = JSON.parse(localStorage.getItem('lms_' + c) || '[]');
//         for (const item of data) {
//           await firebase.firestore().collection(c).doc(item.id).set(item);
//         }
//         console.log(`✅ Migrated ${data.length} docs to "${c}"`);
//       }
//       console.log('🎉 Migration complete!');
//     })();
//
//     NOTE: For the migration script above to work, you need the
//     Firebase SDK loaded on that page. You can paste these two
//     script tags into the LMS HTML temporarily:
//       <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
//       <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>
//     Then initialize: firebase.initializeApp(FIREBASE_CONFIG);
//     Then run the migration script above.
// ─────────────────────────────────────────────────────────────
