import * as I18n from 'i18n'
import path from 'path'

export const getI18n = () => {
    const locales = ['en', 'pt_br'];

    I18n.configure({
        locales,
        directory: path.resolve(__dirname, '../locales'),
        defaultLocale: 'en',
        queryParameter: 'lang',
        extension: '.json',
        register: global,
        directoryPermissions: '777'
    });

    return I18n
}

export const i18n = getI18n()
