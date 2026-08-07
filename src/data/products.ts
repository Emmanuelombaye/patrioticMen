export type CategoryId =
  | "weight-loss"
  | "hormones"
  | "sexual-health"
  | "hair-regrowth"
  | "longevity-recovery";

export type Product = {
  id: string;
  name: string;
  categoryId: CategoryId;
  format: string;
  image: string;
  tagline: string;
  summary: string;
  benefits: string[];
  idealFor: string[];
  howItWorks: string;
  whoItsFor: string[];
  whoItsNotFor: string[];
  faqs: { q: string; a: string }[];
};

export type Category = {
  id: CategoryId;
  name: string;
  shortName: string;
  headline: string;
  tagline: string;
  summary: string;
  image: string;
  accent: string;
  whatsIncluded: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  science: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const categories: Category[] = [
  {
    id: "weight-loss",
    name: "Weight Loss",
    shortName: "Weight loss",
    headline: "Long-term weight loss",
    tagline: "Clinically guided GLP-1 protocols for lasting fat loss.",
    summary:
      "For men who want facts, not opinions. Physician-reviewed Semaglutide and Tirzepatide options designed to quiet food noise, regulate appetite, and support sustainable weight reduction when medically appropriate.",
    image: "/programmes/weight-loss.png",
    accent: "Lose fat. Keep discipline.",
    whatsIncluded: [
      {
        title: "Prescription GLP-1 medication",
        body: "Semaglutide or Tirzepatide—prescribed only if a licensed provider confirms you’re a clinical fit. No automatic scripts, no one-size dosing.",
      },
      {
        title: "Clinician-backed care",
        body: "U.S.-licensed providers review your intake, guide titration, and stay available for adjustments as your body responds.",
      },
      {
        title: "Discreet nationwide delivery",
        body: "If prescribed, medication ships privately to your door—no pharmacy-counter conversations, no branded packaging that announces what’s inside.",
      },
      {
        title: "Ongoing progress support",
        body: "Side effects, plateaus, or dose questions—your clinical path stays open so treatment can evolve with you.",
      },
    ],
    steps: [
      {
        title: "Complete your online evaluation",
        body: "Share goals, medical history, and current health details in a focused clinical intake built for clarity—not paperwork for its own sake.",
      },
      {
        title: "Provider review",
        body: "A licensed clinician determines eligibility, flags contraindications, and personalizes whether Semaglutide, Tirzepatide, or neither is appropriate.",
      },
      {
        title: "Start treatment",
        body: "If prescribed, begin a structured titration plan with clear dosing guidance so results and tolerability stay in balance.",
      },
      {
        title: "Track and refine",
        body: "Follow-up support helps adjust dosing, habits, and expectations as weight, appetite, and energy shift over time.",
      },
    ],
    science: [
      {
        title: "Appetite regulation, not willpower theatre",
        body: "GLP-1 medications act on pathways involved in satiety and reward. For many men, that means less constant hunger—and fewer battles with food noise between meals.",
      },
      {
        title: "Semaglutide vs Tirzepatide",
        body: "Both support metabolic and appetite pathways. Tirzepatide engages an additional pathway and is often considered when stronger dual-action support is clinically appropriate. Your provider decides—not a product page.",
      },
      {
        title: "Obesity is often chronic",
        body: "Sustainable fat loss under medical oversight beats crash diets. The goal is a protocol you can live with—paired with nutrition, movement, and sleep—not a six-week stunt.",
      },
    ],
    faqs: [
      {
        q: "Am I eligible for weight loss medication?",
        a: "Eligibility depends on clinical factors reviewed by a licensed provider. Completing an evaluation is the first step—treatment is never automatic, and providers may decline when it isn’t appropriate.",
      },
      {
        q: "What’s the difference between Semaglutide and Tirzepatide?",
        a: "Both are prescription options that support appetite and metabolic pathways. Tirzepatide is often considered for stronger dual-pathway support when suitable. Your provider matches the option to your history and goals.",
      },
      {
        q: "Will I still need to diet and exercise?",
        a: "Medication works best alongside nutrition, movement, sleep, and habit support. Your plan should fit real life—not perfection. Providers help set expectations that are sustainable.",
      },
      {
        q: "Can I stop treatment later?",
        a: "Yes. Your provider can help you plan titration changes or discontinuation based on results, tolerability, and longer-term health needs.",
      },
    ],
  },
  {
    id: "hormones",
    name: "Hormones",
    shortName: "Hormones",
    headline: "Optimised testosterone",
    tagline: "Hormone support for energy, drive, and performance.",
    summary:
      "When symptoms and clinical review point to low testosterone, licensed providers can guide classic TRT with Testosterone Cypionate—or a fertility-conscious Enclomiphene path—monitored, discreet, and built for men who want their baseline back.",
    image: "/programmes/hormones.png",
    accent: "Rebuild the baseline.",
    whatsIncluded: [
      {
        title: "Full clinical review",
        body: "Providers assess symptoms, history, and appropriateness before any hormone protocol. Hormone therapy is clinical—not cosmetic.",
      },
      {
        title: "Two clinical lanes",
        body: "Classic Testosterone Cypionate TRT when replacement is indicated, or fertility-conscious Enclomiphene when supporting your own pathways is the better fit.",
      },
      {
        title: "Monitored protocols",
        body: "Dosing and follow-up are guided by licensed clinicians—not DIY hormone stacking, forums, or unsupervised cycles.",
      },
      {
        title: "Private fulfillment",
        body: "When prescribed, medication ships discreetly nationwide so treatment stays between you and your care team.",
      },
    ],
    steps: [
      {
        title: "Tell us your symptoms",
        body: "Low energy, drive, recovery, mood, or libido—start with a clear clinical intake that captures what you’re actually feeling.",
      },
      {
        title: "Provider assessment",
        body: "A licensed clinician reviews eligibility, discusses labs when needed, and recommends a suitable path—or explains why treatment isn’t indicated.",
      },
      {
        title: "Personalized protocol",
        body: "TRT or Enclomiphene—matched to your goals, including fertility considerations, lifestyle, and risk profile.",
      },
      {
        title: "Follow-up care",
        body: "Ongoing oversight for dosing, response, side effects, and safety so results don’t come at the cost of guesswork.",
      },
    ],
    science: [
      {
        title: "Why testosterone matters",
        body: "Testosterone influences energy, mood, libido, muscle, and recovery. Levels can decline with age, sleep debt, stress, excess body fat, and metabolic health—symptoms deserve clinical context, not internet self-diagnosis.",
      },
      {
        title: "TRT vs Enclomiphene",
        body: "TRT replaces testosterone directly. Enclomiphene may support the body’s own production pathways and is often considered when fertility is a priority. The right lane depends on your goals and labs—not preference alone.",
      },
      {
        title: "Not automatic prescribing",
        body: "Patriot protocols are physician-guided. Providers may decline when treatment isn’t appropriate, and responsible hormone care includes monitoring—not set-and-forget scripts.",
      },
    ],
    faqs: [
      {
        q: "Do I need labs first?",
        a: "Providers typically rely on clinical history and appropriate labs. Your evaluation helps determine what testing and next steps are needed before any protocol begins.",
      },
      {
        q: "Will TRT affect fertility?",
        a: "Traditional TRT can suppress natural production. If fertility matters now or later, ask about Enclomiphene or alternative approaches during your provider review.",
      },
      {
        q: "How soon will I feel a difference?",
        a: "Response varies. Some men notice energy, mood, or libido changes over weeks; body composition and strength shifts usually take longer and depend on training, sleep, and nutrition.",
      },
      {
        q: "Is this the same as a steroid cycle?",
        a: "No. Patriot hormone protocols are physician-guided medical treatments with eligibility screening and follow-up—not recreational performance stacking.",
      },
    ],
  },
  {
    id: "sexual-health",
    name: "Sexual Health",
    shortName: "Sexual health",
    headline: "Stronger erections",
    tagline: "Clinically proven ED support, discreetly delivered.",
    summary:
      "Tackle erectile difficulties with physician-reviewed Tadalafil—private online evaluation, flexible daily or as-needed strategies, and shipping designed for discretion from intake to doorstep.",
    image: "/programmes/sexual-health.png",
    accent: "Confidence, restored.",
    whatsIncluded: [
      {
        title: "Proven PDE5 medication",
        body: "Tadalafil—with daily or as-needed strategies when clinically appropriate—so readiness fits how you actually live, not a rigid calendar.",
      },
      {
        title: "Discreet by design",
        body: "No pharmacy counter conversations. Private packaging to your door, built so your order stays your business.",
      },
      {
        title: "Clinical safety screening",
        body: "Providers review heart history, interactions (including nitrates), and suitability before anything is prescribed.",
      },
      {
        title: "Root-cause awareness",
        body: "ED can relate to hormones, metabolic health, stress, or medications. Your intake helps flag what else may need attention—not just a quick fix.",
      },
    ],
    steps: [
      {
        title: "Private intake",
        body: "Answer clinical questions online—designed for discretion, honesty, and the details providers need to prescribe safely.",
      },
      {
        title: "Provider review",
        body: "A licensed clinician confirms whether Tadalafil is appropriate and screens for contraindications that matter.",
      },
      {
        title: "Personalized dosing",
        body: "Daily or as-needed protocols matched to frequency, preference, and medical profile—with clear use guidance.",
      },
      {
        title: "Ongoing adjustments",
        body: "Need a different approach? Follow-up support stays available so treatment can refine with your lifestyle.",
      },
    ],
    science: [
      {
        title: "How ED medication works",
        body: "PDE5 inhibitors help preserve pathways that support blood flow during arousal—leading to firmer, more reliable erections for many men when sexual stimulation is present.",
      },
      {
        title: "More than performance",
        body: "Erectile dysfunction can be an early signal of cardiovascular, metabolic, or hormonal issues. Clinical review isn’t bureaucracy—it’s part of taking sexual health seriously.",
      },
      {
        title: "The Tadalafil window",
        body: "Tadalafil is known for a longer duration of effect than some alternatives, which can support spontaneity when prescribed and used as directed.",
      },
    ],
    faqs: [
      {
        q: "Is Tadalafil safe long term?",
        a: "Many men use PDE5 therapy under clinical guidance. Your provider reviews risks, interactions, and whether ongoing use is appropriate for your health profile.",
      },
      {
        q: "Daily vs as-needed—what’s better?",
        a: "It depends on sexual frequency, preferences, and medical history. Your provider helps choose the strategy that fits—not a one-size default.",
      },
      {
        q: "Can ED be related to low testosterone?",
        a: "Yes. Low testosterone can affect libido and erectile function. That’s why Patriot also offers hormone pathways when a broader clinical picture suggests they may help.",
      },
      {
        q: "Will anyone know what I ordered?",
        a: "Shipments are designed to be discreet. Packaging does not advertise medication contents, and the evaluation is private and online.",
      },
    ],
  },
  {
    id: "hair-regrowth",
    name: "Hair Regrowth",
    shortName: "Hair regrowth",
    headline: "Clinically-led hair treatment",
    tagline: "Stop thinning. Support denser-looking hair.",
    summary:
      "A compounded topical combining recognized actives—Minoxidil, Finasteride, and Retinoic Acid—reviewed by licensed providers for men focused on hair density, hairline support, and a routine that actually sticks.",
    image: "/programmes/hair-regrowth.png",
    accent: "Keep your edge.",
    whatsIncluded: [
      {
        title: "Multi-active compounded topical",
        body: "Minoxidil, Finasteride, and Retinoic Acid in one physician-reviewed formula—targeting complementary pathways without juggling separate bottles.",
      },
      {
        title: "Physician review",
        body: "Access is clinician-reviewed. This isn’t a random OTC stack pulled from a shelf—eligibility and suitability come first.",
      },
      {
        title: "At-home daily routine",
        body: "Built for consistent scalp application with discreet delivery, so treatment fits grooming—not a clinical appointment every week.",
      },
      {
        title: "Clear expectations",
        body: "Hair protocols reward consistency. Most men evaluate meaningful progress over months, not days—and your care path reflects that timeline.",
      },
    ],
    steps: [
      {
        title: "Assess your pattern",
        body: "Share hairline, crown, shedding timeline, and goals in your evaluation so providers understand the pattern they’re treating.",
      },
      {
        title: "Clinical approval",
        body: "A licensed provider reviews suitability for the compounded topical—including safety considerations around finasteride and scalp health.",
      },
      {
        title: "Start the routine",
        body: "Apply as directed. Consistency drives outcomes more than intensity—missed weeks undo progress faster than imperfect technique.",
      },
      {
        title: "Track progress",
        body: "Evaluate density, shedding, and hairline trends over a multi-month window. Follow-up helps refine expectations and adherence.",
      },
    ],
    science: [
      {
        title: "DHT and follicle miniaturization",
        body: "Male pattern hair loss often involves DHT-related follicle shrinkage over time. Addressing that pathway is a foundation of clinically guided hair care.",
      },
      {
        title: "Finasteride and Minoxidil together",
        body: "Finasteride targets pathways involved in DHT activity. Minoxidil supports follicle activity and is widely used to improve the appearance of thinning hair. Combination protocols address complementary mechanisms.",
      },
      {
        title: "Retinoic acid in topical formulas",
        body: "Retinoic acid is included in compounded approaches to support scalp application and absorption context. Your provider explains what to expect for your specific formula and skin tolerance.",
      },
    ],
    faqs: [
      {
        q: "How long until I see results?",
        a: "Hair cycles are slow. Many men assess meaningful change over 3–6 months of consistent use. Early shedding can occur as follicles reset—your provider can set expectations.",
      },
      {
        q: "Is this the same as separate OTC products?",
        a: "This is a compounded Rx topical combining actives in one physician-reviewed formula—not three unrelated bottles bought independently.",
      },
      {
        q: "What if I stop treatment?",
        a: "Gains often depend on continued use. Your provider can explain what to expect if you pause and how to plan around life changes.",
      },
      {
        q: "Are there side effects?",
        a: "All medications can cause side effects, including topical and systemic considerations with finasteride. Your provider reviews risks and whether this protocol is appropriate for you.",
      },
    ],
  },
  {
    id: "longevity-recovery",
    name: "Longevity & Recovery",
    shortName: "Longevity & recovery",
    headline: "Repair, energy, longevity",
    tagline: "Cellular energy and recovery protocols for high-output living.",
    summary:
      "NAD+, Sermorelin, and Glutathione—physician-reviewed options for men optimizing cellular energy, training recovery, sleep-related repair, and long-game resilience. Prescribed only when clinically appropriate.",
    image: "/programmes/longevity-recovery.png",
    accent: "Play the long game.",
    whatsIncluded: [
      {
        title: "Three clinical options",
        body: "NAD+ for cellular energy context, Sermorelin for recovery signaling, and Glutathione for antioxidant support—matched to goals, not stacked blindly.",
      },
      {
        title: "Provider oversight",
        body: "Eligibility, dosing, and combination decisions are clinician-directed. Longevity and recovery care stays supervised—not a wellness free-for-all.",
      },
      {
        title: "Built for high-output men",
        body: "Designed for training stress, sleep debt, focus demands, and aging thoughtfully—protocols that respect real life, not biohacker theatre.",
      },
      {
        title: "Discreet fulfillment",
        body: "When prescribed, vials ship privately nationwide with clear use guidance from your care path.",
      },
    ],
    steps: [
      {
        title: "Define the goal",
        body: "Energy, focus, recovery, sleep, antioxidant support, or longevity—start with clarity so providers can match the right option.",
      },
      {
        title: "Clinical review",
        body: "A licensed provider assesses history and determines whether NAD+, Sermorelin, Glutathione, a combination, or none is appropriate.",
      },
      {
        title: "Begin your protocol",
        body: "Follow provider guidance on dosing, cadence, and what “good response” looks like for your specific treatment.",
      },
      {
        title: "Reassess and refine",
        body: "Adjust based on response, tolerability, and how training, sleep, and stress load are shifting over time.",
      },
    ],
    science: [
      {
        title: "Why NAD+ is discussed",
        body: "NAD+ is central to cellular energy metabolism and is widely studied in aging and performance contexts. Patriot frames it as a supervised protocol—not an unmonitored trend.",
      },
      {
        title: "Sermorelin and recovery signaling",
        body: "Sermorelin is a peptide used to support growth-hormone-related pathways tied to recovery, body composition, and restorative sleep—distinct from unsupervised HGH use.",
      },
      {
        title: "Glutathione and oxidative stress",
        body: "Glutathione is an antioxidant often discussed for oxidative stress support and recovery-oriented protocols. It works best as part of a system that includes sleep, training load, and nutrition.",
      },
    ],
    faqs: [
      {
        q: "Which option should I choose—NAD+, Sermorelin, or Glutathione?",
        a: "You don’t have to self-select perfectly. Your evaluation and provider review guide the match based on goals, history, and clinical judgment.",
      },
      {
        q: "Is this the same as buying supplements online?",
        a: "No. These are physician-reviewed protocol pathways with clinical oversight and discreet Rx fulfillment when appropriate—not unverified wellness products.",
      },
      {
        q: "Can I combine treatments in this programme?",
        a: "Possibly. Your provider reviews interactions, relevance, and overall plan safety before any combination approach.",
      },
      {
        q: "Can recovery protocols replace sleep?",
        a: "No. They may support recovery and energy goals, but sleep, training intelligence, and nutrition remain non-negotiable foundations.",
      },
    ],
  },
];

export const products: Product[] = [
  {
    id: "semaglutide",
    name: "Semaglutide",
    categoryId: "weight-loss",
    format: "2 mL Vial · Multiple doses",
    image: "/products/semaglutide.jpeg",
    tagline: "Clinically guided GLP-1 support for lasting fat loss.",
    summary:
      "A physician-reviewed GLP-1 protocol designed to help regulate appetite, reduce food noise, and support sustainable weight reduction when medically appropriate—with titration guided by licensed clinicians.",
    benefits: [
      "Appetite and satiety support",
      "Physician-titrated dosing",
      "Discreet home delivery",
      "Ongoing clinical follow-up",
    ],
    idealFor: [
      "Medically supervised weight management",
      "Appetite control challenges",
      "Long-term body composition goals",
    ],
    howItWorks:
      "Semaglutide supports GLP-1 pathways involved in appetite and satiety. After clinical review, your provider typically titrates dosing gradually to balance results with tolerability—paired with nutrition and lifestyle guidance that fits real life.",
    whoItsFor: [
      "Men pursuing medically supervised weight loss",
      "Those struggling with persistent hunger or food noise",
      "Candidates cleared by a licensed provider after evaluation",
    ],
    whoItsNotFor: [
      "Anyone seeking treatment without clinical review",
      "Men with contraindications identified by a provider",
      "Those unwilling to follow titration and follow-up guidance",
    ],
    faqs: [
      {
        q: "Is Semaglutide automatic after I apply?",
        a: "No. A licensed provider reviews eligibility and may decline if treatment isn’t appropriate for your history or goals.",
      },
      {
        q: "How is dosing handled?",
        a: "Providers typically titrate gradually to balance results and tolerability. You’ll receive clear guidance before you start.",
      },
      {
        q: "Will I need lifestyle changes too?",
        a: "Medication works best with nutrition, movement, and sleep support. Your plan should be sustainable—not extreme.",
      },
    ],
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    categoryId: "weight-loss",
    format: "2 mL Vial · Multiple doses",
    image: "/products/tirzepatide.jpeg",
    tagline: "Advanced dual-pathway weight loss when prescribed.",
    summary:
      "A next-generation option for men seeking stronger metabolic and appetite support under licensed clinical supervision—personalized titration, not a fixed marketing dose.",
    benefits: [
      "Dual-pathway metabolic support",
      "Personalized titration",
      "Appetite regulation focus",
      "Ongoing provider follow-up",
    ],
    idealFor: [
      "Stubborn weight loss under medical care",
      "Stronger appetite control needs",
      "Body recomposition goals",
    ],
    howItWorks:
      "Tirzepatide engages dual metabolic pathways related to appetite and glycemic regulation. Providers personalize titration when clinically appropriate and monitor how you respond over time.",
    whoItsFor: [
      "Men needing stronger clinical weight-loss support",
      "Those with stubborn fat loss under medical care",
      "Candidates approved after clinical review",
    ],
    whoItsNotFor: [
      "Men contraindicated after provider screening",
      "Anyone expecting guaranteed outcomes",
      "Those seeking unsupervised use",
    ],
    faqs: [
      {
        q: "Why choose Tirzepatide over Semaglutide?",
        a: "Your provider decides based on history, goals, and clinical judgment—not marketing preference or online comparisons alone.",
      },
      {
        q: "Are results guaranteed?",
        a: "No. Results vary. Eligibility and outcomes depend on clinical factors, adherence, and lifestyle.",
      },
      {
        q: "Is titration still required?",
        a: "Typically yes. Gradual dosing helps balance effectiveness with side-effect management under provider guidance.",
      },
    ],
  },
  {
    id: "enclomiphene",
    name: "Enclomiphene",
    categoryId: "hormones",
    format: "30 count · Multiple doses",
    image: "/products/enclomiphene.jpeg",
    tagline: "Fertility-conscious hormone optimization.",
    summary:
      "Supports the body’s own testosterone pathways without traditional TRT shutdown—ideal for men who want energy, drive, and performance considered alongside fertility goals.",
    benefits: [
      "Supports natural testosterone pathways",
      "Fertility-conscious clinical approach",
      "Oral capsule convenience",
      "Provider-guided dosing",
    ],
    idealFor: [
      "Low energy and drive symptoms",
      "Hormone balance with fertility in mind",
      "Men seeking non-TRT options",
    ],
    howItWorks:
      "Enclomiphene is used to support endogenous testosterone pathways. Providers often consider it when fertility-conscious hormone support is appropriate, with follow-up to assess response and safety.",
    whoItsFor: [
      "Men with low-T symptoms seeking non-TRT options",
      "Those prioritizing fertility considerations",
      "Candidates cleared by a licensed provider",
    ],
    whoItsNotFor: [
      "Men who need a different clinical path after review",
      "Anyone self-directing hormone therapy",
      "Those with provider-identified contraindications",
    ],
    faqs: [
      {
        q: "Is Enclomiphene the same as TRT?",
        a: "No. It supports the body’s own pathways rather than replacing testosterone directly—an important distinction for fertility planning.",
      },
      {
        q: "Will it help fertility?",
        a: "It is often considered when fertility matters, but your provider must evaluate your specific case, labs, and goals.",
      },
      {
        q: "How is this taken?",
        a: "As an oral capsule under provider dosing guidance—convenient for men who prefer not to start injectable TRT.",
      },
    ],
  },
  {
    id: "testosterone",
    name: "Testosterone Cypionate",
    categoryId: "hormones",
    format: "5 mL Vial · Multiple doses",
    image: "/products/testosterone.jpeg",
    tagline: "Classic TRT. Modern clinical oversight.",
    summary:
      "Traditional testosterone replacement for clinically appropriate candidates—reviewed, dosed, and monitored by licensed U.S. providers with discreet fulfillment.",
    benefits: [
      "Established TRT protocol",
      "Provider-guided dosing",
      "Energy, drive, and recovery focus",
      "Discreet vial fulfillment",
    ],
    idealFor: [
      "Confirmed low testosterone",
      "Strength and recovery goals",
      "Drive and vitality support",
    ],
    howItWorks:
      "Testosterone Cypionate replaces testosterone directly under clinician guidance, with monitoring for response, dosing adjustments, and safety—not unsupervised anabolic use.",
    whoItsFor: [
      "Men with clinically appropriate low testosterone",
      "Those seeking supervised TRT",
      "Candidates approved after evaluation",
    ],
    whoItsNotFor: [
      "Men prioritizing fertility without discussing alternatives",
      "Anyone seeking unsupervised anabolic use",
      "Those declined after clinical screening",
    ],
    faqs: [
      {
        q: "Do I need ongoing monitoring?",
        a: "Yes. Responsible TRT includes clinical follow-up and dosing oversight—not a one-time prescription and silence.",
      },
      {
        q: "How is this shipped?",
        a: "When prescribed, fulfillment is discreet and nationwide, with packaging that doesn’t advertise contents.",
      },
      {
        q: "What about fertility?",
        a: "Traditional TRT can suppress natural production. If fertility matters, discuss Enclomiphene or other paths with your provider before starting.",
      },
    ],
  },
  {
    id: "tadalafil",
    name: "Tadalafil",
    categoryId: "sexual-health",
    format: "30 count · Multiple doses",
    image: "/products/tadalafil.jpeg",
    tagline: "Reliable readiness when it matters.",
    summary:
      "A trusted PDE5 option for erectile support with flexible daily or as-needed protocols—determined by your provider after private clinical screening.",
    benefits: [
      "Longer window of effect",
      "Flexible daily or as-needed strategies",
      "Private online evaluation",
      "Discreet delivery",
    ],
    idealFor: [
      "Erectile support",
      "Confidence and reliability",
      "Spontaneity-friendly dosing",
    ],
    howItWorks:
      "Tadalafil inhibits PDE5, supporting blood-flow pathways involved in erectile function during arousal. Providers help choose daily vs as-needed dosing based on your lifestyle and medical profile.",
    whoItsFor: [
      "Men with erectile difficulties seeking clinical options",
      "Those wanting flexible dosing strategies",
      "Candidates cleared for PDE5 therapy",
    ],
    whoItsNotFor: [
      "Men with contraindicated heart medications or conditions",
      "Anyone declined after provider review",
      "Those seeking guaranteed sexual outcomes",
    ],
    faqs: [
      {
        q: "Daily or as-needed?",
        a: "Your provider helps choose based on frequency, preference, and medical profile—there isn’t a single best answer for every man.",
      },
      {
        q: "How discreet is delivery?",
        a: "Packaging is designed to protect privacy—no pharmacy-line awkwardness and no contents advertised on the box.",
      },
      {
        q: "Does it work without arousal?",
        a: "PDE5 therapy supports erectile pathways during sexual stimulation—it isn’t an automatic switch independent of arousal.",
      },
    ],
  },
  {
    id: "hair-regrowth",
    name: "Minoxidil · Finasteride · Retinoic Acid",
    categoryId: "hair-regrowth",
    format: "Topical Solution · Rx Only",
    image: "/products/hair-regrowth.jpeg",
    tagline: "A compounded topical built for denser-looking hair.",
    summary:
      "A prescription topical combining clinically recognized actives—Minoxidil, Finasteride, and Retinoic Acid—for men focused on hair density, hairline support, and a single daily scalp routine.",
    benefits: [
      "Multi-active compounded formula",
      "Targeted scalp application",
      "Physician-reviewed access",
      "One routine instead of three bottles",
    ],
    idealFor: [
      "Thinning hair and crown density",
      "Hairline support",
      "Daily grooming-friendly routines",
    ],
    howItWorks:
      "This compounded topical combines actives commonly used to support hair density and scalp health. Finasteride addresses DHT-related pathways; Minoxidil supports follicle activity; Retinoic Acid is included for topical application context. Consistency over months is essential.",
    whoItsFor: [
      "Men with early or progressive thinning",
      "Those seeking a combined topical routine",
      "Candidates approved after clinical review",
    ],
    whoItsNotFor: [
      "Men with scalp conditions that contraindicate use",
      "Anyone expecting overnight regrowth",
      "Those unwilling to maintain consistent application",
    ],
    faqs: [
      {
        q: "Why combine multiple actives?",
        a: "Combination protocols are often used to address complementary hair-loss pathways in one routine—rather than managing separate products inconsistently.",
      },
      {
        q: "When should I evaluate progress?",
        a: "Plan on a multi-month window. Hair cycles don’t move on weekly timelines, and early shedding can be part of the reset.",
      },
      {
        q: "Is finasteride only oral?",
        a: "Oral finasteride is common, but this protocol uses a compounded topical approach reviewed by your provider for suitability.",
      },
    ],
  },
  {
    id: "nad",
    name: "NAD+",
    categoryId: "longevity-recovery",
    format: "5 mL Vial · Multiple doses",
    image: "/products/nad.jpeg",
    tagline: "Cellular energy support for high-output living.",
    summary:
      "NAD+ protocols aimed at supporting cellular energy, focus, and long-game recovery under clinical guidance—framed as supervised care, not wellness hype.",
    benefits: [
      "Cellular energy support",
      "Longevity-focused protocol",
      "Provider oversight",
      "Discreet vial fulfillment",
    ],
    idealFor: [
      "Energy and focus optimization",
      "Recovery and output goals",
      "Longevity-minded routines",
    ],
    howItWorks:
      "NAD+ is central to cellular energy metabolism. Patriot offers physician-reviewed access when clinically appropriate, with dosing and cadence guided by your provider—not DIY protocols.",
    whoItsFor: [
      "Men optimizing longevity and output",
      "Those seeking supervised NAD+ protocols",
      "Candidates cleared by a provider",
    ],
    whoItsNotFor: [
      "Anyone chasing unverified miracle claims",
      "Men declined after clinical screening",
      "Those unwilling to follow provider guidance",
    ],
    faqs: [
      {
        q: "Is this an anti-aging cure?",
        a: "No. It’s a supervised protocol option within a broader health strategy that still depends on sleep, training, and nutrition.",
      },
      {
        q: "Do I need other lifestyle changes?",
        a: "Yes—sleep, training, and nutrition remain foundational. NAD+ doesn’t replace the basics.",
      },
      {
        q: "How soon might I notice a change?",
        a: "Responses vary. Some men report energy or recovery shifts; others need longer observation under follow-up.",
      },
    ],
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    categoryId: "longevity-recovery",
    format: "5 mL Vial · Multiple doses",
    image: "/products/sermorelin.jpeg",
    tagline: "Recovery signaling for sleep, lean mass, and repair.",
    summary:
      "A peptide protocol used to support growth-hormone-related pathways tied to recovery, body composition, and restorative sleep—under licensed clinical supervision.",
    benefits: [
      "Recovery-focused peptide",
      "Sleep and repair support",
      "Clinically supervised use",
      "Training rebound context",
    ],
    idealFor: [
      "Training recovery gaps",
      "Sleep quality goals",
      "Lean mass and repair focus",
    ],
    howItWorks:
      "Sermorelin is used under clinical supervision to support recovery-related pathways. Providers determine fit, dosing, and expectations—and distinguish this carefully from unsupervised HGH use.",
    whoItsFor: [
      "Men with recovery and sleep goals",
      "Training-focused candidates under medical care",
      "Those approved after evaluation",
    ],
    whoItsNotFor: [
      "Anyone equating this with unsupervised HGH use",
      "Men with contraindications after review",
      "Those seeking guaranteed physique outcomes",
    ],
    faqs: [
      {
        q: "Is Sermorelin the same as HGH?",
        a: "No. Sermorelin is a distinct peptide protocol used to support related pathways under clinical supervision—not recreational HGH.",
      },
      {
        q: "How does it relate to sleep?",
        a: "Recovery protocols often intersect with sleep quality. Your provider explains realistic expectations for your case.",
      },
      {
        q: "Is access automatic?",
        a: "No. Patriot access is physician-guided and eligibility-based after evaluation.",
      },
    ],
  },
  {
    id: "glutathione",
    name: "Glutathione",
    categoryId: "longevity-recovery",
    format: "5 mL Vial · Multiple doses",
    image: "/products/glutathione.jpeg",
    tagline: "Antioxidant recovery for clearer performance days.",
    summary:
      "An antioxidant recovery option often used to support oxidative stress pathways and post-stress rebound—prescribed when a provider agrees it fits your goals and history.",
    benefits: [
      "Antioxidant support",
      "Recovery-oriented protocol",
      "Discreet vial fulfillment",
      "Provider-matched use",
    ],
    idealFor: [
      "Oxidative stress support",
      "Recovery-focused days",
      "Supervised wellness stacks",
    ],
    howItWorks:
      "Glutathione is an antioxidant used in recovery-oriented protocols. Providers assess whether it fits your goals and history, and whether it should stand alone or pair with other longevity-recovery options.",
    whoItsFor: [
      "Men focused on antioxidant recovery support",
      "Those building a supervised recovery stack",
      "Candidates cleared clinically",
    ],
    whoItsNotFor: [
      "Anyone expecting cosmetic guarantees",
      "Men declined after screening",
      "Those seeking unsupervised injectable use",
    ],
    faqs: [
      {
        q: "Is glutathione only for skin?",
        a: "It’s often discussed for broader antioxidant and recovery contexts—not cosmetics alone. Your provider frames expectations for your goals.",
      },
      {
        q: "Can it pair with Sermorelin or NAD+?",
        a: "Possibly. Your provider reviews combination safety, relevance, and overall plan design.",
      },
      {
        q: "Does it replace sleep and nutrition?",
        a: "No. Antioxidant protocols support recovery goals; foundations like sleep and nutrition still matter most.",
      },
    ],
  },
];

export function getCategory(id: string) {
  return categories.find((category) => category.id === id);
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(categoryId: string) {
  return products.filter((product) => product.categoryId === categoryId);
}

export function getCategoryForProduct(productId: string) {
  const product = getProduct(productId);
  if (!product) return undefined;
  return getCategory(product.categoryId);
}
