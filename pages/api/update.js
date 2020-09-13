const Pusher = require('pusher');

// Ensure that your pusher credentials are properly set in the .env file
// Using the specified variables
const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
});


export default (req, res) => {
    const request = JSON.parse(req.body);
    const stats = [
        request.temp,
        request.pressure,
        request.humidity,
        request.light,
        request.noise,
        request.gas
    ]

    // Filter inputs and add t stats for dynamic update
    pusher.trigger('demo-stats', 'bar-stats', {
        stats
    });

    return res.json({ success: true, message: 'Thank you for voting' });

}