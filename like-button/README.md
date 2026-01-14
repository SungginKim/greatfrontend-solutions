# Like Button

## Problem

Create a Like button that updates its appearance based on user interaction and API response.

The focus is on **state management and async handling**, not pixel-perfect UI.  
Use `#f00` for red and `#888` for gray.

### Requirements

- Clicking the button sends a request to a backend API and enters a **loading** state
- The API has a **50% chance of success or failure**
- On success:
  - The button transitions to the **Liked** state
- On failure:
  - The button returns to **Default/Hovered** state
  - Display the error message below the button
- Clicking a **Liked** button triggers the reverse (unlike) behavior

---

### Submission API
- URL: https://questions.greatfrontend.com/api/questions/like-button
- HTTP Method: POST
- Content Type: json

## Notes

**key topics:** Data fetching, HTTP requests, loading states.

- When fetch(url, options) is called, the browser automatically creates a request body form the URL.
- Methods (e.g., GET, POST, PUT, etc) defines the action you want to perform on the server. It defines your request.
- Headers are the metadata that provide information about the request
    - Content Type header: This header tells the server what kind of data is being sent in the body.
- Body(payload) is the actual data you are sending. It needs to match the format that the API expects.

