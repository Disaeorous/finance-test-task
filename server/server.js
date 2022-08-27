"use strict";
const express = require("express");
const http = require("http");
const io = require("socket.io");
const cors = require("cors");

const FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;

const tickers = [
<<<<<<< HEAD
  "AAPL", // Apple
  "GOOGL", // Alphabet
  "MSFT", // Microsoft
  "AMZN", // Amazon
  "FB", // Facebook
  "TSLA", // Tesla
=======
	'AAPL', // Apple
	'GOOGL', // Alphabet
	'MSFT', // Microsoft
	'AMZN', // Amazon
	'FB', // Facebook
	'TSLA', // Tesla
>>>>>>> 399e79fb0e7eff180c2643e890e6943f55a1013e
];

function randomValue(min = 0, max = 1, precision = 0) {
	const random = Math.random() * (max - min) + min;
	return random.toFixed(precision);
}

function utcDate() {
<<<<<<< HEAD
  const now = new Date();
  return new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );
}

function getQuotes(socket) {
  const quotes = tickers.map((ticker) => ({
    ticker,
    exchange: "NASDAQ",
    price: randomValue(100, 300, 2),
    change: randomValue(0, 200, 2),
    change_percent: randomValue(0, 1, 2),
    dividend: randomValue(0, 1, 2),
    yield: randomValue(0, 2, 2),
    last_trade_time: utcDate(),
  }));

  socket.emit("ticker", quotes);
=======
	const now = new Date();
	return new Date(
		now.getUTCFullYear(),
		now.getUTCMonth(),
		now.getUTCDate(),
		now.getUTCHours(),
		now.getUTCMinutes(),
		now.getUTCSeconds()
	);
}

function getQuotes(socket) {
	const quotes = tickers.map((ticker) => ({
		ticker,
		exchange: 'NASDAQ',
		price: randomValue(100, 300, 2),
		change: randomValue(0, 200, 2),
		change_percent: randomValue(0, 1, 2),
		dividend: randomValue(0, 1, 2),
		yield: randomValue(0, 2, 2),
		last_trade_time: utcDate(),
	}));

	// console.log(quotes);
	socket.emit('ticker', quotes);
>>>>>>> 399e79fb0e7eff180c2643e890e6943f55a1013e
}

function trackTickers(socket) {
	// run the first time immediately
	getQuotes(socket);

<<<<<<< HEAD
  // every N seconds
  const timer = setInterval(function () {
    getQuotes(socket);
  }, FETCH_INTERVAL);

  socket.on("disconnect", function () {
    clearInterval(timer);
  });
=======
	// every N seconds
	const timer = setInterval(function () {
		getQuotes(socket);
	}, FETCH_INTERVAL);

	socket.on('disconnect', function () {
		clearInterval(timer);
		console.log(`User disconnect: ${socket.id}.`);
	});
>>>>>>> 399e79fb0e7eff180c2643e890e6943f55a1013e
}

const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = io(server, {
<<<<<<< HEAD
  cors: {
    origin: "*",
  },
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

socketServer.on("connection", (socket) => {
  socket.on("start", () => {
    trackTickers(socket);
  });
=======
	cors: {
		origin: '*',
	},
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

socketServer.on('connection', (socket) => {
	console.log(`user connected ${socket.id}`);

	socket.on('start', () => {
		trackTickers(socket);
	});
>>>>>>> 399e79fb0e7eff180c2643e890e6943f55a1013e
});

server.listen(PORT, () => {
	console.log(`Streaming service is running on http://localhost:${PORT}`);
});
