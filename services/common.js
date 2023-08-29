const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWRiMDhiZTgyN2VlM2UwNmQzOGYzYyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkzMzA1MjU1fQ.2tbYtuS5ZthvncS9eG6gKE0UYBY0NOay1j9FXZypZjc"
  return token;
};