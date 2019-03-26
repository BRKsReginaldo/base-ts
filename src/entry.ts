const server = require('./main')

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => `[SERVER] Running at port ${PORT}`);
