import Header from './components/Header/Header'

import './App.css';
import { CalendarContainer } from './components/CalendarContainer/CalendarContainer';
import WhyMeSection from './components/WhyMeSection/WhyMeSection';
import RequirementsSection from './components/RequirementsSection/RequirementsSection';
import LessonsInfoSection from './components/LessonsInfoSection/LessonsInfoSection';
import ReservationSection from './components/ReservationSection/ReservationSection';

function App() {
 

  return (
    <>
      <Header />
      <CalendarContainer />
      <WhyMeSection />
      <RequirementsSection />
      <LessonsInfoSection />
      <ReservationSection />
    </>
  )
}

export default App;
