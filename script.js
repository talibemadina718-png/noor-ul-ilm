/**
 * NOOR-UL-ILM INSTITUTE (نور العلم انسٹیٹیوٹ)
 * Master Client Script (HTML5, CSS3, Vanilla JS)
 * Complete Bilingual Engine, Interactive Course Finder, Real-Time Countdown,
 * Certificate Verification, and Responsive Navigation.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. COMPLETE BILINGUAL TRANSLATION DICTIONARY (URDU & ENGLISH)
     ========================================================================== */
  const translations = {
    ur: {
      // Announcement Bar
      announcement_badge: "الحمد للہ!",
      announcement_text: "🏆 الحمد للہ! نور العلم انسٹیٹیوٹ کو آن لائن قرآنی و دینی تعلیم کے بہترین اور عالمی معیار پر اعتماد کا اعزاز۔ 📖 اکتوبر بیچ (Batch #01) کے داخلے جاری ہیں! محدود نشستیں۔ آج ہی اپنے بچوں اور اپنے لیے 3 دن کی مفت ٹرائل کلاس (Free Trial) بک کریں۔ 💻 لائیو آن لائن 1-on-1 کلاسز بذریعہ WHATSAPP۔",
      announcement_view_countdown: "بیچ ٹائمر دیکھیں",

      // Brand
      brand_urdu: "نور العلم انسٹیٹیوٹ",
      brand_en: "Noor-ul-Ilm Institute",
      brand_sub: "آن لائن قرآنی و دینی تعلیم اکیڈمی",

      // Navigation
      nav_home: "صفحہ اول",
      nav_about: "ہمارے بارے میں",
      nav_about_intro: "ادارے کا تعارف",
      nav_about_founder: "بانی کا پیغام (Founder's Message)",
      nav_about_teachers: "ہمارے مستند اساتذہ و قراء کرام",
      nav_about_shariah: "شرعی و قانونی حیثیت",
      nav_courses: "کورسز",
      nav_all_courses: "تمام آن لائن کورسز",
      nav_course_finder: "Course Finder (کورس فائینڈر)",
      nav_scholarship: "مستحق طلبہ رعایت و وظائف",
      nav_reviews: "طلبہ کے تاثرات",
      nav_portal: "وسائل و پورٹل",
      nav_verification: "تصدیقِ سند",
      nav_contact: "رابطہ کریں",
      nav_admission_process: "داخلہ کا طریقہ کار",
      nav_why_us: "ہمیں کیوں منتخب کریں؟",
      select_language: "زبان منتخب کریں:",

      // CTAs
      cta_free_trial: "مفت ٹرائل کلاس",
      cta_hero_trial: "مفت ٹرائل کلاس بک کریں",
      cta_hero_finder: "کورس فائینڈر استعمال کریں",
      whatsapp_instant: "واٹس ایپ پر رابطہ",

      // Hero Section
      hero_badge: "عالمی معیار کی آن لائن قرآنی و دینی تعلیم",
      hero_title: "گھر بیٹھے تجوید و تجلیِ قرآن سے اپنا گھر منور کریں",
      hero_subtitle: "نور العلم انسٹیٹیوٹ میں دنیا بھر کے طلبہ و طالبات کے لیے آن لائن قرآنی و اسلامی تعلیم۔ مستند میل اور فی میل اساتذہ کے ساتھ انفرادی کلاسز۔",
      hero_pill_1: "100% انفرادی 1-on-1 توجہ",
      hero_pill_2: "مستند میل و فی میل اساتذہ",
      hero_pill_3: "فلیکسیبل ٹائمنگز (24/7)",
      hero_card_status: "لائیو ون آن ون کلاس جاری ہے",
      bismillah: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
      quran_verse_arabic: "وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا",
      quran_verse_trans: '"اور قرآن کو خوب ٹھہر ٹھہر کر (تجوید کے ساتھ) پڑھو۔" (المزمل: 4)',
      audio_tajweed_title: "تجویدِ قرآن کا بہترین نمونہ",
      audio_tajweed_sub: "نور العلم قاری - نمونہ قرأت و مخارج",
      hero_chip_batch: "اگلا بیچ",
      hero_chip_trial: "مفت ٹرائل",
      hero_chip_trial_val: "3 دن مکمل مفت",

      // Statistics
      stat_1_title: "🎓 فارغ التحصیل طلبہ",
      stat_1_sub: "ناظرہ، تجوید اور حفظ مکمل کرنے والے",
      stat_2_title: "🌍 ممالک سے طلبہ کی شمولیت",
      stat_2_sub: "برطانیہ، امریکہ، کینیڈا، خلیج اور دیگر",
      stat_3_title: "👳‍♂️ مستند میل و فی میل اساتذہ",
      stat_3_sub: "سند یافتہ قراء و اسلامی اسکالرز",
      stat_4_title: "⭐ 4.9/5 طلبہ و والدین کا اعتماد",
      stat_4_sub: "مطمئن اور بااعتماد قرآنی تعلیمی سفر",

      // Course Finder
      finder_tag: "انٹرایکٹو تعلیمی گائیڈ",
      finder_title: "کورس فائینڈر: اپنے لیے بہترین قرآنی کورس تلاش کریں",
      finder_desc: "صرف 3 آسان سوالات کے جواب دیں اور اپنے یا اپنے بچوں کے لیے سب سے موزوں کورس اور ٹائم ٹیبل کا انتخاب کریں۔",
      finder_step1_label: "عمر و سطح",
      finder_step2_label: "کورس کا مقصد",
      finder_step3_label: "وقت و ایام",
      finder_step4_label: "نتیجہ",
      finder_q1: "STEP 1: طالب علم کی عمر / سطح منتخب کریں:",
      opt_kids: "بچے (Kids)",
      opt_kids_desc: "عمر 4 سے 14 سال، دلچسپ اور آسان تدریس",
      opt_females: "خواتین (Females)",
      opt_females_desc: "مکمل پردہ و احترام کے ساتھ فی میل اساتذہ",
      opt_adults: "بالغ حضرات (Adults)",
      opt_adults_desc: "مصروف شیڈول کے مطابق لچکدار اوقات",
      btn_next_step: "اگلا مرحلہ ←",
      btn_prev_step: "→ پچھلا مرحلہ",

      finder_q2: "STEP 2: کورس کا مقصد منتخب کریں:",
      opt_qaida: "مدنی قاعدہ و ناظرہ",
      opt_qaida_desc: "بنیادی حروف سے روانی تک",
      opt_tajweed: "تجوید و مخارج",
      opt_tajweed_desc: "خوبصورت اور درست تلفظ",
      opt_hifz: "حفظِ قرآن",
      opt_hifz_desc: "روزانہ سبق و مستقل دہرائی",
      opt_tafseer: "ترجمہ و تفسیر",
      opt_tafseer_desc: "فہمِ قرآن اور عملی زندگی",
      opt_arabic: "عربی زبان",
      opt_arabic_desc: "قرآنی گرائمر و عربی گفتگو",
      opt_duas: "مسنون دعائیں و تربیت",
      opt_duas_desc: "نماز، مسنون دعائیں و اخلاقیات",

      finder_q3: "STEP 3: پسندیدہ وقت اور ایام:",
      opt_3days: "ہفتہ وار 3 دن",
      opt_3days_desc: "پیر تا بدھ یا جمعرات تا ہفتہ",
      opt_5days: "ہفتہ وار 5 دن",
      opt_5days_desc: "پیر تا جمعہ باقاعدہ کلاسز",
      opt_morning: "صبح کا وقت",
      opt_morning_desc: "فجر بعد یا صبح کے اوقات",
      opt_evening: "شام کا وقت",
      opt_evening_desc: "عصر، مغرب یا عشاء بعد",
      opt_weekend: "اختتامِ ہفتہ (Weekend)",
      opt_weekend_desc: "ہفتہ اور اتوار کے خصوصی اوقات",
      btn_view_result: "[ آپ کے لیے تجویز کردہ کورس دیکھیں ]",

      result_match_badge: "100% موزوں کورس تجویز",
      result_teacher_type: "استاد کا انتخاب:",
      result_schedule: "شیڈول:",
      result_mode: "طریقہ کار:",
      result_mode_val: "لائیو 1-on-1 واٹس ایپ / زوم",
      btn_book_recommended: "اس کورس کے لیے 3 دن کا مفت ٹرائل بک کریں",
      btn_reset_finder: "دوبارہ تلاش کریں ↻",

      // Courses Section
      courses_tag: "ہماری تعلیمی خدمات",
      courses_title: "نور العلم آن لائن قرآنی و اسلامی کورسز",
      courses_desc: "ہر کورس سند یافتہ میل و فی میل اساتذہ کے زیرِ نگرانی 100% انفرادی (1-on-1) توجہ کے ساتھ پڑھایا جاتا ہے۔",
      featured_ribbon: "خصوصی پروگرام",
      teaching_method_label: "طریقہ کار:",
      features_label: "خصوصیات:",
      cta_course_book: "مفت ٹرائل کلاس بک کریں",

      c1_badge: "بنیادی تا اعلیٰ",
      c1_title: "مدنی قاعدہ و ناظرہ قرآن مع تجوید",
      c1_desc: "بچوں اور شروعات کرنے والوں کے لیے بنیادی قرآنی قاعدہ اور مکمل قرآن ناظرہ تجوید کے بنیادی قواعد کے ساتھ۔",
      c1_method: "لائیو ون آن ون (1-on-1)",
      c1_timer: "نیا بیچ شروع ہونے میں باقی: 05 دن : 12 گھنٹے",
      c1_features: "مخارج کی درستگی، بنیادی اسلامی تربیت، نماز و مسنون دعائیں۔",

      c2_badge: "فل ٹائم / پارٹ ٹائم",
      c2_title: "حفظِ قرآن کریم (Hifz-ul-Quran Program)",
      c2_desc: "کلامِ الٰہی کو سینے میں محفوظ کرنے کے لیے خصوصی حفظ پروگرام، جس میں ہر طالب علم پر انفرادی دھیان دیا جاتا ہے۔",
      c2_method: "روزانہ لائیو سبق و سبقی",
      c2_timer: "رجسٹریشن جاری ہے",
      c2_features: "روزانہ کا سبق، دہرائی اور جدید حفظ ٹریکنگ سسٹم۔",

      c3_badge: "مخصوص برائے خواتین",
      c3_title: "تجوید و قرأت ماسٹری (مخصوص برائے خواتین)",
      c3_desc: "خواتین اور بچیوں کے لیے ماہر قاریہ اساتذہ کے ساتھ مکمل پردے میں لحنِ جلی و خفی سے پاک تلاوت کا اعلیٰ کورس۔",
      c3_method: "100% فی میل قاریہ اساتذہ",
      c3_timer: "محدود نشستیں باقی",
      c3_features: "مخارج، صفاتِ حروف اور لحن سے پاک قرأت کی تربیت۔",

      c4_badge: "فہمِ دین",
      c4_title: "فہمِ قرآن (ترجمہ و تفسیرِ قرآن)",
      c4_desc: "قرآن مجید کے معانی، احکام اور آیات کے پسِ منظر کو سمجھ کر اپنی عملی زندگی کو شریعت کے مطابق ڈھالنے کا موقع۔",
      c4_method: "ہفتہ وار آن لائن کلاسز",
      c4_timer: "نیا بیچ 20 اکتوبر سے جاری",
      c4_features: "لفظی و با محاورہ ترجمہ اور روایتی و جدید تفسیر۔",

      c5_badge: "دورانیہ: 3 ماہ",
      c5_title: "کڈز اسلامک سٹڈیز و مسنون دعائیں",
      c5_desc: "نوجوان نسل اور معصوم بچوں کے دلوں میں ایمان کی شمع روشن کرنے کے لیے بنیادی اسلامی عقائد، اخلاقیات اور دعائیں۔",
      c5_method: "بچوں کے لیے دلچسپ آن لائن کلاسز",
      c5_timer: "داخلے جاری ہیں",
      c5_features: "مسنون دعائیں، مسنون نماز، طہارت و پاکیزگی کے مسائل اور اسلامی قصے۔",

      // Admission Process
      process_tag: "آسان اور تیز ترین طریقہ",
      process_title: "3 آسان مراحل میں داخلہ مکمل کریں",
      process_desc: "ہمارے ساتھ آن لائن قرآنی سفر کا آغاز کرنا انتہائی سادہ، تیز اور بغیر کسی رجسٹریشن فیس کے ہے۔",
      step1_title: "فارم یا واٹس ایپ پر رابطہ کریں",
      step1_desc: "آن لائن فارم پر اپنی تفصیلات درج کریں یا براہِ راست ہمارے واٹس ایپ نمبر پر پیغام بھیجیں۔",
      step2_title: "3 دن کی مفت ٹرائل کلاس لیں",
      step2_desc: "اپنی پسند کے دن اور وقت پر میل یا فی میل قاری صاحب کے ساتھ مفت ٹرائل کلاس لیں۔",
      step3_title: "داخلہ کی تصدیق اور کلاس کا آغاز",
      step3_desc: "ٹرائل سے مطمئن ہونے پر اپنے فلیکسیبل ٹائم ٹیبل کے مطابق کلاسز شروع کریں۔",
      cta_start_step: "ابھی 3 دن کے مفت ٹرائل کی بکنگ کریں",

      // Why Choose Us
      why_tag: "ہماری برتری",
      why_title: "نور العلم انسٹیٹیوٹ ہی کا انتخاب کیوں کریں؟",
      why_desc: "ہم روایتی طریقۂ تدریس اور جدید ٹیکنالوجی کے امتزاج سے ہر طالب علم کے لیے بہترین اور محفوظ تعلیمی ماحول فراہم کرتے ہیں۔",
      why1_title: "🌸 خصوصی فی میل اساتذہ",
      why1_desc: "خواتین اور بچیوں کے لیے مکمل پردے اور احترام کے ساتھ فی میل اساتذہ۔",
      why2_title: "⏰ 24/7 فلیکسیبل ٹائمنگز",
      why2_desc: "دنیا کے کسی بھی ٹائم زون (UK, USA, Canada, Gulf, Australia) کے مطابق کلاسز کا وقت۔",
      why3_title: "📊 ماہانہ پیشرفت رپورٹ",
      why3_desc: "والدین کے لیے بچے کی تعلیمی رپورٹ اور باقاعدہ رہنمائی۔",
      why4_title: "📜 آن لائن تصدیق شدہ سند",
      why4_desc: "کورس مکمل کرنے پر ادارے سے تصدیق شدہ سرٹیفکیٹ اور آن لائن پورٹل پر ویریفکیشن۔",

      // About Us
      about_tag: "ہمارا مشن اور تشخص",
      about_main_title: "نور العلم انسٹیٹیوٹ: آن لائن قرآنی تعلیم کا بین الاقوامی ادارہ",
      founder_msg_title: "بانی کا پیغام (Founder's Message)",
      founder_msg_text: '"ہمارا نصب العین دنیا کے کونے کونے میں بسنے والے مسلمانوں، خصوصاً نئی نسل تک قرآنِ مجید کے صحیح مخارج، تجوید اور فہم کی روشنی پہنچانا ہے۔ ہم نے ایک ایسا جدید اور محفوظ آن لائن پلیٹ فارم تشکیل دیا ہے جہاں ہر بچہ اور ہر خاتون مکمل سہولت اور وقار کے ساتھ قرآن سیکھ سکیں۔"',
      teachers_pillar_title: "ہمارے مستند اساتذہ و قراء کرام",
      teachers_pillar_desc: "تمام اساتذہ الشہادۃ العالمیہ اور تجوید کی مستند اسناد کے حامل ہیں اور بچوں کی نفسیات کے مطابق محبت سے پڑھانے میں مہارت رکھتے ہیں۔",
      shariah_pillar_title: "شرعی و قانونی حیثیت",
      shariah_pillar_desc: "نور العلم انسٹیٹیوٹ مستند اسلامی اصولوں پر قائم ہے، جو پردے کے مکمل احکام اور شرعی تقاضوں کے تحت آن لائن خدمات فراہم کرتا ہے۔",
      scholarship_title: "مستحق و نادار طلبہ کے لیے خصوصی وظائف (Scholarship)",
      scholarship_desc: "مالی تنگی کسی کے لیے قرآنی تعلیم میں رکاوٹ نہیں بننی چاہیے۔ نور العلم انسٹیٹیوٹ مستحق طلبہ کو ہدیہ میں خصوصی رعایت یا مکمل مفت تعلیم فراہم کرتا ہے۔",

      // Portal & Support
      portal_tag: "جدید ڈیجیٹل سہولیات",
      portal_title: "آن لائن ہیلپ سینٹر اور اسٹوڈنٹ پورٹل",
      portal_desc: "طلبہ، والدین اور اساتذہ کے لیے آسان رسائی، لائیو کلاس لنکس، تعلیمی ٹریکنگ اور فوری سپورٹ۔",
      portal_student_title: "طالب علم لاگ ان (Student Login)",
      portal_student_desc: "روزانہ کی لائیو کلاس کا لنک حاصل کریں، اپنا سبق و سبقی چیک کریں اور استاد سے براہِ راست رابطہ رکھیں۔",
      btn_student_portal: "لاگ ان پورٹل کھولیں ←",
      portal_parent_title: "والدین پورٹل (Parent Login)",
      portal_parent_desc: "اپنے بچے کی حاضری، تجوید کے درجات اور ماہانہ پیشرفت رپورٹ کا معائنہ کریں۔",
      btn_parent_portal: "والدین ڈیش بورڈ ←",
      portal_wa_title: "24/7 واٹس ایپ سپورٹ",
      portal_wa_desc: "کسی بھی سوال، ٹائم ٹیبل کی تبدیلی یا فوری رہنمائی کے لیے ہمارے واٹس ایپ پر 24 گھنٹے میسج کریں۔",
      portal_email_title: "ای میل ہیلپ ڈیسک",
      portal_email_desc: "باقاعدہ داخلہ کی تصدیق، دستاویزات اور انتظامی امور کے لیے ای میل پر رابطہ فرمائیں۔",

      // Verification
      verify_tag: "آن لائن سرٹیفکیٹ تصدیق",
      verify_title: "آن لائن سند کی تصدیق کا نظام (Certificate Verification)",
      verify_desc: "نور العلم انسٹیٹیوٹ سے جاری کردہ تمام اسناد اور سرٹیفکیٹس کی عالمی سطح پر تصدیق کے لیے نیچے سرٹیفکیٹ آئی ڈی درج کریں۔",
      btn_verify_cert: "تصدیق کریں (Verify)",
      demo_hint_label: "ٹیسٹ کرنے کے لیے ڈیمو کوڈ پر کلک کریں:",
      cert_status_idle_title: "تصدیق کے لیے سرٹیفکیٹ نمبر درج کریں",
      cert_status_idle_desc: "مستند ڈیٹا بیس سے طالب علم کا نام، کورس اور تاریخِ فراہمی کی تصدیق کی جائے گی۔",
      cert_status_verified: "تصدیق شدہ سند (VERIFIED)",
      cert_label_name: "طالب علم کا نام:",
      cert_label_course: "کورس:",
      cert_label_grade: "حاصل کردہ درجہ:",
      cert_label_date: "تاریخِ اجراء:",
      cert_issuer: "منجانب: نور العلم انسٹیٹیوٹ - رجسٹرڈ پورٹل",
      cert_invalid_title: "سرٹیفکیٹ ریکارڈ نہیں ملا",
      cert_invalid_desc: "برائے مہربانی اپنا درست سرٹیفکیٹ نمبر دوبارہ چیک کریں یا ہمارے واٹس ایپ پر رابطہ کریں۔",

      // Reviews
      reviews_tag: "والدین اور طلبہ کی رائے",
      reviews_title: "طلبہ و والدین کے تاثرات (Testimonials)",
      reviews_desc: "الحمد للہ دنیا بھر میں مقیم طلبہ اور ان کے والدین ہمارے تدریسی طریقہ کار، اساتذہ کے اخلاق اور انفرادی توجہ سے مطمئن ہیں۔",
      rev_1_quote: '"برطانیہ میں رہتے ہوئے بچوں کو اچھے قاری صاحب سے قرآن پڑھوانا ایک بڑا مسئلہ تھا۔ نور العلم انسٹیٹیوٹ کے استاد نے میرے دونوں بچوں کو اتنی محبت اور صبر سے پڑھایا کہ اب وہ روانی سے ناظرہ پڑھ رہے ہیں۔ الحمد للہ!"',
      rev_1_author: "عمران رشید (والد)",
      rev_1_loc: "🇬🇧 برمنگھم، برطانیہ (UK)",
      rev_2_quote: '"میں نے اپنی بیٹی کے لیے فی میل استاد کا انتخاب کیا تھا۔ استاد صاحبہ کی تجوید اور مخارج بے حد عمدہ ہیں اور مکمل پردے کے ساتھ محفوظ ماحول میں کلاسز ہوتی ہیں۔ میں تمام ماؤں کو یہی ادارہ تجویز کروں گی۔"',
      rev_2_author: "فاطمہ خالد (والدہ)",
      rev_2_loc: "🇺🇸 ڈیلاس، ٹیکساس، امریکہ (USA)",
      rev_3_quote: '"جاب کے مصروف اوقات کی وجہ سے مجھے قرآن ترجمہ و تفسیر کا وقت نہیں ملتا تھا۔ نور العلم انسٹیٹیوٹ کے فلیکسیبل اوقات کی وجہ سے اب میں باقاعدگی سے تفسیر پڑھ رہا ہوں۔ بہترین تعلیمی معیار!"',
      rev_3_author: "طارق محمود (طالب علم)",
      rev_3_loc: "🇦🇪 دبئی، متحدہ عرب امارات (UAE)",

      // Contact Form
      contact_tag: "داخلہ رجسٹریشن",
      contact_title: "3 دن کی مفت ٹرائل کلاس کے لیے فارم پُر کریں",
      contact_desc: "فارم جمع کروانے کے بعد ہماری انتظامیہ 1 سے 2 گھنٹے کے اندر آپ کے واٹس ایپ پر رابطہ کرے گی اور آپ کی مرضی کا وقت مقرر کر کے فری ٹرائل کلاس شروع کروائے گی۔",
      label_phone_wa: "فون و واٹس ایپ:",
      label_email: "ای میل ایڈریس:",
      label_hours: "اوقاتِ کار:",
      val_hours: "24/7 ہفتے کے ساتوں دن دستیاب",
      wa_quick_title: "فوری واٹس ایپ داخلہ",
      wa_quick_desc: "اگر آپ براہِ راست واٹس ایپ پر تفصیلات شیئر کرنا چاہتے ہیں تو نیچے کلک کریں:",
      btn_wa_chat: "واٹس ایپ پر فوری رابطہ کریں",
      form_title: "مفت ٹرائل داخلہ فارم (Admission Form)",
      lbl_student_name: "طالب علم کا نام *",
      lbl_parent_name: "والد / سرپرست کا نام",
      lbl_age: "طالب علم کی عمر *",
      lbl_country: "ملک و شہر *",
      lbl_course: "پسندیدہ کورس *",
      opt_select_course: "کورس منتخب کریں...",
      opt_c1: "مدنی قاعدہ و ناظرہ قرآن مع تجوید",
      opt_c2: "حفظِ قرآن کریم (Hifz-ul-Quran Program)",
      opt_c3: "تجوید و قرأت ماسٹری (مخصوص برائے خواتین)",
      opt_c4: "فہمِ قرآن (ترجمہ و تفسیرِ قرآن)",
      opt_c5: "کڈز اسلامک سٹڈیز و مسنون دعائیں",
      lbl_teacher_pref: "استاد کا انتخاب *",
      opt_t_male: "میل قاری صاحب (Male Teacher)",
      opt_t_female: "فی میل قاریہ صاحبہ (Female Teacher)",
      opt_t_any: "کوئی بھی مستند استاد (Any)",
      lbl_days: "پسندیدہ ایام *",
      opt_d_3: "ہفتہ وار 3 دن",
      opt_d_5: "ہفتہ وار 5 دن",
      opt_d_week: "صرف ویک اینڈ (ہفتہ و اتوار)",
      lbl_time: "پسندیدہ وقت *",
      lbl_whatsapp: "واٹس ایپ نمبر (بمعہ کنٹری کوڈ) *",
      lbl_email_field: "ای میل ایڈریس",
      lbl_message: "اضافی معلومات یا پیغام (اختیاری)",
      btn_submit_trial: "[ مفت ٹرائل کی درخواست دیں ]",
      success_title: "ماشاء اللہ! آپ کی درخواست موصول ہو گئی ہے۔",
      success_desc: "ہمارے نمائندے چند ہی دیر میں آپ کے واٹس ایپ پر ٹرائل کلاس کا شیڈول فراہم کریں گے۔ جزاکم اللہ خیرا۔",

      // Footer
      footer_about: "نور العلم انسٹیٹیوٹ – دنیا بھر میں تجوید و قرأت اور اسلامی تعلیمات کا معتبر نام۔",
      footer_lbl_phone: "📞 فون / واٹس ایپ:",
      footer_lbl_email: "✉️ ای میل:",
      footer_lbl_web: "🌐 ویب سائٹ:",
      footer_links_title: "اہم روابط (Important Links)",
      f_link_courses: "تمام کورسز",
      f_link_trial: "فری ٹرائل",
      f_link_females: "فی میل اساتذہ",
      f_link_verify: "سرٹیفکیٹ کی تصدیق",
      f_link_privacy: "پرائیویسی پالیسی",
      f_link_terms: "شرائط و ضوابط",
      footer_courses_title: "ہمارے کورسز",
      footer_social_title: "سوشل میڈیا و کمیونٹی",
      footer_social_desc: "ہماری قرآنی و تعلیمی ویڈیوز، رہنمائی اور اپڈیٹس کے لیے سوشل میڈیا پیجز فالو فرمائیں:",
      soc_facebook: "فیس بک",
      soc_youtube: "یوٹیوب",
      soc_instagram: "انسٹاگرام",
      soc_whatsapp: "واٹس ایپ گروپ",
      copyright: "© 2026 نور العلم انسٹیٹیوٹ (Noor-ul-Ilm Institute) - تمام حقوق بحق ادارہ محفوظ ہیں۔",
      shariah_tagline: "مستند شرعی و دینی اصولوں کے عین مطابق آن لائن تدریس",

      // Admission Countdown Modal
      modal_countdown_title: "⏳ آن لائن قرآن کورسز - نیا بیچ شروع ہونے میں باقی وقت",
      cd_days: "دن",
      cd_hours: "گھنٹے",
      cd_minutes: "منٹ",
      cd_seconds: "سیکنڈ",
      m_lbl_batch: "بیچ:",
      m_val_batch: "بیچ #01 (Batch #01)",
      m_lbl_start: "آغاز کی تاریخ:",
      m_val_start: "11 اکتوبر 2026",
      m_lbl_fac: "سہولیات:",
      m_val_fac: "سند یافتہ میل و فی میل اساتذہ | 100% انفرادی (1-on-1) توجہ",
      m_lbl_fee: "ہدیہ / فیس:",
      m_val_fee: "مناسب ہدیہ | مستحق طلبہ کے لیے خصوصیات و رعایت",
      modal_cta_apply: "[ ابھی مفت ٹرائل کی درخواست دیں ]",
      modal_close_text: "بعد میں دیکھیں (بند کریں)",

      // Student / Parent Modal
      student_login_title: "طالب علم لاگ ان (Student Portal)",
      student_login_sub: "اپنی انرولمنٹ آئی ڈی اور پاس ورڈ سے کلاس پورٹل تک رسائی حاصل کریں۔",
      lbl_student_id: "اسٹوڈنٹ آئی ڈی (Student ID)",
      lbl_password: "پاس ورڈ (Password)",
      btn_login_submit: "لاگ ان کریں",
      parent_login_title: "والدین پورٹل (Parent Portal)",
      parent_login_sub: "اپنے رجسٹرڈ موبائل نمبر سے بچے کی ماہانہ رپورٹ حاصل کریں۔",
      lbl_parent_phone: "رجسٹرڈ واٹس ایپ نمبر",
      btn_check_report: "رپورٹ دیکھیں",

      // Privacy / Terms Modal
      privacy_modal_title: "پرائیویسی پالیسی (Privacy Policy)",
      privacy_text_1: "نور العلم انسٹیٹیوٹ تمام طلبہ، طالبات اور والدین کے ڈیٹا اور پرائیویسی کا مکمل احترام کرتا ہے۔",
      privacy_text_2: "خواتین اور بچوں کی کلاسز میں مکمل رازداری، اخلاقیات اور اسلامی پردے کا خاص خیال رکھا جاتا ہے۔ کوئی بھی ذاتی معلومات کسی تیسرے فریق کے ساتھ شیئر نہیں کی جاتی۔",
      terms_modal_title: "شرائط و ضوابط (Terms & Conditions)",
      terms_text_1: "1. ہر طالب علم کو داخلے سے قبل 3 دن کی مفت ٹرائل کلاس کی سہولت فراہم کی جاتی ہے۔",
      terms_text_2: "2. کلاسز باہمی طے شدہ شیڈول کے مطابق لائیو آن لائن 1-on-1 منعقد ہوتی ہیں۔",
      terms_text_3: "3. ہدیہ ماہانہ بنیادوں پر ادا کیا جاتا ہے جبکہ مستحق طلبہ کے لیے اسکالرشپ کی سہولت موجود ہے۔",
      float_wa_tooltip: "رابطہ برائے داخلہ"
    },

    en: {
      // Announcement Bar
      announcement_badge: "Alhamdulillah!",
      announcement_text: "🏆 Alhamdulillah! Noor-ul-Ilm Institute – Trusted Global Standard in Online Quranic & Islamic Education. 📖 Admissions Open for October Batch (Batch #01)! Limited Seats. Book a 3-Day Free Trial Class for you & your children today. 💻 Live Online 1-on-1 Classes via WhatsApp.",
      announcement_view_countdown: "View Batch Timer",

      // Brand
      brand_urdu: "نور العلم انسٹیٹیوٹ",
      brand_en: "Noor-ul-Ilm Institute",
      brand_sub: "Online Quran & Islamic Studies Academy",

      // Navigation
      nav_home: "Home",
      nav_about: "About Us",
      nav_about_intro: "About Institute",
      nav_about_founder: "Founder's Message",
      nav_about_teachers: "Our Qualified Scholars & Qaris",
      nav_about_shariah: "Shariah & Legal Standing",
      nav_courses: "Courses",
      nav_all_courses: "All Online Courses",
      nav_course_finder: "Course Finder",
      nav_scholarship: "Scholarship & Need-Based Aid",
      nav_reviews: "Reviews & Testimonials",
      nav_portal: "Resources & Portal",
      nav_verification: "Certificate Verification",
      nav_contact: "Contact Us",
      nav_admission_process: "Admission Process",
      nav_why_us: "Why Noor-ul-Ilm?",
      select_language: "Select Language:",

      // CTAs
      cta_free_trial: "Free Trial Class",
      cta_hero_trial: "Book Free Trial Class",
      cta_hero_finder: "Use Course Finder",
      whatsapp_instant: "WhatsApp Contact",

      // Hero Section
      hero_badge: "World-Class Online Quran & Islamic Studies",
      hero_title: "Illuminate Your Home with the Tajweed & Divine Light of the Holy Quran",
      hero_subtitle: "Online Quranic and Islamic education for students worldwide at Noor-ul-Ilm Institute. One-on-one individual classes with certified male and female scholars.",
      hero_pill_1: "100% 1-on-1 Individual Attention",
      hero_pill_2: "Certified Male & Female Scholars",
      hero_pill_3: "24/7 Flexible Timings Globally",
      hero_card_status: "Live 1-on-1 Class in Session",
      bismillah: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
      quran_verse_arabic: "وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا",
      quran_verse_trans: '"And recite the Quran with measured, rhythmic recitation." (Al-Muzzammil: 4)',
      audio_tajweed_title: "Exemplary Tajweed Recitation",
      audio_tajweed_sub: "Noor-ul-Ilm Qari - Phonetics & Modulation",
      hero_chip_batch: "Next Batch",
      hero_chip_trial: "Free Trial",
      hero_chip_trial_val: "3 Days 100% Free",

      // Statistics
      stat_1_title: "🎓 Graduated Students",
      stat_1_sub: "Nazra, Tajweed and Hifz completions",
      stat_2_title: "🌍 Countries Enrolled",
      stat_2_sub: "UK, USA, Canada, Gulf & more",
      stat_3_title: "👳‍♂️ Certified Male & Female Scholars",
      stat_3_sub: "Certified Qaris & Islamic Scholars",
      stat_4_title: "⭐ 4.9/5 Trust Rating",
      stat_4_sub: "Trusted by parents & students worldwide",

      // Course Finder
      finder_tag: "Interactive Academic Guide",
      finder_title: "Course Finder: Discover Your Ideal Quran Course",
      finder_desc: "Answer 3 simple questions to get tailored course recommendations and flexible schedule options for you or your children.",
      finder_step1_label: "Age & Level",
      finder_step2_label: "Learning Goal",
      finder_step3_label: "Time & Schedule",
      finder_step4_label: "Recommendation",
      finder_q1: "STEP 1: Select Student Age / Category:",
      opt_kids: "Children (Kids)",
      opt_kids_desc: "Ages 4 to 14, interactive & gentle pedagogy",
      opt_females: "Females / Sisters",
      opt_females_desc: "100% female scholars with full privacy",
      opt_adults: "Adults / Brothers",
      opt_adults_desc: "Flexible timings tailored to busy schedules",
      btn_next_step: "Next Step →",
      btn_prev_step: "← Previous Step",

      finder_q2: "STEP 2: Select Course Objective:",
      opt_qaida: "Madani Qaida & Nazra",
      opt_qaida_desc: "From basic alphabets to fluent reading",
      opt_tajweed: "Tajweed & Makharij",
      opt_tajweed_desc: "Correct articulation and melodious rules",
      opt_hifz: "Quran Memorization (Hifz)",
      opt_hifz_desc: "Daily Sabaq & consistent revision",
      opt_tafseer: "Translation & Tafseer",
      opt_tafseer_desc: "Understanding meanings & life application",
      opt_arabic: "Quranic Arabic",
      opt_arabic_desc: "Grammar, vocabulary & comprehension",
      opt_duas: "Masnoon Duas & Islamic Studies",
      opt_duas_desc: "Salah, daily prayers & noble etiquettes",

      finder_q3: "STEP 3: Preferred Days and Timings:",
      opt_3days: "3 Days per Week",
      opt_3days_desc: "Mon-Wed or Thu-Sat options",
      opt_5days: "5 Days per Week",
      opt_5days_desc: "Regular Monday to Friday schedule",
      opt_morning: "Morning Slots",
      opt_morning_desc: "Post-Fajr or morning hours",
      opt_evening: "Evening Slots",
      opt_evening_desc: "Asr, Maghrib or Isha convenient times",
      opt_weekend: "Weekend Slots",
      opt_weekend_desc: "Saturday & Sunday dedicated classes",
      btn_view_result: "[ View Your Recommended Course ]",

      result_match_badge: "100% Tailored Course Recommendation",
      result_teacher_type: "Assigned Scholar:",
      result_schedule: "Schedule:",
      result_mode: "Mode:",
      result_mode_val: "Live 1-on-1 via WhatsApp / Zoom",
      btn_book_recommended: "Book 3-Day Free Trial for this Course",
      btn_reset_finder: "Restart Finder ↻",

      // Courses Section
      courses_tag: "Our Academic Programs",
      courses_title: "Noor-ul-Ilm Online Quran & Islamic Courses",
      courses_desc: "Each program is taught by certified male & female teachers with 100% one-on-one individual focus.",
      featured_ribbon: "Flagship Program",
      teaching_method_label: "Method:",
      features_label: "Features:",
      cta_course_book: "Book Free Trial Class",

      c1_badge: "Beginner to Advanced",
      c1_title: "Madani Qaida & Nazra Quran with Tajweed",
      c1_desc: "Foundational phonetics and complete Quran reading with proper Tajweed articulation for children and beginners.",
      c1_method: "Live 1-on-1 Classes",
      c1_timer: "Time until next batch: 05 Days : 12 Hours",
      c1_features: "Accurate Makharij, foundational Islamic manners, Salah & daily Duas.",

      c2_badge: "Full-Time / Part-Time",
      c2_title: "Hifz-ul-Quran Memorization Program",
      c2_desc: "Prestigious program to memorize the Holy Quran under systematic daily tracking and individual retention support.",
      c2_method: "Daily Live Sabaq & Sabqi",
      c2_timer: "Registration Active",
      c2_features: "Daily lesson recitation, constant revision and modern digital retention tracking.",

      c3_badge: "Dedicated for Sisters",
      c3_title: "Tajweed & Qira'at Mastery (For Females)",
      c3_desc: "Specially designed for sisters and young girls with expert female Qariyah scholars in full Islamic privacy.",
      c3_method: "100% Certified Female Qariyahs",
      c3_timer: "Limited Seats Available",
      c3_features: "Makharij, Sifat-ul-Huroof, and error-free recitation.",

      c4_badge: "Understanding Islam",
      c4_title: "Fahm-ul-Quran (Translation & Tafseer)",
      c4_desc: "Comprehend the meanings, historical context, and divine rulings of the Quran to enrich everyday life.",
      c4_method: "Weekly Live Interactive Classes",
      c4_timer: "New Batch starting Oct 20",
      c4_features: "Word-for-word analysis, contextual explanation, and authentic tafseer.",

      c5_badge: "Duration: 3 Months",
      c5_title: "Kids Islamic Studies & Masnoon Duas",
      c5_desc: "Nurturing young minds with foundational Islamic beliefs, prophetic stories, purity rulings, and essential supplications.",
      c5_method: "Interactive & Engaging Online Sessions",
      c5_timer: "Enrollment Open",
      c5_features: "Masnoon Duas, Step-by-step Salah, Taharah principles, and moral Islamic stories.",

      // Admission Process
      process_tag: "Quick & Simple Onboarding",
      process_title: "Complete Admission in 3 Easy Steps",
      process_desc: "Starting your online Quran journey with us is transparent, fast, and completely free of registration fees.",
      step1_title: "Connect via Form or WhatsApp",
      step1_desc: "Submit your details via the admission form or send an instant message to our WhatsApp support number.",
      step2_title: "Experience 3-Day Free Trial",
      step2_desc: "Attend a live 1-on-1 trial class at your preferred day and time with a certified male or female scholar.",
      step3_title: "Confirm Enrollment & Begin",
      step3_desc: "Once delighted with the trial experience, finalize your flexible weekly timetable and start regular classes.",
      cta_start_step: "Book Your 3-Day Free Trial Today",

      // Why Choose Us
      why_tag: "Our Distinction",
      why_title: "Why Choose Noor-ul-Ilm Institute?",
      why_desc: "We blend traditional pedagogical rigor with contemporary online convenience to provide an inspiring educational sanctuary.",
      why1_title: "🌸 Dedicated Female Scholars",
      why1_desc: "Safe, dignified, and comfortable learning environment for ladies and young girls with verified female teachers.",
      why2_title: "⏰ 24/7 Flexible Timings",
      why2_desc: "Custom scheduling aligned with any global timezone (UK, USA, Canada, Gulf, Australia, and beyond).",
      why3_title: "📊 Monthly Progress Reports",
      why3_desc: "Detailed academic reviews and feedback reports shared with parents every month.",
      why4_title: "📜 Online Verified Certificates",
      why4_desc: "Official institute credentials issued upon course completion with instant digital verification.",

      // About Us
      about_tag: "Our Identity & Mission",
      about_main_title: "Noor-ul-Ilm Institute: International Online Quran Academy",
      founder_msg_title: "Founder's Message",
      founder_msg_text: '"Our sacred mission is to bring the divine light, accurate Tajweed, and profound comprehension of the Holy Quran to Muslim households worldwide. We have built a safe, modern, and accessible educational sanctuary where every child, sister, and brother can learn with dignity and excellence."',
      teachers_pillar_title: "Our Qualified Scholars & Qaris",
      teachers_pillar_desc: "All faculty members hold authentic Shahadat-ul-Alamiyyah and Sanad in Tajweed, trained in patient and compassionate teaching methodologies.",
      shariah_pillar_title: "Shariah & Legal Standing",
      shariah_pillar_desc: "Noor-ul-Ilm operates in strict compliance with authentic Islamic principles, prioritizing modesty, ethical integrity, and academic reliability.",
      scholarship_title: "Scholarship & Need-Based Aid Program",
      scholarship_desc: "Financial difficulty should never be an obstacle in learning the Quran. Noor-ul-Ilm provides generous discounts and fully funded sponsorships for deserving students.",

      // Portal & Support
      portal_tag: "Digital Ecosystem",
      portal_title: "Online Help Center & Student Portal",
      portal_desc: "Seamless connectivity for students, parents, and scholars with live lesson links, progress tracking, and instant support.",
      portal_student_title: "Student Portal (Login)",
      portal_student_desc: "Access live class Zoom/WhatsApp links, daily Sabaq assignments, and stay connected with your teacher.",
      btn_student_portal: "Open Student Portal →",
      portal_parent_title: "Parent Portal (Login)",
      portal_parent_desc: "Monitor your child's attendance records, Tajweed assessments, and monthly performance reports.",
      btn_parent_portal: "Parent Dashboard →",
      portal_wa_title: "24/7 WhatsApp Support",
      portal_wa_desc: "Direct round-the-clock coordination for scheduling inquiries, make-up classes, or technical guidance.",
      portal_email_title: "Email Help Desk",
      portal_email_desc: "Reach our academic coordination desk for admissions documentation, certifications, and formal inquiries.",

      // Verification
      verify_tag: "Online Credential Verification",
      verify_title: "Online Certificate Verification System",
      verify_desc: "Instantly verify any authentic graduation certificate issued by Noor-ul-Ilm Institute by entering the Certificate ID below.",
      btn_verify_cert: "Verify Certificate",
      demo_hint_label: "Click a demo ID to test:",
      cert_status_idle_title: "Enter Certificate ID to Verify",
      cert_status_idle_desc: "The system will query our verified database to authenticate student name, course title, and completion date.",
      cert_status_verified: "Official Verified Certificate",
      cert_label_name: "Student Name:",
      cert_label_course: "Program:",
      cert_label_grade: "Grade Conferred:",
      cert_label_date: "Issue Date:",
      cert_issuer: "Issued by: Noor-ul-Ilm Institute - Academic Registry",
      cert_invalid_title: "Certificate Record Not Found",
      cert_invalid_desc: "Please double check the entered Certificate ID or reach out to our administration on WhatsApp.",

      // Reviews
      reviews_tag: "Parent & Student Feedback",
      reviews_title: "Student & Parent Testimonials",
      reviews_desc: "Alhamdulillah, students and parents across the globe trust our dedicated faculty, ethical atmosphere, and personalized attention.",
      rev_1_quote: '"Living in the UK, finding a reliable Qari who connects with kids was difficult. The teacher from Noor-ul-Ilm Institute taught both my children with such warmth and patience. They now read fluently. Alhamdulillah!"',
      rev_1_author: "Imran Rasheed (Parent)",
      rev_1_loc: "🇬🇧 Birmingham, United Kingdom (UK)",
      rev_2_quote: '"I specifically requested a female teacher for my teenage daughter. Her Qariyah has impeccable Tajweed and the classes provide complete comfort and privacy. I wholeheartedly recommend this institute."',
      rev_2_author: "Fatima Khalid (Parent)",
      rev_2_loc: "🇺🇸 Dallas, Texas, USA",
      rev_3_quote: '"Balancing a demanding corporate career left me little time for Islamic studies. The flexible night classes at Noor-ul-Ilm allowed me to systematically study Tafseer with an authentic scholar. Exceptional quality."',
      rev_3_author: "Tariq Mehmood (Student)",
      rev_3_loc: "🇦🇪 Dubai, United Arab Emirates (UAE)",

      // Contact Form
      contact_tag: "Admission Registration",
      contact_title: "Book Your 3-Day Free Trial Class",
      contact_desc: "Submit your details below and our academic coordinator will message your WhatsApp within 1–2 hours to schedule your personalized trial session.",
      label_phone_wa: "Phone & WhatsApp:",
      label_email: "Email Address:",
      label_hours: "Working Hours:",
      val_hours: "Available 24/7 across all global timezones",
      wa_quick_title: "Instant WhatsApp Admission",
      wa_quick_desc: "Prefer booking directly through WhatsApp? Tap below to start an instant chat:",
      btn_wa_chat: "Chat with Us on WhatsApp",
      form_title: "Free Trial Admission Form",
      lbl_student_name: "Student Full Name *",
      lbl_parent_name: "Parent / Guardian Name",
      lbl_age: "Student Age *",
      lbl_country: "Country & City *",
      lbl_course: "Selected Program *",
      opt_select_course: "Select a course...",
      opt_c1: "Madani Qaida & Nazra Quran with Tajweed",
      opt_c2: "Hifz-ul-Quran Memorization Program",
      opt_c3: "Tajweed & Qira'at Mastery (For Females)",
      opt_c4: "Fahm-ul-Quran (Translation & Tafseer)",
      opt_c5: "Kids Islamic Studies & Masnoon Duas",
      lbl_teacher_pref: "Teacher Preference *",
      opt_t_male: "Male Scholar (Qari Sahib)",
      opt_t_female: "Female Scholar (Qariyah Sahiba)",
      opt_t_any: "Any Certified Scholar",
      lbl_days: "Preferred Days *",
      opt_d_3: "3 Days / Week",
      opt_d_5: "5 Days / Week",
      opt_d_week: "Weekend Only (Sat & Sun)",
      lbl_time: "Preferred Time Slot *",
      lbl_whatsapp: "WhatsApp Number (with Country Code) *",
      lbl_email_field: "Email Address",
      lbl_message: "Additional Notes or Questions (Optional)",
      btn_submit_trial: "[ Apply for Free Trial Now ]",
      success_title: "Masha'Allah! Your request has been received.",
      success_desc: "Our academic coordinator will reach out on your WhatsApp shortly with your trial class details. Jazakum Allahu Khairan.",

      // Footer
      footer_about: "Noor-ul-Ilm Institute – A trusted global academy for authentic Quranic and Islamic education.",
      footer_lbl_phone: "📞 Phone / WhatsApp:",
      footer_lbl_email: "✉️ Email:",
      footer_lbl_web: "🌐 Website:",
      footer_links_title: "Important Links",
      f_link_courses: "All Courses",
      f_link_trial: "Free Trial",
      f_link_females: "Female Scholars",
      f_link_verify: "Certificate Verification",
      f_link_privacy: "Privacy Policy",
      f_link_terms: "Terms & Conditions",
      footer_courses_title: "Our Programs",
      footer_social_title: "Social & Community",
      footer_social_desc: "Follow our social channels for Tajweed lessons, educational lectures, and institute updates:",
      soc_facebook: "Facebook",
      soc_youtube: "YouTube",
      soc_instagram: "Instagram",
      soc_whatsapp: "WhatsApp Community",
      copyright: "© 2026 Noor-ul-Ilm Institute. All Rights Reserved.",
      shariah_tagline: "Authentic Quranic Education in Strict Accordance with Shariah Principles",

      // Admission Countdown Modal
      modal_countdown_title: "⏳ Online Quran Courses - Time Remaining for New Batch Commencement",
      cd_days: "Days",
      cd_hours: "Hours",
      cd_minutes: "Mins",
      cd_seconds: "Secs",
      m_lbl_batch: "Batch:",
      m_val_batch: "Batch #01 (Batch #01)",
      m_lbl_start: "Commencement Date:",
      m_val_start: "11 October 2026",
      m_lbl_fac: "Facilities:",
      m_val_fac: "Certified Male & Female Scholars | 100% 1-on-1 Individual Focus",
      m_lbl_fee: "Hadya / Fee:",
      m_val_fee: "Affordable fee | Need-based concessions & scholarships available",
      modal_cta_apply: "[ Apply for Free Trial Now ]",
      modal_close_text: "View Later (Close)",

      // Student / Parent Modal
      student_login_title: "Student Portal (Login)",
      student_login_sub: "Access your virtual classroom via your Student ID & Password.",
      lbl_student_id: "Student ID",
      lbl_password: "Password",
      btn_login_submit: "Sign In",
      parent_login_title: "Parent Portal (Login)",
      parent_login_sub: "Access your child's monthly progress and attendance.",
      lbl_parent_phone: "Registered WhatsApp Number",
      btn_check_report: "View Report",

      // Privacy / Terms Modal
      privacy_modal_title: "Privacy Policy",
      privacy_text_1: "Noor-ul-Ilm Institute treats student, parent, and family privacy with the utmost sanctity.",
      privacy_text_2: "Complete confidentiality and Islamic privacy are preserved in all classes for sisters and children. No personal data is ever shared with third parties.",
      terms_modal_title: "Terms & Conditions",
      terms_text_1: "1. Every registered student receives a 3-day complimentary trial class before any fee commitment.",
      terms_text_2: "2. Classes are held live 1-on-1 according to the mutually confirmed timetable.",
      terms_text_3: "3. Monthly fees are handled transparently, with full scholarship support for deserving families.",
      float_wa_tooltip: "Admissions Chat"
    }
  };

  /* ==========================================================================
     2. LANGUAGE SWITCHER IMPLEMENTATION
     ========================================================================== */
  let currentLang = 'ur';

  const setLanguage = (lang) => {
    if (!translations[lang]) return;
    currentLang = lang;

    // 1. Update HTML dir and lang
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
    document.body.className = `lang-${lang}`;

    // 2. Update all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // 3. Update input placeholders
    const placeholders = {
      ur: {
        cert_input_placeholder: "سرٹیفکیٹ آئی ڈی درج کریں (مثلاً: NUI-2026-8841)",
        plh_student_name: "طالب علم کا پورا نام درج کریں",
        plh_parent_name: "والد یا سرپرست کا نام",
        plh_age: "مثلاً: 10 سال",
        plh_country: "مثلاً: برطانیہ، امریکہ، پاکستان",
        plh_time: "مثلاً: شام 7:00 بجے (اپنے ٹائم زون کے مطابق)",
        plh_message: "اگر کوئی مخصوص خواہش یا سوال ہو تو یہاں لکھیں..."
      },
      en: {
        cert_input_placeholder: "Enter Certificate ID (e.g. NUI-2026-8841)",
        plh_student_name: "Enter full name of student",
        plh_parent_name: "Parent or guardian name",
        plh_age: "e.g. 10 years",
        plh_country: "e.g. UK, USA, Pakistan",
        plh_time: "e.g. 7:00 PM (In your local timezone)",
        plh_message: "Any specific notes, questions, or requests..."
      }
    };

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (placeholders[lang] && placeholders[lang][key]) {
        el.placeholder = placeholders[lang][key];
      }
    });

    // 4. Update language switcher UI buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // 5. Update dynamic parts (like course finder result if already shown)
    if (finderResultState.hasCalculated) {
      updateFinderResultDisplay();
    }
  };

  // Attach event listeners to all language switcher buttons (header + drawer)
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  /* ==========================================================================
     3. LIVE ADMISSION COUNTDOWN TIMER
     Target: October 11, 2026 00:00:00 (Matches prompt specification)
     ========================================================================== */
  const cdDays = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMinutes = document.getElementById('cdMinutes');
  const cdSeconds = document.getElementById('cdSeconds');

  // Target commencement date
  const targetDate = new Date('2026-10-11T00:00:00');

  const updateCountdown = () => {
    const now = new Date();
    let diff = targetDate.getTime() - now.getTime();

    // If target has passed or is very close, give a realistic rolling window of 5 days, 12 hours
    if (diff <= 0) {
      diff = (5 * 24 * 60 * 60 + 12 * 60 * 60 + 35 * 60 + 20) * 1000;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const pad = (n) => (n < 10 ? `0${n}` : n);

    if (cdDays) cdDays.textContent = pad(days);
    if (cdHours) cdHours.textContent = pad(hours);
    if (cdMinutes) cdMinutes.textContent = pad(minutes);
    if (cdSeconds) cdSeconds.textContent = pad(seconds);
  };

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Real-time GMT clock in hero visual badge
  const liveTimeBadge = document.getElementById('liveTimeBadge');
  const updateHeroLiveTime = () => {
    if (!liveTimeBadge) return;
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const mins = String(now.getUTCMinutes()).padStart(2, '0');
    const secs = String(now.getUTCSeconds()).padStart(2, '0');
    liveTimeBadge.textContent = `${hours}:${mins}:${secs} GMT`;
  };
  setInterval(updateHeroLiveTime, 1000);
  updateHeroLiveTime();

  /* ==========================================================================
     4. ADMISSION COUNTDOWN MODAL TRIGGERING
     ========================================================================== */
  const countdownModal = document.getElementById('countdownModal');
  const closeCountdownModalBtn = document.getElementById('closeCountdownModalBtn');
  const modalDismissLink = document.getElementById('modalDismissLink');
  const openCountdownModalBtn = document.getElementById('openCountdownModalBtn');
  const modalApplyBtn = document.getElementById('modalApplyBtn');

  const openCountdownModal = () => {
    if (countdownModal) countdownModal.classList.add('active');
  };

  const closeCountdownModal = () => {
    if (countdownModal) countdownModal.classList.remove('active');
  };

  if (openCountdownModalBtn) {
    openCountdownModalBtn.addEventListener('click', openCountdownModal);
  }

  if (closeCountdownModalBtn) {
    closeCountdownModalBtn.addEventListener('click', closeCountdownModal);
  }

  if (modalDismissLink) {
    modalDismissLink.addEventListener('click', closeCountdownModal);
  }

  if (modalApplyBtn) {
    modalApplyBtn.addEventListener('click', () => {
      closeCountdownModal();
    });
  }

  // Auto-open admission modal once after smooth delay (800ms)
  setTimeout(() => {
    openCountdownModal();
  }, 800);

  // Close when clicking modal backdrop
  if (countdownModal) {
    countdownModal.addEventListener('click', (e) => {
      if (e.target === countdownModal) {
        closeCountdownModal();
      }
    });
  }

  /* ==========================================================================
     5. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  const openMobileNav = () => {
    if (mobileNavDrawer && mobileOverlay) {
      mobileNavDrawer.classList.add('active');
      mobileOverlay.classList.add('active');
      mobileNavDrawer.setAttribute('aria-hidden', 'false');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }
  };

  const closeMobileNav = () => {
    if (mobileNavDrawer && mobileOverlay) {
      mobileNavDrawer.classList.remove('active');
      mobileOverlay.classList.remove('active');
      mobileNavDrawer.setAttribute('aria-hidden', 'true');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
  };

  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileNav);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileNav);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileNav);

  // Close drawer on clicking any nav link
  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  /* ==========================================================================
     6. KEY STATISTICS COUNTER ANIMATION
     ========================================================================== */
  const statCounters = document.querySelectorAll('.stat-counter');
  let statsAnimated = false;

  const animateCounters = () => {
    statCounters.forEach((counter) => {
      const target = +counter.getAttribute('data-target');
      const duration = 1600; // ms
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOut * target);

        counter.textContent = currentVal.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  const statsSection = document.getElementById('statsSection');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(statsSection);
  } else {
    animateCounters();
  }

  /* ==========================================================================
     7. INTERACTIVE 3-STEP COURSE FINDER
     ========================================================================== */
  const finderSteps = [
    document.getElementById('finderStep1'),
    document.getElementById('finderStep2'),
    document.getElementById('finderStep3'),
    document.getElementById('finderStep4')
  ];

  const progressSteps = document.querySelectorAll('.finder-progress .progress-step');

  const showFinderStep = (stepNumber) => {
    finderSteps.forEach((step, idx) => {
      if (step) {
        step.classList.toggle('active', idx === stepNumber - 1);
      }
    });

    progressSteps.forEach((pStep, idx) => {
      pStep.classList.toggle('active', idx <= stepNumber - 1);
    });
  };

  // Next / Prev buttons
  document.querySelectorAll('.finder-next-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const nextStep = parseInt(e.currentTarget.getAttribute('data-next'), 10);
      showFinderStep(nextStep);
    });
  });

  document.querySelectorAll('.finder-prev-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const prevStep = parseInt(e.currentTarget.getAttribute('data-prev'), 10);
      showFinderStep(prevStep);
    });
  });

  const finderResultState = {
    hasCalculated: false,
    audience: 'kids',
    goal: 'qaida',
    schedule: '3days'
  };

  const calculateCourseFinder = () => {
    const audience = document.querySelector('input[name="finder_audience"]:checked')?.value || 'kids';
    const goal = document.querySelector('input[name="finder_goal"]:checked')?.value || 'qaida';
    const schedule = document.querySelector('input[name="finder_schedule"]:checked')?.value || '3days';

    finderResultState.hasCalculated = true;
    finderResultState.audience = audience;
    finderResultState.goal = goal;
    finderResultState.schedule = schedule;

    updateFinderResultDisplay();
    showFinderStep(4);
  };

  const updateFinderResultDisplay = () => {
    const { audience, goal, schedule } = finderResultState;

    const titleEl = document.getElementById('resultCourseTitle');
    const descEl = document.getElementById('resultCourseDesc');
    const teacherEl = document.getElementById('resultTeacherType');
    const scheduleEl = document.getElementById('resultSchedule');

    let recommendedCourseUrdu = "مدنی قاعدہ و ناظرہ قرآن مع تجوید";
    let recommendedCourseEn = "Madani Qaida & Nazra Quran with Tajweed";
    let descUrdu = "آپ کے انتخاب کی بنیاد پر یہ کورس آپ کے اہداف اور وقت کے عین مطابق ہے۔ ہمارے سند یافتہ اساتذہ آپ کے ساتھ 1-on-1 کلاس کے لیے تیار ہیں۔";
    let descEn = "Based on your criteria, this course matches your learning goals perfectly. Our certified scholars are ready for 1-on-1 personalized sessions.";

    if (goal === 'hifz') {
      recommendedCourseUrdu = "حفظِ قرآن کریم (Hifz-ul-Quran Program)";
      recommendedCourseEn = "Hifz-ul-Quran Memorization Program";
    } else if (goal === 'tajweed' && audience === 'females') {
      recommendedCourseUrdu = "تجوید و قرأت ماسٹری (مخصوص برائے خواتین)";
      recommendedCourseEn = "Tajweed & Qira'at Mastery (For Females)";
    } else if (goal === 'tafseer') {
      recommendedCourseUrdu = "فہمِ قرآن (ترجمہ و تفسیرِ قرآن)";
      recommendedCourseEn = "Fahm-ul-Quran (Translation & Tafseer)";
    } else if (goal === 'duas' || (goal === 'arabic' && audience === 'kids')) {
      recommendedCourseUrdu = "کڈز اسلامک سٹڈیز و مسنون دعائیں";
      recommendedCourseEn = "Kids Islamic Studies & Masnoon Duas";
    }

    if (titleEl) {
      titleEl.textContent = currentLang === 'ur' ? recommendedCourseUrdu : recommendedCourseEn;
    }

    if (descEl) {
      descEl.textContent = currentLang === 'ur' ? descUrdu : descEn;
    }

    if (teacherEl) {
      if (audience === 'females') {
        teacherEl.textContent = currentLang === 'ur' ? "سند یافتہ فی میل قاریہ صاحبہ" : "Certified Female Qariyah";
      } else {
        teacherEl.textContent = currentLang === 'ur' ? "سند یافتہ میل یا فی میل استاد" : "Certified Male/Female Scholar";
      }
    }

    if (scheduleEl) {
      let schText = "فلیکسیبل - آپ کی پسند کے اوقات";
      if (schedule === '3days') schText = currentLang === 'ur' ? "ہفتہ وار 3 دن (3 Days / Week)" : "3 Days / Week";
      if (schedule === '5days') schText = currentLang === 'ur' ? "ہفتہ وار 5 دن (5 Days / Week)" : "5 Days / Week";
      if (schedule === 'weekend') schText = currentLang === 'ur' ? "صرف اختتامِ ہفتہ (Weekend Slots)" : "Weekend Slots";
      scheduleEl.textContent = schText;
    }

    // Connect recommended course to admission form
    const applyFoundBtn = document.getElementById('applyFoundCourseBtn');
    if (applyFoundBtn) {
      applyFoundBtn.onclick = () => {
        prefillCourseInForm(recommendedCourseUrdu);
      };
    }
  };

  const finderCalculateBtn = document.getElementById('finderCalculateBtn');
  if (finderCalculateBtn) {
    finderCalculateBtn.addEventListener('click', calculateCourseFinder);
  }

  const finderResetBtn = document.getElementById('finderResetBtn');
  if (finderResetBtn) {
    finderResetBtn.addEventListener('click', () => {
      showFinderStep(1);
    });
  }

  /* ==========================================================================
     8. COURSE BOOKING QUICK TRIGGER (PRE-FILL ADMISSION FORM)
     ========================================================================== */
  const preferredCourseSelect = document.getElementById('preferredCourse');

  const prefillCourseInForm = (courseName) => {
    if (!preferredCourseSelect) return;

    if (courseName.includes("قاعدہ") || courseName.includes("Qaida")) {
      preferredCourseSelect.value = "madani_qaida";
    } else if (courseName.includes("حفظ") || courseName.includes("Hifz")) {
      preferredCourseSelect.value = "hifz";
    } else if (courseName.includes("خواتین") || courseName.includes("Females")) {
      preferredCourseSelect.value = "tajweed_females";
      const teacherGender = document.getElementById('teacherGender');
      if (teacherGender) teacherGender.value = "female";
    } else if (courseName.includes("تفسیر") || courseName.includes("Tafseer")) {
      preferredCourseSelect.value = "tafseer";
    } else if (courseName.includes("کڈز") || courseName.includes("Kids")) {
      preferredCourseSelect.value = "kids_islamic";
    }

    // Scroll to contact form smoothly
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  document.querySelectorAll('.book-course-trigger').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const course = e.currentTarget.getAttribute('data-course');
      if (course) prefillCourseInForm(course);
    });
  });

  /* ==========================================================================
     9. ONLINE CERTIFICATE VERIFICATION
     ========================================================================== */
  const certVerifyForm = document.getElementById('certVerifyForm');
  const certIdInput = document.getElementById('certIdInput');
  const certPlaceholderState = document.getElementById('certPlaceholderState');
  const verifiedCertCard = document.getElementById('verifiedCertCard');
  const invalidCertCard = document.getElementById('invalidCertCard');

  // Result display fields
  const resCertCode = document.getElementById('resCertCode');
  const resStudentName = document.getElementById('resStudentName');
  const resCourse = document.getElementById('resCourse');
  const resGrade = document.getElementById('resGrade');
  const resDate = document.getElementById('resDate');

  // Authentic demo records database for demonstration
  const certificatesDB = {
    'NUI-2026-8841': {
      code: 'NUI-2026-8841',
      nameUrdu: 'محمد عبد اللہ',
      nameEn: 'Muhammad Abdullah',
      courseUrdu: 'مدنی قاعدہ و ناظرہ قرآن مع تجوید',
      courseEn: 'Madani Qaida & Nazra Quran with Tajweed',
      gradeUrdu: 'ممتاز (A+ Grade)',
      gradeEn: 'Exemplary (A+ Grade)',
      dateUrdu: '15 ستمبر 2026',
      dateEn: 'September 15, 2026'
    },
    'NUI-2025-4420': {
      code: 'NUI-2025-4420',
      nameUrdu: 'عائشہ صدیقہ',
      nameEn: 'Ayesha Siddiqua',
      courseUrdu: 'تجوید و قرأت ماسٹری (مخصوص برائے خواتین)',
      courseEn: 'Tajweed & Qira\'at Mastery (For Females)',
      gradeUrdu: 'اعلیٰ (A Grade)',
      gradeEn: 'Distinction (A Grade)',
      dateUrdu: '10 نومبر 2025',
      dateEn: 'November 10, 2025'
    }
  };

  const handleVerify = (certCode) => {
    const cleanCode = certCode.trim().toUpperCase();

    if (certPlaceholderState) certPlaceholderState.style.display = 'none';

    if (certificatesDB[cleanCode]) {
      const data = certificatesDB[cleanCode];
      if (resCertCode) resCertCode.textContent = data.code;
      if (resStudentName) resStudentName.textContent = currentLang === 'ur' ? data.nameUrdu : data.nameEn;
      if (resCourse) resCourse.textContent = currentLang === 'ur' ? data.courseUrdu : data.courseEn;
      if (resGrade) resGrade.textContent = currentLang === 'ur' ? data.gradeUrdu : data.gradeEn;
      if (resDate) resDate.textContent = currentLang === 'ur' ? data.dateUrdu : data.dateEn;

      if (verifiedCertCard) verifiedCertCard.style.display = 'block';
      if (invalidCertCard) invalidCertCard.style.display = 'none';
    } else {
      if (verifiedCertCard) verifiedCertCard.style.display = 'none';
      if (invalidCertCard) invalidCertCard.style.display = 'block';
    }
  };

  if (certVerifyForm && certIdInput) {
    certVerifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleVerify(certIdInput.value);
    });
  }

  // Quick-test hint buttons
  document.querySelectorAll('.hint-badge-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const cert = e.currentTarget.getAttribute('data-cert');
      if (cert && certIdInput) {
        certIdInput.value = cert;
        handleVerify(cert);
      }
    });
  });

  /* ==========================================================================
     10. ADMISSION FORM SUBMISSION & WHATSAPP INTEGRATION
     ========================================================================== */
  const admissionForm = document.getElementById('admissionForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const studentName = document.getElementById('studentName')?.value || '';
      const parentName = document.getElementById('parentName')?.value || '';
      const age = document.getElementById('studentAge')?.value || '';
      const country = document.getElementById('studentCountry')?.value || '';
      const course = document.getElementById('preferredCourse')?.selectedOptions[0]?.text || '';
      const days = document.getElementById('preferredDays')?.selectedOptions[0]?.text || '';
      const time = document.getElementById('preferredTime')?.value || '';
      const whatsapp = document.getElementById('whatsappNumber')?.value || '';

      // Show immediate pleasant confirmation
      if (formSuccessAlert) {
        formSuccessAlert.style.display = 'flex';
        formSuccessAlert.scrollIntoView({ behavior: 'smooth' });
      }

      // Pre-format a direct WhatsApp message link
      const waMessage = encodeURIComponent(
        `Assalam-o-Alaikum Noor-ul-Ilm Institute!\n\n` +
        `I have submitted an admission request:\n` +
        `• Student Name: ${studentName}\n` +
        `• Parent Name: ${parentName}\n` +
        `• Age: ${age}\n` +
        `• Country: ${country}\n` +
        `• Course: ${course}\n` +
        `• Days: ${days}\n` +
        `• Preferred Time: ${time}\n` +
        `• WhatsApp: ${whatsapp}\n\n` +
        `Kindly schedule our 3-Day Free Trial class.`
      );

      // Offer to open WhatsApp after 1.5 seconds
      setTimeout(() => {
        const proceedWA = confirm(
          currentLang === 'ur'
            ? "کیا آپ یہ درخواست براہِ راست واٹس ایپ پر بھی بھیجنا چاہتے ہیں؟"
            : "Would you like to send this admission request directly to WhatsApp as well?"
        );
        if (proceedWA) {
          window.open(`https://wa.me/923144033926?text=${waMessage}`, '_blank');
        }
      }, 1500);

      admissionForm.reset();
    });
  }

  /* ==========================================================================
     11. AUDIO TAJWEED RECITATION WAVEFORM DEMO
     ========================================================================== */
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const waveform = document.getElementById('waveform');
  let isPlayingAudio = false;

  if (audioToggleBtn && waveform) {
    const playIcon = audioToggleBtn.querySelector('.icon-play');
    const pauseIcon = audioToggleBtn.querySelector('.icon-pause');

    audioToggleBtn.addEventListener('click', () => {
      isPlayingAudio = !isPlayingAudio;
      waveform.classList.toggle('playing', isPlayingAudio);

      if (isPlayingAudio) {
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
      } else {
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
      }
    });
  }

  /* ==========================================================================
     12. GENERIC MODALS (STUDENT LOGIN, PARENT LOGIN, PRIVACY, TERMS)
     ========================================================================== */
  const openModalTriggers = document.querySelectorAll('.open-modal-trigger');
  const genericCloseBtns = document.querySelectorAll('.generic-modal-close');

  openModalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = e.currentTarget.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) targetModal.classList.add('active');
    });
  });

  genericCloseBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const modal = e.currentTarget.closest('.modal-backdrop');
      if (modal) modal.classList.remove('active');
    });
  });

  // Close any modal when clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // ESC key closes any open modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach((modal) => {
        modal.classList.remove('active');
      });
      closeMobileNav();
    }
  });

  // Set default initial language
  setLanguage('ur');

});
