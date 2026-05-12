async function cont1(req, res, next) {

  if (res.locals.error) {
    return next()
  }

  try {
    res.render('backlink1');
  } catch (error) {
    console.error('Error in controller:', error);
    return next(error);
  }
}

const controller = {
  cont1: cont1
};

module.exports = controller;