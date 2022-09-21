const { check, body } = require("express-validator");

module.exports = [
    // name
    check("name")
        .notEmpty()
        .withMessage("Debes ingresar un nombre")
        .bail()

        .isLength({
            min: 3,
        })
        .withMessage("El nombre debe tener un mínimo de 3 caracteres")
        .bail()

        .isAlpha("es-ES", { ignore: " " })
        .withMessage("El nombre debe contener sólo caracteres alfabéticos"),


    check('color')
        .notEmpty()
        .withMessage('Debes seleccionar un color'),


    body("email")
        .notEmpty()
        .withMessage("Debes ingresar un email")
        .bail()

        .isEmail()
        .withMessage("El mail no es válido "),

    check('age')
        .notEmpty().withMessage('Debes ingresar tu edad').bail()
        .isLength({
            max: 2,
        }).withMessage('Debes ingresar una edad válida').bail()
        .isNumeric().withMessage('Solo se permiten valores numéricos')


];