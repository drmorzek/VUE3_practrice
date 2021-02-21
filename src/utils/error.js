const ERRORS = {
    EMAIL_NOT_FOUND: 'Пользователь с таким email не найден',
    INVALID_PASSWORD: 'Неверный пароль'
}

export function error(error) {
    const code = error.response.data.error.message
    return ERRORS[code] ? ERRORS[code] : "Неизвестная ошибка"
}