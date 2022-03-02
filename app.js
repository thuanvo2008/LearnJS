const express = require('express')
const app = express();
const tasks = require('./routes/tasks')


app.get('/', (req, res) => {
        res.send("Hello World!!!");
    });

app.get('/api/courses', (req, res) => {
        res.send([1,2,3]);
    });

app.use("/api/v1/tasks", tasks);
const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));