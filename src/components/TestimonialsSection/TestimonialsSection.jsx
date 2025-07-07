import styles from './TestimonialsSection.module.css';

import review1 from '../../assets/testimonials/Zrzut ekranu 2025-07-04 175630.png';
import review2 from '../../assets/testimonials/Zrzut ekranu 2025-07-04 175702.png';
import review3 from '../../assets/testimonials/Zrzut ekranu 2025-07-04 175809.png';
import review4 from '../../assets/testimonials/Zrzut ekranu 2025-07-04 175928.png';
import review5 from '../../assets/testimonials/Zrzut ekranu 2025-07-04 175941.png';
import review6 from '../../assets/testimonials/Zrzut ekranu 2025-07-04 180113.png';
import review7 from '../../assets/testimonials/Zrzut ekranu 2025-07-04 180126.png';
import review8 from '../../assets/testimonials/Zrzut ekranu 2025-07-04 180344.png';
import review9 from '../../assets/testimonials/Zrzut ekranu 2025-07-04 180525.png';

const reviews = [
  { img: review1, alt: 'Opinia klienta 1' },
  { img: review2, alt: 'Opinia klienta 2' },
  { img: review3, alt: 'Opinia klienta 3' },
  { img: review4, alt: 'Opinia klienta 4' },
  { img: review5, alt: 'Opinia klienta 5' },
  { img: review6, alt: 'Opinia klienta 6' },
  { img: review7, alt: 'Opinia klienta 7' },
  { img: review8, alt: 'Opinia klienta 8' },
  { img: review9, alt: 'Opinia klienta 9' },
];

import { useState } from 'react';

export default function TestimonialsSection() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Opinie uczniów</h2>
      <div className={styles.reviewsRow}>
        {reviews.map((r, i) => (
          <div className={styles.reviewCard} key={i}>
            <img
              src={r.img}
              alt={r.alt}
              className={styles.reviewImg}
              onClick={() => setModalImg(r.img)}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        ))}
      </div>
      {modalImg && (
        <div className={styles.modalOverlay} onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Podgląd opinii" className={styles.modalImg} />
        </div>
      )}
    </section>
  );
}
