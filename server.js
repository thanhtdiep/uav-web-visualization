const cors = require('cors');
const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const Pusher = require('pusher');
const cloudinary = require('cloudinary');
const multipart = require('connect-multiparty');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

const app = next({ dev });
const handler = app.getRequestHandler();


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

app.prepare()
    .then(() => {

        const server = express();

        server.use(cors());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));

        // Setup multiparty
        const multipartMiddleware = multipart();

        // server.use('/update', updateRouter);

        server.get('*', (req, res) => {
            return handler(req, res);
        });

        // Handle UPDATE route
        server.post('/update/stats', (req, res) => {
            // console.log(req.body);
            // const request = JSON.parse(req);
            const stats = [
                req.body.temp,
                req.body.pressure,
                req.body.humidity,
                req.body.light,
                req.body.noise,
                req.body.gas
            ]

            console.log(stats);

            // // Filter inputs and add t stats for dynamic update
            pusher.trigger('demo-stats', 'bar-stats', stats);

            return res.sendStatus(200);
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
                // Save to database
                const object = Object.assign({}, result, req.body);
                // Filter inputs and add stats for dynamic update
                pusher.trigger('demo-stats', 'gallery', {
                    image: object,
                });
                res.sendStatus(200);
            });
        });

        server.listen(port, '0.0.0.0', err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });

    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });