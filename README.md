# Daily Repro Memory Leak with Stripe

## .env

Please create a `.env` at the root with these values:
```
REACT_APP_ROOM_URL=INSERT_YOUR_DAILY_ROOM_URL
REACT_APP_DAILY_API_KEY=INSERT_YOUR_DAILY_API_KEY
REACT_APP_STRIPE_PK=INSERT_YOUR_STRIPE_PK
```
`REACT_APP_STRIPE_PK` is optional though, the memory leak will happen even without a valid Stripe PK.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

