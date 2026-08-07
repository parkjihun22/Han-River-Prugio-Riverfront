# Press page guide

## Pages

- Public list: `/Promotion/Press`
- Public detail: `/Promotion/Press/1`
- Admin page: `/Promotion/Press/Admin`

## How article URLs work

The last part of a detail URL is the article address value.

- `/Promotion/Press/1` opens the article whose `slug` is `1`.
- `/Promotion/Press/2` opens the article whose `slug` is `2`.
- `/Promotion/Press/modelhouse-open` opens the article whose `slug` is `modelhouse-open`.

If the article was created without a custom `slug`, Firebase creates a long
document ID and the detail URL uses that ID.

## How to add or edit posts

1. Open `/Promotion/Press/Admin`.
2. Log in with the Firebase administrator email and password.
3. Check the `관리 현장 ID`.
4. Fill in the form and save.
5. Use a simple `slug` such as `1`, `2`, `3`, or `modelhouse-open` if you want
   clean URLs.

The post is saved to the Firebase Firestore `press` collection.

To edit or delete a post:

1. Click the post in the left list.
2. Edit the fields and click `수정 저장`.
3. Click `삭제하기` to delete the selected post.

## Firestore fields

- `siteId`: site name used to separate different project sites
- `slug`: clean detail URL value
- `source`: press source or publisher name
- `label`: category label
- `title`: article title
- `summary`: article summary
- `content`: article body
- `sourceUrl`: optional original article URL
- `image`: optional representative image URL
- `date`: created date
- `updatedAt`: updated date
- `views`: view count

## SEO notes

Posts created from the admin page show immediately on the site.

For stronger crawler discovery, also add important new article URLs to:

- `public/sitemap.xml`
- `public/rss.xml`

Static fallback articles live in:

- `src/pages/Promotion/pressArticlesData.json`

## Editing posts in VSCode

You can manage press posts from VSCode instead of the admin page.

Edit this file:

- `src/pages/Promotion/pressArticlesData.json`

Add a post by copying one object and changing:

- `slug`
- `title`
- `summary`
- `content`
- `date`
- `publishedAt`
- `sourceUrl`

Delete a post by removing its object from the JSON file.

To send JSON changes to Firebase, set your admin login in PowerShell:

```powershell
$env:FIREBASE_ADMIN_EMAIL="eyeful31@naver.com"
$env:FIREBASE_ADMIN_PASSWORD="YOUR_PASSWORD"
```

Then run:

```powershell
npm run press:sync
```

This creates or updates Firebase posts from the JSON file.

To also delete Firebase posts that were removed from the JSON file:

```powershell
npm run press:sync:delete-missing
```

Use the delete command carefully. It deletes removed JSON posts from Firebase
for the current `siteId`.

## Reusing on another apartment site

You can use one Firebase project for many apartment sites. Do not create a new
Firebase project or web app for every site unless you intentionally want fully
separate data.

Recommended Firebase web app nickname:

- `분양홈페이지 통합관리`

Each site is separated by `siteId`.

- 한강 푸르지오 리버프론트 posts: `siteId = 한강 푸르지오 리버프론트`
- Another site posts: `siteId = another site name`

This means each site can use clean article URLs such as `/Promotion/Press/1`
without conflicting with another site's `/Promotion/Press/1`.

Copy these files and routes to the other site:

- `src/pages/Promotion/Press.jsx`
- `src/pages/Promotion/PressDetail.jsx`
- `src/pages/Promotion/PressWrite.jsx`
- `src/pages/Promotion/pressArticles.js`
- the `/Promotion/Press`, `/Promotion/Press/Admin`, and `/Promotion/Press/:id` routes in `src/App.js`
- the SEO entry for `press` in `src/seo/siteSeoData.js`
- the `언론보도` menu item in `src/components/Header/Header.jsx`

Then change the site name, domain, project details, and sample articles.

For each copied site, set this value differently:

```txt
REACT_APP_SITE_ID=한강 푸르지오 리버프론트
```

All sites can share the same Firebase values:

```txt
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
REACT_APP_FIREBASE_MEASUREMENT_ID=...
```
