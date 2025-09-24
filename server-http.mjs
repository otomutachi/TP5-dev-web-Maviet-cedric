import http from "node:http";
import path from "node:path";

const host = "localhost";
const port = 8000;

/** Question 1**/
/**function requestListener(_request, response) {
  response.writeHead(200);
  response.end("<html><h1>My first server!<h1></html>");
}**/

/**Question 2**/
/**function requestListener(_request, response) {
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify({ message: "I'm OK" }));
}**/

/**Question 3 et 4**/

/**import fs from "node:fs/promises";

function requestListener(_request, response) {
  fs.readFile("index.html", "utf8")
    .then((contents) => {
      response.setHeader("Content-Type", "text/html");
      response.writeHead(200);
      return response.end(contents);
    })
    .catch((error) => console.error(error));
}**/

/**Question 5**/
import fs from "node:fs/promises";
/**
async function requestListener(_request, response) {
  try {
    const contents = await fs.readFile("index.html", "utf8");
    response.setHeader("Content-Type", "text/html");
    response.writeHead(200);
    response.end(contents);
  } catch (error) {
    console.error(error);
    response.writeHead(500, { "Content-Type": "text/plain" });
    response.end("Erreur 500 : INTERNAL SERVER ERROR.");
  }
}
**/

/**Question 1.8**/
/**async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  try {
    const contents = await fs.readFile("index.html", "utf8");
    switch (request.url) {
      case "/index.html":
        response.writeHead(200);
        return response.end(contents);
      case "/random.html":
        response.writeHead(200);
        return response.end(`<html><p>${Math.floor(100 * Math.random())}</p></html>`);
      default:
        response.writeHead(404);
        return response.end(`<html><p>404: NOT FOUND</p></html>`);
    }
  } catch (error) {
    console.error(error);
    response.writeHead(500);
    return response.end(`<html><p>500: INTERNAL SERVER ERROR</p></html>`);
  }
}**/

async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  try {
    const parsedUrl = new URL(request.url, `http://${host}:${port}`);
    const pathname = parsedUrl.pathname.slice(1);
    const segments = pathname.split("/").filter(Boolean);
    if (pathname === "" || pathname === "index.html") {
      const filePath = path.resolve("index.html");
      const content = await fs.readFile(filePath, "utf8");
      response.writeHead(200);
      response.end(content);
    } else if (pathname === "random.html") {
      const randomNumber = Math.floor(Math.random() * 100);
      response.writeHead(200);
      response.end(`<html><body>Random: <b>${randomNumber}</b></body></html>`);
    } else if (segments[0] === "random" && segments.length === 2) {
      const count = Number.parseInt(segments[1], 10);
      if (Number.isNaN(count) || count <= 0) {
        response.writeHead(400);
        response.end("<html><body><p>400: numero invalid erreur</p></body></html>");
      } else {
        let htmlOutput = "<html><body><div>";
        for (let index = 0; index < count; index++) {
          htmlOutput += `<span>${Math.floor(Math.random() * 100)}</span><br>`;
        }
        htmlOutput += "</div></body></html>";
        response.writeHead(200);
        response.end(htmlOutput);
      }
    } else {
      response.writeHead(404);
      response.end("<html><body><p>404: pas trouvé</p></body></html>");
    }
  } catch (error) {
    console.error("le serveur a echouer :", error);
    response.writeHead(500);
    response.end("<html><body><p>500: INTERNAL SERVER ERROR</p></body></html>");
  }
}

export default requestListener;

console.log("NODE_ENV =", process.env.NODE_ENV);

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
