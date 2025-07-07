import styles from './CertificateSection.module.css';

export default function CertificateSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Certyfikat językowy</h2>
      <div className={styles.certificateBlock}>
        <a href={"/assets/cert/Certyfikat%20C1.pdf"} target="_blank" rel="noopener noreferrer" className={styles.certificateLink}>
          Zobacz certyfikat (PDF)
        </a>
      </div>
    </section>
  );
}
