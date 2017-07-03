// Initializes the `service` service on path `/service`
const createService = require('feathers-nedb');
const createModel = require('../../models/service.model');
const hooks = require('./service.hooks');
const filters = require('./service.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'service',
    Model,
    paginate : false
  };

  // Initialize our service with any options it requires
  app.use('/service', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('service');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
