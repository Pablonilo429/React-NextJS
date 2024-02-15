const metodo = (req, res) => {
    if (req.method === "GET"){
        res.status(200).json({
            nome: "Pablo"
        })
    }
    else{
        res.status(200).json({
            nome: "Nicoli"
        })
    }
    
   
}

export default metodo;