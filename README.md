# EURECAx Dashboard USER MANUAL

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js and npm (Node Package Manager)](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## 1. Installing Node.js

Visit the [official Node.js website](https://nodejs.org/) and download the latest version for your operating system. Follow the installation instructions provided on the website.

To check if Node.js and npm are installed, run the following commands in your terminal:

```
node -v
npm -v
```

## 2. Setting up MongoDB

2. Setting up MongoDB
Visit the official MongoDB website and download the appropriate version for your operating system. Follow the installation instructions provided on the website.

Create a folder on your machine to store your MongoDB data. For example, create a folder named data/db:

```
mkdir -p data/db
```

Start the MongoDB server:

```
mongod --dbpath=data/db
```


## 3. Installing Express

Create a new directory for your project and navigate into it:

```
mkdir my-project
cd my-project
```

Initialise a new Node.js project:

```
npm init -y
```

Install Express:

```
npm install express
```

## 4. Cloning the GitHub repository

Clone the repository with both back-end and front-end folders:

```
git clone https://github.com/mtdoan/EURECAx
```

## 5. Running the Application

# Running the React app

Navigate to the front-end folder:

```
cd front-end
```

Install dependencies:
```
npm install
```

Run the app:
```
npm start
```

The React app should now be running at http://localhost:3000.

# Please note: the back-end is currently being hosted on vercel, so no further action is required.
# After handover, it is recommended to host the back-end on a new vercel 
# Instructions below:
https://vercel.com/guides/using-express-with-vercel

Open your web browser and visit http://localhost:3000 to see the full stack web application in action. The front-end communicates with the back-end, and data is stored in the MongoDB database.

## Contribution acknowledgement
Our develop team includes 4 members:
-   Daniel Abdelsayed
-   Abrar Yusuf
-   Ahmed Kiliji
-   Paul McNamara
-   Min Thuy Doan
-   Saud Sattar
-   Liam Hall
