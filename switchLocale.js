// Récupérer l'URI
const uri = window.location.pathname;

// Récupérer la locale de l'utilisateur
let currentLocale = navigator.language || navigator.userLanguage;

switchLocale = (param) => {
  const currentLocale = sessionStorage.getItem("locale");
  if (currentLocale != param) {
    sessionStorage.setItem("locale", param);
  }
  window.location.reload();
};

const locale =
  sessionStorage.getItem("locale") ||
  (currentLocale.startsWith("fr") ? "fr" : "en");

const flag = document.getElementById(locale);
flag.classList.add("selected");

const translations = {
  en: {
    indexSubtitle: "Constantly seeking optimization",
    indexAboutMe: "About-me",
    indexCompetencies: "My Competencies",
    indexMyWork: "My Work",
    goBack: "Go home",
    aboutMePar1:
      "I will complete my master's degree in computer science on July 31, 2024, and I am currently seeking new opportunities.",
    aboutMePar2:
      "Specializing in web development, particularly Front-end, and also proficient as a Salesforce Technical Consultant. I place great importance on delivering quality work that is well-organized and structured.",
    aboutMePar3:
      "With over 3 years of computing industry experience gained through various internships and apprenticeships across diverse fields.",
    aboutMePar4:
      "Feel free to review my skills and work. If my profile interests you, please contact me on",
    aboutMePar5:
      "Thank you for your attention, and I look forward to hearing from you soon!",
    nurseboardPar1:
      "My final year project focuses on developing a mobile application for independent nurses, aiming to simplify patient management within their teams. In this project, I took full responsibility for the frontend interface development, using React Native technology.",
    nurseboardPar2:
      "The backend, on the other hand, was developed in Java with Spring Boot.",
    nurseboardPar3:
      "Therefore, my role was to design an intuitive and functional user interface while ensuring seamless integration with the backend functionalities to provide a smooth and consistent user experience.",
  },
  fr: {
    indexSubtitle: "En recherche constante d'optimisation",
    indexAboutMe: "À propos de moi",
    indexCompetencies: "Mes compétences",
    indexMyWork: "Mon travail",
    goBack: "Revenir à l'accueil",
    aboutMePar1:
      "Je terminerai mon master en informatique le 31 juillet 2024 et je suis actuellement à la recherche de nouvelles opportunités.",
    aboutMePar2:
      "Spécialisé dans le développement web, en particulier Front-end, et également compétent en tant que consultant technique Salesforce. J'attache une grande importance à fournir un travail de qualité, bien organisé et structuré.",
    aboutMePar3:
      "Avec plus de 3 ans d'expérience dans l'industrie informatique, acquise au cours de divers stages et apprentissages dans des domaines variés.",
    aboutMePar4:
      "N'hésitez pas à consulter mes compétences et mon travail. Si mon profil vous intéresse, n'hésitez pas à me contacter sur",
    aboutMePar5: "Merci de votre attention, et je l'espère, à bientôt!",
    nurseboardPar1:
      "Mon projet de fin d'études se concentre sur le développement d'une application mobile pour les infirmier(es) indépendant(e)s, visant à simplifier la gestion des patients au sein de leurs équipes. Dans ce projet, j'ai pris la responsabilité du développement front-end, en utilisant React Native comme technologie",
    nurseboardPar2: "Le backend, a lui été développé en Java avec Spring Boot.",
    nurseboardPar3:
      "Mon rôle consistait donc à concevoir une interface utilisateur intuitive et fonctionnelle tout en assurant une bonne intégration avec les fonctionnalités du backend afin d'offrir une expérience utilisateur fluide et cohérente.",
  },
};

function applyTranslations(language) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.dataset.translate;
    element.textContent = translations[language][key];
  });
}
applyTranslations(locale);
