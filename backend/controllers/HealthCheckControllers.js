module.exports = {
    init: (app) => {
        app.get('/ping', (req, res) => {
            res.send('pong');
        });
    },
};
