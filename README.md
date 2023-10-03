# URL shortener

This application takes an URL as input and generates a unique, shorter URL that redirects to the original URL. It also tracks and displays how many times a generated URL has been clicked.
<<<<<<< HEAD

## Development of the application

This app was developed using Express JS, Mongodb and Node JS.

## Required technology

Must have Node JS, Express and API running platform installed to run the application

## Use Case

### End Users

- Individuals who want to share long URL in more manageable way
- Users who want to track number of clicks on the generated URL

## User creates shortened URL

- The user navigates to the backend application using an API platform (e.g. POSTMAN)
- Go to the "body" tab, select "raw" and enter the JSON payload for creating a shortened URL.
- The user pastes a long URL into the input field
- Environment is set up (For this, I have used port 8001 hence, http://localhost:8001 )
- HTTP method is selected from the dropdown
- - For generating a shortened URL "POST" is used
- - For using the generated URL that redirects to the original URL "GET" is used.
- Click "Send" to make the request

## Accessing analytics

- Use an HTTP method (GET) and URL endpoint for accasing analytics
- Paste the shortened id in the input field and click "Send"
- "totalClicks" shows how many times the link has been visited
- The shortened id redirects to the original data
=======
- - hj
>>>>>>> e682852f04ac901c1ae90697d894e1a8710142f5
