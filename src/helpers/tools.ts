/* eslint-disable max-len */
import {Course, Maybe} from '@client/apollo/schemaTypes';

import { tokens } from './theme';
import { TextFormsType } from './types';

// for testing on test.example.ru instead process.env.NODE_ENV
export function isTestHost() {
    return window.location.host === 'test.example.ru' || window.location.host === 'lk.example.ru';
}

export function validateUrl({ hostname, pathname }: URL): boolean {
    return ((hostname === 'test.example.ru') || (hostname === 'example.ru') || (hostname === 'localhost')) && (pathname !== '/');
}

export function replaceNull(someObj, replaceValue = '') {
    const replacer = (key, value) => (String(value) === 'null' || String(value) === 'undefined'
        ? replaceValue
        : value);
    return JSON.parse(JSON.stringify(someObj, replacer));
}

// Функция склонения окончаний
// titles example: [ день, дня, дней ]
export const declOfNum = (n: Maybe<number> = null, textForms: TextFormsType) => {
    if (n === null) return false;
    if (n % 10 === 1 && n % 100 !== 11) return textForms[0];
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return textForms[1];
    return textForms[2];
};

export function hexToRgbA(hex, opacity = 1) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = `0x${c.join('')}`;
        // eslint-disable-next-line no-bitwise
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255, opacity];
    }
    return hex;
}

export function getStaticMediaWidthNyName(name) {
    return tokens.mediaWidths[name] || 0;
}

export function convertCssRgbA(hex, opacity = 1) {
    const valuesArray = hexToRgbA(hex, opacity);
    if (valuesArray.length === 4) {
        return `rgba(${valuesArray.join(',')})`;
    }
    return hex;
}


export function getLastItemById<T extends { id: string }>(items: T[]): Maybe<T> {
    let maxItemById: Maybe<T> = null;
    items.forEach((item) => {
        const { id } = item;
        const idNumber = +id;
        if (!maxItemById?.id || (maxItemById?.id && idNumber > +maxItemById.id)) {
            maxItemById = item;
        }
    });
    return maxItemById;
}

/**
 * Мапит предметы по переданным полям
 * fields = 'slug' => ['math', 'rus', 'biology', ...]
 * fields = ['slug', 'id'] => {math: 4, rus: 6, biology: 10, ...}
 * fields = ['name', 'slug', 'id', ...] => [
 *  {name: '', slug: '', id: '', ...},
 *  {name: '', slug: '', id: '', ...},
 *  {name: '', slug: '', id: '', ...},
 * ]
 */
export const mapSubjects = (subjects, params) => {
    if (!params || params.length === 0) return subjects;
    const fields = (typeof params === 'string') ? [params] : params;

    switch (fields.length) {
        case 1: {
            const field = fields[0];
            return subjects.map(({ [field]: value }) => value);
        }
        case 2: {
            const [key, value] = fields;
            return subjects.reduce(
                (accum, subject) => ({
                    ...accum,
                    [subject[key]]: subject[value],
                }), {},
            );
        }
        default: {
            return subjects.map(
                subject => fields.reduce(
                    (accum, key) => ({
                        ...accum,
                        [key]: subject[key],
                    }), {},
                ),
            );
        }
    }
};

type Cases = 'nominative' | 'genitive' | 'dative' | 'accusative' | 'instrumental' | 'prepositional';
const slugs = {
    math: {
        nominative: 'Математика',
        genitive: 'Математики',
        dative: 'Математике',
        accusative: 'Математику',
        instrumental: 'Математикой',
        prepositional: 'Математике',
    },
    rus: {
        nominative: 'Русский язык',
        genitive: 'Русского языка',
        dative: 'Русскому языку',
        accusative: 'Русский язык',
        instrumental: 'Русским языком',
        prepositional: 'Русском языке',
    },
    eng: {
        nominative: 'Английский язык',
        genitive: 'Английского языка',
        dative: 'Английскому языку',
        accusative: 'Английский язык',
        instrumental: 'Английским языком',
        prepositional: 'Английском языке',
    },
    chemistry: {
        nominative: 'Химия',
        genitive: 'Химии',
        dative: 'Химии',
        accusative: 'Химию',
        instrumental: 'Химией',
        prepositional: 'Химии',
    },
    physics: {
        nominative: 'Физика',
        genitive: 'Физики',
        dative: 'Физике',
        accusative: 'Физику',
        instrumental: 'Физикой',
        prepositional: 'Физике',
    },
    history: {
        nominative: 'История',
        genitive: 'Истории',
        dative: 'Истории',
        accusative: 'Историю',
        instrumental: 'Историей',
        prepositional: 'Истории',
    },
    literature: {
        nominative: 'Литература',
        genitive: 'Литературы',
        dative: 'Литературе',
        accusative: 'Литературу',
        instrumental: 'Литературой',
        prepositional: 'Литературе',
    },
    socialstudies: {
        nominative: 'Обществознание',
        genitive: 'Обществознания',
        dative: 'Обществознанию',
        accusative: 'Обществознание',
        instrumental: 'Обществознанием',
        prepositional: 'Обществознании',
    },
    informatics: {
        nominative: 'Информатика',
        genitive: 'Информатики',
        dative: 'Информатике',
        accusative: 'Информатику',
        instrumental: 'Информатикой',
        prepositional: 'Информатике',
    },
    biology: {
        nominative: 'Биология',
        genitive: 'Биологии',
        dative: 'Биологии',
        accusative: 'Биологию',
        instrumental: 'Биологией',
        prepositional: 'Биологии',
    },
};
export const slugDeclension = (slug: string, caseName: Cases) => {
    if (slugs[slug][caseName]) {
        return slugs[slug][caseName];
    }
    return 'Предмет';
};
