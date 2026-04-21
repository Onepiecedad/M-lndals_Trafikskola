import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

const dict = {
  sv: {
    nav: {
      home: "Hem",
      packages: "Paket",
      lessons: "Lektioner",
      courses: "Kurser",
      about: "Om oss",
      contact: "Kontakt",
      book: "Boka nu",
    },
    hero: {
      badge: "Sedan 1935",
      title1: "Ta körkortet i",
      title2: "Mölndal",
      title3: "med 90 års erfarenhet.",
      sub: "Manuell & automat. Moderna bilar. Professionella lärare. Vi har utbildat tre generationer förare – din tur nu.",
      ctaPrimary: "Boka körlektion",
      ctaSecondary: "Se priser",
      chip1: "B · B96 · BE",
      chip2: "Riskettan · Risktvåan",
      chip3: "Handledarkurs",
    },
    offers: {
      title: "Aktuella erbjudanden",
      sub: "Just nu reducerade priser på kurser – boka innan platserna tar slut.",
    },
    packages: {
      eyebrow: "Körkortspaket",
      title: "Välj paketet som passar dig",
      sub: "Allt-i-ett lösningar – från första lektionen till uppkörning. Presentkort och paket är giltiga i 2 år.",
      mostPopular: "Populärast",
      cta: "Välj paket",
      from: "från",
    },
    lessons: {
      eyebrow: "Körlektioner",
      title: "Individuella körlektioner",
      sub: "En lektion är 55 minuter. Kvalitet framför kvantitet – våra lärare lär dig köra, inte bara klara provet.",
      col1: "Antal",
      col2: "Längd",
      col3: "Pris",
      book: "Boka",
    },
    courses: {
      eyebrow: "Kurser & tillägg",
      title: "Riskutbildningar, handledarkurs & mer",
      sub: "Alla obligatoriska kurser du behöver för att ta körkortet – samlat på ett ställe.",
      book: "Anmäl mig",
      now: "NU",
      was: "ord",
    },
    about: {
      eyebrow: "Vår historia",
      title: "Sedan 1935 – en del av Mölndal.",
      p1: "Mölndals Trafikskola har utbildat förare i fyra generationer. Vi kombinerar decennier av erfarenhet med moderna pedagogiska metoder och senaste generationens bilar.",
      p2: "Vår filosofi är enkel: du ska inte bara klara uppkörningen – du ska bli en säker, trygg och medveten förare för livet.",
      feature1t: "Moderna bilar",
      feature1d: "Manuella och automatiska bilar med senaste säkerhetssystemen.",
      feature2t: "Flexibel schemaläggning",
      feature2d: "Boka lektioner när det passar dig – morgon, kväll eller helg.",
      feature3t: "Låg stressnivå",
      feature3d: "Pedagogiska lärare som anpassar tempot efter just dig.",
    },
    instructors: {
      eyebrow: "Våra trafiklärare",
      title: "Möt teamet som tar dig hela vägen",
      years: "års erfarenhet",
    },
    testimonials: {
      eyebrow: "Våra elever",
      title: "Tusentals har tagit körkortet hos oss",
    },
    faq: {
      eyebrow: "Vanliga frågor",
      title: "Allt du behöver veta",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Boka din första lektion idag",
      sub: "Ring, mejla eller skicka förfrågan nedan – vi återkommer inom 24 timmar.",
      hours: "Öppettider",
      address: "Adress",
      phone: "Telefon",
      email: "E-post",
      payment: "Betalning",
      swish: "Swish",
      bankgiro: "Bankgiro",
      formTitle: "Skicka förfrågan",
      name: "För- och efternamn",
      phoneF: "Telefonnummer",
      emailF: "E-postadress",
      package: "Vad är du intresserad av?",
      message: "Meddelande (valfritt)",
      submit: "Skicka förfrågan",
      success: "Tack! Vi kontaktar dig inom 24 timmar.",
      selectPlaceholder: "Välj paket eller kurs",
    },
    footer: {
      rights: "Alla rättigheter förbehållna.",
      tagline: "Utbildat förare sedan 1935.",
      quick: "Snabblänkar",
      followUs: "Följ oss",
    },
    booking: {
      title: "Boka",
      pick: "Valt",
      complete: "Fyll i dina uppgifter så återkommer vi med bokningsförslag.",
    },
  },
  en: {
    nav: {
      home: "Home",
      packages: "Packages",
      lessons: "Lessons",
      courses: "Courses",
      about: "About",
      contact: "Contact",
      book: "Book now",
    },
    hero: {
      badge: "Since 1935",
      title1: "Get your driver's license in",
      title2: "Mölndal",
      title3: "with 90 years of experience.",
      sub: "Manual & automatic. Modern cars. Professional instructors. We've trained three generations of drivers – now it's your turn.",
      ctaPrimary: "Book a lesson",
      ctaSecondary: "See pricing",
      chip1: "B · B96 · BE",
      chip2: "Risk 1 · Risk 2",
      chip3: "Tutor course",
    },
    offers: {
      title: "Current offers",
      sub: "Reduced prices on our courses right now – book before spots run out.",
    },
    packages: {
      eyebrow: "License packages",
      title: "Choose the package that fits you",
      sub: "All-in-one solutions – from first lesson to driving test. Gift cards and packages are valid for 2 years.",
      mostPopular: "Most popular",
      cta: "Choose package",
      from: "from",
    },
    lessons: {
      eyebrow: "Driving lessons",
      title: "Individual driving lessons",
      sub: "A lesson is 55 minutes. Quality over quantity – our instructors teach you how to drive, not just pass the test.",
      col1: "Quantity",
      col2: "Duration",
      col3: "Price",
      book: "Book",
    },
    courses: {
      eyebrow: "Courses & extras",
      title: "Risk training, tutor course & more",
      sub: "Every mandatory course you need for your license – in one place.",
      book: "Sign me up",
      now: "NOW",
      was: "reg.",
    },
    about: {
      eyebrow: "Our story",
      title: "Part of Mölndal since 1935.",
      p1: "Mölndal Driving School has trained drivers across four generations. We combine decades of experience with modern teaching methods and the latest generation of cars.",
      p2: "Our philosophy is simple: you shouldn't just pass the test – you should become a safe, confident and aware driver for life.",
      feature1t: "Modern cars",
      feature1d: "Manual and automatic cars with the latest safety systems.",
      feature2t: "Flexible scheduling",
      feature2d: "Book lessons when it suits you – morning, evening or weekend.",
      feature3t: "Low-stress teaching",
      feature3d: "Patient instructors who adapt the pace to you.",
    },
    instructors: {
      eyebrow: "Our instructors",
      title: "Meet the team taking you all the way",
      years: "years of experience",
    },
    testimonials: {
      eyebrow: "Our students",
      title: "Thousands have earned their license with us",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Everything you need to know",
    },
    contact: {
      eyebrow: "Contact",
      title: "Book your first lesson today",
      sub: "Call, email or send a request below – we'll get back to you within 24 hours.",
      hours: "Opening hours",
      address: "Address",
      phone: "Phone",
      email: "Email",
      payment: "Payment",
      swish: "Swish",
      bankgiro: "Bank giro",
      formTitle: "Send a request",
      name: "Full name",
      phoneF: "Phone number",
      emailF: "Email address",
      package: "What are you interested in?",
      message: "Message (optional)",
      submit: "Send request",
      success: "Thanks! We'll contact you within 24 hours.",
      selectPlaceholder: "Choose a package or course",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Training drivers since 1935.",
      quick: "Quick links",
      followUs: "Follow us",
    },
    booking: {
      title: "Book",
      pick: "Selected",
      complete: "Fill in your details and we'll get back with a booking proposal.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      packages: "الباقات",
      lessons: "الدروس",
      courses: "الدورات",
      about: "من نحن",
      contact: "اتصل بنا",
      book: "احجز الآن",
    },
    hero: {
      badge: "منذ 1935",
      title1: "احصل على رخصة القيادة في",
      title2: "مولندال",
      title3: "مع 90 عاماً من الخبرة.",
      sub: "يدوي وأوتوماتيك. سيارات حديثة. مدربون محترفون. دربنا ثلاثة أجيال من السائقين — والآن دورك.",
      ctaPrimary: "احجز درساً",
      ctaSecondary: "اطلع على الأسعار",
      chip1: "B · B96 · BE",
      chip2: "Risk 1 · Risk 2",
      chip3: "دورة المشرف",
    },
    offers: {
      title: "العروض الحالية",
      sub: "أسعار مخفضة على الدورات الآن — احجز قبل نفاد المقاعد.",
    },
    packages: {
      eyebrow: "باقات رخصة القيادة",
      title: "اختر الباقة المناسبة لك",
      sub: "حلول شاملة — من الدرس الأول حتى اختبار القيادة. البطاقات والباقات صالحة لمدة عامين.",
      mostPopular: "الأكثر شعبية",
      cta: "اختر الباقة",
      from: "تبدأ من",
    },
    lessons: {
      eyebrow: "دروس القيادة",
      title: "دروس قيادة فردية",
      sub: "كل درس 55 دقيقة. الجودة قبل الكمية — مدربونا يعلمونك كيف تقود، وليس فقط كيف تجتاز الاختبار.",
      col1: "العدد",
      col2: "المدة",
      col3: "السعر",
      book: "احجز",
    },
    courses: {
      eyebrow: "دورات وإضافات",
      title: "دورات المخاطر ودورة المشرف وأكثر",
      sub: "كل الدورات الإلزامية لرخصتك — في مكان واحد.",
      book: "سجلني",
      now: "الآن",
      was: "السعر الأصلي",
    },
    about: {
      eyebrow: "قصتنا",
      title: "جزء من مولندال منذ 1935.",
      p1: "دربت مدرسة مولندال للقيادة السائقين على مدى أربعة أجيال. نجمع بين عقود من الخبرة وأساليب التدريس الحديثة وأحدث جيل من السيارات.",
      p2: "فلسفتنا بسيطة: لا ينبغي أن تجتاز الاختبار فحسب — بل أن تصبح سائقاً آمناً وواعياً وواثقاً مدى الحياة.",
      feature1t: "سيارات حديثة",
      feature1d: "سيارات يدوية وأوتوماتيكية مع أحدث أنظمة السلامة.",
      feature2t: "جدولة مرنة",
      feature2d: "احجز الدروس في الوقت الذي يناسبك — صباحاً أو مساءً أو في عطلة نهاية الأسبوع.",
      feature3t: "تعليم بدون توتر",
      feature3d: "مدربون صبورون يكيفون الإيقاع حسب احتياجاتك.",
    },
    instructors: {
      eyebrow: "مدربونا",
      title: "تعرّف على الفريق الذي سيأخذك حتى النهاية",
      years: "عاماً من الخبرة",
    },
    testimonials: {
      eyebrow: "طلابنا",
      title: "آلاف حصلوا على رخصهم معنا",
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "كل ما تحتاج معرفته",
    },
    contact: {
      eyebrow: "اتصل بنا",
      title: "احجز درسك الأول اليوم",
      sub: "اتصل أو راسلنا أو أرسل طلباً أدناه — سنعاود الاتصال بك خلال 24 ساعة.",
      hours: "ساعات العمل",
      address: "العنوان",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      payment: "الدفع",
      swish: "Swish",
      bankgiro: "Bankgiro",
      formTitle: "أرسل طلبك",
      name: "الاسم الكامل",
      phoneF: "رقم الهاتف",
      emailF: "البريد الإلكتروني",
      package: "ما الذي تهتم به؟",
      message: "رسالة (اختياري)",
      submit: "أرسل الطلب",
      success: "شكراً! سنتواصل معك خلال 24 ساعة.",
      selectPlaceholder: "اختر باقة أو دورة",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      tagline: "نُدرّب السائقين منذ 1935.",
      quick: "روابط سريعة",
      followUs: "تابعنا",
    },
    booking: {
      title: "احجز",
      pick: "تم اختيار",
      complete: "املأ بياناتك وسنعاود الاتصال بك بمقترح حجز.",
    },
  },
};

const RTL_LANGS = ["ar"];
const ORDER = ["sv", "en", "ar"];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("mts_lang") || "sv";
    } catch {
      return "sv";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("mts_lang", lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
    } catch {}
  }, [lang]);

  const toggle = () => setLang((l) => ORDER[(ORDER.indexOf(l) + 1) % ORDER.length]);
  const t = dict[lang];
  const isRTL = RTL_LANGS.includes(lang);
  // Pick localized field from an object, e.g. pick(pkg, "name") -> pkg.name_ar|name_en|name_sv
  const pick = (obj, base) => {
    if (!obj) return "";
    return obj[`${base}_${lang}`] ?? obj[`${base}_en`] ?? obj[`${base}_sv`] ?? "";
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, isRTL, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
