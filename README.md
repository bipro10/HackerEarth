# JGMC

> Jashore Govt. Mohila COllege - Student Management System

## Quick Start

```bash
# Install dependencies for client
npm run client-install

# Install dependencies for server
npm run server-install

# Run the client & server with concurrently
npm run dev

# Run the React client only
npm run client

# Run the Express server only
npm run server

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a keys_dev.js in the server config folder with

```bash
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};)
```

## Main Technologies

- [ ] Node.js
- [ ] Express
- [ ] Mongo DB
- [ ] Mongoose
- [ ] React.js
- [ ] Redux