const Handlebars = require('handlebars');

function opertionalFn(collection, lengthToCheck, options) {
  if (collection.length > lengthToCheck) {
    return options.fn(this) || 'some other JS data type';
  }
  return options.inverse(this);
}

const init = () => {
  Handlebars.registerHelper('sampleHelper', opertionalFn);
};

module.exports = { init };
