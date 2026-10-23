# Ali Hamza AI

Startup website for [alihamzamughal.dev](https://alihamzamughal.dev), built with Next.js, React, TypeScript, and Tailwind CSS.

The homepage introduces an independent AI startup, showcases the original Budget Auto Fix AI Assistant prototype, explains the approach and capabilities, and introduces founder Ali Hamza. Earlier web engineering projects remain available at `/work` and their existing case-study URLs.

## Content and attribution

- Brand, contact, and GitHub links: `data/startup.ts`
- Homepage: `app/page.tsx`
- Responsive startup styles: `app/startup.css`
- Mobile navigation: `components/StartupHeader.tsx`
- Search metadata and Organization/Person/WebSite structured data: `app/layout.tsx`
- Social preview: `app/opengraph-image.tsx`
- AI-readable site summary: `public/llms.txt`

The Budget Auto Fix project is described as a working prototype with sample service data and in-memory reservations. The homepage workflow illustrates that project; it does not create appointments. Agent-Reach is explicitly attributed to Panniantong and linked as a fork, rather than presented as an original startup product.

## Contact

Homepage calls to action open an email to the founder. The archive inquiry dialog validates the visitor's details and prepares an email in their email app. It does not submit to a backend or display a claim that a message was sent.

Update the email and related links in `data/startup.ts`.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run build
```

The existing Vercel project connection and custom domain are retained. The Next.js Google font integration requires font access during a production build.
