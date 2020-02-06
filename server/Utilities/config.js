let environment = "dev";

let serverURLs = {
    "dev": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "3000",
        "MONGO_DB": "mongodb+srv://exerttech:27@Navish@exerttechcluster-do0o3.mongodb.net/exerttech_samplet?retryWrites=true&w=majority"
    },
    "production": {
        "NODE_SERVER": "http://11.11.11.11",
        "NODE_SERVER_PORT": "3000",
        "MONGO_DB": "mongodb+srv://exerttech:27@Navish@exerttechcluster-do0o3.mongodb.net/exerttech_sample?retryWrites=true&w=majority"
    }
}

let config = {
    "DB_URL": {
        "url": `${serverURLs[environment].MONGO_DB}`
    },
    "NODE_SERVER_PORT": {
        "port": `${serverURLs[environment].NODE_SERVER_PORT}`
    },
    "NODE_SERVER_URL": {
        "url": `${serverURLs[environment].NODE_SERVER}`
    }
};

module.exports = {
    config: config
};
