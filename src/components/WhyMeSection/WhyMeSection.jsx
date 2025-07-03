import styles from './WhyMeSection.module.css';

export default function WhyMeSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Dlaczego warto wybrać moje zajęcia?</h2>
      <ul className={styles.list}>
        <li>
          <strong>Indywidualne podejście</strong><br />
          każdy uczeń jest wyjątkowy, dlatego tworzę lekcje dostosowane do Twoich potrzeb, zainteresowań i stylu nauki. Skupimy się na tym, co dla Ciebie najważniejsze – mówieniu, gramatyce, słownictwie czy pisaniu.
        </li>
        <li>
          <strong>Praktyczne materiały</strong><br />
          korzystam z nowoczesnych i ciekawych materiałów, takich jak filmy, podcasty, teksty kulturowe i interaktywne ćwiczenia. Dzięki temu język polski staje się nie tylko łatwiejszy, ale też przyjemniejszy do nauki.
        </li>
        <li>
          <strong>Efektywna nauka</strong><br />
          z moją pomocą szybko zauważysz postępy! Zadbam o to, abyś nie tylko rozumiał język, ale także czuł się pewnie w codziennych rozmowach i oficjalnych sytuacjach.
        </li>
        <li>
          <strong>Poznanie kultury Polski</strong><br />
          podczas lekcji opowiem Ci o polskich tradycjach, zwyczajach i ciekawostkach, które sprawią, że lepiej zrozumiesz Polskę i jej mieszkańców.
        </li>
      </ul>
    </section>
  );
}
