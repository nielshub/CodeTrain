module.exports = (req,res,next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match your domain
    next()
}