import React from 'react';
import { AvatarBlock, Skeleton } from '@client/ui/components';
import { Maybe, Users } from '@client/apollo/schemaTypes';
import {
    InfoRoot,
} from './styled';

export interface InfoProps {
    title?: Maybe<string>;
    teacher?: Maybe<Users>;
}

function Info({ title = '', teacher }: InfoProps): React.ReactElement {
    let showSkeleton = true;
    const name = teacher?.name || null;
    const avatar = teacher?.avatar || null;
    const description = teacher?.teacher?.description || null;

    if (title && teacher) {
        showSkeleton = false;
    }

    return (
        <InfoRoot>
            <div>
                {!showSkeleton ? (
                    <>
                        <h4>
                            {title}
                        </h4>

                        <div>
                            <AvatarBlock
                                name={name}
                                img={avatar}
                            />
                            {
                                description
                                    ? <p>{description}</p>
                                    : <p>Разработчик курса, наставник</p>
                            }
                        </div>
                    </>
                ) : (
                    <>
                        <Skeleton loading active />
                        <Skeleton avatar loading active />
                    </>
                )}
            </div>
        </InfoRoot>
    );
}

export default Info;
