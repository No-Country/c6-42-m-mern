import express from "express";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import expressRateLimit from "express-rate-limit";

const app = express();
app.use()
app.set('port', process.env.PORT || 3000);


app.use('/', require('./controllers/routes'));

app.listen(app.get('port'), () => {
    console.log("server on Port", app.get('port'));
})
