//loads up all enviorment variables 
import * as dontenv from "dotenv"
dontenv.config()

import app from './server';
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
