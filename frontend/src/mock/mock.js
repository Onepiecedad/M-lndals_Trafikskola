// Mock data for Mölndals Trafikskola clone
// All prices and contact info taken from the real website for authenticity

export const contact = {
  name: "Mölndals Trafikskola",
  tagline_sv: "Utbildat förare sedan 1935",
  tagline_en: "Training drivers since 1935",
  address: "Tempelgatan 1E, 431 30 Mölndal",
  phone: "0723-871829",
  phoneHref: "tel:+46723871829",
  email: "info@molndalstrafikskola.se",
  swish: "123-237-08 23",
  bankgiro: "781-7448",
  mapQuery: "Tempelgatan 1E, Mölndal",
  hours_sv: [
    { day: "Måndag – Torsdag", time: "08:00 – 18:00" },
    { day: "Fredag", time: "08:00 – 16:00" },
    { day: "Lördag", time: "Efter överenskommelse" },
    { day: "Söndag", time: "Stängt" },
  ],
  hours_en: [
    { day: "Monday – Thursday", time: "08:00 – 18:00" },
    { day: "Friday", time: "08:00 – 16:00" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const stats = [
  { value: "90+", label_sv: "Års erfarenhet", label_en: "Years of experience" },
  { value: "12 000+", label_sv: "Utbildade förare", label_en: "Trained drivers" },
  { value: "98%", label_sv: "Nöjda elever", label_en: "Satisfied students" },
  { value: "B · B96 · BE", label_sv: "Behörigheter", label_en: "Licenses" },
];

export const packages = [
  {
    id: "start",
    name_sv: "Startpaket",
    name_en: "Starter Package",
    price: "12 740",
    popular: false,
    includes_sv: [
      "Inskrivning",
      "10 körlektioner",
      "Risk 1 (Riskettan)",
      "Risk 2 (Halkan)",
      "Teori online via Elevcentralen",
    ],
    includes_en: [
      "Enrollment",
      "10 driving lessons",
      "Risk 1",
      "Risk 2",
      "Online theory via Student Center",
    ],
  },
  {
    id: "m",
    name_sv: "Paket M",
    name_en: "Package M",
    price: "14 040",
    popular: false,
    includes_sv: [
      "Inskrivning",
      "15 körlektioner",
      "Risk 1 (Riskettan)",
      "Teori online via Elevcentralen",
    ],
    includes_en: [
      "Enrollment",
      "15 driving lessons",
      "Risk 1",
      "Online theory via Student Center",
    ],
  },
  {
    id: "intensive",
    name_sv: "Intensivkurs",
    name_en: "Intensive Course",
    price: "18 400",
    popular: false,
    includes_sv: [
      "Inskrivning",
      "20 körlektioner",
      "Risk 1 (Riskettan)",
      "Teori online via Elevcentralen",
    ],
    includes_en: [
      "Enrollment",
      "20 driving lessons",
      "Risk 1",
      "Online theory via Student Center",
    ],
  },
  {
    id: "gold",
    name_sv: "Guldpaket",
    name_en: "Gold Package",
    price: "21 000",
    popular: true,
    includes_sv: [
      "Inskrivning",
      "20 körlektioner",
      "Risk 1 (Riskettan)",
      "Risk 2 (Halkan)",
      "Teori online via Elevcentralen",
      "Uppkörningslån av bil ingår",
    ],
    includes_en: [
      "Enrollment",
      "20 driving lessons",
      "Risk 1",
      "Risk 2",
      "Online theory via Student Center",
      "Driving test car included",
    ],
  },
];

export const lessons = [
  { qty_sv: "1 körlektion", qty_en: "1 lesson", dur: "55 min", price: "860" },
  { qty_sv: "5 körlektioner", qty_en: "5 lessons", dur: "55 min", price: "4 275" },
  { qty_sv: "10 körlektioner", qty_en: "10 lessons", dur: "55 min", price: "8 500" },
  { qty_sv: "20 körlektioner", qty_en: "20 lessons", dur: "55 min", price: "16 700" },
  { qty_sv: "BE / B96 lektion", qty_en: "BE / B96 lesson", dur: "110 min", price: "1 800" },
  { qty_sv: "Bil + släp uppkörning", qty_en: "Car + trailer for test", dur: "+ 60 min uppvärmning", price: "2 800" },
];

export const courses = [
  {
    id: "risk1",
    name_sv: "Risk 1 – Riskettan",
    name_en: "Risk 1",
    price: "550",
    oldPrice: "700",
    duration: "3h",
    desc_sv: "Obligatorisk riskutbildning om alkohol, droger, trötthet och riskbeteende.",
    desc_en: "Mandatory risk training covering alcohol, drugs, fatigue and risk behaviour.",
  },
  {
    id: "risk1en",
    name_sv: "Risk 1 – Engelska",
    name_en: "Risk 1 – English",
    price: "650",
    oldPrice: "750",
    duration: "3h",
    desc_sv: "Riskutbildning 1 genomförs på engelska för utländska elever.",
    desc_en: "Risk 1 training held in English for international students.",
  },
  {
    id: "handledar",
    name_sv: "Handledarkurs",
    name_en: "Tutor Course",
    price: "350",
    oldPrice: "500",
    duration: "3h",
    desc_sv: "Introduktionsutbildning för privat övningskörning – obligatorisk för handledare och elev.",
    desc_en: "Introduction course for private practice driving – mandatory for tutor and student.",
  },
  {
    id: "risk2",
    name_sv: "Risk 2 – Halkan",
    name_en: "Risk 2",
    price: "2 300",
    oldPrice: null,
    duration: "4h",
    desc_sv: "Halkbana – praktisk riskutbildning för inskrivna elever.",
    desc_en: "Skid pad – practical risk training for enrolled students.",
  },
  {
    id: "syntest",
    name_sv: "Syntest",
    name_en: "Eye Examination",
    price: "150",
    oldPrice: null,
    duration: "10 min",
    desc_sv: "Syntest inför körkort – genomförs direkt efter kurs.",
    desc_en: "Eye examination for driver's license – performed right after class.",
  },
  {
    id: "books",
    name_sv: "Bokpaket",
    name_en: "Book Package",
    price: "650",
    oldPrice: null,
    duration: "—",
    desc_sv: "Körkortsbok, körhäfte, vägmärken, vägmarkeringar och skyltprov.",
    desc_en: "Driver's book, driving booklet, road signs, markings & test.",
  },
];

export const instructors = [
  {
    name: "Anders Lindqvist",
    role_sv: "Huvudlärare · B · BE",
    role_en: "Head Instructor · B · BE",
    years: 22,
    image: "https://images.unsplash.com/photo-1630406144797-821be1f35d75?w=800&q=90",
  },
  {
    name: "Sara Bergman",
    role_sv: "Trafiklärare · B · B96",
    role_en: "Driving Instructor · B · B96",
    years: 14,
    image: "https://images.unsplash.com/photo-1667020854803-0305af085242?w=800&q=90",
  },
  {
    name: "Mikael Ström",
    role_sv: "Trafiklärare · Manuell & Automat",
    role_en: "Instructor · Manual & Automatic",
    years: 18,
    image: "https://images.unsplash.com/photo-1516862523118-a3724eb136d7?w=800&q=90",
  },
];

export const testimonials = [
  {
    name: "Emma Karlsson",
    city: "Mölndal",
    text_sv: "Tog körkortet på första försöket tack vare Anders pedagogiska körning. Helt enkelt bäst i Göteborgsområdet.",
    text_en: "Passed on my first try thanks to Anders' calm teaching. Simply the best in the Gothenburg area.",
    image: "https://images.unsplash.com/photo-1578041262130-633307b3bfd6?w=400&q=90",
    rating: 5,
  },
  {
    name: "Jonas Svensson",
    city: "Göteborg",
    text_sv: "Guldpaketet var värt varenda krona. Professionellt bemötande från start till uppkörning.",
    text_en: "The gold package was worth every krona. Professional service from day one to the driving test.",
    image: "https://images.pexels.com/photos/9518030/pexels-photo-9518030.jpeg?auto=compress&w=400",
    rating: 5,
  },
  {
    name: "Linnea Holm",
    city: "Kållered",
    text_sv: "Bytte från en annan skola och märkte direkt skillnaden. Moderna bilar, trevliga lärare och tydlig planering.",
    text_en: "Switched from another school and saw the difference immediately. Modern cars, friendly instructors, clear planning.",
    image: "https://images.unsplash.com/photo-1593035013811-2db9b3c36980?w=400&q=90",
    rating: 5,
  },
];

export const faqs = [
  {
    q_sv: "Hur lång tid tar det att ta körkort?",
    q_en: "How long does it take to get a driver's license?",
    a_sv: "I snitt 3–6 månader beroende på förkunskap och tid du lägger på övningskörning. Med vårt Intensivpaket kan du ta körkortet på så lite som 4 veckor.",
    a_en: "On average 3–6 months depending on experience and time spent practicing. With our Intensive Package you can get your license in as little as 4 weeks.",
  },
  {
    q_sv: "Kan jag köra automat istället för manuell?",
    q_en: "Can I learn on automatic instead of manual?",
    a_sv: "Absolut. Vi erbjuder både manuella och automatiska bilar. Ett automat-körkort är snabbare att ta men begränsar dig till automatiska bilar.",
    a_en: "Absolutely. We offer both manual and automatic cars. An automatic license is quicker but limits you to automatic vehicles.",
  },
  {
    q_sv: "Vad ingår i paketen?",
    q_en: "What's included in the packages?",
    a_sv: "Alla paket inkluderar inskrivning, körlektioner, Risk 1 samt teori online via Elevcentralen. Guldpaketet och Startpaketet innehåller även Risk 2 (halkbana).",
    a_en: "All packages include enrollment, driving lessons, Risk 1 and online theory. Gold and Starter packages also include Risk 2 (skid pad).",
  },
  {
    q_sv: "Hur lång är giltigheten på presentkort och lektioner?",
    q_en: "How long are gift cards and lessons valid?",
    a_sv: "Presentkort, körlektioner och paket är giltiga i 2 år från betalningsdatum.",
    a_en: "Gift cards, driving lessons and packages are valid for 2 years from the date of payment.",
  },
  {
    q_sv: "När måste jag betala för Risk 1 och Handledarkurs?",
    q_en: "When must I pay for Risk 1 and Tutor Course?",
    a_sv: "Senast 48 timmar innan kursstart. Avbokning sker senast 24 timmar innan kurs.",
    a_en: "No later than 48 hours before the course starts. Cancellations must be made at least 24 hours in advance.",
  },
  {
    q_sv: "Kan jag låna bil vid uppkörning?",
    q_en: "Can I rent a car for the driving test?",
    a_sv: "Ja, det kostar 1 600 kr och inkluderar ca 40 minuters uppvärmning samt genomgång av säkerhetskontroll.",
    a_en: "Yes, SEK 1 600 which includes around 40 minutes of warm-up and a safety check review.",
  },
];

export const offers = [
  { sv: "Handledarkurs 350 kr (ord 500)", en: "Tutor course SEK 350 (reg. 500)" },
  { sv: "Riskettan 550 kr (ord 700)", en: "Risk 1 SEK 550 (reg. 700)" },
  { sv: "Riskettan Engelska 650 kr", en: "Risk 1 in English SEK 650" },
  { sv: "Syntest endast 150 kr", en: "Eye test only SEK 150" },
];
