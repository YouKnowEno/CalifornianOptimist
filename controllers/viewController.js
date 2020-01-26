const getHome = async (req, res, next) => {
  return res.render('home.ejs');
};

const getForm = async (req, res, next) => {
  return res.render('form.ejs');
};

const getSubmitted = async (req, res, next) => {
  return res.render('submitted.ejs');
};

const handleForm = async (req, res, next) => {
  const newTeacher = await Teacher.create(req.body);

  if (!newTeacher) {
    return console.log('error');
  }
  return res.redirect('/submitted');
};

module.exports = {
  getHome,
  getForm,
  getSubmitted,
  handleForm
};
