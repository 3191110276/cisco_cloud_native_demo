const { ciscoTracing } = require('cisco-telescope');

const userOptions = {
  serviceName: 'test',
  ciscoToken: process.env.TELESCOPE_TOKEN,
};

await ciscoTracing.init(userOptions);
