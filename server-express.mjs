import express from "express";
import morgan from "morgan";
import createError from "http-errors";
import logger from "loglevel";

const host = "localhost";
const port = 8000;

const app = express();

logger.setLevel(logger.levels.DEBUG);

app.set("view engine", "ejs");

if (app.get("env") === "development") app.use(morgan("dev"));

app.use(express.static("static"));

app.get("/random.html", async function (request, response, _next) {
  const randomNumber = Math.floor(100 * Math.random());
  return response.send(`<html><ul><li>${randomNumber}</li></ul></html>`);
});

app.get("/random/:nb", async function (request, response, next) {
  const length = Number.parseInt(request.params.nb, 10);
  if (Number.isNaN(length)) {
    return next(createError(400));
  }
  const numbers = Array.from({ length }, () => Math.floor(100 * Math.random()));
  const welcome = "Random Numbers";
  return response.render("random", { numbers, welcome });
});

app.use((request, response, next) => {
  logger.debug(`default route handler : ${request.url}`);
  return next(createError(404));
});

app.use((error, _request, response, _next) => {
  logger.debug(`default error handler: ${error}`);
  const status = error.status ?? 500;
  const stack = app.get("env") === "development" ? error.stack : "";
  const result = { code: status, message: error.message, stack };
  return response.render("error", result);
});
app.use((request, response, next) => {
  console.debug(`default route handler : ${request.url}`);
  return next(createError(404));
});

app.use((error, _request, response, _next) => {
  console.debug(`default error handler: ${error}`);
  const status = error.status ?? 500;
  const stack = app.get("env") === "development" ? error.stack : "";
  const result = { code: status, message: error.message, stack };
  return response.render("error", result);
});

const server = app.listen(port, host);

server.on("listening", () =>
  logger.info(
    `HTTP listening on http://${server.address().address}:${server.address().port} with mode '${process.env.NODE_ENV}'`
  )
);

logger.info(`File ${import.meta.url} executed.`);

