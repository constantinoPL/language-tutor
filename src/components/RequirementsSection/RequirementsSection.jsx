import styles from './RequirementsSection.module.css';
import teacherImg from '../../assets/tutor-photo.jpg';
import laptopImg from '../../assets/laptop.png';
import notebookImg from '../../assets/notebook.png';
import clockImg from '../../assets/clock.png';
import starImg from '../../assets/star.png';

export default function RequirementsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>czego potrzebujesz, żeby zacząć lekcje</h2>
      <div className={styles.iconsRow}>
        <div className={styles.iconItem}>
          <div className={styles.iconCircle}>
            <img src={teacherImg} alt="Ja" className={styles.iconImg} />
          </div>
          <div className={styles.caption}>Ja</div>
        </div>
        <div className={styles.iconItem}>
          <div className={styles.iconCircle} style={{ background: '#e0e7ff' }}>
            <img src={laptopImg} alt="komputer" className={styles.iconImg} />
          </div>
          <div className={styles.caption}>komputer</div>
        </div>
        <div className={styles.iconItem}>
          <div className={styles.iconCircle} style={{ background: '#fffbe7' }}>
            <img src={notebookImg} alt="тетрадь с ручкой" className={styles.iconImg} />
          </div>
          <div className={styles.caption}>zeszyt i długopis</div>
        </div>
        <div className={styles.iconItem}>
          <div className={styles.iconCircle} style={{ background: '#e0f7fa' }}>
            <img src={clockImg} alt="время" className={styles.iconImg} />
          </div>
          <div className={styles.caption}>czas</div>
        </div>
        <div className={styles.iconItem}>
          <div className={styles.iconCircle} style={{ background: '#f28482' }}>
            <img src={starImg} alt="желание" className={styles.iconImg} />
          </div>
          <div className={styles.caption}>chęć</div>
        </div>
      </div>
    </section>
  );
}
