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
      backupTitle: "النسخ الاحتياطي لبياناتك",
      backupDesc: "كل بياناتك (السجلات والتقييمات المحفوظة) موجودة على جهازك فقط. يمكنك تصدير نسخة احتياطية أو استعادتها لاحقاً أو على جهاز آخر.",
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
      add: "إضافة",
      edit: "تعديل",
      update: "تحديث",
      cancel: "إلغاء",
      installApp: "تثبيت التطبيق",
      backupExport: "تصدير نسخة احتياطية",
      backupImport: "استيراد نسخة احتياطية",
      backupSuccess: "تم استيراد البيانات بنجاح",
      backupError: "ملف غير صالح أو تالف",
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
    },
    haccp: {
      pageTitle: "شجرة قرار نقاط التحكم الحرجة",
      pageDesc: "أداة تفاعلية لتحديد نقاط التحكم الحرجة (CCP) اعتماداً على شجرة قرار الكودكس (Codex Alimentarius).",
      tabs: { wizard: "تقييم خطوة جديدة", log: "سجل التقييمات" },
      stepName: "اسم خطوة العملية",
      hazardDesc: "وصف الخطر المحدد",
      hazardType: "نوع الخطر",
      hazardTypes: { biological: "بيولوجي", chemical: "كيميائي", physical: "فيزيائي" },
      q1: "س1: هل توجد إجراءات تحكم وقائية لهذا الخطر في هذه الخطوة أو خطوات لاحقة؟",
      q1b: "س1-ب: هل التحكم في هذه الخطوة ضروري للسلامة؟",
      q2: "س2: هل صُمّمت هذه الخطوة خصيصاً للقضاء على الخطر المحتمل أو لتقليل احتمال حدوثه إلى مستوى مقبول؟",
      q3: "س3: هل يمكن أن يحدث تلوث بالخطر المحدد بما يتجاوز المستوى المقبول، أو أن يتزايد إلى مستوى غير مقبول؟",
      q4: "س4: هل ستُزيل خطوة لاحقة الخطر المحدد أو تُقلل احتمال حدوثه إلى مستوى مقبول؟",
      yes: "نعم",
      no: "لا",
      verdictCCP: "✅ نقطة تحكم حرجة (CCP)",
      verdictNotCCP: "❌ ليست نقطة تحكم حرجة",
      verdictModify: "⚠️ التحكم ضروري ولا توجد إجراءات كافية — يجب تعديل الخطوة أو العملية أو المنتج",
      reasons: {
        q1bNo: "التحكم في هذه الخطوة غير ضروري للسلامة عند هذا المستوى، لذا لا حاجة لاعتبارها نقطة تحكم حرجة. تابع للخطوة التالية في العملية.",
        q1bYes: "التحكم ضروري للسلامة ولا توجد إجراءات تحكم كافية حالياً عند هذه الخطوة أو ما بعدها.",
        q2Yes: "الخطوة مصمّمة خصيصاً للسيطرة على هذا الخطر، لذا فهي نقطة تحكم حرجة.",
        q3No: "لا يوجد احتمال واقعي لزيادة التلوث لمستوى غير مقبول عند هذه الخطوة، لذا ليست نقطة تحكم حرجة.",
        q4Yes: "خطوة لاحقة في العملية ستتحكم في هذا الخطر، لذا لا حاجة لاعتبار هذه الخطوة نقطة تحكم حرجة.",
        q4No: "لا توجد خطوة لاحقة ستتحكم في هذا الخطر، وبالتالي فإن هذه الخطوة تُعتبر نقطة تحكم حرجة."
      },
      pathTitle: "مسار القرار",
      addToLog: "إضافة إلى السجل",
      startOver: "تقييم خطوة جديدة",
      logTitle: "سجل تقييمات نقاط التحكم الحرجة",
      logEmpty: "لا توجد تقييمات محفوظة بعد.",
      logCols: { step: "الخطوة", hazard: "الخطر", verdict: "الحكم", date: "التاريخ" }
    },
    risk: {
      pageTitle: "مصفوفة المخاطر",
      pageDesc: "تقييم الاحتمالية والشدة لتحديد مستوى الخطورة وأولوية المعالجة.",
      tabs: { assess: "تقييم خطر", matrix: "المصفوفة المرجعية", log: "سجل التقييمات" },
      hazardName: "اسم الخطر / وصفه",
      likelihood: "الاحتمالية",
      severity: "الشدة",
      likelihoodLevels: {
        1: "1 — نادر الحدوث",
        2: "2 — غير محتمل",
        3: "3 — ممكن الحدوث",
        4: "4 — محتمل الحدوث",
        5: "5 — شبه مؤكد الحدوث"
      },
      severityLevels: {
        1: "1 — طفيف (لا يُذكر)",
        2: "2 — بسيط",
        3: "3 — متوسط",
        4: "4 — كبير",
        5: "5 — كارثي"
      },
      riskScore: "درجة الخطورة",
      riskLevel: "مستوى الخطورة",
      levels: { low: "منخفض", medium: "متوسط", high: "عالٍ", critical: "حرج" },
      actions: {
        low: "خطر مقبول — مراقبة دورية روتينية.",
        medium: "يتطلب إجراءات تحكم إضافية ومتابعة منتظمة.",
        high: "يتطلب إجراءً تصحيحياً عاجلاً وتصعيداً للإدارة.",
        critical: "توقف فوري عن العملية أو المنتج حتى تنفيذ إجراءات تحكم صارمة."
      },
      addBtn: "إضافة إلى التقييم",
      matrixTitle: "مصفوفة الاحتمالية × الشدة (مرجعية)",
      matrixNote: "الدرجة = الاحتمالية × الشدة. التصنيف: 1–4 منخفض، 5–10 متوسط، 11–15 عالٍ، 16–25 حرج (تصنيف إرشادي عام).",
      logTitle: "سجل تقييمات المخاطر",
      logEmpty: "لا توجد تقييمات محفوظة بعد.",
      logCols: { hazard: "الخطر", likelihood: "الاحتمالية", severity: "الشدة", score: "الدرجة", level: "المستوى", date: "التاريخ" }
    },
    haccpPlan: {
      pageTitle: "معالج خطة HACCP",
      pageDesc: "بناء خطة HACCP كاملة خطوة بخطوة قابلة للطباعة، وفق مبادئ الكودكس السبعة.",
      planTitle: "خطة تحليل المخاطر ونقاط التحكم الحرجة (HACCP)",
      header: {
        productName: "اسم المنتج",
        scope: "نطاق الخطة",
        team: "فريق عمل HACCP (الأسماء)",
        preparedBy: "أُعدّت بواسطة",
        date: "تاريخ الإعداد"
      },
      saveHeader: "حفظ بيانات الخطة",
      importFromTree: "استيراد نقاط التحكم من شجرة القرار",
      importSuccess: "تم استيراد {n} نقطة تحكم من شجرة القرار",
      importEmpty: "لا توجد نقاط تحكم حرجة محفوظة في شجرة القرار بعد",
      stepFormTitle: "إضافة / تعديل خطوة في الخطة",
      fields: {
        step: "خطوة العملية",
        hazard: "الخطر (النوع والوصف)",
        isCcp: "هل هي نقطة تحكم حرجة (CCP)؟",
        criticalLimit: "الحد الحرج",
        monitoringWhat: "إجراءات الرصد (ماذا/كيف)",
        monitoringFreq: "تكرار الرصد",
        monitoringWho: "المسؤول عن الرصد",
        correctiveAction: "الإجراء التصحيحي",
        verification: "إجراءات التحقق",
        records: "السجلات"
      },
      addStep: "إضافة الخطوة",
      updateStep: "تحديث الخطوة",
      stepsListTitle: "خطوات الخطة",
      noSteps: "لم تُضف أي خطوة بعد.",
      ccpBadge: "CCP",
      notCcpBadge: "ليست CCP",
      printPlan: "طباعة الخطة كاملة"
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
      backupTitle: "Back up your data",
      backupDesc: "All your data (saved logs and assessments) lives only on this device. You can export a backup, or restore it later or on another device.",
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
      add: "Add",
      edit: "Edit",
      update: "Update",
      cancel: "Cancel",
      installApp: "Install app",
      backupExport: "Export backup",
      backupImport: "Import backup",
      backupSuccess: "Data imported successfully",
      backupError: "Invalid or corrupted file",
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
    },
    haccp: {
      pageTitle: "HACCP Decision Tree",
      pageDesc: "Interactive tool to identify Critical Control Points (CCP) using the Codex Alimentarius decision tree.",
      tabs: { wizard: "Assess a new step", log: "Assessment log" },
      stepName: "Process step name",
      hazardDesc: "Identified hazard description",
      hazardType: "Hazard type",
      hazardTypes: { biological: "Biological", chemical: "Chemical", physical: "Physical" },
      q1: "Q1: Do preventive control measures exist for this hazard at this step or a later one?",
      q1b: "Q1b: Is control at this step necessary for safety?",
      q2: "Q2: Is this step specifically designed to eliminate the likely occurrence of the hazard or reduce it to an acceptable level?",
      q3: "Q3: Could contamination with the identified hazard occur in excess of acceptable levels, or could it increase to an unacceptable level?",
      q4: "Q4: Will a subsequent step eliminate the identified hazard or reduce its likely occurrence to an acceptable level?",
      yes: "Yes",
      no: "No",
      verdictCCP: "✅ Critical Control Point (CCP)",
      verdictNotCCP: "❌ Not a Critical Control Point",
      verdictModify: "⚠️ Control is necessary but no adequate measures exist — modify the step, process, or product",
      reasons: {
        q1bNo: "Control at this step is not necessary for safety at this level, so it need not be considered a CCP. Proceed to the next step in the process.",
        q1bYes: "Control is necessary for safety and no adequate control measures currently exist at this step or beyond.",
        q2Yes: "The step is specifically designed to control this hazard, so it is a Critical Control Point.",
        q3No: "There is no realistic likelihood of contamination increasing to an unacceptable level at this step, so it is not a CCP.",
        q4Yes: "A later step in the process will control this hazard, so this step need not be considered a CCP.",
        q4No: "No later step will control this hazard, so this step is considered a Critical Control Point."
      },
      pathTitle: "Decision path",
      addToLog: "Add to log",
      startOver: "Assess a new step",
      logTitle: "Critical Control Point assessment log",
      logEmpty: "No saved assessments yet.",
      logCols: { step: "Step", hazard: "Hazard", verdict: "Verdict", date: "Date" }
    },
    risk: {
      pageTitle: "Risk Matrix",
      pageDesc: "Assess likelihood and severity to determine risk level and treatment priority.",
      tabs: { assess: "Assess a hazard", matrix: "Reference matrix", log: "Assessment log" },
      hazardName: "Hazard name / description",
      likelihood: "Likelihood",
      severity: "Severity",
      likelihoodLevels: {
        1: "1 — Rare",
        2: "2 — Unlikely",
        3: "3 — Possible",
        4: "4 — Likely",
        5: "5 — Almost certain"
      },
      severityLevels: {
        1: "1 — Negligible",
        2: "2 — Minor",
        3: "3 — Moderate",
        4: "4 — Major",
        5: "5 — Catastrophic"
      },
      riskScore: "Risk score",
      riskLevel: "Risk level",
      levels: { low: "Low", medium: "Medium", high: "High", critical: "Critical" },
      actions: {
        low: "Acceptable risk — routine periodic monitoring.",
        medium: "Requires additional control measures and regular follow-up.",
        high: "Requires urgent corrective action and escalation to management.",
        critical: "Stop the process or product immediately until strict control measures are implemented."
      },
      addBtn: "Add to assessment",
      matrixTitle: "Likelihood × Severity matrix (reference)",
      matrixNote: "Score = Likelihood × Severity. Bands: 1–4 Low, 5–10 Medium, 11–15 High, 16–25 Critical (general guidance banding).",
      logTitle: "Risk assessment log",
      logEmpty: "No saved assessments yet.",
      logCols: { hazard: "Hazard", likelihood: "Likelihood", severity: "Severity", score: "Score", level: "Level", date: "Date" }
    },
    haccpPlan: {
      pageTitle: "HACCP Plan Wizard",
      pageDesc: "Build a complete, printable HACCP plan step by step, following the seven Codex principles.",
      planTitle: "Hazard Analysis and Critical Control Points (HACCP) Plan",
      header: {
        productName: "Product name",
        scope: "Plan scope",
        team: "HACCP team (names)",
        preparedBy: "Prepared by",
        date: "Date prepared"
      },
      saveHeader: "Save plan details",
      importFromTree: "Import CCPs from decision tree",
      importSuccess: "Imported {n} critical control point(s) from the decision tree",
      importEmpty: "No critical control points saved in the decision tree yet",
      stepFormTitle: "Add / edit a plan step",
      fields: {
        step: "Process step",
        hazard: "Hazard (type and description)",
        isCcp: "Is this a Critical Control Point (CCP)?",
        criticalLimit: "Critical limit",
        monitoringWhat: "Monitoring procedures (what/how)",
        monitoringFreq: "Monitoring frequency",
        monitoringWho: "Person responsible for monitoring",
        correctiveAction: "Corrective action",
        verification: "Verification procedures",
        records: "Records"
      },
      addStep: "Add step",
      updateStep: "Update step",
      stepsListTitle: "Plan steps",
      noSteps: "No steps added yet.",
      ccpBadge: "CCP",
      notCcpBadge: "Not CCP",
      printPlan: "Print full plan"
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = I18N;
}
