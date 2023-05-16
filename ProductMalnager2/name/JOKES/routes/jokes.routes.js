const JokesController = require("../controllers/jokes.controller")

module.exports = (app)=>{
    app.get("/api/testing2", JokesController.apiTest2);
    app.get("/api/jokes", JokesController.allJokes);
    app.get("/api/jokes/:id", JokesController.oneJoke);
    app.post("/api/jokes", JokesController.createJoke);
    app.put("/api/jokes/:id", JokesController.updateJoke);
    app.delete("/api/jokes/:id", JokesController.deleteJoke);
}