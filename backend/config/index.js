import * as configValues from './config.json';

module.exports = {
    getDbConnectionString: () => `mongodb://${configValues.host}:${configValues.port}`,
};
