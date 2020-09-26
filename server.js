const cors = require('cors');
const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const Pusher = require('pusher');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const multipart = require('connect-multiparty');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

const Stat = require('./models/Stat');
const Image = require('./models/Image');
const { default: Server } = require('next/dist/next-server/server/next-server');
const app = next({ dev });
const handler = app.getRequestHandler();

require('./config/db');

// Ensure that your pusher credentials are properly set in the .env file
// Using the specified variables
const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true },
//     (req, res) => {
//         console.log("Connnected to the dtabase!");
//     });

app.prepare()
    .then(() => {

        const server = express();

        server.use(cors());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));

        server.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
            next();
        });

        // Setup multiparty
        const multipartMiddleware = multipart();

        // Get request for stats
        server.get('/get/stats', async (req, res) => {
            await Stat.find({}, async function (err, statResult) {
                if (err) throw err;
                // Process result
                const latest = [
                    statResult[statResult.length - 1].temperature,
                    statResult[statResult.length - 1].pressure,
                    statResult[statResult.length - 1].humidity,
                    statResult[statResult.length - 1].light,
                    statResult[statResult.length - 1].noise,
                    statResult[statResult.length - 1].reducing,
                    statResult[statResult.length - 1].oxidizing,
                    statResult[statResult.length - 1].nh3,
                    statResult[statResult.length - 1].pm1,
                    statResult[statResult.length - 1].pm25,
                    statResult[statResult.length - 1].pm10,
                ];

                // Search for detected targets  
                await Image.find({}, function (err, imgResult) {
                    if (err) throw err;
                    // Process result
                    const processData = {
                        stats: {
                            latest: latest,
                            time: statResult.map(data => data.time),
                            lineTemp: statResult.map(data => data.temperature),
                            linePressure: statResult.map(data => data.pressure),
                            lineHumidity: statResult.map(data => data.humidity),
                            lineLight: statResult.map(data => data.light),
                            lineNoise: statResult.map(data => data.noise),
                            lineReducing: statResult.map(data => data.reducing),
                            lineOxidizing: statResult.map(data => data.oxidizing),
                            lineNh3: statResult.map(data => data.nh3),
                            linePm1: statResult.map(data => data.pm1),
                            linePm25: statResult.map(data => data.pm25),
                            linePm10: statResult.map(data => data.pm10)
                        },
                        target: {
                            data: imgResult.map(data => data.target),
                            image: imgResult.map(data => data.image)
                        }

                    };
                    res.json(processData);
                })
            })
        });

        server.get('*', (req, res) => {
            return handler(req, res);
        });

        // Handle UPDATE route
        server.post('/update/stats', async (req, res) => {
            // console.log(req.body);
            try {
                const newStat = new Stat({
                    temperature: req.body.temp,
                    pressure: req.body.pressure,
                    humidity: req.body.humidity,
                    light: req.body.light,
                    noise: req.body.noise,
                    reducing: req.body.reduce,
                    oxidizing: req.body.oxi,
                    nh3: req.body.nh3,
                    pm1: req.body.pm1,
                    pm25: req.body.pm25,
                    pm10: req.body.pm10,
                    time: (new Date).toTimeString().substring(3, 8)
                });

                const stats = [
                    req.body.temp,
                    req.body.pressure,
                    req.body.humidity,
                    req.body.light,
                    req.body.noise,
                    req.body.reduce,
                    req.body.oxi,
                    req.body.nh3,
                    req.body.pm1,
                    req.body.pm25,
                    req.body.pm10
                ]

                console.log(stats);
                // Save to database
                newStat.save(function (err) {
                    // Filter inputs and add t stats for dynamic update
                    console.log("Stats saved to mongoDB Atlas!");
                    pusher.trigger('demo-stats', 'bar-stats', stats);
                    return res.sendStatus(200);
                })
            } catch (err) {
                res.send({ message: err });
            }
        });

        server.post('/update/img', multipartMiddleware, (req, res) => {
            // Save to cloudinary
            cloudinary.v2.uploader.upload(req.files.image.path, {}, function (
                error,
                result
            ) {
                if (error) {
                    return res.status(500).send(error);
                }
                const object = Object.assign({}, result, req.body);

                // Filter inputs and add stats for dynamic update
                pusher.trigger('demo-stats', 'gallery', {
                    image: object,
                });
                res.sendStatus(200);
            });
        });

        server.post('/update/resume', async (req, res) => {
            try {
                // Save to database
                const newImage = new Image({
                    image: req.body.image.image,
                    target: req.body.target
                });
                // Save to database
                newImage.save(function (err) {
                    console.log('Images saved to mongoDB Atlas!');
                    return res.sendStatus(200);
                })
            } catch (err) {
                res.send({ message: err });
            }
        });

        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });

    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });