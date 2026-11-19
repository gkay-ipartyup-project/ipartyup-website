"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

interface LegalSection {
  title: string
  paragraphs?: string[]
  bullets?: { label?: string; text: string }[]
  afterText?: string
}

const PRIVACY_EN: LegalSection[] = [
  {
    title: "1. Our Privacy Commitment",
    paragraphs: [
      "At iPartyUp, privacy is not a marketing slogan. It is how the app is built. We have zero interest in collecting unnecessary personal data, building behavioral ad profiles, or selling your information to anyone.",
      "We do not run intrusive pop-ups or forced ads during your movies. The only ads that exist in iPartyUp are voluntary rewarded ads that you can choose to watch if you want to earn Prime Tokens for in-app Shop items such as Profile Decorations.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We collect only the minimum data needed to run iPartyUp across Windows, macOS, and Android:",
    ],
    bullets: [
      {
        label: "Account & Profile Data:",
        text: "Your email address, display name, username, and profile avatar provided when you register or sign in with Google.",
      },
      {
        label: "Sync & App Preferences:",
        text: "Your friends list, watch room memberships, My List (Favorites and Watch Later), Continue Watching playback progress, preferred subtitle and audio language, equipped Profile Decorations, and Prime Token balance.",
      },
      {
        label: "Authentication & Session Security:",
        text: "Secure login tokens and session state used to keep your account authenticated and protect against unauthorized access.",
      },
      {
        label: "Optional Support & Membership Links:",
        text: "If you link your Patreon account inside the app to activate Premium Supporter perks, we store your Patreon link status and active membership tier. Billing itself is handled solely by Patreon.",
      },
      {
        label: "Diagnostics & Bug Reports:",
        text: "Basic device platform details (such as Windows, macOS, or Android version) and diagnostic logs only when you submit a bug report or encounter a crash error report.",
      },
    ],
    afterText:
      "We do NOT sell your personal data, record your voice chat audio, collect keystrokes or screen recordings, or build third-party advertising profiles from what you watch.",
  },
  {
    title: "3. Voice Chat & Real-Time Rooms",
    paragraphs: [
      "When you choose to join in-room voice chat, audio is transmitted in real time through our real-time communications provider (Agora) so everyone in the watch room can talk together. iPartyUp does not record, transcribe, or store your voice conversations.",
      "Text messages and reactions sent inside watch rooms are delivered in real time for room participants so the room stays interactive and synchronized.",
    ],
  },
  {
    title: "4. Voluntary Rewarded Ads",
    paragraphs: [
      "If you choose to watch a voluntary rewarded ad (for example, to earn Prime Tokens on Android or web), the ad network provider (such as Google AdMob or a configured rewarded ad partner) may process standard non-personal device or ad-delivery signals required to deliver and verify your reward in accordance with their own privacy policies.",
      "Watching rewarded ads is 100% optional. You can enjoy iPartyUp without ever watching an ad.",
    ],
  },
  {
    title: "5. Third-Party Services & Content Sources",
    paragraphs: [
      "We do not sell, rent, or trade your personal data. We share only the minimum technical data needed with trusted infrastructure providers that keep iPartyUp running:",
    ],
    bullets: [
      {
        label: "Infrastructure & Authentication:",
        text: "Supabase (account authentication, database, and realtime room sync), Google Sign-In (optional OAuth login), and cloud hosting providers.",
      },
      {
        label: "Optional Integrations:",
        text: "Patreon (optional Premium Supporter verification) and Agora (optional live voice channels).",
      },
      {
        label: "Metadata & Media Sources:",
        text: "Movie, TV, and anime metadata is provided by The Movie Database (TMDB). When you stream YouTube videos, Google Drive files, or third-party media sources inside a room, your device connects to those services under their respective terms and privacy policies.",
      },
    ],
  },
  {
    title: "6. Data Retention & Account Deletion",
    paragraphs: [
      "We keep your account information only while your account remains active. You can request complete deletion of your account and associated data at any time through the app settings or via our in-app Reports & Feedback section.",
      "When your account is deleted, your personal account data, friends list, My List, Continue Watching history, and room associations are permanently removed within 30 days. Anonymous, aggregated statistics (such as total download counts) that cannot identify you may be retained.",
    ],
  },
  {
    title: "7. Your Rights & Children's Privacy",
    paragraphs: [
      "Regardless of where you live, you have the right to access, update, or delete your personal information and unlink optional third-party accounts (such as Patreon) at any time.",
      "iPartyUp is not intended for children under 13 years of age (or the minimum legal age in your country). We do not knowingly collect personal information from children under 13. If you believe a child has created an account, please contact us so we can delete it promptly.",
    ],
  },
  {
    title: "8. Updates & Contact",
    paragraphs: [
      "We may update this Privacy Policy as iPartyUp grows and adds new platforms or features. Whenever we make meaningful changes, we update the effective date at the top of this page.",
      "Have a privacy question or deletion request? Reach us anytime via Reports & Feedback inside the iPartyUp app or through our official Telegram community.",
    ],
  },
]

const PRIVACY_AR: LegalSection[] = [
  {
    title: "1. التزامنا بخصوصيتك",
    paragraphs: [
      "في iPartyUp، الخصوصية ليست مجرد شعار تسويقي، بل هي أساس بناء التطبيق. ليس لدينا أي اهتمام بجمع بيانات شخصية غير ضرورية أو بناء ملفات تتبع دعائية أو بيع معلوماتك لأي جهة.",
      "نحن لا نعرض إعلانات منبثقة مزعجة أو إجبارية أثناء مشاهدتك. الإعلانات الوحيدة الموجودة في iPartyUp هي إعلانات مكافآت اختيارية بالكامل يمكنك اختيار مشاهدتها لجمع نقاط Prime Tokens لاستخدامها في المتجر داخل التطبيق مثل زينة الملف الشخصي.",
    ],
  },
  {
    title: "2. المعلومات التي نجمعها",
    paragraphs: [
      "نجمع فقط الحد الأدنى اللازم لتشغيل iPartyUp على أنظمة Windows وmacOS وAndroid:",
    ],
    bullets: [
      {
        label: "بيانات الحساب والملف الشخصي:",
        text: "البريد الإلكتروني، والاسم الظاهر، واسم المستخدم، وصورة الملف الشخصي التي تقدمها عند التسجيل أو تسجيل الدخول عبر Google.",
      },
      {
        label: "بيانات المزامنة وتفضيلات التطبيق:",
        text: "قائمة الأصدقاء، وغرف المشاهدة، وقائمتي (المفضلة والمشاهدة لاحقاً)، وسجل استكمال المشاهدة، ولغة الترجمة والصوت المفضلة، وزينة الملف الشخصي المفعّلة، ورصيد Prime Tokens.",
      },
      {
        label: "المصادقة وأمان الجلسات:",
        text: "رموز تسجيل الدخول الآمنة وحالة الجلسة للحفاظ على أمان حسابك ومنع الوصول غير المصرح به.",
      },
      {
        label: "الروابط الاختيارية للداعمين:",
        text: "إذا قمت بربط حساب Patreon الخاص بك داخل التطبيق لتفعيل مزايا الداعم المميز (Premium Supporter)، نحفظ فقط حالة الربط ومستوى العضوية، بينما تتم جميع عمليات الفوترة والدفع عبر Patreon وحده.",
      },
      {
        label: "سجلات الأعطال والبلاغات:",
        text: "معلومات تقنية أساسية عن الجهاز والنظام (مثل Windows أو macOS أو Android) وسجلات التشخيص فقط عند إرسال بلاغ خطأ أو حدوث عطل في التطبيق.",
      },
    ],
    afterText:
      "نحن لا نبيع بياناتك الشخصية أبداً، ولا نسجّل محادثاتك الصوتية، ولا نلتقط ضغطات المفاتيح أو تسجيلات الشاشة، ولا ننشئ ملفات دعائية من سجل مشاهدتك.",
  },
  {
    title: "3. الدردشة الصوتية وغرف المشاهدة الفورية",
    paragraphs: [
      "عندما تختار الانضمام للدردشة الصوتية داخل الغرفة، يُنقل الصوت بشكل مباشر وفوري عبر مزود الاتصال الصوتي (Agora) لتتمكن من التحدث مع أصدقائك. لا يقوم iPartyUp بتسجيل أو تفريغ أو تخزين محادثاتك الصوتية إطلاقاً.",
      "الرسائل النصية والتفاعلات داخل الغرفة تُنقل بشكل لحظي للمشاركين في الغرفة للحفاظ على التفاعل والتزامن.",
    ],
  },
  {
    title: "4. إعلانات المكافآت الاختيارية",
    paragraphs: [
      "إذا اخترت مشاهدة إعلان مكافآت طوعي (لجمع نقاط Prime Tokens على Android أو الويب)، فقد يعالج مزود الإعلانات (مثل Google AdMob أو شركاء إعلانات المكافآت) إشارات تقنية قياسية غير شخصية لازمة لتقديم الإعلان والتحقق من المكافأة وفق سياسة الخصوصية الخاصة به.",
      "مشاهدة هذه الإعلانات اختيارية 100%، ويمكنك استخدام iPartyUp بالكامل دون مشاهدة أي إعلان.",
    ],
  },
  {
    title: "5. خدمات الطرف الثالث ومصادر المحتوى",
    paragraphs: [
      "نحن لا نبيع أو نؤجر أو نتاجر ببياناتك الشخصية، ونشارك الحد التقني الأدنى فقط مع مزودي البنية التحتية الموثوقين لتشغيل الخدمة:",
    ],
    bullets: [
      {
        label: "البنية التحتية والمصادقة:",
        text: "Supabase (المصادقة وقاعدة البيانات ومزامنة الغرف الفورية)، وتسجيل الدخول عبر Google (اختياري)، ومزودو الاستضافة السحابية.",
      },
      {
        label: "التكاملات الاختيارية:",
        text: "Patreon (للتحقق من عضوية الداعم المميز اختيارياً) وAgora (لقنوات الدردشة الصوتية المباشرة اختيارياً).",
      },
      {
        label: "البيانات الوصفية ومصادر الوسائط:",
        text: "بيانات الأفلام والمسلسلات والأنمي مقدمة من The Movie Database (TMDB). عند تشغيل مقاطع YouTube أو ملفات Google Drive أو مصادر بث خارجية داخل الغرفة، يتصل جهازك بهذه الخدمات وفق شروطها وسياساتها.",
      },
    ],
  },
  {
    title: "6. الاحتفاظ بالبيانات وحذف الحساب",
    paragraphs: [
      "نحتفظ بمعلومات حسابك طالما بقي حسابك نشطاً. يمكنك طلب حذف حسابك وجميع بياناتك بالكامل في أي وقت من إعدادات التطبيق أو عبر قسم البلاغات والملاحظات داخل التطبيق.",
      "عند حذف الحساب، تتم إزالة بياناتك الشخصية وقائمة أصدقائك وقائمتك الخاصة وسجل المتابعة وروابط الغرف بشكل نهائي خلال 30 يوماً. قد تبقى إحصائيات مجمّعة ومجهولة الهوية لا يمكن ربطها بك.",
    ],
  },
  {
    title: "7. حقوقك وخصوصية الأطفال",
    paragraphs: [
      "بغض النظر عن مكان إقامتك، يحق لك الوصول إلى بياناتك أو تحديثها أو حذفها وفصل الحسابات المرتبطة اختيارياً (مثل Patreon) في أي وقت.",
      "تطبيق iPartyUp غير مخصص للأطفال دون سن 13 عاماً (أو الحد القانوني الأدنى في بلدك)، ولا نجمع عن قصد بيانات من أطفال دون هذا السن. إذا كنت تعتقد أن طفلاً أنشأ حساباً، يرجى التواصل معنا لحذفه فوراً.",
    ],
  },
  {
    title: "8. التحديثات والتواصل",
    paragraphs: [
      "قد نحدّث سياسة الخصوصية هذه مع تطور iPartyUp وإضافة منصات أو ميزات جديدة، وسنحدّث تاريخ المراجعة في أعلى الصفحة عند أي تعديل مهم.",
      "إذا كان لديك أي استفسار حول الخصوصية أو طلب حذف بيانات، تواصل معنا في أي وقت عبر قسم البلاغات والملاحظات داخل التطبيق أو عبر مجتمعنا الرسمي على Telegram.",
    ],
  },
]

export function PrivacyClient() {
  const { isArabic } = useLanguage()
  const sections = isArabic ? PRIVACY_AR : PRIVACY_EN

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
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/80">
              {isArabic
                ? "خصوصيتك مبدأ أساسي مبني في صميم تطبيق iPartyUp عبر جميع أجهزتك."
                : "Your privacy is a core principle built into iPartyUp across Windows, macOS, and Android."}
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
                        {b.label && <strong className="text-white">{b.label} </strong>}
                        {b.text}
                      </li>
                    ))}
                  </ul>
                )}
                {sec.afterText && (
                  <p className="text-[15px] sm:text-base leading-relaxed text-white/90 font-medium">
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
