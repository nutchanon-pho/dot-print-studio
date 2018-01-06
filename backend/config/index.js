import nconf from 'nconf';
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    nconf.file({ file: './config/config.json' });
} else if (process.env.NODE_ENV === 'docker') {
    nconf.file({ file: './config/docker-config.json' });
}

module.exports = nconf;
