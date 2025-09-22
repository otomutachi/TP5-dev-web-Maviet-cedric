import http from "node:http";
import fs from "node:fs/promises";

const host = "localhost";
const port = 8000;

async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  try {
    const parts = request.url.split("/");
    const firstPart = parts[1];
    switch (firstPart) {
      case "":
      case "index.html": {
        const contents = await fs.readFile("index.html", "utf8");
        response.writeHead(200);
        return response.end(contents);
      }
      case "random": {
        const nbStr = parts[2];
        if (nbStr) {
          const nb = parseInt(nbStr, 10);
          if (!isNaN(nb) && nb > 0) {
            let html = "<html><p>";
            for (let i = 0; i < nb; i++) {
              html += `${Math.floor(100 * Math.random())} `;
            }
            html += "</p></html>";
            response.writeHead(200);
            return response.end(html);
          }
        }
      }
      default: {
        response.writeHead(404);
        return response.end(`<html><p>404: NOT FOUND</p></html>`);
      }
    }
  } catch (error) {
    console.error(error);
    response.writeHead(500);
    return response.end(`<html><p>500: INTERNAL SERVER ERROR</p></html>`);
  }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});