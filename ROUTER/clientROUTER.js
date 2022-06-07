const clientBL = require("../BL/clientBL")

function router(app) {

    app.get("/client", async (req, res) => {
        try {

            const clients = await clientBL.read(req.query.email)
            res.send(clients)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    })

    app.post("/client", async (req, res) => {
        try {
            const newClient = await clientBL.create(req.body)
            res.send(newClient)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    })
    
    app.put("/client", async (req, res) => {
        try {
            const newClient = await clientBL.updata(req.query.email,req.body)
            res.send(newClient)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    })

    app.delete("/client", async (req, res) => {
        try {
            const client = await clientBL.del(req.query.email)
            res.send(client)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    })
}

module.exports = router