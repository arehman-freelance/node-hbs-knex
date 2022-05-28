import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  // console.log(req.cookies)
  // const authHeader = req.headers['authorization']
  // const token = authHeader && authHeader.split(' ')[1]
  const token = req.cookies.token;

  //   if (token == null) return res.sendStatus(401)
  if (token == null) {
    //return res.render('login');
    res.redirect("/login")
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, jwt_user) => {
      console.log(err)

      // if (err) return res.sendStatus(403)
      // res.render('home');

      // req.jwt_user = jwt_user

      next();
    });
  }

}
