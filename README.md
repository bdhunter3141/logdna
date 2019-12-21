# logDNA Messaging

This is a full-stack application developed to test my React, Express, and PostgreSQL skills. Any messages sent using the message form are stored in a PostgreSQL database and displayed on the screen. The sidebar is not interactive, however, you are able to select a conversation and an indicator will display which conversation is selected.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Getting Started

1. Fork and clone the repository.
2. Create a local PostgreSQL database and add a table named 'messages'

  ```
    CREATE TABLE messages (
    id serial PRIMARY KEY,
    message VARCHAR(800)
  );
  ```

3. Run `npm install` from within the root project directory.
4. Create a .env file in the root project directory with the following information:

 ```
  NODE_ENV=development
  DATABASE_HOST=< your chosen database host >
  DATABASE_USER=< your chosen database username >
  DATABASE_PASSWORD=< your chosen database password >
  DATABASE_NAME=< your chosen database name >
  ```

5. Run `npm start` from the root project directory to start the server on port 3000.
6. Open the client folder from within the root project directory and run `npm install` once again.
7. After the install is complete, run `yarn start` from within the client folder. This will load the client in development mode.
8. Open [http://localhost:3001](http://localhost:3001) to view the application in the browser.


### Finished Product

![The application.](https://github.com/bdhunter3141/logdna/blob/master/client/public/app-screenshot.png?raw=true)


## Available Scripts

### Server

From within the main directory, you can run:

#### `npm start`

Runs the server in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The server will restart if you make edits.


### Client

From within the client directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### Dependencies

#### Server

    body-parser
    cors
    dotenv
    express
    helmet
    knex
    morgan
    pg


#### Client

    react
    react-dom
    react-scripts