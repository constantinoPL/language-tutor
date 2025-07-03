import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import styles from './CalendarContainer.module.css';

const CalendarContainer = () => {
    return (
        <div className={styles.calendarContainer}>
            <div className={styles.calendarText}>
                Cześć! Poznaj swojego korepetytora języka polskiego jako obcego
                Nazywam się Natalia, moja przygoda z językiem polskim zaczęła się wiele lat temu w dalekim 1995r., kiedy 
                od 2016 roku mieszkam w Polsce, a nauczanie języka polskiego to moja pasja! Właśnie dlatego od 6 lat 
                pomagam uczniom odkryć tajemnice polskiego języka, kultury i obyczajów. Niezależnie od Twojego poziomu 
                – od początkującego do zaawansowanego – wspólnie osiągniemy Twoje cele językowe!
            </div>
            <Calendar />
        </div>
    )
}

export {CalendarContainer}; 