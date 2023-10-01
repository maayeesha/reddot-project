const express = require("express");
const app = express(); // created the application

const PORT = 8001;

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
