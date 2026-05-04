/**
 * PROJETS — LCRX Portfolio
 * ─────────────────────────────────────────────────────────────
 * Pour ajouter un projet :
 *   videoUrl : lien YouTube (youtu.be ou youtube.com)
 *   image    : import depuis src/assets/ pour une photo
 *   tag      : badge affiché en haut à droite
 *   label    : sous-titre doré
 *   title    : nom du projet
 *   desc     : courte description
 * ─────────────────────────────────────────────────────────────
 */

const projects = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/embed/GbmzQcnavys?autoplay=1&mute=1&loop=1&playlist=GbmzQcnavys&controls=0&showinfo=0&rel=0',
    image: null,
    placeholder: 'ph-val',
    placeholderIcon: '⛷',
    tag: 'Sport',
    label: 'Station alpine · Vidéo',
    title: "Val d'Isère",
    desc: "Captation immersive des paysages alpins et de l'adrénaline des pistes.",
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/embed/RI_l417Ivdk?autoplay=1&mute=1&loop=1&playlist=RI_l417Ivdk&controls=0&showinfo=0&rel=0',
    image: null,
    placeholder: 'ph-athlete',
    placeholderIcon: '🏃',
    tag: 'Élite',
    label: 'Équipe de France · Photo & Vidéo',
    title: 'Athlètes EDF',
    desc: "Portraits cinématiques d'athlètes de haut niveau en action.",
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/embed/eRGzTBc-fXY?autoplay=1&mute=1&loop=1&playlist=eRGzTBc-fXY&controls=0&showinfo=0&rel=0',
    image: null,
    placeholder: 'ph-marathon',
    placeholderIcon: '🍺',
    tag: 'Event',
    label: 'Saint-Étienne · Reportage',
    title: 'Marathon de la Bière',
    desc: "Ambiance unique, énergie collective, récit visuel d'un événement festif.",
  },
  {
    id: 4,
    videoUrl: 'https://www.youtube.com/embed/LLzeogWUGKw?autoplay=1&mute=1&loop=1&playlist=LLzeogWUGKw&controls=0&showinfo=0&rel=0',
    image: null,
    placeholder: 'ph-event',
    placeholderIcon: '🏃',
    tag: 'Sport',
    label: 'Décathlon Féminin · Championnat du Monde',
    title: 'Équipe de France',
    desc: 'Immersion au cœur du championnat du monde de décathlon féminin.',
  },
];

export default projects;
