# Gaurav As U Know

## Description
A simple Node.js web application serving static HTML, CSS, and JavaScript.

## Setup Instructions

### Prerequisites
*   Node.js
*   npm (Node Package Manager)

### Installation
1.  Navigate to the project directory:
    ```bash
    cd gaurav_as_u_know
    ```
2.  Install the project dependencies:
    ```bash
    npm install
    ```
    This command downloads and installs the project's dependencies, which are listed in `package.json`. The primary dependency is `express`.

### Running the Application
1.  **Navigate to the project directory:**
    ```bash
    cd gaurav_as_u_know
    ```
2.  **Start the server:**
    ```bash
    npm start
    ```
    The server will run on `http://localhost:3000`. Open your web browser and navigate to this address to view the application.

## How it Works
This project is a basic Node.js web server using the Express framework.
*   The `server.js` file initializes an Express application.
*   It configures the application to serve static files (HTML, CSS, JavaScript) from the `public` directory.
*   When you run `npm start`, Node.js executes `server.js`, which starts a web server listening on port 3000.
*   When a user accesses `http://localhost:3000` in their browser, the `index.html` file from the `public` directory is served.
*   `index.html` then links to `style.css` for styling and `script.js` for any client-side interactivity.

## Project Structure
*   `server.js`: The main Node.js server file using Express to serve static content.
*   `package.json`: Defines project metadata and dependencies (Express).
*   `public/`: Directory for static front-end files.
    *   `index.html`: The main landing page with interactive elements.
    *   `about.html`: A dedicated page providing information about the project/team.
    *   `contact.html`: A page with a contact form and contact information.
    *   `features.html`: A page showcasing various features of the website.
    *   `style.css`: Stylesheet for the HTML pages, providing a modern and responsive design.
    *   `script.js`: Client-side JavaScript for interactive elements, dynamic content, and smooth navigation.

## New Features
*   **Multi-page Navigation:** The website now includes dedicated "Home", "About", "Contact", and "Features" pages accessible via the navigation bar.
*   **Interactive Elements:**
    *   **Dynamic Text Display:** On the home page, a button allows users to dynamically change text content.
    *   **Feature Activation Buttons:** On the features page, buttons provide more details about each feature when clicked.
*   **Enhanced Styling:** The `style.css` has been updated to provide a more modern and visually appealing user interface.
*   **Smooth Scrolling:** Navigation links for internal sections (on the home page) now feature smooth scrolling.

## Technologies Used & Dependencies
*   **Node.js:** A JavaScript runtime environment that allows server-side execution of JavaScript. It's the foundation for running the `server.js` file.
*   **Express.js (`express`):** A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used here to create the web server and handle static file serving. It is installed via `npm install express`.
*   **HTML5:** The markup language used for structuring the web content (`index.html`).
*   **CSS3:** The stylesheet language used for styling the web content (`style.css`).
*   **JavaScript:** Used for client-side interactivity (`script.js`).

## Hosting the Application

To host this Node.js application online, you can use various cloud platforms. Here's a general guide:

### Popular Hosting Platforms
*   **Heroku:** A platform-as-a-service (PaaS) that is very popular for Node.js applications. It's easy to deploy to and offers a free tier.
*   **Vercel:** Excellent for static sites and serverless functions, but can also host Node.js applications. Known for its developer experience.
*   **Netlify:** Similar to Vercel, great for static sites and front-end deployments, with support for serverless functions.
*   **Render:** A modern cloud platform that offers a unified platform for all your apps and databases.
*   **DigitalOcean / AWS / Google Cloud Platform (GCP):** More robust Infrastructure-as-a-Service (IaaS) options that give you more control but require more setup.

### General Deployment Steps (using Git)

Most platforms integrate with Git for easy deployment.

1.  **Initialize a Git Repository (if not already done):**
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  **Create a Remote Repository:**
    Create a new repository on a platform like GitHub, GitLab, or Bitbucket.
3.  **Link Local to Remote:**
    ```bash
    git remote add origin [YOUR_REPOSITORY_URL]
    git branch -M main
    git push -u origin main
    ```
4.  **Choose a Hosting Platform and Follow their Deployment Guide:**

    *   **For Heroku (Example):**
        *   Install the Heroku CLI: `npm install -g heroku`
        *   Log in: `heroku login`
        *   Create a new Heroku app: `heroku create [YOUR_APP_NAME]` (optional, Heroku can generate one)
        *   Deploy: `git push heroku main`
        *   Open the app: `heroku open`

    *   **For Vercel (Detailed Steps for Static Site Hosting):**
        1.  **Create a GitHub Repository**: Ensure your project is pushed to a GitHub (or GitLab/Bitbucket) repository. (You've already done this: `https://github.com/simply-gaurav/gaurav_as_u_know_site.git`)
        2.  **Sign Up/Log In to Vercel**: Go to [vercel.com](https://vercel.com/) and sign up for a free account. It's recommended to sign up or log in with your GitHub account for seamless integration.
        3.  **Create a New Project**: Once logged in, click the "New Project" button.
        4.  **Import Git Repository**: Select "Import Git Repository" and choose your `gaurav_as_u_know_site` repository from the list.
        5.  **Configure Project**:
            *   Vercel will likely auto-detect it as a Node.js project.
            *   **Crucially, you need to tell Vercel to serve only the static `public` directory.**
            *   In the "Build & Development Settings" section, set the **Root Directory** to `public`. This tells Vercel to treat the `public` folder as the root of your project.
            *   You can leave the "Build Command" and "Output Directory" as their defaults, or explicitly set "Build Command" to `echo "No build needed"` and "Output Directory" to `.`.
        6.  **Deploy**: Click the "Deploy" button. Vercel will then build and deploy your site, providing you with a live URL.
            *   Your deployed site is available at: `https://gaurav-as-u-know-site.vercel.app/index.html`

    *   **For other platforms:** Refer to their official documentation for specific deployment instructions. Generally, you'll connect your Git repository to the hosting service, and it will automatically build and deploy your application.

### Important Considerations for Hosting

*   **`PORT` Environment Variable:** Ensure your `server.js` uses `process.env.PORT` (which it already does) so the hosting platform can assign a port.
*   **Dependencies:** Make sure your `package.json` correctly lists all dependencies, as the hosting platform will run `npm install` to set up your project.
*   **Build Commands:** If your project had a build step (e.g., for React/Vue/Angular), you would configure that in your hosting platform's settings. For this simple Node.js static server, `npm start` is usually sufficient.
