import express from "express";
import morgan from "morgan";

const host = "localhost";
const port = 8000;

const app = express();

if (app.get("env") === "development") app.use(morgan("dev"));

app.use(express.static("static"));

app.get("/random.html", async function (request, response, _next) {
  const randomNumber = Math.floor(100 * Math.random());
  return response.send(`<html><ul><li>${randomNumber}</li></ul></html>`);
});

app.get("/random/:nb", async function (request, response, _next) {
  const length = Number.parseInt(request.params.nb, 10);
  if (Number.isNaN(length)) {
    return response.status(400).send("<html><body><p>400: Invalid number in request</p></body></html>");
  }
  const contents = Array.from({ length })
    .map(() => `<li>${Math.floor(100 * Math.random())}</li>`)
    .join("\n");
  return response.send(`<html><ul>${contents}</ul></html>`);
});

const server = app.listen(port, host);

server.on("listening", () =>
  console.info(
    `HTTP listening on http://${server.address().address}:${server.address().port} with mode '${process.env.NODE_ENV}'`,
  ),
);

console.info(`File ${import.meta.url} executed.`);
