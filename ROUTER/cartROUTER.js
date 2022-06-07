const cartBL = require("../BL/cartBL")

function router(app) {


    app.get("/cart", async (req, res) => {
        try {

            const clients = await cartBL.read()
            res.send(clients)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    })

    app.post("/cart", async (req, res) => {
        try {
            const newClient = await cartBL.create(req.body)
            res.send(newClient)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    })

    app.put("/cart", async (req, res) => {
        try {
            const newClient = await cartBL.updata(req.query._id, req.body)
            res.send(newClient)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    })

    app.delete("/cart", async (req, res) => {
        try {
            const client = await cartBL.del(req.query._id)
            res.send(client)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    })
}

module.exports = router