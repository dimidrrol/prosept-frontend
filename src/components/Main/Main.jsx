import './Main.scss';
import WorkingZone from '../WorkingZone/WorkingZone';
import Menu from '../Menu/Menu';

export default function Main({ data }) {
    return (
        <main className='main'>
            {
                (data && data.length > 0) ?
                    <>
                        <Menu />
                        <WorkingZone />
                    </> :
                    <div className='main__error'>Произошла ошибка на сервере. Попробуйте позже.</div>
            }
        </main>
    )
}