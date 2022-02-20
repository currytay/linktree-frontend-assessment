# Linktree Frontend Assessment

### Comments

- The mock data for the profile is located in src/data/. In the first file, I created one object for each link displayed on the page, and included two instances of the Classic Link to show an example with a longer title. The second file contains the theme from the sketch file, including the inverted version to use on hover. I decoupled this data from the components so that I could easily change it without changing anything else and to simulate fetching it as you might in a real project. 
- I created a single Link component with three variants: "classic", "music", and "shows". I probably could've taken a simpler/faster approach (especially since I know what data to expect), but I wanted to build something more flexibile. I can now change a link's title or URL, or provide a completely new set of links, and be sure that the page will update automatically. 
- If working on this project in real life, after clarifying the requirements, I would've liked to ask some questions about the UX to inform my solution q (e.g., Can the user open the Music and Shows links at the same time, or does opening one close the other? As designed in the sketch file, how would the user know which streaming platform is powering the audio player?). 
- The album art png wasn't in the assets folder, so I imported the version included in the sketch file. 

### Technologies / Libraries Used

- React (^17.0.2)
- [styled-components](https://styled-components.com/)
- [Enzyme](https://enzymejs.github.io/enzyme/)

### Improvements

Future features / opportunities for improvement:

- Improve test coverage — given that the project doesn't feature complex interactions, I opted to focus on basic component rendering tests. With more time, I'd write additional tests to simulate events, ensure props are passed correctly, etc.
- Provide feedback to user (on click of element inside Music Link) — when a user clicks an element inside of the Music Link to open the audio player, they don't have a way of understanding which streaming platform is powering the player. It would be helpful to provide feedback to the user (e.g., adding the logo to the player or changing the color of the platform logo/name in the list while active) to communicate this info.
- Make profile more customizable — rather than just allowing the links and theme to be updated, I'd build the project such that every element on the profile page can be customized (just like the real Linktree). The avatar and handle would be two quick wins, and I'd then move on to some of the other styles on the page (e.g., font, background, etc.).
- Enable audio player — play the song (or a preview) when the audio player is launched!
- "Reset" audio player — once the user opens the audio player for the first time, it remains visible even after closing and reopening the list under the Music Link. To replicate a more real-world interaction, I'd update this such that the user must launch the audio player every time they reopen the list (the embedded YouTube player on the latest version of Linktree works like this).

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
