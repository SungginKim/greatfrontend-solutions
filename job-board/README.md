# Job Board

## Problem

Build a job board that displays the latest job postings fetched from the Hacker News API, with each posting displaying the job title, poster, and date posted.

### Requirements
- The page should show 6 jobs on initial load with a button to load more postings.
- Clicking on the "Load more" button will load the next page of 6 postings. - The button does not appear if there aren't any more postings to load.
- If there's a url field returned for the job details, make the job title a link that opens the job details page in a new window when clicked.
- The timestamp can be formatted in any way you like.

## Notes

**Key topics:** Data fetching, promises, pagination, and loading states.

**What I learned**
- I implemented pagination by slicing the data and appending new results to the existing state.
- I used Promise.all to efficiently fetch an array of data