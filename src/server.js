import  app  from "./app.js";
import { SERVER_PORT  } from "./config/env.js";



const PORT = SERVER_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
