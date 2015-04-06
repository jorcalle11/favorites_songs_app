
controller = require('../controllers/controller.song')

module.exports = function (app){
  app.route('/songs')
            .post(controller.create)
            .get(controller.read);

  app.route('/songs/:id')
            .get(controller.findById)
            .put(controller.update)
            .delete(controller.remove);
}
