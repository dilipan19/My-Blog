const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('
                                    Hello this is dilipan! and my student id is: M008729
                                    '));

app.listen(PORT, () => console.log(Server running on port ${PORT}));
