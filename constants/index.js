const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 6, suffix: "+", label: "Tech Stacks Mastered" },
  { value: 20, suffix: "+", label: "Certificates Earned" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Fokus pada Kualitas",
    desc: "Menghasilkan pekerjaan dengan kualitas tinggi dengan memperhatikan setiap detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Komunikasi yang Andal",
    desc: "Selalu memberikan pembaruan di setiap tahap untuk memastikan transparansi dan kejelasan.",
  },
  {
    imgPath: "/images/time.png",
    title: "Tepat Waktu",
    desc: "Memastikan setiap proyek selesai sesuai jadwal, dengan tetap menjaga kualitas dan perhatian pada detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "NextJS Developer",
    imgPath: "/images/logos/nextjs.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Mobile App Developer",
    imgPath: "/images/logos/react-native.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Ali menunjukkan kemampuan frontend development yang sangat baik dengan memadukan kreativitas dan ketelitian. Ia mampu membangun UI yang rapi, konsisten, serta bekerja efektif dalam tim untuk menyelesaikan proyek real dari perusahaan.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Web Developer Intern",
    date: "February 2024 - June 2024",
    responsibilities: [
      // Proyek e-RPL (Laravel)
      "Mengembangkan aplikasi pendaftaran mahasiswa baru jalur RPL menggunakan Laravel.",
      "Membangun tampilan dashboard sesuai peran pengguna (role-based dashboard).",
      "Menyusun dan mengimplementasikan komponen UI reusable untuk seluruh aplikasi.",

      // Website profil perusahaan (WordPress)
      "Mengelola dan mendesain ulang website profil perusahaan menggunakan WordPress agar lebih modern dan responsif.",
      "Menambahkan halaman baru untuk meningkatkan penyampaian informasi perusahaan.",

      // Proyek Next.js
      "Berkontribusi pada pengembangan aplikasi pendaftaran santri baru berbasis Next.js.",
      "Membuat tampilan halaman alur pendaftaran yang interaktif dan mudah dipahami.",
    ],
  },
  {
    review:
      "Selama PKL di BAPSI Universitas Wiraraja, Ali menunjukkan kemampuan dasar backend development yang solid. Ia cepat memahami alur sistem internal dan mampu membantu tim dalam pengelolaan data pegawai dengan baik.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Backend Web Developer Intern",
    date: "August 2024 - November 2024",
    responsibilities: [
      "Mengelola dan memperbarui data pegawai menggunakan PHP pada sistem internal BAPSI UNIJA.",
      "Menganalisis struktur database dan memastikan konsistensi data saat proses input dan update.",
      "Membantu memperbaiki bug kecil pada modul backend terkait pengolahan data pegawai.",
      "Melakukan dokumentasi sederhana terkait alur data dan proses backend untuk kebutuhan tim BAPSI.",
      "Berkoordinasi dengan staf BAPSI untuk memahami kebutuhan fitur dan memastikan data tersimpan dengan benar.",
    ],
  },
  {
    review:
      "Ali berperan aktif sebagai warga Lab Informatika selama satu tahun. Ia menunjukkan kedisiplinan, inisiatif, dan kemampuan teknis yang baik dalam mendukung operasional laboratorium dan kebutuhan praktikum berbasis web.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo2.png",
    title: "IT Support & Laboratory Assistant – Informatics Lab",
    date: "2023 - 2024",
    responsibilities: [
      "Mengelola dan memelihara perangkat komputer di Laboratorium Informatika.",
      "Melakukan instalasi dan konfigurasi software yang digunakan untuk pemrograman dan pengembangan web.",
      "Membantu troubleshooting dasar terkait jaringan, perangkat, dan sistem yang digunakan saat praktikum.",
      "Mendukung kegiatan praktikum mata kuliah pemrograman dan web development.",
      "Menyiapkan lingkungan kerja untuk bahasa pemrograman dan framework seperti PHP, Laravel, JavaScript, dan MySQL.",
      "Mengatur jadwal penggunaan laboratorium serta membantu dokumentasi teknis operasional lab.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/aly_elhamied/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Alyyy07",
  },
  {
    name: "gitlab",
    imgPath: "/images/gitlab.png",
    url: "https://gitlab.com/alielhamied2",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/muhammad-ali-07b210240/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
