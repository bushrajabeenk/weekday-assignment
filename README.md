Steps:
1. Clone the repo
git clone <repolink>
2. git install (if it does not work, then git install --force)
3. git checkout main
4. npm start (this will open the project locally on your PC on 3000 port number)
5. If in case it automatically does not open, then
localhost:3000 will start the server

Functionalities implemented
1. Job Cards: Each job listing should be displayed as a card containing the following information:
Job title
Company name
Location
Job description (limited to a certain number of characters with an option to expand)
Experience required
Apply button/link

2. Filters: Implement filters to allow users to refine the job listings based on:
Min experience
Company name
Location / Remote/on-site
Role
Min base pay
Filter functionality is implemented as the combiination of all the filters, for example, select a role, then min experience, then type of work, then min base pay, and you will see the filtered data based on these  4 filters.
Search functionality by company name is implemented

3. Infinite Scroll: Implement infinite scroll to load additional job listings as the user scrolls down the page. The platform should fetch and display more jobs automatically without requiring the user to click on a "Load More" button.

4. Responsive Design: Ensure that the platform is responsive and works well on different screen sizes
