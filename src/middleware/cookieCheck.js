module.exports = (req, res, next) => {
    if (req.cookies.color) {
        req.session.usuario = req.cookies.color
        res.locals.usuario = req.cookies.color
    }

    next()
}