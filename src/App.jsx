import Header from './components/Header/Header'

import './App.css';
import { CalendarContainer } from './components/CalendarContainer/CalendarContainer';
import WhyMeSection from './components/WhyMeSection/WhyMeSection';
import RequirementsSection from './components/RequirementsSection/RequirementsSection';
import LessonsInfoSection from './components/LessonsInfoSection/LessonsInfoSection';
import ReservationSection from './components/ReservationSection/ReservationSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';

function App() {
 

  return (
    <>
      <Header />
      <CalendarContainer />
      <WhyMeSection />
      <RequirementsSection />
      <TestimonialsSection />
      <LessonsInfoSection />
      <ReservationSection />
    </>
  )
}

export default App;
