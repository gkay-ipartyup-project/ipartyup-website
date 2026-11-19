"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

interface LegalSection {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  afterText?: string
}

const TERMS_EN: LegalSection[] = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      'By downloading, installing, or using iPartyUp ("the App", "the Service") on Windows, macOS, or Android, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.',
    ],
  },
  {
    title: "2. Description of Service",
    paragraphs: [
      "iPartyUp is a cross-platform synchronized watch-party application available on Windows, macOS, and Android (via Google Play). The Service includes:",
    ],
    bullets: [
      "Synchronized watch-together rooms with real-time playback controls across desktop and mobile",
      "Access to curated catalog listings, third-party streaming sources, YouTube, YouTube Live, and user-provided Google Drive links",
      "Real-time text chat, reactions, and optional in-room voice chat",
      "Friends lists, My List (Favorites and Watch Later), Continue Watching sync, cloud subtitles, and content requests",
      "In-app Profile Decorations Shop, Prime Tokens, and application updates",
    ],
    afterText:
      "Because most third-party media streams are not hosted on iPartyUp's own storage, stream availability and quality can vary over time or by region. We continuously maintain and improve provider integrations behind the scenes, though we cannot guarantee permanent uptime for any external source.",
  },
  {
    title: "3. Account Registration & Eligibility",
    paragraphs: [
      "You must be at least 13 years old (or the minimum legal age in your country) to create an account. If you are under 18, you confirm you have permission from a parent or legal guardian. When using an account, you agree to:",
    ],
    bullets: [
      "Provide accurate registration information and keep your login credentials secure",
      "Not share your account credentials with others (accounts are intended for single-user sessions)",
      "Accept responsibility for activity under your account and notify us if you suspect unauthorized access",
    ],
  },
  {
    title: "4. Premium Supporter Membership & Virtual Items",
    paragraphs: [
      "iPartyUp offers a Free Plan (plus a 7-day free Premium trial for new accounts) and an optional Premium Supporter Plan ($2.99/month) available inside the app via Patreon, Binance Pay, or Bybit Pay. Patreon recurring memberships, renewals, pauses, and cancellations are managed directly by Patreon under Patreon's Terms of Use. Crypto transfers via Binance Pay or Bybit Pay are non-recurring manual payments verified inside the app. iPartyUp does not store your payment card details.",
      "In-app virtual items, including Prime Tokens and Profile Decorations (avatar frames, profile banners, and custom avatars), are non-transferable, have no real-world monetary value, and cannot be exchanged for cash. Voluntary rewarded ads used to earn Prime Tokens are entirely optional.",
    ],
  },
  {
    title: "5. Acceptable Use & Room Conduct",
    paragraphs: [
      "Watch rooms are meant to be fun and welcoming. You agree not to:",
    ],
    bullets: [
      "Use iPartyUp for any illegal or unauthorized purpose",
      "Harass, bully, threaten, hate-speech, or abuse other users in text chat, voice chat, or room names",
      "Publicly rebroadcast, record, redistribute, or commercially exploit streams accessed through the App",
      "Reverse-engineer, bypass security checks, abuse proxy endpoints, or run automated scraping bots against our infrastructure",
      "Impersonate iPartyUp staff or upload malicious files or harmful links",
    ],
    afterText:
      "Violating these rules may result in warning, feature restriction, or permanent account suspension.",
  },
  {
    title: "6. Intellectual Property & Third-Party Content",
    paragraphs: [
      "The iPartyUp name, branding, interface design, and original software code belong to iPartyUp. Movie, TV, and anime metadata and artwork are provided by The Movie Database (TMDB) and remain the property of their respective copyright holders.",
      "iPartyUp does not claim ownership over third-party videos, YouTube streams, or user Google Drive files played inside rooms. If you are a copyright owner and believe content linked through the platform infringes your rights, please reach out through our official contact channels with sufficient details so we can review and address the request promptly.",
    ],
  },
  {
    title: "7. Disclaimers & Limitation of Liability",
    paragraphs: [
      'iPartyUp is provided on an "as is" and "as available" basis as an independent project. While we work hard to keep playback, sync, and servers reliable, we do not guarantee uninterrupted or error-free service at all times.',
      "To the maximum extent permitted by law, iPartyUp is not liable for indirect, incidental, or consequential damages arising from your use of the App, temporary service interruptions, or third-party stream or service outages.",
    ],
  },
  {
    title: "8. Changes to Terms & Contact",
    paragraphs: [
      "We may revise these Terms from time to time as iPartyUp evolves. Continued use of the App after updated Terms are posted means you accept the revised Terms.",
      "For questions about these Terms, contact us via Reports & Feedback inside the app or through our official Telegram community.",
    ],
  },
]

const TERMS_AR: LegalSection[] = [
  {
    title: "1. قبول الشروط",
    paragraphs: [
      "بتحميلك أو تثبيتك أو استخدامك لتطبيق iPartyUp («التطبيق» أو «الخدمة») على Windows أو macOS أو Android، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام الخدمة.",
    ],
  },
  {
    title: "2. وصف الخدمة",
    paragraphs: [
      "iPartyUp هو تطبيق مشاهدة جماعية متزامنة متعدد المنصات متاح على Windows وmacOS وAndroid (عبر Google Play). وتشمل الخدمة:",
    ],
    bullets: [
      "غرف مشاهدة جماعية متزامنة مع تحكم فوري في التشغيل عبر الحاسوب والهاتف",
      "الوصول إلى فهارس محتوى منتقاة ومزودي بث خارجيين وYouTube وبثوث YouTube المباشرة وروابط Google Drive الخاصة بالمستخدم",
      "محادثة نصية فورية، وتفاعلات، ودردشة صوتية اختيارية داخل الغرف",
      "قائمة الأصدقاء، وقائمتي (المفضلة والمشاهدة لاحقاً)، ومزامنة استكمال المشاهدة، والترجمة السحابية، وطلبات المحتوى",
      "متجر زينة الملف الشخصي، ونقاط Prime Tokens، وتحديثات التطبيق المستمرة",
    ],
    afterText:
      "نظراً لأن معظم مصادر البث الخارجية لا تُخزّن على خوادم iPartyUp الخاصة، قد يتغير توفر بعض المصادر أو جودتها حسب الوقت أو المنطقة. نعمل باستمرار على تحسين وتحديث تكامل المزودين خلف الكواليس، لكننا لا نستطيع ضمان استمرار أي مصدر خارجي إلى الأبد.",
  },
  {
    title: "3. التسجيل والأهلية",
    paragraphs: [
      "يجب أن لا يقل عمرك عن 13 عاماً (أو الحد القانوني الأدنى في بلدك) لإنشاء حساب. وإذا كنت دون 18 عاماً، فإنك تؤكد حصولك على موافقة ولي الأمر. وباستخدام حسابك، فإنك توافق على:",
    ],
    bullets: [
      "تقديم معلومات تسجيل صحيحة والحفاظ على سرية بيانات دخولك",
      "عدم مشاركة حسابك مع آخرين (الحسابات مخصصة للاستخدام الشخصي وجلسة واحدة)",
      "تحمّل المسؤولية عن النشاط الذي يتم عبر حسابك وإبلاغنا عند الاشتباه بأي وصول غير مصرح به",
    ],
  },
  {
    title: "4. عضوية الداعم المميز (Premium) والعناصر الافتراضية",
    paragraphs: [
      "يوفر iPartyUp باقة مجانية دائمة (مع تجربة Premium مجانية لمدة 7 أيام للحسابات الجديدة) وباقة اختيارية للداعم المميز (Premium Supporter بقيمة 2.99 دولار شهرياً) من داخل التطبيق عبر Patreon أو Binance Pay أو Bybit Pay. تتم إدارة المدفوعات المتكررة والتجديد والإلغاء عبر Patreon وفق شروطه، بينما تكون تحويلات Binance Pay أو Bybit Pay دفعات يدوية غير متكررة يتم التحقق منها داخل التطبيق. ولا يحتفظ iPartyUp ببيانات بطاقتك البنكية.",
      "العناصر الافتراضية داخل التطبيق، بما في ذلك نقاط Prime Tokens وزينة الملف الشخصي (الإطارات المتحركة واللافتات والصور المخصصة)، غير قابلة للتحويل وليس لها قيمة نقدية حقيقية ولا يمكن استبدالها بمال. إعلانات المكافآت المستخدمة لكسب Prime Tokens اختيارية بالكامل.",
    ],
  },
  {
    title: "5. الاستخدام المقبول وسلوك الغرف",
    paragraphs: [
      "صُممت غرف المشاهدة لتكون ممتعة ومريحة للجميع. توافق على عدم القيام بما يلي:",
    ],
    bullets: [
      "استخدام iPartyUp لأي غرض غير قانوني أو غير مصرح به",
      "المضايقة أو التنمر أو التهديد أو الإساءة للمستخدمين الآخرين في الدردشة النصية أو الصوتية أو أسماء الغرف",
      "إعادة بث المحتوى علناً أو تسجيله أو إعادة توزيعه أو استغلاله تجارياً",
      "الهندسة العكسية أو تجاوز إجراءات الحماية أو إساءة استخدام الخوادم والوكلاء أو تشغيل أدوات سحب آلي",
      "انتحال شخصية فريق iPartyUp أو مشاركة ملفات أو روابط ضارة",
    ],
    afterText:
      "قد يؤدي خرق هذه القواعد إلى توجيه تحذير أو تقييد الميزات أو تعليق الحساب نهائياً.",
  },
  {
    title: "6. الملكية الفكرية ومحتوى الطرف الثالث",
    paragraphs: [
      "اسم iPartyUp وهويته البصرية وتصميم الواجهة والشيفرة البرمجية الخاصة به مملوكة لـ iPartyUp. البيانات الوصفية والملصقات الخاصة بالأفلام والمسلسلات والأنمي مقدمة من The Movie Database (TMDB) وتبقى ملكاً لأصحاب حقوقها.",
      "لا يدّعي iPartyUp ملكية مقاطع الطرف الثالث أو بثوث YouTube أو ملفات Google Drive التي يشغّلها المستخدمون داخل الغرف. إذا كنت مالك حقوق وتعتقد أن رابطاً على المنصة ينتهك حقوقك، يرجى التواصل معنا عبر قنواتنا الرسمية بتفاصيل كافية لنراجع الطلب ونتعامل معه بسرعة.",
    ],
  },
  {
    title: "7. إخلاء المسؤولية وحدودها",
    paragraphs: [
      "يُقدّم iPartyUp كما هو وحسب التوفر كمشروع مستقل. ورغم حرصنا المستمر على استقرار البث والمزامنة والخوادم، لا نضمن خلو الخدمة من أي انقطاع مؤقت أو خطأ تقني في جميع الأوقات.",
      "إلى أقصى حد يسمح به القانون، لا يتحمل iPartyUp مسؤولية أي أضرار غير مباشرة أو عرضية ناتجة عن استخدام التطبيق أو انقطاع مؤقت في الخدمة أو تعطل مصادر خارجية.",
    ],
  },
  {
    title: "8. تحديث الشروط والتواصل",
    paragraphs: [
      "قد نحدّث هذه الشروط من وقت لآخر مع تطور iPartyUp، ويعني استمرارك في استخدام التطبيق بعد نشر التحديث موافقتك على الشروط المعدّلة.",
      "لأي استفسار حول هذه الشروط، تواصل معنا عبر قسم البلاغات والملاحظات داخل التطبيق أو عبر مجتمعنا الرسمي على Telegram.",
    ],
  },
]

export function TermsClient() {
  const { isArabic } = useLanguage()
  const sections = isArabic ? TERMS_AR : TERMS_EN

  return (
    <main className="relative overflow-x-clip">
      <Navbar />

      <section className="relative overflow-hidden bg-stremio-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,#0a4f24_0%,#071f0f_38%,#0a0a0a_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_15%_20%,#0d3d1a_0%,transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6 pb-[80px] pt-[150px] sm:pt-[180px] lg:pb-[110px] lg:pt-[200px]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-6xl">
              {isArabic ? "الشروط والأحكام" : "Terms & Conditions"}
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/80">
              {isArabic
                ? "يرجى قراءة هذه الشروط بعناية قبل استخدام iPartyUp."
                : "Please read these terms carefully before using iPartyUp."}
            </p>
            <p className="mt-3 text-xs font-medium text-white/45">
              {isArabic ? "آخر تحديث: نوفمبر 2026" : "Last updated: November 2026"}
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-stremio-dark pt-8 pb-24 lg:pt-12 lg:pb-32 z-10">
        <div className="relative z-10 mx-auto max-w-[900px] px-5 sm:px-6">
          <div className="space-y-10 sm:space-y-12 text-white/80">
            {sections.map((sec) => (
              <section key={sec.title} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {sec.title}
                </h2>
                {sec.paragraphs?.map((p, idx) => (
                  <p key={idx} className="text-[15px] sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="list-disc ps-6 space-y-2.5 text-[15px] sm:text-base">
                    {sec.bullets.map((b, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {sec.afterText && (
                  <p className="text-[15px] sm:text-base leading-relaxed text-white/85">
                    {sec.afterText}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
