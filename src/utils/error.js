const ERRORS = {
    EMAIL_NOT_FOUND: 'Пользователь с таким email не найден',
    INVALID_PASSWORD: 'Неверный пароль',
    auth: 'Доступ запрещён. Необходима авторизация.'
}

export function error(code) {
    return ERRORS[code] ? ERRORS[code] : "Неизвестная ошибка"
}