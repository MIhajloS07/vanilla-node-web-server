import server from "./server.js";

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});