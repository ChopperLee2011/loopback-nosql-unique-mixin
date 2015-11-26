module.exports = (Model, options) => {
  'use strict';
  Model.observe('before save', (ctx, next) => {
    if (ctx.instance && ctx.isNewInstance) {

      Model.app.models.unique.createKey(ctx.instance[options.column], Model.modelName).then(next());
    } else {
      next();
    }
  });

  Model.observe('before delete', (ctx, next) => {
    //todo-cp: can not find the content of delete model;
    next();
  });
};
