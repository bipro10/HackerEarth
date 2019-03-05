MERN-Stack
> This Project is for learning MERN Stack and a walk to become a Full Stack Developer using MongoDB, Express, React.js and Node.js.

This repository have sevarel branches contain projects:

- [x] master
- [x] mern-Sample
- [x] Todoist
To access a project, checkout that branch.

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