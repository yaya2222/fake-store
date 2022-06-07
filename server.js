const
    express = require("express"),
    app = express(),
    PORT = 3333,
    productROUTER = require("./ROUTER/productROUTER"),
    clientROUTER=require("./ROUTER/clientROUTER"),
    cartROUTER=require("./ROUTER/cartROUTER")
require("./db")()

app.use(express.json());
productROUTER(app)
clientROUTER(app)
cartROUTER(app)

app.listen(PORT, () => console.log(`Connected to port ${PORT}`))