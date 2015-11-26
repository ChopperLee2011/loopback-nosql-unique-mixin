'use strict';
module.exports = Unique=> {
  'use strict';
  Unique.createKey = (key, type) => {
    return Unique.create({id: `${type}:${key}`});
  };
};