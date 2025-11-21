# Deployment Guide

Congratulations on completing your portfolio! Here are the two best ways to deploy your website for free.

## Option 1: Vercel (Recommended)
This is the best option because it automatically updates your website whenever you push changes to GitHub.

### Step 1: Push to GitHub
1.  Create a new repository on [GitHub](https://github.com/new).
2.  Open your terminal in the project folder and run these commands:
    ```bash
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin <YOUR_GITHUB_REPO_URL>
    git push -u origin main
    ```
    *(Replace `<YOUR_GITHUB_REPO_URL>` with the URL of the repository you just created)*

### Step 2: Deploy on Vercel
1.  Go to [Vercel](https://vercel.com) and sign up with GitHub.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your `Portfolio Website` repository and click **"Import"**.
4.  In the "Configure Project" screen:
    -   **Framework Preset**: Vite (should be auto-detected)
    -   **Root Directory**: `./`
    -   **Build Command**: `npm run build` (or `vite build`)
    -   **Output Directory**: `dist`
5.  Click **"Deploy"**.

🎉 **Done!** Vercel will give you a live URL (e.g., `your-name-portfolio.vercel.app`).

---

## Option 2: Netlify (Drag & Drop)
This is the quickest way if you don't want to use GitHub right now.

### Step 1: Build the Project
1.  Open your terminal in the project folder.
2.  Run the build command:
    ```bash
    npm run build
    ```
3.  This will create a `dist` folder in your project directory.

### Step 2: Deploy on Netlify
1.  Go to [Netlify Drop](https://app.netlify.com/drop).
2.  Drag and drop the `dist` folder into the upload area.
3.  Netlify will instantly deploy your site and give you a URL.

---

## Important Note
Since we are using client-side routing (React Router), if you refresh a page like `/about` on the live site, it might show a 404 error.
-   **Vercel**: Handles this automatically.
-   **Netlify**: You might need to add a `_redirects` file in the `public` folder with the content: `/* /index.html 200`.

**I recommend Option 1 (Vercel) for the smoothest experience!**
