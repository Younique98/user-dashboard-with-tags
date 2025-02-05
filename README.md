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
## Screenshots ( Come Along on the Journey) 

<img width="1095" alt="Screenshot 2025-01-24 at 8 33 02 AM" src="https://github.com/user-attachments/assets/a43cf7bb-a0db-46d5-ab48-0d24b623136c" />

https://github.com/user-attachments/assets/4a0b1986-d345-47cf-b3e8-1152b639cf9b



https://github.com/user-attachments/assets/73e26d21-7443-465b-a1e3-250a47cc97cc

<img width="1642" alt="Screenshot 2025-01-24 at 4 10 42 PM" src="https://github.com/user-attachments/assets/f2580f1e-f66b-4e8e-91d8-610ea69f15df" />
<img width="1455" alt="Screenshot 2025-01-24 at 4 29 58 PM" src="https://github.com/user-attachments/assets/f1da07cb-c554-4ec3-b674-31bd5ba38d63" />

![Screenshot 2025-01-24 at 5 10 52 PM](https://github.com/user-attachments/assets/8dc10bca-70fa-4b6b-bb25-a8b13079769d)
![Screenshot 2025-01-24 at 5 11 25 PM](https://github.com/user-attachments/assets/3d394bc5-360b-4700-a9a6-3b4f30b67352)



## Related Issues
Closes #[Project Board & Milestones](https://github.com/Younique98/solace-candidate-assignment/milestones)

## Conclusion
This project allowed me to demonstrate my strengths in debugging, optimizing, and implementing features under tight deadlines. I'm excited about this opportunity and look forward to bringing my skills to your team to solve meaningful challenges and contribute to impactful projects.


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




