import React from 'react';
import { Lesson, Maybe } from '@client/apollo/schemaTypes';

const LessonContext = React.createContext<Maybe<Lesson>>(null);

export default LessonContext;
