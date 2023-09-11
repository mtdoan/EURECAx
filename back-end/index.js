const { app } = require("./server");
const connectDB = require("./config/database.js");

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = { app };