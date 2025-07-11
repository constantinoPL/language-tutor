import styles from './CertificateSection.module.css';

export default function CertificateSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Certyfikat językowy</h2>
      <div className={styles.certificateBlock}>
        <a href="/assets/cert/Certyfikat%20C1.pdf" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/cert/Certyfikat_C1_thumb.jpg"
            alt="Certyfikat językowy miniatura"
            className={styles.certificateThumb}
          />
        </a>
      </div>
    </section>
  );
}
