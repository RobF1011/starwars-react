# starwars-react
A React app that uses the Star Wars API

This was built as a code challenge that was a ton of fun to build! It helps that I'm a big fan of Star Wars. 

I decided to use React for this. It's currently my favorite JS framework/library because of its speed, flexibility, and relative ease of use in designing user interfaces. There's also plenty of support behind it.

For single page apps, I prefer to use React Router for the routes. Since this app needed to retrieve data from an API, I decided to use Axios for full browser compatibility. Fetch has decent browser support at this time, but it doesn't work in Internet Explorer. 

As for a front-end/responsive framework, my preference is Bootstrap 4.

Webpack and Babel are used to package and transpile the ES6 code into something readable by all browsers.

### Approach
The very first thing I decided was that I wanted a twinkling star background that used CSS animation. After that, I decided that the main App would consist of three main components: Background, Header, and Main. For the Header, I sourced a Star Wars logo in SVG format. I also decided to use the Google Font Orbitron for my headings.

The Main section is where all the routing would happen. The three routes I needed there were Home (/), CharacterPage (/character/:charid), and ErrorPage (/error). 

The Home component just needed to pull from a local JSON file. Then just a simple import and I was able to map each character into HTML. I wanted to have pictures as well, so in order to do that without modifying the JSON, I matched the jpg filenames to the character names in the JSON. I really like CSS animations and transitions, so I put in a fun transform and box-shadow on the images on hover. I also integrated a CSS loading spinner. The page loads with the isLoading state as true, then once the character data is mapped, the state is set to false. The page renders the spinner until the isLoading state is false, then it renders the character List.

The CharacterPage component is where most of the API calling action happens. The route passes through the character ID, which is then used to determine the API URL. I wanted to first pull in the character name and display it on this page as a heading. I was able to use Axios here to pull back the name and set the state of characterName. 

Next, the goal was to list out all of the films that the selected character appears in. It was easy to pull an array of the API URLS for each film. Now I just had to make a call to each one and map out some of the film details. I decided a standard for loop worked well here, using the length of the array to limit the loop. For each Film URL, I made an Axios request, mapped the data into HTML and then pushed that HTML chunk into the movies array that I had set up in states. Then, once the for loop completed, I had each movie as a Bootstrap card. For the release date, I was able to use the date in a new JS date object, then use .toLocalString() to convert it to the correct timezone and format. 

The ErrorPage component is loaded when there is an error calling the API (using catch on the Axios request). The handles both a bad request and also if the API happens to be down. I had fun with it and used an animted gif of the Death Star blowing up Alderaan.


### Dependencies
- axios
- react
- react-dom
- react-router-dom

### Dev Dependencies
- @babel/core
- @babel/preset-env
- @babel/preset-react
- babel-loader
- css-loader
- html-loader
- html-webpack-plugin
- style-loader
- url-loader
- webpack
- webpack-cli
- webpack-dev-server
