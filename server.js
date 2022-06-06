const
    express = require("express"),
    app = express(),
    PORT = 3333,
    productROUTER = require("./TOUTER/productROUTER")
require("./db")()

app.use(express.json());
productROUTER(app)


app.listen(PORT, () => console.log(`Connected to port ${PORT}`))