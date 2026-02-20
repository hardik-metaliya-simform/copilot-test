# Submission Summary

## Track Chosen

<!-- Mark your choice with [x] -->

- [x] Backend Only
- [ ] Frontend Only
- [ ] Full-Stack (Both)

## GitHub Copilot Usage Summary

<!-- Describe how you used AI throughout the test. Be specific about when and how you leveraged AI tools. -->

[Write your response here]

## Key Prompts Used

<!-- List 3-5 important prompts you used with your AI assistant -->

1.  We want to build a Task management system in the node js using express js library whild following the Proper rest standards and we also need to follow proper RESTAPI standards and we need to follow ts standards no any this is non negotiable Task are as follows Backend Track: Implement a RESTful API for task management CRUD operations (Create, Read, Update, Delete) In-memory data storage (no database) Input validation and error handling Follow proper REST conventions for input validation you can use joi validation library user can create -> crud operation and we want to do the input validation no need to use the database as of now in future we may so be ready
2.  Also intrucuce the swagger here for better understanding of the api structure in the UI also add documentation where ever required and check again if you are following proper industru ts standards,
3.  please fix this cors error we are facing in the application Server response Code Details Undocumented Failed to fetch. Possible Reasons: CORS Network Failure URL scheme must be "http" or "https" for CORS request.
4.  --------new requirement ### Backend Challenges ** Question 1: Request Logging Middleware** - Integrate a third-party request logging package (e.g., Morgan, Winston-express, or similar) - Configure the logger to capture all incoming requests - Include request method, URL, and execution time - Log format: `[METHOD] /endpoint - Execution time: Xms` **Question 2: Advanced Validation** - Implement custom validation rules (e.g., title length constraints, due dates) - Add request body sanitization - Return detailed validation error messages -----verbal req task with high priority we need to add the priority and due dates must have a due date within 7 days sorting must be done by due date we can hard code this for now in the api list api task is marked as done should it be editable if not howu you will enforce it
5.

## Design Decisions (optional)

<!-- Explain key architectural or implementation decisions you made and why -->

- **Decision 1:** [e.g., "Used a singleton service for in-memory task storage"]
  - **Reasoning:** [e.g., "To maintain state consistency across API calls without a database"]

- **Decision 2:** [e.g., "Implemented reactive forms instead of template-driven"]
  - **Reasoning:** [e.g., "Better type safety and validation control"]

- **Decision 3:**
  - **Reasoning:**

## Challenges Faced

<!-- Optional: Describe any challenges encountered and how you overcame them -->

Challenges faced while integrating the morgan lib as i have not worked with that lib earlier

## Time Breakdown

<!-- Optional: Approximate time spent on each phase -->

- Planning & Setup: 10min
- Core Implementation: 20m
- Testing & Debugging: 0m
- Additional Requirements (30-min mark): 10m
- Additional Requirements (45-min mark): 10m
- Optional Challenge (if attempted): 10m

## Optional Challenge

<!-- If you attempted an optional challenge, specify which one -->

- [ ] Not Attempted
- [x] Option 1: Request Logging Middleware
- [ ] Option 2: API Pagination
- [x] Option 3: Advanced Validation
- [ ] Option 4: Task Filtering & Search
- [ ] Option 5: Form Validation & UX
- [ ] Option 6: Drag-and-Drop Task Reordering
- [ ] Option 7: Local Storage / Offline Support
- [ ] Option 8: Real-time Updates
- [ ] Option 9: Task Statistics Dashboard

## Additional Notes

<!-- Any other information you'd like to share about your implementation -->

Implemented swagger for use the api in the web, and advance validation using joi lib

---

## Submission Checklist

<!-- Verify before submitting -->

- [x] Code pushed to public GitHub repository
- [x] All mandatory requirements completed
- [x] Code is tested and functional
- [x] README updated (if needed)
- [x] This SUBMISSION.md file completed
- [x] MS Teams recording completed and shared
- [x] GitHub repository URL provided to RM
- [x] MS Teams recording link provided to RM
