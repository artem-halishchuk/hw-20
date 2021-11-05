let express = require('express');
let app = express();
let path = require('path');
let HTML_FILE = path.join(__dirname, 'dist/*.html');
app.use(express.static(__dirname+'/dist'));
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
});
app.listen(3000);