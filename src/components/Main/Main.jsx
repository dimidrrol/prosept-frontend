import './Main.scss';
import React from 'react';
import WorkingZone from '../WorkingZone/WorkingZone';
import { useGetMatchesQuery } from '../../store/api/cards.api';
import Menu from '../Menu/Menu';

export default function Main() {
    const { data } = useGetMatchesQuery(null, {});

    return (
        <main className='main'>
            {
                data ?
                    <>
                        <Menu />
                        <WorkingZone />
                    </> :
                    <div>Произошла ошибка</div>
            }
        </main>
    )
}