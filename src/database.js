const mongoose = require('mongoose');

const URI = "mongodb+srv://carpteamo123:carpteamo123@cluster0.inutk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;