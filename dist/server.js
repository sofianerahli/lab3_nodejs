"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var metrics_1 = require("./metrics");
var path = require("path");
var bodyparser = require("body-parser");
var app = express();
var port = process.env.PORT || '8082';
app.use(express.static(path.join(__dirname, '/../public')));
app.set('views', __dirname + "/../views");
app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.get('/', function (req, res) {
    res.write('Hello world');
    res.end();
});
app.get('/hello/:name', function (req, res) {
    res.render('hello.ejs', { name: req.params.name });
});
app.get('/metrics.json', function (req, res) {
    metrics_1.MetricsHandler.get(function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});
var dbMet = new metrics_1.MetricsHandler('./db/metrics');
app.post('/metrics/:id', function (req, res) {
    dbMet.save(req.params.id, req.body, function (err) {
        if (err)
            throw err;
        res.status(200).send('ok');
        res.end();
    });
});
app.get('/metrics/', function (req, res) {
    dbMet.getAll(function (err, result) {
        if (err)
            throw err;
        res.status(200).json({ result: result });
    });
});
app.get('/metrics/:id', function (req, res) {
    var key = req.params.id;
    dbMet.getOne(key, function (err, data) {
        if (err) {
            if (err.message === "Metric doesn't exist") {
                res.sendStatus(400);
                return;
            }
            throw err;
        }
        ;
        res.status(200).json({ data: data });
    });
});
app.delete('/metrics/:id', function (req, res) {
    var key = req.params.id;
    dbMet.delete(key, function (err, data) {
        if (err) {
            if (err.message === "Metric doesn't exist") {
                res.sendStatus(400);
                return;
            }
            throw err;
        }
        ;
        res.status(200).json({ data: data });
    });
});
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("Server is running on http://localhost:" + port);
});
