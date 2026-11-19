# Tejasree Pendyala — Developer Portfolio

A responsive developer portfolio built with React, TypeScript, Vite and Lucide icons.

## 1. Install the tools

Install:
- Node.js (LTS): https://nodejs.org/
- Visual Studio Code: https://code.visualstudio.com/

After installing Node.js, open a terminal and check:

```bash
node -v
npm -v
```

## 2. Open the project

1. Extract this ZIP file.
2. Open the extracted `tejasree-developer-portfolio` folder in VS Code.
3. Open **Terminal → New Terminal**.

## 3. Install dependencies

Run:

```bash
npm install
```

## 4. Start the portfolio

Run:

```bash
npm run dev
```

Vite will show a local address, usually `http://localhost:5173/`. Open it in your browser.

## 5. Personalise before publishing

Open `src/App.tsx` and update the `profile` object near the top:

- Replace `YOUR_EMAIL@example.com` with your professional email.
- Check the LinkedIn, GitHub and LeetCode links are correct.
- Add a résumé PDF in the `public` folder and add a download link when ready.

Review the content carefully:
- Confirm the exact AWS certification title.
- Confirm the exact Oracle Java certification title.
- Add internship dates and exact role details from your experience letter.
- Add working demo/repository links for projects where available.
- Check that every listed technology is something you can explain in an interview.

## 6. Create a production build

Run:

```bash
npm run build
```

The production website will be generated in the `dist` folder.

## 7. Publish it free with Vercel

1. Create a GitHub repository and push this project.
2. Sign in at https://vercel.com/ using GitHub.
3. Choose **Add New → Project** and import your repository.
4. Keep the detected Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**.

Vercel will provide a public URL. You can add a custom domain later.

## Notes

This starter intentionally avoids made-up contact details, internship dates, certification names, project metrics and demo URLs. Replace placeholders and verify all claims before sharing the portfolio with recruiters.
