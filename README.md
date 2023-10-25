<h2 align="center">GitHub Portfolio</h2>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

GitHub Porfolio project is a React-based web application designed to explore GitHub users and a list of there repositories efficiently. It consists of the following main features:

Home Page: The home page displays a searchBar and a deafault user item which is in return replaced by a list of 30 users matching the searchQuery. On clicking on a user, a page is displayed with the details of the user's profile and its list of repositories.

Repository Details: When you click on a specific repository, the application navigates to a dedicated repository details page. Here, you can find comprehensive information about the repository, including its name, description, and a link to the GitHub repository. Additionally, there is a button that, when clicked, takes you directly to the GitHub page of the repository, allowing for seamless code exploration.

Test Page: The application includes a special test page designed to evaluate the error boundary functionality. This test page intentionally triggers an error within a component, allowing you to see how errors are gracefully handled by the error boundary component.

GitHub API Integration: The project integrates with the GitHub API to dynamically fetch the list of repositories associated with your GitHub account. This ensures that the application always displays up-to-date information.

The GitHub Portfolio project is an excellent way to showcase your GitHub projects and offers a smooth user experience for navigating, exploring, and understanding your repositories. Additionally, it provides an opportunity to test and demonstrate error handling capabilities using error boundaries in React applications.





### Built With

* [![React][React.js]][React-url]
* [![TailwindCss][TailwindCss]][Tailwind-url]
* [![DaisyUI][DaisyUI]][DaisyUI-url]
* [![Axios][Axios]][Axios-url]
* [![Context Api][Context-API]][ContextApi-url]



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites



1. Node.js: Make sure you have Node.js installed on your machine.

<ul>
  <summary>Node.js Installation</summary>
  <ol>
    <li>
      <a href="https://nodejs.org/" target="_blank">Go to the Node.js website</a>
    </li>
    <li>
      <p>Choose a version: There are two major versions of Node.js: LTS (Long-Term Support) and Current. It's recommended for most users to download the LTS version as it is more stable. However, if you need the latest features and can handle occasional instability, you can choose the Current version.</p>
    </li>
    <li>Download the installer: Click on the version you want to download. It will automatically download the installer suitable for your operating system (Windows, macOS, or Linux).</li>
    <li>
      Run the installer:
      <ul>
        <li>Windows: Double-click the installer you downloaded and follow the on-screen instructions.</li>
        <li>macOS: Double-click the downloaded .pkg file and follow the installation wizard.</li>
        <li>Linux: You can install Node.js on Linux using a package manager. The commands may vary based on your Linux distribution.  Here are a few examples:
        <ul>
        <li>For Debian/Ubuntu:
        <ul>
        <code>sudo apt update</code>
        </ul>
        <ul>
        <code>sudo apt install nodejs</code>
        </ul>
        </li>
        <li>For Red Hat/CentOS:
        <ul>
        <code>sudo yum install nodejs</code>
        </ul>
        </li>
        <li>For other Linux distributions, refer to their respective package managers.</li>
        </ul>
        </li>
      </ul>
    </li>
    <li>Verify the installation: After the installation is complete, open your command-line terminal and run the following commands to ensure that Node.js and npm (Node Package Manager) were installed correctly:
        <ul>
        <li>To check the Node.js version:
        <ul>
        <code>node -v</code>
        </ul>
        </li>
        <li>To check the npm version:
        <ul>
        <code>npm -v</code>
        </ul>
        </li>
        </ul>
    </li>
  </ol>
</ul>


2. GitHub Token: Obtain a GitHub token to authenticate API requests. Store it in an environment variable named VITE_GITHUB_TOKEN for security.

<ul>
  <summary>Steps in obtaining a GitHub token.</summary>
  <ol>
    <li>
    Sign in or Sign up to <a href="https://github.com/" target="_blank">GitHub.</a>
    </li>
    <li>
    Access Personal Access Tokens:
    <ul>
    <li>Click on your profile picture in the top-right corner of the GitHub page.</li>
    <li>Select "Settings" from the dropdown menu.</li>
    <li>In the left sidebar, click on "Developer settings."</li>
    <li>Then, click on "Personal access tokens."</li>
    </ul>
    </li>
    <li>
    Generate a New Token:
    <ul>
    <li>Click the "Generate token" button.</li>
    <li>You may be prompted to enter your GitHub password for security purposes.</li>
    </ul>
    </li>
    <li>
    Configure Token Settings:
    <ul>
    <li>Give your token a name in the "Note" field to help you identify its purpose.</li>
    <li>Select the scope or permissions you need for the token. Be cautious and grant only the necessary permissions to enhance security.</li>
    </ul>
    </li>
    <li>Once you've configured the settings, scroll down and click the "Generate token" button.</li>
    <li>After generating the token, you'll be presented with the actual token. <strong>Copy this token</strong> immediately. It won't be visible again, for security reasons.</li>
    <li>
    Store the Token Securely:
    <ul>
    <li>Treat your access token like a password. It grants access to your GitHub account and repositories. Do not share it openly, and store it securely.</li>
    <li>Consider using a password manager to store and manage your tokens.</li>
    </ul>
    </li>
  </ol>
</ul>



### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Skiblinx/github-portfolio.git
   ```

2. To install the project dependencies, run:
   ```sh
   yarn add
   ```




## USAGE

Check out the live demo [HERE](https://blinxz-github-portfolio.netlify.app/)


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b {Branch Name}`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin {Branch Name}`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- CONTACT -->
## Contact

*  **Name** : Adeleye Abdulbasit Damilola
* [![Twitter][Twitter]][Twitter-url]
* [![LinkedIn][LinkedIn]][LinkedIn-url]
* **Email** :  adeleyeabdulbasitdamilola@gmail.com

Project Link: [https://github.com/Skiblinx/github-portfolio]






[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white 
[Tailwind-url]: https://tailwindcss.com/ 
[DaisyUI]: https://img.shields.io/badge/DaisyUI-%23FF9B4.svg?style=for-the-badge&logo=daisyui&logoColor=white 
[DaisyUI-url]: https://daisyui.com/ 
[Axios]: https://img.shields.io/badge/Axios-0D8BF1?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/
[Context-API]:https://img.shields.io/badge/Context%20API-%2343A047.svg?style=for-the-badge&logo=react&logoColor=white
[ContextApi-url]: https://react.dev/reference/react/useContext

[Twitter]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[Twitter-url]: https://twitter.com/SBlinx_
[LinkedIn]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[LinkedIn-url]: linkedin.com/in/aabdulbasit