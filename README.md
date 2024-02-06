<a name="readme-top"></a>
<div align="center">

  <h1 align="center">Jobify</h1>

  <p align="center">
    All the jobs in one convenient place
    <br />
    <br />
    <a href="http://jobify.julianecassidy.com/" target="_blank">Demo</a>
    ·
    <a href="https://github.com/julianecassidy/react-jobly-backend" target="_blank">Backend Repo</a>
  </p>
</div>
<div align="center">

![Top Languages](https://img.shields.io/github/languages/top/julianecassidy/react-jobify)
![GitHub repo size](https://img.shields.io/github/repo-size/julianecassidy/react-jobify)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/julianecassidy/react-jobify)
![GitHub last commit](https://img.shields.io/github/last-commit/julianecassidy/react-jobify)
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
         <!-- <li><a href="#screenshots">Screenshots</a></li> -->
<!--         <li><a href="#key-features">Key Features</a></li> -->
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
<!--     <li><a href="#contributing">Contributing</a></li> -->
<!--     <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Jobify is a job board site. Companies can post available jobs and users can sign up to browse jobs. It was originally built in 2023 as a project at [Rithm School](https://www.rithmschool.com/).

This project contains both a frontend React app and backend Express app. This repo is the frontend and you can find the backend code [here](https://github.com/julianecassidy/react-jobly-backend).

Technologies in the frontend include:

- React with React Router for routing
- Vanilla CSS for stlying
- [Axios](https://axios-http.com/) for API calls
- [Surge](https://surge.sh/) for hosting

Technologies for the backend are:

- Express
- PostgreSQL

The deployed backend is hosted on [Render](https://render.com/) and the database is hosted on [ElephantSQL](https://www.elephantsql.com/).

The backend was built from an existing codebase with minimal features, 80% testing coverage, and some security bugs. Working with a pair, I built the frontend entirely from scratch.

This project offered learning opportunities around:

- User authentication and authorization on backend and frontend
- User sessions and cookies
- Password hashing and encryption
- Building RESTful APIs
- Separation of concerns between back and frontend, as well as between logic and display
- Routing in an SPA
- React component design
- React state management and context

You can log into the [demo site](http://jobify.julianecassidy.com/) with the following credentials:
- Username: `guest`
- Password: `password`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ### Screenshots

<p>
  <img src="static/images/screenshots/timeline.png" alt="Logged In Timeline">
  <br>
  <em>Logged-In Timeline</em>
</p>

<p>
  <img src="static/images/screenshots/profile.png" alt="User Profile Page">
  <br>
  <em>User Profile Page</em>
</p>

<p>
  <img src="static/images/screenshots/followers.png" alt="Followers Listing Page">
  <br>
  <em>Followers Listing Page</em>
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

### Built With

This project was built in May 2023 with the following:

- ![React][React]
- ![React Router][React Router]
- ![Axios][Axios]
- ![Express][Express]
- ![PostgreSQL][PostgreSQL]
- ![ElephantSQL][ElephantSQL]
- ![Node.js][Node.js]
- ![Surge][Surge]
- ![Render][Render]


See [requirements.txt](https://github.com/julianecassidy/react-jobify/blob/master/requirements.txt) for a full list of dependencies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

1. Clone the frontend and backend repos

   ```bash
   git clone https://github.com/julianecassidy/react-jobify
   git clone https://github.com/julianecassidy/react-jobly-backend
   ```

2. Create and seed the database

   ```bash
   createdb jobly
   cd jobly-backend
   psql jobly.sql
   ```

3. Install dependencies and run the backend server (Defaults to port `3001`)

   ```bash
    cd jobly-backend
    npm install
    npm run start
    ```

4. In a new terminal, install dependencies and run the frontend server (defaults to port `3000`)

   ```bash
    cd react-jobify
    npm install
    npm run start
    ```


7. Go to localhost:5000 to view the app

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Add user profile page with options to edit profile
- [ ] Add a "forgot password" feature
- [ ] Refactor styling with Tailwind CSS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

<!-- LICENSE -->


<!-- CONTACT -->

## Contact

[JulianeCassidy](https://julianecassidy.com)
[LinkedIn](https://www.linkedin.com/in/julianemcassidy/)

Project Link (Frontend): [https://github.com/julianecassidy/react-jobify](https://github.com/julianecassidy/react-jobify)

Project Link (Backend): [https://github.com/julianecassidy/react-jobly-backend](https://github.com/julianecassidy/react-jobly-backend)

Live Demo: [http://jobify.julianecassidy.com/](http://jobify.julianecassidy.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

I completed this project at [Rithm School](https://www.rithmschool.com/). I would like to thank the my pairs for the project -- [Justin Clark](https://github.com/jclark1913) on the backend and [Sarah Graup](https://github.com/sarahgraup) on the frontend. I'd also like to thank the staff of Rithm for code reviews and assistance.

- [Rithm School](https://www.rithmschool.com/)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TECHNOLOGY BADGES -->

[React]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white
[React Router]: https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white
[Axios]: https://img.shields.io/badge/Axios-5A2D81?logo=axios&logoColor=white
[Express]: https://img.shields.io/badge/Express-000000?logo=express&logoColor=white
[Node.js]: https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white
[ElephantSQL]: https://img.shields.io/badge/ElephantSQL-2D9CDB?logo=elephantsql&logoColor=white
[Surge]: https://img.shields.io/badge/Surge-def1e7?logo=surge&logoColor=black
[Render]: https://img.shields.io/badge/Render-000000?logo=render&logoColor=white
