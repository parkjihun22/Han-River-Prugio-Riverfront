# Firebase owner change guide

## Goal

Move the site's press article database from the old Firebase project to a new
Firebase project owned by you.

## What changes

The site reads and writes press articles from Firebase Firestore.

- Collection name: `press`
- Admin page: `/Promotion/Press/Admin`
- Public list: `/Promotion/Press`
- Public detail: `/Promotion/Press/1`

## Create the new Firebase project

1. Log in to Firebase with your own Google account.
2. Click `Firebase 프로젝트를 설정하여 시작하기`.
3. Create a project.
4. Add one web app.
5. Copy the Firebase config values.

Recommended web app nickname:

```txt
분양홈페이지 통합관리
```

You do not need to create one Firebase app for every apartment homepage. One
Firebase project and one web app can support many sites when each post has a
different `siteId`.

The values look like this:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...firebaseapp.com",
  projectId: "...",
  storageBucket: "...firebasestorage.app",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};
```

These values are not the Firebase password. Do not share your Google password.

## Enable login for the admin page

1. In Firebase, open `Authentication`.
2. Click `시작하기`.
3. Enable `Email/Password`.
4. Add your administrator email and password.

That email and password are used only on `/Promotion/Press/Admin`.

## Enable Firestore

1. In Firebase, open `Firestore Database`.
2. Click `데이터베이스 만들기`.
3. Choose production mode if asked.
4. Choose a location close to Korea when available.
5. Create the database.

## Recommended Firestore rules

Use rules like this so visitors can read press posts, but only logged-in admins
can create or edit them.

```txt
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /press/{postId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
  }
}
```

## Connect the site to the new project

Create `.env.local` from `.env.example` and paste the new project's values:

```txt
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
REACT_APP_FIREBASE_MEASUREMENT_ID=...
REACT_APP_FIREBASE_PRESS_COLLECTION=press
REACT_APP_SITE_ID=한강 푸르지오 리버프론트
REACT_APP_PRESS_SOURCE=한강 푸르지오 리버프론트 공식
```

Then rebuild and redeploy the site.

For another homepage, reuse the same Firebase values and change only the site
identity values:

```txt
REACT_APP_SITE_ID=다른 분양 홈페이지명
REACT_APP_PRESS_SOURCE=다른 분양 홈페이지명 공식
```

## Add domains for login

If several domains use the same Firebase Authentication project, add each
homepage domain in Firebase Authentication settings.

Example:

- `hg-prugioriverfront.co.kr`
- `another-apartment-site.co.kr`

Local testing with `localhost` is already commonly allowed.

## Move old articles

If you need old press posts from the previous project, export or copy the
documents in the old project's `press` collection into the new project's
`press` collection.

If old posts are not important, start fresh and create posts from
`/Promotion/Press/Admin`.
