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

    /* --- About Page --- */
    "about.breadcrumb":       "About Me",
    "about.breadcrumb.link":  "About",
    "about.label":            "Who I am",
    "about.role.label":       "Current Role",
    "about.role.value":       "AI & Computer Engineer @",
    "about.location.label":   "Location",
    "about.location.value":   "BTÜ Teknokenti, Bursa, Turkey",
    "about.edu.label":        "Education",
    "about.edu.value":        "Istanbul University (Computer Programming) · 42 School",
    "about.email.label":      "Email",
    "about.lang.label":       "Language",
    "about.lang.value":       "Turkish (Native) · English (B1)",
    "about.desc1":            "I'm an AI & Computer Engineer at AISOFT (BTÜ Teknokenti, Bursa, Turkey), where I build computer vision systems and industrial AI solutions that solve real manufacturing challenges — from automated glass fragmentation analysis to thermal anomaly detection at scale.",
    "about.desc2":            "My foundation comes from 42 School, a peer-to-peer programming institution where I mastered C/C++, Unix system programming, and algorithms entirely through project-based learning. I graduated from Istanbul University's Computer Programming program in 2025 and also completed Google's Artificial Intelligence & Technology Academy.",
    "about.desc3":            "Beyond AI, I'm passionate about IoT, embedded systems, electronics, and entrepreneurship. I served as an assistant evaluator at TEKNOFEST in the Electric Vehicle category, and I've built personal automation systems using Raspberry Pi and ESP32 for fun.",
    "about.cv.btn":           "Download CV",
    "skills.label":           "Technical expertise",
    "skills.title":           "Skills & Tools",
    "skills.prog":            "Programming",
    "skills.ai":              "AI & ML",
    "skills.data":            "Data & DevOps",
    "skills.cert":            "Certificates",
    "about.exp.label":        "My journey",
    "about.exp.title":        "Experience & Education",
    "about.exp.job1.title":   "AI & Computer Engineer",
    "about.exp.job1.date":    "May 2025 — Present · Bursa, Turkey",
    "about.exp.job1.desc":    "Sole engineer behind multiple production-grade industrial AI systems:",
    "about.exp.job1.b1":      "<strong>Thermal Fire Prevention System</strong> — Eren Enerji coal fleet monitoring with thermal cameras. Scans large outdoor areas, detects fire-risk anomalies up to 8 hours before ignition. Real-time alerting infrastructure.",
    "about.exp.job1.b2":      "<strong>AISOFT CCR</strong> — Automated ECE R-43 glass fragmentation analysis (15 min → 1.38 min). In active production at Uğurlu Oto Cam Sanayisi (1.5+ years) and Sercan Cam Sanayisi.",
    "about.exp.job1.b3":      "<strong>Company-wide Monitoring & Container Infrastructure</strong> — Docker-based modular system used across all AISOFT products. Centralized logging, monitoring, and automated alerting.",
    "about.exp.job1.b4":      "<strong>TÜBİTAK 1711</strong> — Micro-level defect segmentation for TOFAS A.Ş. using deep learning models.",
    "about.exp.job1.b5":      "<strong>Architecture & Coding Standards</strong> — Internal error-handling frameworks, naming conventions, and development guidelines adopted company-wide.",
    "about.exp.job2.title":   "AI & Data Scientist (Intern)",
    "about.exp.job2.date":    "Jan — May 2025 · Bursa, Turkey",
    "about.exp.job2.desc":    "During the internship, independently rescued and completed the CCR glass fragmentation project that the company had been unable to deliver for 1.5 years — turning it into a working production system now adopted by multiple glass manufacturers. Also built ML pipelines for object segmentation and anomaly detection.",
    "about.exp.job3.title":   "Software & IoT Developer",
    "about.exp.job3.company": "Independent / Freelance",
    "about.exp.job3.date":    "2018 — Present",
    "about.exp.job3.desc":    "Built embedded systems, IoT solutions, and automation modules. Delivered custom software across multiple industries. Served as assistant evaluator at TEKNOFEST Electric Vehicle category (2024).",
    "about.exp.job4.title":   "Google AI & Technology Academy",
    "about.exp.job4.date":    "2023 — 2024",
    "about.exp.job4.desc":    "Generative AI specialization — Vertex AI Studio, Transformer architectures, BERT. Hands-on text generation and captioning. Also completed Google Project Management Certification.",
    "about.exp.job5.title":   "Software Engineering",
    "about.exp.job5.date":    "2022 — 2025",
    "about.exp.job5.desc":    "Full 42 core curriculum — Libft, Get Next Line, ft_printf, MiniShell, Philosophers, Born2beroot, Push_swap, So_long, Cub3D, NetPractice, Inception, C++ Modules. Peer-to-peer, project-based, no teachers.",
    "about.exp.job6.title":   "Computer Programming",
    "about.exp.job6.date":    "2022 — 2025 · Graduated July 2025",
    "about.exp.job6.desc":    "Associate degree in Computer Programming. Formal education in software development, algorithms, databases, and computer science foundations.",

    /* --- Contact Page --- */
    "contact.breadcrumb":      "Get in Touch",
    "contact.breadcrumb.link": "Contact",
    "contact.widget.loc":      "Location",
    "contact.widget.loc.val":  "AISOFT — BTÜ Teknokenti, Bursa, Turkey",
    "contact.widget.email":    "Email",
    "contact.widget.linkedin": "LinkedIn",
    "contact.panel.title":     "Let's work together",
    "contact.panel.desc":      "I'm open to freelance projects, full-time opportunities, and interesting collaborations. Whether you need a systems programmer, an iOS developer, or just a solid engineer — reach out and let's talk.",
    "contact.panel.linkedin":  "LinkedIn Profile",
    "contact.panel.cv":        "Download CV",
    "contact.form.title":      "Send a Message",
    "contact.form.success":    "Message sent! I'll get back to you soon.",
    "contact.form.error":      "Something went wrong. Please email me directly at talha.muhammed.yayla@gmail.com",
    "contact.form.name":       "Your Name",
    "contact.form.email":      "Your Email",
    "contact.form.subject":    "Subject",
    "contact.form.message":    "Your message...",
    "contact.form.btn":        "Send Message",
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

    /* --- About Sayfası --- */
    "about.breadcrumb":       "Hakkımda",
    "about.breadcrumb.link":  "Hakkımda",
    "about.label":            "Kim Olduğum",
    "about.role.label":       "Mevcut Pozisyon",
    "about.role.value":       "Yapay Zeka & Bilgisayar Mühendisi @",
    "about.location.label":   "Konum",
    "about.location.value":   "BTÜ Teknokenti, Bursa, Türkiye",
    "about.edu.label":        "Eğitim",
    "about.edu.value":        "İstanbul Üniversitesi (Bilgisayar Programcılığı) · 42 School",
    "about.email.label":      "E-posta",
    "about.lang.label":       "Dil",
    "about.lang.value":       "Türkçe (Ana Dil) · İngilizce (B1)",
    "about.desc1":            "AISOFT'ta (BTÜ Teknokenti, Bursa, Türkiye) Yapay Zeka & Bilgisayar Mühendisiyim. Otomatik cam kırılma analizinden ölçeklenebilir termal anomali tespitine kadar gerçek üretim sorunlarını çözen bilgisayarlı görü sistemleri ve endüstriyel yapay zeka çözümleri geliştiriyorum.",
    "about.desc2":            "Temelim 42 School'dan geliyor — tamamen proje tabanlı öğrenmeyle C/C++, Unix sistem programlama ve algoritmaları öğrendiğim bir akran öğrenimi kurumu. 2025'te İstanbul Üniversitesi Bilgisayar Programcılığı bölümünden mezun oldum ve Google Yapay Zeka & Teknoloji Akademisi'ni de tamamladım.",
    "about.desc3":            "Yapay zekanın ötesinde IoT, gömülü sistemler, elektronik ve girişimcilik konularına tutkuyla bağlıyım. TEKNOFEST'te Elektrikli Araç kategorisinde yardımcı değerlendirici olarak görev yaptım; eğlence amaçlı Raspberry Pi ve ESP32 ile kişisel otomasyon sistemleri kurdum.",
    "about.cv.btn":           "CV İndir",
    "skills.label":           "Teknik Uzmanlık",
    "skills.title":           "Beceriler & Araçlar",
    "skills.prog":            "Programlama",
    "skills.ai":              "YZ & ML",
    "skills.data":            "Veri & DevOps",
    "skills.cert":            "Sertifikalar",
    "about.exp.label":        "Yolculuğum",
    "about.exp.title":        "Deneyim & Eğitim",
    "about.exp.job1.title":   "Yapay Zeka & Bilgisayar Mühendisi",
    "about.exp.job1.date":    "Mayıs 2025 — Devam Ediyor · Bursa, Türkiye",
    "about.exp.job1.desc":    "Birden fazla üretim kalitesinde endüstriyel yapay zeka sisteminin tek mühendisi:",
    "about.exp.job1.b1":      "<strong>Termal Yangın Önleme Sistemi</strong> — Termal kameralarla Eren Enerji kömür filosu izleme. Büyük açık alanları tarar, ateşlenmeden 8 saat önce yangın riski anomalilerini tespit eder. Gerçek zamanlı uyarı altyapısı.",
    "about.exp.job1.b2":      "<strong>AISOFT CCR</strong> — Otomatik ECE R-43 cam kırılma analizi (15 dk → 1.38 dk). Uğurlu Oto Cam Sanayisi'nde (1,5+ yıl) ve Sercan Cam Sanayisi'nde aktif üretimde.",
    "about.exp.job1.b3":      "<strong>Şirket Geneli İzleme & Konteyner Altyapısı</strong> — Tüm AISOFT ürünlerinde kullanılan Docker tabanlı modüler sistem. Merkezi loglama, izleme ve otomatik uyarı.",
    "about.exp.job1.b4":      "<strong>TÜBİTAK 1711</strong> — Derin öğrenme modelleri kullanarak TOFAŞ A.Ş. için mikro seviye hata segmentasyonu.",
    "about.exp.job1.b5":      "<strong>Mimari & Kodlama Standartları</strong> — Şirket genelinde benimsenen dahili hata işleme çerçeveleri, adlandırma kuralları ve geliştirme kılavuzları.",
    "about.exp.job2.title":   "Yapay Zeka & Veri Bilimci (Stajyer)",
    "about.exp.job2.date":    "Ocak — Mayıs 2025 · Bursa, Türkiye",
    "about.exp.job2.desc":    "Staj sürecinde, şirketin 1,5 yıldır teslim edemediği CCR cam kırılma projesini bağımsız olarak tamamladım — birden fazla cam üreticisi tarafından benimsenen çalışan bir üretim sistemine dönüştürdüm. Nesne segmentasyonu ve anomali tespiti için ML pipeline'ları da oluşturdum.",
    "about.exp.job3.title":   "Yazılım & IoT Geliştirici",
    "about.exp.job3.company": "Bağımsız / Serbest",
    "about.exp.job3.date":    "2018 — Devam Ediyor",
    "about.exp.job3.desc":    "Gömülü sistemler, IoT çözümleri ve otomasyon modülleri geliştirdim. Birden fazla sektörde özel yazılım teslim ettim. TEKNOFEST Elektrikli Araç kategorisinde yardımcı değerlendirici olarak görev yaptım (2024).",
    "about.exp.job4.title":   "Google YZ & Teknoloji Akademisi",
    "about.exp.job4.date":    "2023 — 2024",
    "about.exp.job4.desc":    "Üretken YZ uzmanlığı — Vertex AI Studio, Transformer mimarileri, BERT. Metin üretimi ve açıklamalarda uygulamalı deneyim. Google Proje Yönetimi Sertifikası da tamamlandı.",
    "about.exp.job5.title":   "Yazılım Mühendisliği",
    "about.exp.job5.date":    "2022 — 2025",
    "about.exp.job5.desc":    "42'nin tam çekirdek müfredatı — Libft, Get Next Line, ft_printf, MiniShell, Philosophers, Born2beroot, Push_swap, So_long, Cub3D, NetPractice, Inception, C++ Modülleri. Akran öğrenimi, proje tabanlı, öğretmen yok.",
    "about.exp.job6.title":   "Bilgisayar Programcılığı",
    "about.exp.job6.date":    "2022 — 2025 · Temmuz 2025'te Mezun",
    "about.exp.job6.desc":    "Bilgisayar Programcılığı ön lisans derecesi. Yazılım geliştirme, algoritmalar, veritabanları ve bilgisayar bilimi temelleri üzerine resmi eğitim.",

    /* --- İletişim Sayfası --- */
    "contact.breadcrumb":      "İletişime Geç",
    "contact.breadcrumb.link": "İletişim",
    "contact.widget.loc":      "Konum",
    "contact.widget.loc.val":  "AISOFT — BTÜ Teknokenti, Bursa, Türkiye",
    "contact.widget.email":    "E-posta",
    "contact.widget.linkedin": "LinkedIn",
    "contact.panel.title":     "Birlikte Çalışalım",
    "contact.panel.desc":      "Freelance projelere, tam zamanlı fırsatlara ve ilginç iş birliklerine açığım. İster bir sistem programcısı, ister iOS geliştirici, isterse güvenilir bir mühendise ihtiyacınız olsun — ulaşın, konuşalım.",
    "contact.panel.linkedin":  "LinkedIn Profili",
    "contact.panel.cv":        "CV İndir",
    "contact.form.title":      "Mesaj Gönder",
    "contact.form.success":    "Mesajınız iletildi! En kısa sürede geri döneceğim.",
    "contact.form.error":      "Bir sorun oluştu. Lütfen doğrudan şu adrese e-posta gönderin: talha.muhammed.yayla@gmail.com",
    "contact.form.name":       "Adınız",
    "contact.form.email":      "E-posta Adresiniz",
    "contact.form.subject":    "Konu",
    "contact.form.message":    "Mesajınız...",
    "contact.form.btn":        "Mesaj Gönder",
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
