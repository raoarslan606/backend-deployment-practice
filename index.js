const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello! My Full Stack Project is running on my server');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});