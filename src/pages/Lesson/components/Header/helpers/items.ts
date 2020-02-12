/* eslint-disable max-len */
import { PanelItems } from '@client/pages/Lesson/components/Header/components/Panel';
import { Lesson } from '@client/apollo/schemaTypes';
import { isHomeworkAvailable } from '@client/pages/Lesson/components/Main/components/Homework/helpers/isHomevorkAvailable';

export default function generateItems(lesson: Lesson): PanelItems[] {
    const items: PanelItems[] = [
        {
            title: 'Вебинар',
            link: '',
            exact: true,
        },
    ];
    if (lesson.homeworkTemplate && isHomeworkAvailable(lesson, null)) {
        items.push(
            {
                title: 'Домашнее задание',
                link: '/homework',
            },
        );
    }
    return items;
}
