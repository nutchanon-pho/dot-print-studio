import nconf from 'nconf';

if (process.env.NODE_ENV === 'development') {
    nconf.file({ file: './config/config.json' });
}

module.exports = nconf;
