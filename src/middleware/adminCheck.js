const admin = ['ada', 'greta', 'vim', 'tim'];

module.exports = (req, res, next) => {
    if (admin.includes(req.query.user.toLowerCase())) {
        next()
    }

    res.redirect('/login?error=true')
}