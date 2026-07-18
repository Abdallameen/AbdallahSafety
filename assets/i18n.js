/*
 * i18n.js — كل نصوص الواجهة بالعربية والإنجليزية في مكان واحد.
 * أي نص جديد في أي أداة يجب أن يُضاف هنا، ولا يُكتب مباشرة في HTML/JS.
 */
const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",
    siteName: "عُدّة أخصائي سلامة الغذاء",
    siteTagline: "أدوات مجانية عملية لأخصائيي سلامة الغذاء — تعمل بدون إنترنت",
    nav: {
      home: "الرئيسية",
      langToggle: "English",
      themeLight: "الوضع الفاتح",
      themeDark: "الوضع الداكن",
      print: "طباعة",
      back: "رجوع للرئيسية"
    },
    home: {
      heroTitle: "عُدّة أخصائي سلامة الغذاء",
      heroSubtitle: "أدوات مجانية عملية لأخصائيي سلامة الغذاء — تعمل بدون إنترنت",
      heroNote: "مشروع خيري مجاني بالكامل — لا حسابات، لا خوادم، لا رسوم.",
      toolsTitle: "الأدوات",
      comingSoonBadge: "قريباً",
      openTool: "افتح الأداة",
      aboutTitle: "عن المشروع",
      aboutText: "هذا المشروع صدقة جارية — مجاني بالكامل للأبد، لا يجمع أي بيانات عنك، وكل ما تُدخله وتحفظه يبقى محفوظاً على جهازك فقط داخل متصفحك (localStorage) ولا يُرسل لأي خادم.",
      aboutPoint1: "مجاني بالكامل ولن يتحول لمدفوع مطلقاً.",
      aboutPoint2: "لا يجمع أي بيانات شخصية ولا يوجد تتبع.",
      aboutPoint3: "يعمل بدون إنترنت بعد أول زيارة (PWA).",
      aboutPoint4: "مفتوح المصدر — يمكن لأي مطور إضافة أداة جديدة بسهولة.",
      tools: {
        sanitizer: {
          name: "حاسبة المطهرات",
          desc: "تحضير محاليل التطهير بالتركيز الصحيح، وفحص المحاليل الجاهزة، والمدى المرجعي وزمن التلامس."
        },
        temperature: {
          name: "دليل درجات الحرارة",
          desc: "دليل مرجعي لدرجات حرارة الطبخ والتخزين والاستلام، وفاحص قراءات فوري."
        },
        haccp: {
          name: "شجرة قرار HACCP",
          desc: "أداة تفاعلية لتحديد نقاط التحكم الحرجة وفق شجرة قرار الكودكس."
        },
        risk: {
          name: "مصفوفة المخاطر",
          desc: "تقييم الاحتمالية والشدة لتحديد مستوى الخطورة وأولوية المعالجة."
        },
        haccpPlan: {
          name: "معالج خطة HACCP",
          desc: "بناء خطة HACCP كاملة خطوة بخطوة قابلة للطباعة."
        }
      }
    },
    footer: {
      charity: "أداة مجانية لوجه الله — تحقق دائماً من متطلبات جهتك الرقابية",
      disclaimer: "هذه الأداة تساعد في اتخاذ القرار ولا تُغني إطلاقاً عن الحكم المهني المختص أو الاشتراطات الرقابية الرسمية في بلدك أو منشأتك.",
      dataNote: "بياناتك المحفوظة تبقى على جهازك فقط ولا تُرسل لأي خادم.",
      madeWith: "صُنعت بلا مقابل لخدمة مجتمع سلامة الغذاء العربي."
    },
    common: {
      required: "هذا الحقل مطلوب",
      invalidNumber: "الرجاء إدخال رقم صحيح",
      mustBePositive: "القيمة يجب أن تكون أكبر من صفر",
      outOfRange: "القيمة خارج النطاق المنطقي، الرجاء التحقق",
      save: "حفظ",
      saveAsRecord: "حفظ كسجل",
      print: "طباعة",
      printRecord: "طباعة كسجل",
      exportCsv: "تصدير CSV",
      clearAll: "حذف الكل",
      delete: "حذف",
      date: "التاريخ",
      time: "الوقت",
      close: "إغلاق",
      calculate: "احسب",
      reset: "تفريغ",
      howWeCalculated: "كيف حسبناها؟",
      recordSheetTitle: "سجل مراقبة",
      executedBy: "اسم المنفّذ",
      signature: "التوقيع",
      recordDate: "التاريخ",
      noRecords: "لا توجد سجلات محفوظة بعد.",
      confirmDelete: "هل تريد حذف هذا السجل؟",
      confirmClearAll: "هل تريد حذف جميع السجلات المحفوظة؟ لا يمكن التراجع عن هذا الإجراء.",
      copied: "تم النسخ",
      savedSuccess: "تم الحفظ بنجاح",
      appName: "عُدّة أخصائي سلامة الغذاء"
    },
    sanitizer: {
      pageTitle: "حاسبة المطهرات",
      pageDesc: "تحضير محاليل التطهير بالتركيز الصحيح، فحص المحاليل الجاهزة، والمدى المرجعي وزمن التلامس.",
      tabs: {
        recipe: "تحضير محلول",
        check: "فحص تركيز جاهز",
        reference: "المدى المرجعي",
        log: "سجل التحضيرات"
      },
      sanitizerType: "نوع المطهر",
      types: {
        chlorine: "كلور (هيبوكلوريت الصوديوم)",
        quat: "رباعي الأمونيوم (Quat)",
        paa: "حمض البيرأسيتيك (PAA)",
        alcohol: "كحول",
        iodine: "يود (Iodophor)"
      },
      productConcType: "طريقة تحديد التركيز الأصلي",
      byPercent: "نسبة مئوية (%)",
      byPpm: "أجزاء بالمليون (ppm)",
      productConcValue: "تركيز المنتج التجاري",
      presetLabel: "تركيزات شائعة",
      presetCustom: "تركيز مخصص",
      presetHousehold5: "كلور منزلي 5%",
      presetCommercial10: "كلور تجاري 10%",
      presetCommercial12: "كلور تجاري 12%",
      targetPpm: "التركيز المطلوب (ppm)",
      finalVolume: "حجم المحلول النهائي",
      volumeUnit: "وحدة الحجم",
      liters: "لتر",
      gallons: "جالون (أمريكي)",
      recipeResultTitle: "الوصفة الجاهزة",
      recipeSentence: "أضف {amount} من {sanitizer} إلى {water} من الماء للحصول على {volume} بتركيز {ppm} جزء بالمليون تقريباً.",
      sanitizerAmount: "كمية المطهر",
      waterAmount: "كمية الماء",
      howCalcTitle: "المعادلة المستخدمة: C1 × V1 = C2 × V2",
      howCalcBody: "C1 = تركيز المنتج الأصلي، V1 = الحجم المطلوب من المطهر (المجهول)، C2 = التركيز المستهدف، V2 = الحجم النهائي للمحلول.\nإذن: V1 = (C2 × V2) ÷ C1\nثم: كمية الماء = V2 − V1",
      checkAddedVolume: "حجم المطهر المضاف",
      checkWaterVolume: "حجم الماء المضاف",
      checkResultPpm: "التركيز الناتج",
      checkVerdictOk: "✅ ضمن المدى المرجعي الشائع",
      checkVerdictLow: "⚠️ أقل من اللازم للاستخدام المختار",
      checkVerdictHigh: "🔴 أعلى من الآمن للاستخدام المختار",
      checkUseSelect: "استخدام المحلول (للمقارنة بالمدى المرجعي)",
      referenceTitle: "المدى المرجعي وزمن التلامس (مرجع معرفي عام)",
      referenceNote: "هذه قيم إرشادية شائعة الاستخدام (Codex / FDA Food Code) وليست بديلاً عن اشتراطات جهتك الرقابية أو تعليمات الشركة المصنّعة للمطهر.",
      table: {
        use: "الاستخدام",
        contactTime: "زمن التلامس",
        rinse: "يتطلب شطف بماء صالح للشرب"
      },
      uses: {
        foodContact: "أسطح تلامس الغذاء",
        produce: "غسيل الخضار والفواكه",
        floors: "الأرضيات والجدران"
      },
      notRecommended: "غير موصى",
      yes: "نعم",
      no: "لا",
      safety: {
        title: "تحذيرات السلامة",
        neverMix: "⚠️ ممنوع خلط الكلور مع أي حمض (مثل مزيلات الترسبات) أو مع الأمونيا — ينتج غاز الكلورامين السام.",
        ppeTitle: "معدات الوقاية الشخصية الموصى بها",
        ppe: {
          chlorine: "قفازات مقاومة للكيماويات، نظارات واقية، تهوية جيدة، تجنب استنشاق الأبخرة.",
          quat: "قفازات، تجنب ملامسة العين والجلد المباشر، اغسل اليدين بعد الاستخدام.",
          paa: "قفازات ونظارات واقية إلزامية — مادة أكّالة ورائحتها نفاذة، تهوية جيدة.",
          alcohol: "بعيداً عن مصادر اللهب والشرر — قابل للاشتعال، تهوية جيدة.",
          iodine: "قفازات، تجنب ملامسة العين، قد يسبب تلون مؤقت للأسطح والجلد."
        }
      },
      outOfRecommended: "خارج الحدود الموصى بها",
      logTitle: "سجل التحضيرات المحفوظة",
      logEmpty: "لا توجد تحضيرات محفوظة بعد.",
      logCols: {
        dateTime: "التاريخ والوقت",
        type: "النوع",
        ppm: "التركيز (ppm)",
        volume: "الحجم",
        status: "الحالة"
      },
      validation: {
        selectType: "الرجاء اختيار نوع المطهر",
        concTooLow: "تركيز المنتج يجب أن يكون أكبر من صفر",
        concPercentMax: "النسبة المئوية يجب ألا تتجاوز 100%",
        targetTooLow: "التركيز المطلوب يجب أن يكون أكبر من صفر",
        targetExceedsProduct: "التركيز المطلوب أعلى من تركيز المنتج الأصلي — غير ممكن رياضياً",
        volumeTooLow: "حجم المحلول يجب أن يكون أكبر من صفر"
      }
    },
    temperature: {
      pageTitle: "دليل درجات الحرارة",
      pageDesc: "دليل مرجعي لدرجات حرارة الطبخ والتخزين والاستلام، وفاحص قراءات فوري.",
      tabs: {
        guide: "الدليل المرجعي",
        checker: "فاحص القراءة"
      },
      searchPlaceholder: "ابحث (مثال: دجاج، تبريد، استلام...)",
      filterAll: "الكل",
      categories: {
        cooking: "الطبخ",
        storage: "التخزين",
        receiving: "الاستلام",
        cooling: "التبريد السريع"
      },
      dangerZoneTitle: "منطقة الخطر",
      dangerZoneText: "المدى بين 5°م و60°م هو «منطقة الخطر» حيث تتضاعف البكتيريا بسرعة. يجب ألا يبقى الغذاء في هذا المدى أكثر من 4 ساعات إجمالاً.",
      checkerOperation: "نوع العملية",
      operations: {
        cooking: "طبخ",
        cooling: "تبريد",
        receiving: "استلام",
        hotHolding: "حفظ ساخن",
        coldHolding: "حفظ بارد",
        freezing: "تجميد"
      },
      checkerFood: "نوع الغذاء",
      checkerElapsed: "الوقت المنقضي منذ بدء التبريد (ساعة)",
      checkerReading: "القراءة المقاسة (°م)",
      checkerVerdict: "الحكم",
      verdicts: {
        ok: "✅ مطابق",
        warning: "⚠️ حدّي",
        fail: "🔴 غير مطابق"
      },
      correctiveActionLabel: "الإجراء الوقائي / التصحيحي",
      selectFoodFirst: "الرجاء اختيار نوع العملية والغذاء أولاً"
    }
  },

  en: {
    dir: "ltr",
    lang: "en",
    siteName: "Food Safety Specialist Toolkit",
    siteTagline: "Free practical tools for food safety professionals — works offline",
    nav: {
      home: "Home",
      langToggle: "العربية",
      themeLight: "Light mode",
      themeDark: "Dark mode",
      print: "Print",
      back: "Back to home"
    },
    home: {
      heroTitle: "Food Safety Specialist Toolkit",
      heroSubtitle: "Free practical tools for food safety professionals — works offline",
      heroNote: "A free charitable project — no accounts, no servers, no fees.",
      toolsTitle: "Tools",
      comingSoonBadge: "Coming soon",
      openTool: "Open tool",
      aboutTitle: "About this project",
      aboutText: "This project is a lasting charity (Sadaqah Jariyah) — free forever, collects no data about you, and everything you enter or save stays on your own device (localStorage) and is never sent to any server.",
      aboutPoint1: "Completely free, and will never become paid.",
      aboutPoint2: "No personal data collection, no tracking.",
      aboutPoint3: "Works offline after the first visit (PWA).",
      aboutPoint4: "Open source — any developer can easily add a new tool.",
      tools: {
        sanitizer: {
          name: "Sanitizer Calculator",
          desc: "Prepare sanitizing solutions at the correct concentration, check ready-made solutions, and reference contact-time ranges."
        },
        temperature: {
          name: "Temperature Guide",
          desc: "Reference for cooking, storage and receiving temperatures, plus an instant reading checker."
        },
        haccp: {
          name: "HACCP Decision Tree",
          desc: "Interactive tool to identify Critical Control Points using the Codex decision tree."
        },
        risk: {
          name: "Risk Matrix",
          desc: "Assess likelihood and severity to determine risk level and treatment priority."
        },
        haccpPlan: {
          name: "HACCP Plan Wizard",
          desc: "Build a complete, printable HACCP plan step by step."
        }
      }
    },
    footer: {
      charity: "A free tool for the sake of God — always verify your regulatory authority's requirements",
      disclaimer: "This tool assists decision-making and never replaces qualified professional judgment or the official regulatory requirements of your country or facility.",
      dataNote: "Your saved data stays on your device only and is never sent to any server.",
      madeWith: "Built at no charge to serve the Arab food safety community."
    },
    common: {
      required: "This field is required",
      invalidNumber: "Please enter a valid number",
      mustBePositive: "Value must be greater than zero",
      outOfRange: "Value is outside a reasonable range, please check",
      save: "Save",
      saveAsRecord: "Save as record",
      print: "Print",
      printRecord: "Print as record",
      exportCsv: "Export CSV",
      clearAll: "Delete all",
      delete: "Delete",
      date: "Date",
      time: "Time",
      close: "Close",
      calculate: "Calculate",
      reset: "Reset",
      howWeCalculated: "How did we calculate this?",
      recordSheetTitle: "Monitoring Record",
      executedBy: "Performed by",
      signature: "Signature",
      recordDate: "Date",
      noRecords: "No saved records yet.",
      confirmDelete: "Delete this record?",
      confirmClearAll: "Delete all saved records? This cannot be undone.",
      copied: "Copied",
      savedSuccess: "Saved successfully",
      appName: "Food Safety Specialist Toolkit"
    },
    sanitizer: {
      pageTitle: "Sanitizer Calculator",
      pageDesc: "Prepare sanitizing solutions at the correct concentration, check ready-made solutions, and reference contact-time ranges.",
      tabs: {
        recipe: "Prepare Solution",
        check: "Check Ready Solution",
        reference: "Reference Ranges",
        log: "Preparation Log"
      },
      sanitizerType: "Sanitizer type",
      types: {
        chlorine: "Chlorine (Sodium Hypochlorite)",
        quat: "Quaternary Ammonium (Quat)",
        paa: "Peracetic Acid (PAA)",
        alcohol: "Alcohol",
        iodine: "Iodine (Iodophor)"
      },
      productConcType: "How is original concentration given?",
      byPercent: "Percentage (%)",
      byPpm: "Parts per million (ppm)",
      productConcValue: "Commercial product concentration",
      presetLabel: "Common concentrations",
      presetCustom: "Custom concentration",
      presetHousehold5: "Household chlorine 5%",
      presetCommercial10: "Commercial chlorine 10%",
      presetCommercial12: "Commercial chlorine 12%",
      targetPpm: "Target concentration (ppm)",
      finalVolume: "Final solution volume",
      volumeUnit: "Volume unit",
      liters: "Liters",
      gallons: "Gallons (US)",
      recipeResultTitle: "Ready recipe",
      recipeSentence: "Add {amount} of {sanitizer} to {water} of water to get {volume} at approximately {ppm} ppm.",
      sanitizerAmount: "Sanitizer amount",
      waterAmount: "Water amount",
      howCalcTitle: "Formula used: C1 × V1 = C2 × V2",
      howCalcBody: "C1 = original product concentration, V1 = required volume of sanitizer (unknown), C2 = target concentration, V2 = final solution volume.\nSo: V1 = (C2 × V2) ÷ C1\nThen: water amount = V2 − V1",
      checkAddedVolume: "Sanitizer volume added",
      checkWaterVolume: "Water volume added",
      checkResultPpm: "Resulting concentration",
      checkVerdictOk: "✅ Within common reference range",
      checkVerdictLow: "⚠️ Below the requirement for the selected use",
      checkVerdictHigh: "🔴 Above the safe limit for the selected use",
      checkUseSelect: "Solution use (compared to reference range)",
      referenceTitle: "Reference Ranges & Contact Time (general reference)",
      referenceNote: "These are common guidance values (Codex / FDA Food Code) and do not replace your regulatory authority's requirements or the sanitizer manufacturer's instructions.",
      table: {
        use: "Use",
        contactTime: "Contact time",
        rinse: "Requires potable water rinse"
      },
      uses: {
        foodContact: "Food contact surfaces",
        produce: "Fruit & vegetable washing",
        floors: "Floors & walls"
      },
      notRecommended: "Not recommended",
      yes: "Yes",
      no: "No",
      safety: {
        title: "Safety warnings",
        neverMix: "⚠️ Never mix chlorine with any acid (e.g. descalers) or with ammonia — produces toxic chloramine gas.",
        ppeTitle: "Recommended PPE",
        ppe: {
          chlorine: "Chemical-resistant gloves, safety goggles, good ventilation, avoid inhaling vapors.",
          quat: "Gloves, avoid direct eye/skin contact, wash hands after use.",
          paa: "Gloves and goggles mandatory — corrosive with a sharp odor, good ventilation.",
          alcohol: "Keep away from flames and sparks — flammable, good ventilation.",
          iodine: "Gloves, avoid eye contact, may temporarily stain surfaces and skin."
        }
      },
      outOfRecommended: "Outside recommended limits",
      logTitle: "Saved preparation log",
      logEmpty: "No saved preparations yet.",
      logCols: {
        dateTime: "Date & time",
        type: "Type",
        ppm: "Concentration (ppm)",
        volume: "Volume",
        status: "Status"
      },
      validation: {
        selectType: "Please select a sanitizer type",
        concTooLow: "Product concentration must be greater than zero",
        concPercentMax: "Percentage must not exceed 100%",
        targetTooLow: "Target concentration must be greater than zero",
        targetExceedsProduct: "Target concentration is higher than the original product — mathematically impossible",
        volumeTooLow: "Solution volume must be greater than zero"
      }
    },
    temperature: {
      pageTitle: "Temperature Guide",
      pageDesc: "Reference for cooking, storage and receiving temperatures, plus an instant reading checker.",
      tabs: {
        guide: "Reference Guide",
        checker: "Reading Checker"
      },
      searchPlaceholder: "Search (e.g. chicken, cooling, receiving...)",
      filterAll: "All",
      categories: {
        cooking: "Cooking",
        storage: "Storage",
        receiving: "Receiving",
        cooling: "Rapid Cooling"
      },
      dangerZoneTitle: "Danger Zone",
      dangerZoneText: "The range between 5°C and 60°C is the 'Danger Zone' where bacteria multiply rapidly. Food must not stay in this range for more than 4 hours total.",
      checkerOperation: "Operation type",
      operations: {
        cooking: "Cooking",
        cooling: "Cooling",
        receiving: "Receiving",
        hotHolding: "Hot holding",
        coldHolding: "Cold holding",
        freezing: "Freezing"
      },
      checkerFood: "Food type",
      checkerElapsed: "Elapsed time since cooling started (hours)",
      checkerReading: "Measured reading (°C)",
      checkerVerdict: "Verdict",
      verdicts: {
        ok: "✅ Compliant",
        warning: "⚠️ Borderline",
        fail: "🔴 Non-compliant"
      },
      correctiveActionLabel: "Preventive / Corrective action",
      selectFoodFirst: "Please select operation type and food first"
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = I18N;
}
