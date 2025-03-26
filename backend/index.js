import express from "express";



const app = express();


// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});



app.all("*", (req, res, next) => {
    if (!res.headersSent) {
        res.status(404).json({ message: "End point does not exist" });
    }
});

const PORT = process.env.PORT;

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});