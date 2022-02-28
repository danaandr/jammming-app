This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) .

## Introduction ##
In this project, I have built a React web application called Jammming. I used my knowledge of React components, state, and requests with the Spotify API and built a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.
## Features ##
Below is a list of the website's features:
  - Spotify Login — the first time a user searches for a song, album, or artist, Spotify will ask them to log in or set up a new account.
  
  - Search by Song, Album, or Artist — a user can type the name of a song, artist, or album into the search bar and click the SEARCH button. The app will request song data about the user's input from the Spotify library.
  
  - Populate Results List — Jammming displays the list of returned tracks from the user's query.
  
  - Add Song to a Custom Playlist — users can add a track to their playlist by selecting a + sign on the right side of the track's display container.
  
  - Remove Song from Custom Playlist — users can remove a track from their playlist by selecting a - sign on the right side of the track's display container.
  
  - Change Playlist Title — users can change the title of their custom playlist.
  
  - Save Playlist to Account — users can save their custom playlist by clicking a button called SAVE TO SPOTIFY.
## Structure ##
Jammming connects with a user’s Spotify account using an implicit grant authorization flow. There are six major React components that serve as the backbone of the application. The Track component configures the UI and logic for individual Spotify tracks. Individual tracks are then aggregated using a TrackList component, which is displayed in the render method of the SearchResults component.

The SearchBar component fetches the Spotify API and helps populate SearchResults with relevant tracks. Tracks can then be added to the Playlist component and easily pushed to the user’s Spotify account. Finally, the App component constructs the final user interface by rendering the SearchBar, SearchResults, and Playlist components.
![This is an image](https://sunjayarmstead.com/wp-content/uploads/svg/2008_jammming_component-flow.svg)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
