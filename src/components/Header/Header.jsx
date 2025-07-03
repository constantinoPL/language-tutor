import tutorPhoto from '../../assets/tutor-photo.jpg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerPhoto}>
        <img src={tutorPhoto} alt="Lektorka języka polskiego" />
      </div>
      <div className={styles.headerText}>
        <h1 className={styles.polishFlagText}>Język polski</h1>
        <h2>
          Przygotowania do egzaminu certyfikatowego na poziomie B1,<br />
          rozmowy na Kartę Polaka, lekcje indywidualne
        </h2>
      </div>
    </header>
  );
}