export interface FAQItem {
  q: string
  a: string
}

export interface NavTranslations {
  home: string
  about: string
  pricing: string
  updates: string
  downloads: string
}

export interface HeroTranslations {
  titleLine1: string
  titleLine2: string
  subtitle: string
  description: string
  downloadFree: string
  supportedDevices: string
  getItOn: string
  playStore: string
  comingSoon: string
  forIphones: string
}

export interface StreamingTranslations {
  description: string
  availableOn: string
  windows: string
  android: string
  macos: string
  iphone: string
  soon: string
}

export interface WatchEnjoyTranslations {
  title: string
  subtitle: string
  instantPartiesTitle: string
  instantPartiesDesc: string
  crossPlatformTitle: string
  crossPlatformDesc: string
  allDownloads: string
}

export interface TvSectionTranslations {
  titleLine1: string
  titleLine2: string
  desc: string
  getItOn: string
  googlePlay: string
  comingSoon: string
  forIphones: string
}

export interface ReviewCtaTranslations {
  title: string
  downloadNow: string
  getItOn: string
  googlePlay: string
  comingSoon: string
  forIphones: string
}

export interface FooterTranslations {
  product: string
  community: string
  legal: string
  home: string
  pricing: string
  downloads: string
  updates: string
  about: string
  faq: string
  telegramCommunity: string
  hdLibrary: string
  googlePlay: string
  termsConditions: string
  privacyPolicy: string
  infoProvidedBy: string
  copyright: string
}

export interface AboutPageTranslations {
  title: string
  subtitle: string
  p1: string
  p2: string
  p3: string
  v1Title: string
  v1Desc: string
  v2Title: string
  v2Desc: string
  v3Title: string
  v3Desc: string
  v4Title: string
  v4Desc: string
}

export interface PricingPageTranslations {
  title: string
  subtitle: string
  freePlan: string
  forever: string
  freeSubtitle: string
  supporterPlan: string
  perMonth: string
  supporterSubtitle: string
  becomeSupporter: string
  supporterHint: string
  getStartedFree: string
  mostPopular: string
  faqPrompt: string
  readFaq: string
}

export interface DownloadPageTranslations {
  heroTitle: string
  heroSubtitle: string
  checkingLatest: string
  comingSoon: string
  latestStable: string
  previousBuild: string
  availableOnPlay: string
  download: string
  getOnPlay: string
  viewUpdateNotes: string
}

export interface UpdatesPageTranslations {
  backToDownload: string
  heroPrefix: string
  heroAccent: string
  heroSubtitle: string
  latestLabel: string
  publishedOn: string
  loading: string
  emptyTitle: string
  emptyDesc: string
  errorTitle: string
  errorDesc: string
  retry: string
  downloadThisVersion: string
  getOnGooglePlay: string
  englishNotesTag: string
}

export interface TranslationSchema {
  nav: NavTranslations
  hero: HeroTranslations
  streaming: StreamingTranslations
  watchEnjoy: WatchEnjoyTranslations
  tvSection: TvSectionTranslations
  faq: {
    heading: string
    subtitle: string
    items: FAQItem[]
  }
  reviewCta: ReviewCtaTranslations
  footer: FooterTranslations
  about: AboutPageTranslations
  pricing: PricingPageTranslations
  download: DownloadPageTranslations
  updates: UpdatesPageTranslations
  common: {
    en: string
    ar: string
  }
}

export const translations: Record<"en" | "ar", TranslationSchema> = {
  en: {
    common: {
      en: "EN",
      ar: "AR",
    },
    nav: {
      home: "Home",
      about: "About",
      pricing: "Pricing",
      updates: "What's New",
      downloads: "Downloads",
    },
    hero: {
      titleLine1: "Watch Together,",
      titleLine2: "No Matter the Distance",
      subtitle: "Watch anything together in perfect sync across all your devices.",
      description:
        "iPartyUp brings friends, families, and long-distance couples onto the same virtual couch. No counting down from three, no blurry screen-shares, and no switching between five different apps.",
      downloadFree: "Download Free",
      supportedDevices: "Supported Devices",
      getItOn: "GET IT ON",
      playStore: "Google Play",
      comingSoon: "Coming Soon",
      forIphones: "for iPhones",
    },
    streaming: {
      description:
        "Experience movie nights the way they were meant to feel: frame-perfect real-time playback sync, built-in voice chat, live reactions, and cloud subtitles that actually remember your language. With native apps for Windows, macOS, and Android (and iOS on the way), hosting a watch party takes literally two clicks.",
      availableOn: "Available on",
      windows: "Windows",
      android: "Android",
      macos: "macOS",
      iphone: "iPhone",
      soon: "Soon",
    },
    watchEnjoy: {
      title: "Watch in Perfect Sync",
      subtitle: "Zero countdowns. Zero blurry screen-shares.",
      instantPartiesTitle: "Instant Watch Parties",
      instantPartiesDesc:
        "Create a room, send a short room code, and everyone drops into the exact same second of the movie. Pause for snacks, rewind that plot twist, or jump to the next episode without breaking the vibe.",
      crossPlatformTitle: "Desktop and Mobile Together",
      crossPlatformDesc:
        "Your friend is on Windows, you are on macOS, and someone else is cozy in bed on Android. iPartyUp keeps every screen locked in sync, along with your My List, Continue Watching, and friends.",
      allDownloads: "All Downloads",
    },
    tvSection: {
      titleLine1: "Try iPartyUp",
      titleLine2: "On Your Mobile or Laptop",
      desc: "Watch movies, full series, anime with sub and dub options, YouTube, and Google Drive together on Android, Windows, and macOS. Your library, rooms, My List, and voice chat follow you everywhere.",
      getItOn: "GET IT ON",
      googlePlay: "Google Play",
      comingSoon: "Coming Soon",
      forIphones: "for iPhones",
    },
    faq: {
      heading: "Frequently Asked Questions",
      subtitle: "Everything you need to know before grabbing the popcorn.",
      items: [
        {
          q: "What is iPartyUp?",
          a: "iPartyUp is an all-in-one watch-party streaming app for Windows, macOS, and Android. Instead of paying for a pile of separate subscriptions or squinting at a choppy screen-share, you get movies, series, anime, documentaries, YouTube, and Google Drive in one app with frame-perfect synchronized rooms, text chat, and optional voice chat.",
        },
        {
          q: "Do I get anything free when I sign up?",
          a: "Yes! Every new account gets a full 7-day Premium trial the moment you sign up, with no payment and no card required. Explore the whole HD library, host bigger rooms, and test every Premium perk. When the 7 days wrap up, you simply move to the free tier with zero surprises.",
        },
        {
          q: "What can we actually watch in a room?",
          a: "You can stream movies, full TV series, anime (with sub and dub options), and documentaries from the iPartyUp library, plus paste public YouTube videos, YouTube Live streams, and your own Google Drive uploads. Since we do not store 90% of titles on our own servers, we regularly tune and upgrade our streaming providers behind the scenes so playback stays fast and reliable.",
        },
        {
          q: "How is this better than saying 'press play in 3, 2, 1' on a call?",
          a: "Because somebody always hits play on '2' and spoils the jump scare. iPartyUp syncs playback automatically for everyone in the room. Hosts can pause, seek, switch episodes from the in-player Episodes Bar, and enjoy smart next-episode countdowns (which even pause when you pause for snacks), while text chat and optional voice chat sit right next to the video.",
        },
        {
          q: "Do my friends need Premium to join my room?",
          a: "Nope. Anyone with a free account can join rooms right away. Free users can host rooms up to 3 viewers. Premium Supporters can host rooms up to 12 viewers and even bring a free-tier friend into Premium-only titles with them.",
        },
        {
          q: "How much does iPartyUp cost, and how do I become a Supporter?",
          a: "The core app is free forever. If you want to help keep an independent app alive and unlock every perk in return, the Premium Supporter plan is just $2.99/month right inside the app via Patreon, Binance Pay, or Bybit Pay. Download iPartyUp, tap Support Developer on your dashboard, and your perks unlock once confirmed. Patreon memberships can be paused or canceled anytime.",
        },
        {
          q: "What perks do Premium Supporters unlock?",
          a: "Full access to the entire HD library, watch rooms up to 12 viewers, inviting 1 free-tier friend into Premium content, floating fullscreen chat, dashboard release notifications, synced Continue Watching across sessions, exclusive Profile Decorations and Supporter badge, priority content requests every 24 hours instead of 72, and direct chat with the developer.",
        },
        {
          q: "What are Profile Decorations and Prime Tokens?",
          a: "Profile Decorations let you personalize your look across rooms and friends lists with animated avatar frames, banners, and custom avatars from the in-app Shop. You can unlock items as a Premium Supporter or earn Prime Tokens by watching short, completely optional rewarded ads whenever you feel like it.",
        },
        {
          q: "Does it support subtitles and dubbed audio?",
          a: "Yes! Our player includes built-in cloud subtitle search across dozens of languages and remembers your preferred subtitle and audio language automatically from episode to episode, along with smooth multi-audio switching.",
        },
        {
          q: "Which devices does iPartyUp work on?",
          a: "iPartyUp is available right now on Windows, macOS (including older Macs running macOS 12.7 Monterey and newer), and Android via Google Play. iOS for iPhone and iPad is also in the works.",
        },
        {
          q: "Do you track what I watch or spam annoying pop-up ads?",
          a: "No. We do not build ad profiles from your watch history, we never sell your personal data, and we never interrupt your movie with forced mid-roll pop-up ads. The only ads that exist are voluntary rewarded ads that you choose to watch yourself if you want Prime Tokens for Shop items. You can also delete your account and data anytime.",
        },
        {
          q: "Can I request a movie, show, or anime that is missing?",
          a: "Yes! Open Request Content inside the app. Free accounts can send a request every 72 hours, and Premium Supporters every 24 hours. We check requests regularly and add titles as quickly as possible.",
        },
        {
          q: "How do updates work, and how can I report a bug?",
          a: "Desktop builds notify you automatically when a new update drops, and Android updates arrive right through Google Play. You can read every changelog on our What's New page, and if something ever acts weird, use Reports & Feedback inside the app or message our Telegram community.",
        },
      ],
    },
    reviewCta: {
      title: "Get iPartyUp for free",
      downloadNow: "Download Now",
      getItOn: "GET IT ON",
      googlePlay: "Google Play",
      comingSoon: "Coming Soon",
      forIphones: "for iPhones",
    },
    footer: {
      product: "PRODUCT",
      community: "COMMUNITY",
      legal: "INFO & LEGAL",
      home: "Home",
      pricing: "Pricing",
      downloads: "Downloads",
      updates: "What's New",
      about: "About iPartyUp",
      faq: "FAQ",
      telegramCommunity: "Telegram Community",
      hdLibrary: "HD Library Channel",
      googlePlay: "Android on Google Play",
      termsConditions: "Terms & Conditions",
      privacyPolicy: "Privacy Policy",
      infoProvidedBy: "Metadata provided by",
      copyright: "Copyright © 2026 · iPartyUp",
    },
    about: {
      title: "About iPartyUp",
      subtitle: "One app. One virtual couch. Zero countdown chaos.",
      p1: "We started iPartyUp because subscription fatigue got ridiculous. One service for that hyped series, another for weekend movies, a third for anime, and then trying to sync playback over a voice call with 'okay, press play on three... wait, my stream buffered.' Exhausting.",
      p2: "iPartyUp replaces all that juggling with one clean app built for watching together. Movies, full series, anime, documentaries, YouTube, and Google Drive sit alongside frame-perfect watch rooms, built-in voice chat, cloud subtitles, My List, and Profile Decorations to show off your vibe.",
      p3: "Available today on Windows, macOS, and Android on Google Play, with iOS on the way. Built independently with late nights, plenty of coffee, and constant updates driven directly by our community.",
      v1Title: "All-In-One Entertainment",
      v1Desc:
        "Movies, series, anime, documentaries, YouTube, and Google Drive in one place without bouncing between apps.",
      v2Title: "Built for Real Watch Nights",
      v2Desc:
        "Share a room code and stay locked to the same frame, whether your friends live across the street or across five time zones.",
      v3Title: "Privacy Without Tricks",
      v3Desc:
        "No selling your personal data, no shady bundled installers, and no forced pop-ups interrupting the best scene.",
      v4Title: "Shipped by Humans Who Listen",
      v4Desc:
        "We read bug reports personally, upgrade streaming providers behind the scenes, and post transparent release notes every update.",
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle:
        "Start free forever. Support independent development inside the app whenever you are ready, and unlock awesome Premium perks as our thank-you gift.",
      freePlan: "Free Plan",
      forever: "forever",
      freeSubtitle: "Jump into watch parties immediately, no card required",
      supporterPlan: "Premium Supporter",
      perMonth: "/month",
      supporterSubtitle: "Keep iPartyUp alive and unlock every perk in return",
      becomeSupporter: "Get the App to Subscribe",
      supporterHint: "Open iPartyUp, tap Support Developer (Patreon, Binance Pay, or Bybit Pay), and unlock instantly",
      getStartedFree: "Get Started Free",
      mostPopular: "MOST POPULAR",
      faqPrompt: "Still have questions before choosing?",
      readFaq: "Read our FAQ",
    },
    download: {
      heroTitle: "Start Your Party",
      heroSubtitle:
        "Download iPartyUp for Windows, macOS, or Android on Google Play and start watching together in perfect sync.",
      checkingLatest: "Checking latest...",
      comingSoon: "Coming Soon",
      latestStable: "Latest Stable",
      previousBuild: "Previous Build",
      availableOnPlay: "Available on Google Play",
      download: "Download",
      getOnPlay: "Get on Google Play",
      viewUpdateNotes: "View Update Notes",
    },
    updates: {
      backToDownload: "Back to Download",
      heroPrefix: "What's",
      heroAccent: "New",
      heroSubtitle:
        "Every published iPartyUp release, pulled live from our changelog: new features, smoother playback, and squashed bugs.",
      latestLabel: "Latest Release",
      publishedOn: "Published",
      loading: "Loading latest release notes...",
      emptyTitle: "No Published Releases Yet",
      emptyDesc: "Check back soon, we ship updates regularly.",
      errorTitle: "Could Not Load Release Notes",
      errorDesc: "Please check your internet connection and try again.",
      retry: "Try Again",
      downloadThisVersion: "Download Desktop App",
      getOnGooglePlay: "Get on Google Play",
      englishNotesTag: "English release notes",
    },
  },
  ar: {
    common: {
      en: "EN",
      ar: "AR",
    },
    nav: {
      home: "الرئيسية",
      about: "عن التطبيق",
      pricing: "الأسعار",
      updates: "التحديثات",
      downloads: "التنزيلات",
    },
    hero: {
      titleLine1: "شاهدوا معاً،",
      titleLine2: "مهما بعدت المسافات",
      subtitle: "شاهد أي شيء معاً بمزامنة فورية ودقيقة عبر جميع أجهزتك.",
      description:
        "يجمع iPartyUp الأصدقاء والعائلات والأحبة على نفس الأريكة الافتراضية، بدون العد التنازلي من ثلاثة وبدون تقطيع مشاركة الشاشة أو التنقل بين خمسة تطبيقات مختلفة.",
      downloadFree: "تحميل مجاني",
      supportedDevices: "الأجهزة المدعومة",
      getItOn: "متوفر على",
      playStore: "Google Play",
      comingSoon: "قريباً",
      forIphones: "لهواتف iPhone",
    },
    streaming: {
      description:
        "عش سهرات الأفلام كما يجب أن تكون: مزامنة تشغيل حية ودقيقة لكل لقطة، ودردشة صوتية مدمجة، وتفاعلات لحظية، وترجمة سحابية تتذكر لغتك تلقائياً. مع تطبيقات مطوّرة لأنظمة Windows وmacOS وAndroid (ودعم iOS قريباً)، إنشاء حفلة مشاهدة لا يستغرق سوى ثانيتين.",
      availableOn: "متاح على",
      windows: "ويندوز",
      android: "أندرويد",
      macos: "ماك",
      iphone: "آيفون",
      soon: "قريباً",
    },
    watchEnjoy: {
      title: "شاهد بمزامنة تامة",
      subtitle: "بلا عد تنازلي. بلا مشاركة شاشة مشوشة.",
      instantPartiesTitle: "حفلات مشاهدة فورية",
      instantPartiesDesc:
        "أنشئ غرفة، شارك الرمز القصير، وسيدخل الجميع إلى نفس الثانية تماماً من الفيلم. أوقف العرض لاستراحة الوجبات الخفيفة، أو أعد تلك اللقطة الرهيبة، أو انتقل للحلقة التالية بسلاسة تامة.",
      crossPlatformTitle: "الحاسوب والهاتف معاً",
      crossPlatformDesc:
        "صديقك على Windows، وأنت على macOS، وآخر مسترخٍ على Android: يبقي iPartyUp كل الشاشات في نفس اللحظة، مع مزامنة قائمتي ومتابعة المشاهدة والأصدقاء تلقائياً.",
      allDownloads: "جميع التنزيلات",
    },
    tvSection: {
      titleLine1: "جرّب iPartyUp",
      titleLine2: "على هاتفك أو حاسوبك",
      desc: "شاهد الأفلام والمسلسلات الكاملة والأنمي المترجم والمدبلج مع دعم YouTube وGoogle Drive على Android وWindows وmacOS. مكتبتك وغرفك وقائمتك والدردشة الصوتية ترافقك في كل مكان.",
      getItOn: "متوفر على",
      googlePlay: "Google Play",
      comingSoon: "قريباً",
      forIphones: "لهواتف iPhone",
    },
    faq: {
      heading: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج معرفته قبل تجهيز الفشار.",
      items: [
        {
          q: "ما هو تطبيق iPartyUp؟",
          a: "iPartyUp هو تطبيق بث ومشاهدة جماعية متكامل لأنظمة Windows وmacOS وAndroid. بدلاً من تعدد الاشتراكات أو مشاركة الشاشة المتقطعة، يجمع لك الأفلام والمسلسلات والأنمي والوثائقيات وYouTube وGoogle Drive في مكان واحد مع غرف متزامنة بدقة الإطار ودردشة نصية وصوتية مدمجة.",
        },
        {
          q: "هل أحصل على تجربة مجانية عند التسجيل؟",
          a: "نعم! يحصل كل حساب جديد على تجربة مجانية كاملة لمدة 7 أيام لجميع مزايا Premium فور التسجيل، بدون بطاقة بنكية وبدون أي التزام. جرّب المكتبة الكاملة والغرف الموسعة، وبعد انتهاء الأيام السبعة تنتقل ببساطة إلى الباقة المجانية بدون أي مفاجآت.",
        },
        {
          q: "ما الذي يمكننا مشاهدته داخل الغرفة؟",
          a: "يمكنك مشاهدة الأفلام والمسلسلات الكاملة والأنمي (مترجم ومدبلج) والوثائقيات من مكتبة iPartyUp، بالإضافة لتشغيل مقاطع وبثوث YouTube وملفاتك على Google Drive. ولأننا لا نخزّن 90% من المحتوى على خوادمنا الخاصة، نقوم بتحسين وتطوير مزودي البث باستمرار خلف الكواليس لضمان تشغيل سريع ومستقر.",
        },
        {
          q: "كيف يختلف عن قول «شغّلوا بعد 3، 2، 1» في مكالمة؟",
          a: "لأن هناك دائماً صديق يضغط تشغيل عند رقم 2 ويحرق المفاجأة على الجميع! يضبط iPartyUp التزامن تلقائياً لكل شخص في الغرفة. يتحكم المضيف بالإيقاف والتقديم واختيار الحلقات من شريط الحلقات داخل المشغل، مع عدّاد ذكي للحلقة التالية يتوقف تلقائياً عندما توقف الفيديو لاستراحة سريعة.",
        },
        {
          q: "هل يحتاج أصدقائي لاشتراك Premium للانضمام إلي؟",
          a: "لا أبداً. أي شخص يملك حساباً مجانياً يمكنه الانضمام لغرفك فوراً. تتيح الباقة المجانية استضافة حتى 3 مشاهدين، بينما يتيح اشتراك الداعم المميز استضافة حتى 12 مشاهداً ودعوة صديق من الفئة المجانية لمشاهدة محتوى Premium معك.",
        },
        {
          q: "كم تبلغ تكلفة التطبيق وكيف أشترك كداعم مميز؟",
          a: "التطبيق مجاني للأبد مع الباقة الأساسية. وإذا أردت دعم استمرار هذا المشروع المستقل والحصول على كل المزايا بالمقابل، تبلغ باقة الداعم المميز 2.99 دولار شهرياً فقط من داخل التطبيق عبر Patreon أو Binance Pay أو Bybit Pay. حمّل التطبيق، اضغط على زر دعم المطور في لوحة التحكم، وستتفعل مزاياك فور التأكيد، ويمكنك إيقاف أو إلغاء عضوية Patreon في أي وقت.",
        },
        {
          q: "ما هي المزايا التي يفتحها اشتراك الداعم المميز (Premium)؟",
          a: "فتح كامل المكتبة الترفيهية بجودة HD، غرف مشاهدة حتى 12 شخصاً، دعوة صديق مجاني لمحتوى Premium، نافذة المحادثة العائمة بملء الشاشة، لوحة إشعارات الإصدارات الجديدة، مزامنة متابعة المشاهدة بين الجلسات، زينة الملف الشخصي الحصرية وشارة الداعم، أولوية طلبات المحتوى كل 24 ساعة بدلاً من 72، والتواصل المباشر مع المطور.",
        },
        {
          q: "ما هي زينة الملف الشخصي ونقاط Prime Tokens؟",
          a: "زينة الملف الشخصي تتيح لك تخصيص مظهرك في الغرف وقائمة الأصدقاء بإطارات متحركة ولافتات وصور رمزية من المتجر داخل التطبيق. يمكنك فتحها باشتراك Premium أو بجمع نقاط Prime Tokens عبر مشاهدة إعلانات مكافآت قصيرة واختيارية بالكامل وقتما تشاء.",
        },
        {
          q: "هل يدعم التطبيق الترجمة السحابية والدبلجة؟",
          a: "نعم! يضم المشغل بحثاً فورياً عن الترجمة السحابية بعشرات اللغات، ويتذكر تلقائياً لغة الترجمة والصوت المفضلة لديك من حلقة لأخرى، مع تبديل سلس بين المسارات الصوتية.",
        },
        {
          q: "ما هي الأجهزة التي يعمل عليها iPartyUp؟",
          a: "يتوفر iPartyUp الآن على Windows وmacOS (بما في ذلك أجهزة Mac الأقدم بنظام macOS 12.7 Monterey وما بعده) وAndroid عبر متجر Google Play، كما نعمل على توفير نسخة iOS لهواتف iPhone وأجهزة iPad قريباً.",
        },
        {
          q: "هل تتبعون ما أشاهده أو تعرضون إعلانات منبثقة مزعجة؟",
          a: "لا. نحن لا نبني ملفات دعائية من سجل مشاهدتك، ولا نبيع بياناتك الشخصية أبداً، ولا نقاطع فيلمك بإعلانات منبثقة أو إجبارية. الإعلانات الوحيدة الموجودة هي إعلانات مكافآت اختيارية بالكامل يمكنك اختيار مشاهدتها بنفسك لجمع Prime Tokens لعناصر المتجر، ويمكنك حذف حسابك وبياناتك في أي وقت.",
        },
        {
          q: "هل يمكنني طلب فيلم أو مسلسل أو أنمي غير موجود؟",
          a: "بالتأكيد! استخدم ميزة (طلب محتوى) داخل التطبيق. يمكن للمستخدمين المجانيين إرسال طلب كل 72 ساعة، ولداعمي Premium كل 24 ساعة، ونراجع الطلبات باستمرار.",
        },
        {
          q: "كيف تصلني التحديثات وكيف أبلغ عن مشكلة؟",
          a: "ينبهك تطبيق الحاسوب تلقائياً عند توفر تحديث جديد، وتصل تحديثات Android مباشرة عبر Google Play. يمكنك متابعة كل التغييرات من صفحة التحديثات هنا، وللإبلاغ عن أي مشكلة استخدم قسم البلاغات داخل التطبيق أو تواصل معنا في مجتمع Telegram.",
        },
      ],
    },
    reviewCta: {
      title: "احصل على iPartyUp مجاناً",
      downloadNow: "حمّل الآن",
      getItOn: "متوفر على",
      googlePlay: "Google Play",
      comingSoon: "قريباً",
      forIphones: "لهواتف iPhone",
    },
    footer: {
      product: "التطبيق",
      community: "المجتمع",
      legal: "معلومات وقانوني",
      home: "الرئيسية",
      pricing: "الأسعار",
      downloads: "التنزيلات",
      updates: "التحديثات",
      about: "عن iPartyUp",
      faq: "الأسئلة الشائعة",
      telegramCommunity: "مجتمع Telegram",
      hdLibrary: "قناة مكتبة HD",
      googlePlay: "Android على Google Play",
      termsConditions: "الشروط والأحكام",
      privacyPolicy: "سياسة الخصوصية",
      infoProvidedBy: "البيانات مقدمة بواسطة",
      copyright: "جميع الحقوق محفوظة © 2026 · iPartyUp",
    },
    about: {
      title: "عن iPartyUp",
      subtitle: "تطبيق واحد. أريكة افتراضية واحدة. بلا فوضى التزامن.",
      p1: "بدأنا iPartyUp لأن إرهاق تعدد الاشتراكات أصبح مبالغاً فيه: اشتراك لمسلسل واحد، وآخر لفيلم نهاية الأسبوع، وثالث للأنمي، ثم محاولة تشغيل الفيديو مع أصدقائك عبر مكالمة «اضغط تشغيل عند ثلاثة... انتظر، الفيديو يقطّع عندي!». أمر مرهق فعلاً.",
      p2: "يستبدل iPartyUp كل هذا التشتت بتطبيق واحد صُمم للمشاهدة الجماعية: أفلام، مسلسلات كاملة، أنمي، وثائقيات، وYouTube وGoogle Drive، مع غرف متزامنة بدقة، ودردشة صوتية مدمجة، وترجمة سحابية، وقائمتي، وزينة الملف الشخصي.",
      p3: "متوفر اليوم على Windows وmacOS وAndroid عبر Google Play، ومع دعم iOS في الطريق. مشروع مستقل مبني بشغف والكثير من القهوة وتحديثات مستمرة مستلهمة من مجتمعنا مباشرة.",
      v1Title: "ترفيه شامل في مكان واحد",
      v1Desc:
        "أفلام، مسلسلات، أنمي، وثائقيات، وYouTube وGoogle Drive في مكان واحد دون التنقل بين التطبيقات.",
      v2Title: "مصمم لسهرات المشاهدة الحقيقية",
      v2Desc:
        "شارك رمز الغرفة وابقوا في نفس اللقطة تماماً، سواء كان أصدقاؤك في نفس الحي أو عبر قارات مختلفة.",
      v3Title: "خصوصية بدون حيل",
      v3Desc:
        "لا نبيع بياناتك الشخصية، ولا نضيف برامج خفية في المثبّت، ولا نقاطع أفضل مشهد بإعلانات منبثقة إجبارية.",
      v4Title: "فريق يستمع لك فعلاً",
      v4Desc:
        "نقرأ البلاغات شخصياً، ونحسّن مزودي البث باستمرار خلف الكواليس، وننشر سجل تحديثات شفاف مع كل إصدار.",
    },
    pricing: {
      title: "اختر باقتك المناسبة",
      subtitle:
        "ابدأ مجاناً للأبد، وادعم التطوير المستقل من داخل التطبيق وقتما تشاء لتحصل على مزايا Premium رائعة كهدية شكر منا.",
      freePlan: "الباقة المجانية",
      forever: "للأبد",
      freeSubtitle: "ابدأ حفلات المشاهدة فوراً بدون بطاقة بنكية",
      supporterPlan: "الداعم المميز Premium",
      perMonth: "/شهرياً",
      supporterSubtitle: "ساعد في إبقاء iPartyUp مستمراً وافتح كل المزايا بالمقابل",
      becomeSupporter: "حمّل التطبيق للاشتراك",
      supporterHint: "افتح iPartyUp واضغط على دعم المطور (Patreon أو Binance Pay أو Bybit Pay) لتفعيل المزايا",
      getStartedFree: "ابدأ مجاناً الآن",
      mostPopular: "الأكثر طلباً",
      faqPrompt: "هل ما زال لديك أسئلة قبل الاختيار؟",
      readFaq: "اقرأ الأسئلة الشائعة",
    },
    download: {
      heroTitle: "ابدأ حفلة المشاهدة",
      heroSubtitle:
        "حمّل iPartyUp لأنظمة Windows وmacOS وAndroid عبر Google Play وابدأ المشاهدة معاً بتزامن تام.",
      checkingLatest: "جارٍ التحقق من أحدث إصدار...",
      comingSoon: "قريباً",
      latestStable: "أحدث إصدار مستقر",
      previousBuild: "إصدار سابق",
      availableOnPlay: "متاح على Google Play",
      download: "تحميل",
      getOnPlay: "تحميل من Google Play",
      viewUpdateNotes: "عرض ملاحظات التحديث",
    },
    updates: {
      backToDownload: "العودة للتنزيلات",
      heroPrefix: "أحدث",
      heroAccent: "التحديثات",
      heroSubtitle:
        "كل إصدار منشور من iPartyUp مباشرة من سجل التحديثات: ميزات جديدة، تشغيل أسرع، وإصلاحات للأخطاء.",
      latestLabel: "أحدث إصدار",
      publishedOn: "تاريخ النشر",
      loading: "جارٍ تحميل ملاحظات التحديث...",
      emptyTitle: "لا توجد إصدارات منشورة بعد",
      emptyDesc: "عد قريباً، نطلق تحديثات جديدة باستمرار.",
      errorTitle: "تعذر تحميل ملاحظات التحديث",
      errorDesc: "يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
      retry: "إعادة المحاولة",
      downloadThisVersion: "تحميل نسخة الحاسوب",
      getOnGooglePlay: "تحميل من Google Play",
      englishNotesTag: "ملاحظات التحديث بالإنجليزية",
    },
  },
}
