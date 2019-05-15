import app from "./app";
import "reflect-metadata";
const PORT = 8080;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
