## Solace Candidate Assignment

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependencies

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

## Database set up

The app is configured to return a default list of advocates. This will allow you to get the app up and running without needing to configure a database. If you’d like to configure a database, you’re encouraged to do so. You can uncomment the url in `.env` and the line in `src/app/api/advocates/route.ts` to test retrieving advocates from the database.

1. Feel free to use whatever configuration of postgres you like. The project is set up to use docker-compose.yml to set up postgres. The url is in .env.

```bash
docker compose up -d
```

2. Create a `solaceassignment` database.

3. Push migration to the database

```bash
npx drizzle-kit push
```

4. Seed the database

```bash
curl -X POST http://localhost:3000/api/seed
```

## Advocate Matching Table Assignment

This project showcases my ability to analyze, improve, and optimize an existing codebase within a tight timeframe. My goal was to fix bugs, implement key features, and deliver a performant and user-friendly application.

## Links to Project Resources
- **Project Board**: [GitHub Project Board](https://github.com/users/Younique98/projects/7)
- **Milestones**: [GitHub Milestones](https://github.com/Younique98/solace-candidate-assignment/milestones?with_issues=no)
- **Pull Requests**: [PR History](https://github.com/Younique98/solace-candidate-assignment/pulls?q=is%3Apr+is%3Aclosed)
- **Remaining Issues**: [Issues](https://github.com/Younique98/solace-candidate-assignment/issues)

## Key Achievements
### Milestone 1: Bug Fixes & Anti-Patterns
- **TypeScript Implementation**:
  - Added interfaces for advocate data.
  - Fixed `any` and `unknown` types.
- **Error Handling**:
  - Implemented error boundaries.
  - Added robust API error handling.

### Milestone 2: UI/UX Improvements
- **Table Enhancement**:
  - Added sortable columns.
  - Implemented advanced search and filters.
  - Improved search/filter visual indicators.

- **Responsive Design**:
  - Designed for mobile-first layout (partially completed).
  - Enhanced advocate card presentation.
  - Enhanced loading skeletons.

### Milestone 3: Performance Optimization
- **Data Optimization**:
  - Implemented pagination for large datasets (100k+ advocates).
  - Added search optimization with debouncing.
  - Enabled query caching with React Query.
  - Fix AntiPatterns

### Documentation & Workflow
- Created a **GitHub Project Board** to organize tasks and milestones.
- Wrote detailed PR descriptions with screenshots and videos.
- Added a `pull_request_template` for consistent PRs.

## Outstanding Goals
While I am proud of the completed work, I plan to continue addressing the following:
- Implement comprehensive data validation.
- Fully realize a responsive, mobile-friendly design.
- Add accessibility features (keyboard navigation, ARIA roles).
- Write automated tests for unit, integration, and E2E coverage.

## Screenshots and Demos
### PR with Detailed Documentation
![PR Screenshot]()

### Video Demo
![Video Preview]()

## Conclusion
This project allowed me to demonstrate my strengths in debugging, optimizing, and implementing features under tight deadlines. I'm excited about this opportunity and look forward to bringing my skills to your team to solve meaningful challenges and contribute to impactful projects.



