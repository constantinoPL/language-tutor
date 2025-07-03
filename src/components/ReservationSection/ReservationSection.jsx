import styles from './ReservationSection.module.css';

export default function ReservationSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Gotowy na przygodę z językiem polskim?<br />
        <span className={styles.subheading}>
          Skontaktuj się ze mną i rozpocznij swoją podróż w świat polskiego języka i kultury!<br />
          Razem osiągniemy Twoje cele!
        </span>
      </h2>
      <div className={styles.buttonsRow}>
        <button className={styles.button + ' ' + styles.left}>Lekcja dla 2 osób<br /><span className={styles.price}>100 zł</span></button>
        <button className={styles.button + ' ' + styles.right}>Lekcja indywidualna<br /><span className={styles.price}>85 zł</span></button>
      </div>
      <div className={styles.centerButtonWrapper}>
        <button className={styles.centerButton}>
          Pierwsza lekcja za darmo!<br />
          <span className={styles.centerButtonSub}>30 minut</span>
        </button>
      </div>
    </section>
  );
}
