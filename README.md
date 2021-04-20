<div align="center" id="top"> 
</div>

<h1 align="center">Rentx</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/wallacewts/rentx?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/wallacewts/rentx?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wallacewts/rentx?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/wallacewts/rentx?color=56BEB8">
</p>

<h4 align="center"> 
	🚧  Under construction...  🚧
</h4> 

<hr>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/wallacewts" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

An NodeJS API to handle cars rentals

## :sparkles: Features ##

#### Car ####
:white_check_mark: Register a car specification (only administrators);\
:white_square_button: List all specifications;\
:white_check_mark: Register a car category;\
:white_check_mark: List all categories;\
:white_check_mark: Upload a CSV file with car categories;\
:white_square_button: Register a car (only administrators);\
:white_square_button: List all available cars (by category, brand and name);\
:white_square_button: Register multiple car's images (only administrators);\
:white_square_button: Register a car rental;

#### Account ####
:white_check_mark: Register an user;\
:white_check_mark: Authenticate an user using JWT;\
:white_check_mark: Upload an user's avatar file;\
:white_square_button: Refresh user token;\
:white_square_button: Send emails;

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com), [Node](https://nodejs.org/en/), [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/wallacewts/rentx

# Access
$ cd rentx

# Install dependencies
$ yarn

# Run tets
$ yarn test

# Run the project
$ docker-compose up

# The server will initialize in the <http://localhost:3333>
# and the database in the <http://localhost:5432>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE) file.


Made with :heart: by <a href="https://github.com/wallacewts" target="_blank">Matheus Wallace</a>

&#xa0;

<a href="#top">Back to top</a>
