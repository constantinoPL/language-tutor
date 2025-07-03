import styles from './LessonsInfoSection.module.css';

export default function LessonsInfoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.splitContainer}>
        <div className={styles.block}>
          <h3 className={styles.heading}>Jak wyglądają lekcje?</h3>
          <ul className={styles.list}>
            <li><strong>Online:</strong> Elastyczność to podstawa!</li>
            <li><strong>Czas trwania lekcji:</strong> Standardowe lekcje trwają 60 minut, ale możemy dostosować ich długość do Twoich potrzeb.</li>
            <li><strong>Metody nauczania:</strong> Rozmowy, ćwiczenia, gry językowe – wszystko, co sprawi, że nauka będzie skuteczna i angażująca.</li>
          </ul>
        </div>
        <div className={styles.block}>
          <h3 className={styles.heading}>W jakiej sytuacji możesz do mnie się zwrócić?</h3>
          <ul className={styles.list}>
            <li>Przeprowadzasz się do Polski i zaczynasz naukę polskiego od podstaw</li>
            <li>Już mówisz po polski, ale nadal nie masz pewności używając końcówek i czasów</li>
            <li>Masz mały zasób słownictwa i to nie pozwala Ci uczestniczyć w rozmowach</li>
            <li>Starasz się o Kartę Polaka  lub stały pobyt po pochodzeniu i szykujesz się do rozmowy</li>
            <li>Przed Tobą egzamin certyfikatowy z języka polskiego na poziomie B1</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
