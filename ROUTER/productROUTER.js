const productBL = require("../BL/productBL")

function router(app) {

    app.get("/allProducts", async (req, res) => {
        try {
            const allproducts = await productBL.readAll()
            res.send(allproducts)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    })

    app.get("/product", async (req, res) => {
        try {
            const product = await productBL.readOne(req.query.id)
            res.send(product)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)

        }
    })

    app.get("/category", async (req, res) => {
        try {
            const products = await productBL.findByCategory(req.query.category)
            res.send(products)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)

        }
    })

    app.post("/product", async (req, res) => {
        try {
            const product = await productBL.create(req.body)
            res.send(product)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)

        }
    })

    app.delete("/product", async (req, res) => {
        try {
            const product = await productBL.del(req.query.id)
            res.send(product)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    })

    app.put("/product", async (req, res) => {
        try {
            const product = await productBL.updataOne(req.query.id, req.body)
            res.send(product)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    })

    app.get("/allCategory",async(req,res)=>{
        try {
            const arrCategories=await productBL.readAllCategory()
            res.send(arrCategories)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)   
        }
    })

    app.put("/productByCategory",async(req,res)=>{
        try {
            const products=await productBL.updataByCategory(req.query.category,req.body)
            res.send(products)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)   
        }
    })

}

module.exports = router
