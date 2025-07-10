const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/echo', (req, res) => {
    const value = req.body?.value;
    if (value === '') {
        return res.status(404).json({ error: 'Not Found' });
    }
    res.json({ echoed: value });
});

app.listen(port, () => {
    console.log(`Echo server listening at http://localhost:${port}`);
});
