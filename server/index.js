const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.json({message: "fuck manchester united!"})
});
app.listen(8080, () => {
 console.log('server started')
})
// http://localhost:8080/