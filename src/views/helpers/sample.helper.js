const Handlebars = require('handlebars');

const init = () => {
  Handlebars.registerHelper('sampleHelper', function (collection, lengthToCheck, options) {
    'use strict';
     if (collection.length > lengthToCheck) {
       return options.fn(this) || 'some other JS data type';
    }
    return options.inverse(this);
  });
}

module.exports =  { init };
