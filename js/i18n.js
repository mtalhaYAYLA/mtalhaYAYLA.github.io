/* =============================================
   i18n — Bilingual Support (EN / TR)
   All site text lives here.
   To update: change the text in en or tr block.
   Both languages update automatically.
   ============================================= */

const translations = {
  en: {
    /* --- Navigation --- */
    "nav.home":    "Home",
    "nav.about":   "About",
    "nav.contact": "Contact",

    /* --- Hero --- */
    "hero.slide1.span": "AI & Computer Engineer · AISOFT · 42 School",
    "hero.slide1.h2":   "Muhammed Talha Yayla",
    "hero.slide1.btn1": "Get in touch",
    "hero.slide1.btn2": "Download CV",
    "hero.slide2.span": "Computer Vision · Deep Learning · Industrial AI",
    "hero.slide2.h2":   "Building AI systems that solve real industrial problems",
    "hero.slide2.btn1": "View GitHub",

    /* --- Tech Stack --- */
    "tech.label":   "What I work with",
    "tech.title":   "Tech Stack",
    "tech.desc":    "I build AI-powered systems and industrial software — from computer vision models for defect detection to embedded IoT solutions and low-level systems programming in C/C++.",
    "tech.cta":     "Let's work together",
    "tech.cv.title":  "AI & Computer Vision",
    "tech.cv.desc":   "TensorFlow, PyTorch, Hugging Face, deep learning for defect detection, anomaly detection, and industrial quality control. TÜBİTAK-level R&D experience.",
    "tech.sys.title": "Systems Programming",
    "tech.sys.desc":  "C (Senior), C++, Python — memory management, Unix system calls, algorithms, and data structures built from scratch through 42 School's rigorous curriculum.",
    "tech.data.title":"Data & Infrastructure",
    "tech.data.desc": "Docker, Apache Spark, Apache NiFi, PostgreSQL, Linux. Designed modular containerized infrastructures for deployment, monitoring, and automated alerting.",
    "tech.iot.title": "IoT & Embedded Systems",
    "tech.iot.desc":  "Raspberry Pi, ESP32, real-time sensor integration, home automation, and custom firmware. Building end-to-end IoT solutions from hardware to cloud.",

    /* --- Experience --- */
    "exp.label": "Where I've been",
    "exp.title": "Experience & Education",

    "exp.job1.title":   "AI & Computer Engineer",
    "exp.job1.company": "AISOFT",
    "exp.job1.date":    "May 2025 — Present · Bursa, Turkey",
    "exp.job1.desc":    "Sole engineer behind multiple production-grade industrial AI systems: <strong style='color:#fff;'>Thermal Fire Prevention System</strong> (Eren Enerji coal fleets — thermal camera scanning of large outdoor areas, detects fire anomalies up to 8 hours in advance); <strong style='color:#fff;'>AISOFT CCR</strong> (ECE R-43 glass fragmentation analysis adopted by Uğurlu Oto Cam and Sercan Cam Sanayisi — live in production for 1.5+ years); company-wide <strong style='color:#fff;'>Monitoring & Container Infrastructure</strong> (Docker-based, used across all AISOFT products); <strong style='color:#fff;'>TÜBİTAK 1711</strong> micro-level defect segmentation for TOFAS A.Ş.",

    "exp.job2.title":   "AI & Data Scientist (Intern)",
    "exp.job2.company": "AISOFT",
    "exp.job2.date":    "Jan — May 2025 · Bursa, Turkey",
    "exp.job2.desc":    "During the internship, independently rescued and completed the CCR glass fragmentation project that the company had struggled with for 1.5 years — delivering a fully working system that has since been adopted by multiple glass manufacturers. Built ML pipelines for object segmentation and anomaly detection.",

    "exp.job3.title":   "Google Artificial Intelligence & Technology Academy",
    "exp.job3.company": "Google",
    "exp.job3.date":    "2023 — 2024",
    "exp.job3.desc":    "Specialized in Generative AI — Vertex AI Studio, Transformer architectures, BERT. Hands-on experience in text generation and captioning. Completed Google Project Management Certification alongside.",

    "exp.job4.title":   "Software Engineering",
    "exp.job4.company": "42 School (École 42)",
    "exp.job4.date":    "2022 — 2025",
    "exp.job4.desc":    "Completed the full 42 core curriculum through peer-to-peer learning — no teachers, no lectures, only projects. Built everything from scratch in C and C++: Libft, ft_printf, MiniShell, Philosophers, Cub3D, Inception, and C++ Modules.",

    "exp.job5.title":   "Computer Programming",
    "exp.job5.company": "Istanbul University",
    "exp.job5.date":    "2022 — 2025 (Graduated July 2025)",
    "exp.job5.desc":    "Associate degree in Computer Programming. Foundational education in software development, algorithms, and computer science concepts.",

    /* --- Portfolio --- */
    "port.item1.title": "AISOFT CCR",
    "port.item2.title": "Thermal Fire Prevention",
    "port.item3.title": "Monitoring Infrastructure",
    "port.item4.title": "MiniShell",
    "port.item5.title": "Home Automation",
    "port.item6.title": "TÜBİTAK 1711",

    /* --- GitHub Stats --- */
    "github.label": "Open source activity",
    "github.title": "GitHub Stats",
    "github.btn":   "View GitHub Profile",

    /* --- Call To Action --- */
    "cta.title": "Open to new opportunities and freelance AI projects.",
    "cta.sub":   "AI & Computer Engineer · Bursa, Turkey · Available for remote work",
    "cta.btn":   "Get in touch",

    /* --- Footer --- */
    "footer.about.title": "About",
    "footer.about.desc":  "AI & Computer Engineer at AISOFT, 42 School alumni, and Istanbul University graduate. Building computer vision systems, industrial AI solutions, and IoT automation from Turkey.",
    "footer.nav.title":   "Navigation",
    "footer.contact.title": "Contact",
    "footer.contact.cv":  "Download CV",
    "footer.copyright":   "All rights reserved.",
  },

  tr: {
    /* --- Navigasyon --- */
    "nav.home":    "Ana Sayfa",
    "nav.about":   "Hakkımda",
    "nav.contact": "İletişim",

    /* --- Hero --- */
    "hero.slide1.span": "Yapay Zeka & Bilgisayar Mühendisi · AISOFT · 42 School",
    "hero.slide1.h2":   "Muhammed Talha Yayla",
    "hero.slide1.btn1": "İletişime Geç",
    "hero.slide1.btn2": "CV İndir",
    "hero.slide2.span": "Bilgisayarlı Görü · Derin Öğrenme · Endüstriyel Yapay Zeka",
    "hero.slide2.h2":   "Gerçek endüstriyel sorunları çözen yapay zeka sistemleri inşa ediyorum",
    "hero.slide2.btn1": "GitHub'ı İncele",

    /* --- Tech Stack --- */
    "tech.label":   "Çalıştığım Teknolojiler",
    "tech.title":   "Teknoloji Yığını",
    "tech.desc":    "Hata tespiti için bilgisayarlı görü modellerinden gömülü IoT çözümlerine ve C/C++ ile düşük seviyeli sistem programlamaya kadar yapay zeka destekli sistemler ve endüstriyel yazılımlar geliştiriyorum.",
    "tech.cta":     "Birlikte Çalışalım",
    "tech.cv.title":  "Yapay Zeka & Bilgisayarlı Görü",
    "tech.cv.desc":   "TensorFlow, PyTorch, Hugging Face — hata tespiti, anomali algılama ve endüstriyel kalite kontrolü için derin öğrenme. TÜBİTAK düzeyinde Ar-Ge deneyimi.",
    "tech.sys.title": "Sistem Programlama",
    "tech.sys.desc":  "C (Kıdemli), C++, Python — bellek yönetimi, Unix sistem çağrıları, algoritmalar ve veri yapıları. 42 School'un zorlu müfredatıyla sıfırdan inşa edildi.",
    "tech.data.title":"Veri & Altyapı",
    "tech.data.desc": "Docker, Apache Spark, Apache NiFi, PostgreSQL, Linux. Dağıtım, izleme ve otomatik uyarı için modüler konteyner altyapıları tasarlandı.",
    "tech.iot.title": "IoT & Gömülü Sistemler",
    "tech.iot.desc":  "Raspberry Pi, ESP32, gerçek zamanlı sensör entegrasyonu, ev otomasyonu ve özel firmware. Donanımdan buluta uçtan uca IoT çözümleri.",

    /* --- Deneyim --- */
    "exp.label": "Nerede Bulundum",
    "exp.title": "Deneyim & Eğitim",

    "exp.job1.title":   "Yapay Zeka & Bilgisayar Mühendisi",
    "exp.job1.company": "AISOFT",
    "exp.job1.date":    "Mayıs 2025 — Devam Ediyor · Bursa, Türkiye",
    "exp.job1.desc":    "Birden fazla üretim kalitesinde endüstriyel yapay zeka sisteminin tek mühendisi: <strong style='color:#fff;'>Termal Yangın Önleme Sistemi</strong> (Eren Enerji kömür filoları — büyük açık alanların termal kamera taraması, yangın anomalilerini 8 saat önceden tespit eder); <strong style='color:#fff;'>AISOFT CCR</strong> (ECE R-43 cam kırılma analizi — Uğurlu Oto Cam ve Sercan Cam Sanayisi tarafından 1,5+ yıldır kullanımda); şirket genelinde <strong style='color:#fff;'>İzleme & Konteyner Altyapısı</strong> (Docker tabanlı, tüm AISOFT ürünlerinde kullanılıyor); <strong style='color:#fff;'>TÜBİTAK 1711</strong> TOFAŞ A.Ş. için mikro seviye hata segmentasyonu.",

    "exp.job2.title":   "Yapay Zeka & Veri Bilimci (Stajyer)",
    "exp.job2.company": "AISOFT",
    "exp.job2.date":    "Ocak — Mayıs 2025 · Bursa, Türkiye",
    "exp.job2.desc":    "Staj sürecinde, şirketin 1,5 yıldır çözemediği CCR cam kırılma projesini bağımsız olarak tamamladım — birden fazla cam üreticisi tarafından benimsenen tam işlevli bir sistem teslim ettim. Nesne segmentasyonu ve anomali tespiti için ML pipeline'ları oluşturdum.",

    "exp.job3.title":   "Google Yapay Zeka & Teknoloji Akademisi",
    "exp.job3.company": "Google",
    "exp.job3.date":    "2023 — 2024",
    "exp.job3.desc":    "Üretken Yapay Zeka alanında uzmanlaşma — Vertex AI Studio, Transformer mimarileri, BERT. Metin üretimi ve açıklamalarda uygulamalı deneyim. Google Proje Yönetimi Sertifikası da tamamlandı.",

    "exp.job4.title":   "Yazılım Mühendisliği",
    "exp.job4.company": "42 School (École 42)",
    "exp.job4.date":    "2022 — 2025",
    "exp.job4.desc":    "Akran öğrenimi yoluyla 42'nin tam çekirdek müfredatını tamamladım — öğretmen yok, ders yok, yalnızca projeler. C ve C++ ile sıfırdan her şeyi inşa ettim: Libft, ft_printf, MiniShell, Philosophers, Cub3D, Inception ve C++ Modülleri.",

    "exp.job5.title":   "Bilgisayar Programcılığı",
    "exp.job5.company": "İstanbul Üniversitesi",
    "exp.job5.date":    "2022 — 2025 (Temmuz 2025'te Mezun)",
    "exp.job5.desc":    "Bilgisayar Programcılığı ön lisans derecesi. Yazılım geliştirme, algoritmalar ve bilgisayar bilimi kavramlarında temel eğitim.",

    /* --- Portföy --- */
    "port.item1.title": "AISOFT CCR",
    "port.item2.title": "Termal Yangın Önleme",
    "port.item3.title": "İzleme Altyapısı",
    "port.item4.title": "MiniShell",
    "port.item5.title": "Ev Otomasyonu",
    "port.item6.title": "TÜBİTAK 1711",

    /* --- GitHub İstatistikleri --- */
    "github.label": "Açık kaynak aktivitesi",
    "github.title": "GitHub İstatistikleri",
    "github.btn":   "GitHub Profilini Görüntüle",

    /* --- Eylem Çağrısı --- */
    "cta.title": "Yeni fırsatlara ve serbest yapay zeka projelerine açığım.",
    "cta.sub":   "Yapay Zeka & Bilgisayar Mühendisi · Bursa, Türkiye · Uzaktan çalışmaya uygun",
    "cta.btn":   "İletişime Geç",

    /* --- Footer --- */
    "footer.about.title": "Hakkımda",
    "footer.about.desc":  "AISOFT'ta Yapay Zeka & Bilgisayar Mühendisi, 42 School mezunu ve İstanbul Üniversitesi mezunu. Türkiye'den bilgisayarlı görü sistemleri, endüstriyel yapay zeka çözümleri ve IoT otomasyonu geliştiriyorum.",
    "footer.nav.title":   "Navigasyon",
    "footer.contact.title": "İletişim",
    "footer.contact.cv":  "CV İndir",
    "footer.copyright":   "Tüm hakları saklıdır.",
  }
};

/* =============================================
   Core i18n engine
   ============================================= */
function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  /* Update lang toggle button label */
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? 'TR' : 'EN';

  /* Save preference */
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
}

function toggleLang() {
  const current = localStorage.getItem('lang') || 'en';
  applyLang(current === 'en' ? 'tr' : 'en');
}

/* Auto-apply on page load */
document.addEventListener('DOMContentLoaded', function () {
  const saved = localStorage.getItem('lang') || 'en';
  applyLang(saved);
});
