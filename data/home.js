import {
  Stethoscope, Zap, Activity, HeartPulse, Award,
  MessageSquare, ThumbsUp, MapPin, ShieldCheck,
  Search, Clock, Users, Star, Crosshair,
} from 'lucide-react';

export const hero = {
  badge: `ORTHOPAEDIC CLINIC IN JAYANAGAR`,
  headline: `Orthopaedic Care for`,
  headlineAccent: `Pain, Injuries & Movement Problems`,
  subcopy: `Consult Dr. Amith P. Shetty for knee, back, shoulder or joint pain, sports injuries, fractures, stiffness and difficulty moving. Get a detailed examination, clear diagnosis and treatment plan at Kneev Orthopaedic Centre in Jayanagar.`,
  features: [
    `Knee, Back & Shoulder Care`,
    `Sports Injuries & Fractures`,
    `X-Ray & Physiotherapy Available`,
  ],
  ctaPrimary: `Book Your Consultation`,
  ctaSecondary: `Call +91 636 670 0736`,
  phoneHref: `tel:+916366700736`,
  trustBar: `17+ Years of Experience · 2,500+ Patients Treated · 4.9★ Google Rating`,
};

export const appointmentForm = {
  title: `Book Your Consultation`,
  subtitle: `Fill in your details and our team will contact you to confirm your appointment.`,
  fields: {
    name: { label: `Full Name`, placeholder: `Enter your name` },
    phone: { label: `Mobile Number`, placeholder: `Enter your 10-digit mobile number` },
    concern: { label: `What Do You Need Help With?` },
  },
  concerns: [
    `Knee pain`,
    `Back or neck pain`,
    `Shoulder pain`,
    `Joint pain or stiffness`,
    `Sports injury`,
    `Fracture or trauma`,
    `Difficulty walking or moving`,
    `Other concern`,
  ],
  buttonText: `Request Appointment`,
  disclaimer: `By submitting this form, you agree to receive a call from Kneev Orthopaedic Centre regarding your appointment. Your information will remain private.`,
};

export const trust = {
  heading: `Orthopaedic Care You Can Rely On`,
  platforms: [
    { name: `Google`, iconType: `google`, stars: 5, starColor: `text-[#FFC107] fill-[#FFC107]`, subtitle: `We are rated 4.9 out of 5` },
    { name: `Kneev`, iconType: `verified`, iconBg: `bg-blue-50`, stars: 5, starColor: `text-green-500 fill-green-500`, subtitle: `Trusted by 2,500+ patients` },
  ],
  patientStats: [
    { value: `2,500+`, label: `patients treated across South Bengaluru` },
    { value: `112+`, label: `five-star Google reviews from patients` },
  ],
};

export const problems = {
  heading: `What Can We Help You With?`,
  subcopy: `You may need an orthopaedic consultation if pain, injury, stiffness or weakness is making it difficult to walk, work, exercise, sleep or complete everyday activities.`,
  items: [
    {
      title: `Knee Pain`,
      desc: `Get help for knee pain while walking, climbing stairs, bending, standing up or exercising.`,
      assessments: [
        `Knee arthritis`,
        `Ligament injuries`,
        `Meniscus problems`,
        `Swelling and stiffness`,
        `Pain after a fall`,
        `Sports-related knee injuries`,
      ],
    },
    {
      title: `Back and Neck Pain`,
      desc: `Get assessed for pain, stiffness or weakness affecting your back, neck or legs.`,
      assessments: [
        `Lower-back pain`,
        `Neck pain`,
        `Sciatica`,
        `Disc-related problems`,
        `Pain travelling into the arms or legs`,
        `Posture and movement-related pain`,
      ],
    },
    {
      title: `Shoulder Pain`,
      desc: `Get help for pain or stiffness while lifting your arm, reaching overhead, dressing or sleeping.`,
      assessments: [
        `Frozen shoulder`,
        `Rotator cuff injuries`,
        `Shoulder stiffness`,
        `Weakness`,
        `Sports injuries`,
        `Pain after a fall`,
      ],
    },
    {
      title: `Joint Pain and Arthritis`,
      desc: `Get support for painful, swollen or stiff joints that affect your movement and daily activities.`,
      assessments: [
        `Arthritis`,
        `Joint stiffness`,
        `Age-related joint changes`,
        `Pain while walking`,
        `Reduced movement`,
        `Recurring joint swelling`,
      ],
    },
    {
      title: `Sports Injuries`,
      desc: `Get assessed after an injury during exercise, training or sport.`,
      assessments: [
        `Sprains and strains`,
        `Ligament injuries`,
        `Muscle injuries`,
        `Overuse injuries`,
        `Joint pain during exercise`,
        `Recurring sports pain`,
      ],
    },
    {
      title: `Fractures and Trauma`,
      desc: `Get prompt care after a fall, accident or suspected fracture.`,
      assessments: [
        `Orthopaedic examination`,
        `Digital X-ray`,
        `Casting or support`,
        `Follow-up care`,
        `Rehabilitation and physiotherapy`,
      ],
    },
  ],
  ctaText: `Book Your Consultation`,
};

export const painDiagnosis = {
  heading: `Not Sure What Is Causing the Pain?`,
  subcopy: `Pain can come from an injury, joint problem, muscle weakness, arthritis, nerve irritation or the way your body is moving. A scan can be helpful, but it does not always explain why the pain started or why it keeps returning.`,
  intro: `At Kneev, Dr. Amith looks at:`,
  bullets: [
    `When your symptoms began`,
    `Where you feel the pain`,
    `Which movements make it worse`,
    `Your strength and joint movement`,
    `Previous injuries and treatments`,
    `X-rays, MRI scans and medical reports`,
    `How the problem affects your daily life`,
  ],
  outro: `You receive a clear explanation of the likely problem and the treatment options available to you.`,
  ctaText: `Book Your Consultation`,
};

export const doctor = {
  heading: `Meet Your Orthopaedic Doctor in Jayanagar`,
  name: `Dr. Amith P. Shetty`,
  subtitle: `Founder and Chief Orthopaedic Surgeon`,
  imageAlt: `Dr. Amith P. Shetty — Orthopaedic Surgeon at Kneev, Jayanagar`,
  intro: `Dr. Amith P. Shetty has more than 17 years of experience treating bone, joint, muscle and sports-related conditions. He takes time to understand your symptoms, examine the affected area and explain your diagnosis in simple language.`,
  aimsHeading: `His aim is to help you understand:`,
  aims: [
    `What may be causing the pain`,
    `How serious the condition is`,
    `Whether treatment can be managed without surgery`,
    `When a procedure may be helpful`,
    `When surgery may be medically necessary`,
    `What your recovery may involve`,
  ],
  quote: `I treat the patient, not just the MRI. My role is to understand the complete problem and help the patient choose the right next step.`,
  credentialsHeading: `Qualifications and Experience`,
  credentials: [
    { bold: `MBBS`, text: `` },
    { bold: `MS in Orthopaedics`, text: `` },
    { bold: `Dip SICOT, Belgium`, text: `` },
    { bold: `FIJR, Germany`, text: `` },
    { bold: `Advanced training in joint reconstruction`, text: `` },
    { bold: `17+ years of orthopaedic experience`, text: `` },
    { bold: `Experience in joint conditions and sports injuries`, text: `` },
    { bold: `Consultant experience at Manipal and Apollo Hospitals`, text: `` },
  ],
  ctaText: `Book Your Consultation`,
};

export const oneRoof = {
  heading: `Consultation, Imaging and Recovery Care in One Place`,
  subcopy: `When you are in pain, travelling between different clinics for consultations, scans and physiotherapy can be difficult. Kneev provides the main parts of your orthopaedic care at one location.`,
  items: [
    { icon: Stethoscope, title: `Orthopaedic Consultation`, desc: `Discuss your symptoms, medical history and concerns directly with Dr. Amith.` },
    { icon: Search, title: `Physical Examination`, desc: `The affected area is checked for movement, strength, stability, tenderness and function.` },
    { icon: Zap, title: `Same-Day Digital X-Ray`, desc: `Digital X-rays are available at the clinic when they are medically required.` },
    { icon: Activity, title: `Movement Assessment`, desc: `We assess how you stand, walk or move to understand whether movement problems may be contributing to your symptoms.` },
    { icon: HeartPulse, title: `Physiotherapy`, desc: `Targeted physiotherapy may be recommended to improve movement, strength, balance and confidence.` },
    { icon: Crosshair, title: `Treatment Planning`, desc: `Your options are explained clearly so you understand what treatment is recommended and why.` },
    { icon: MessageSquare, title: `Follow-Up Support`, desc: `Your progress can be reviewed and your treatment plan adjusted when required.` },
  ],
};

export const dayOneSteps = [
  { title: `Book Your Appointment`, desc: `Choose a convenient time online or call the clinic.` },
  { title: `Discuss Your Symptoms`, desc: `Tell Dr. Amith when the problem began, where it hurts and how it affects your daily activities.` },
  { title: `Receive an Examination`, desc: `The painful or injured area is examined to check movement, strength and joint function.` },
  { title: `Complete Imaging if Required`, desc: `Previous reports are reviewed. A digital X-ray may be completed at the clinic when medically necessary.` },
  { title: `Understand Your Treatment Options`, desc: `You receive a clear explanation of the likely diagnosis and the available next steps.` },
];

export const whyChoose = {
  heading: `Clear, Convenient Orthopaedic Care`,
  boxes: [
    { title: `Experienced Orthopaedic Doctor`, icon: Award, desc: `Receive care from an orthopaedic surgeon with more than 17 years of experience.` },
    { title: `Detailed Consultation`, icon: Clock, desc: `You receive time to explain your symptoms and complete a proper physical examination.` },
    { title: `Clear Explanations`, icon: MessageSquare, desc: `Your condition and treatment options are explained in language that is easy to understand.` },
    { title: `Honest Recommendations`, icon: ThumbsUp, desc: `Treatment is recommended according to your condition, needs and medical findings.` },
    { title: `X-Ray and Physiotherapy Available`, icon: Zap, desc: `Get consultation, imaging and rehabilitation support at the same clinic.` },
    { title: `Convenient Jayanagar Location`, icon: MapPin, desc: `Easy to reach from JP Nagar, Basavanagudi, Banashankari, BTM Layout and nearby areas.` },
  ],
};

export const testimonials = {
  heading: `What Our Patients Say`,
  subcopy: `Real experiences from patients who visited Kneev Orthopaedic Centre.`,
  reviewCta: `Read More Google Reviews`,
  items: [
    { name: `Vijaya Lakshmi`, summary: `Best ortho seen in 60 years`, text: `I walked in as a scared patient... Walked out confidently. Best ortho seen in 60 years. Thanks to the staff — Kiran, Lilly and Sayanthika.` },
    { name: `Srikanth Datha`, summary: `A truly caring and compassionate doctor`, text: `Dr. Amith is a truly caring and compassionate doctor. My mother and I have been consulting him for over a year and his treatment has made a meaningful difference to our well-being. He not only helped me recover from my back pain but also guided us with exercises and posture correction.` },
    { name: `Sukomal Sengupta`, summary: `Doctor listened carefully and explained clearly`, text: `Love the experience. The doctor listened carefully, explained the problem and provided feedback on a positive note.` },
    { name: `Syed Mohsin`, summary: `Excellent experience with clear diagnosis`, text: `I had an excellent experience with Dr. Amith Shetty. He carefully assessed my knee, explained the diagnosis clearly, and recommended the most appropriate treatment. The knee aspiration was performed with great skill.` },
    { name: `Thanuj Madan`, summary: `Treated for shoulder and neck problems`, text: `Had some serious shoulder and neck problems. Got treated by Dr. Amith Shetty and Dr. Lilly Madhuri. They both have good experience and were able to treat me properly and help me with my pain. Very professional and coordinating doctors.` },
    { name: `Barsha Patra`, summary: `Extremely helpful and professional`, text: `Dr. Amith was extremely helpful, kind, and professional throughout my father's treatment. He listened patiently to all our concerns, explained everything clearly, and provided excellent care.` },
    { name: `Likhith Shriyan`, summary: `Clear explanation and way forward`, text: `Dr. Amith Shetty and Kiran were very cordial during my visit. Dr. Amith reviewed my past history and explained the reason for my current situation and the way forward.` },
    { name: `Vathsa Sri`, summary: `Great care for ligament tear`, text: `Dr. Amith has been fantastic. The clinic is equipped with all the required instruments. I got treated for a ligament tear and he gave me the right course and supported me whenever I had questions on the phone too post-visit.` },
  ],
};

export const location = {
  heading: `Orthopaedic Clinic in Jayanagar, Bengaluru`,
  subcopy: `Kneev Orthopaedic Centre is located on 14th Cross Road in 2nd Block, Jayanagar. The clinic is on the ground floor and is easy to reach from nearby South Bengaluru areas.`,
  address: `Ground Floor, 334/28, 14th Cross Road, 2nd Block, Jayanagar, Bengaluru, Karnataka 560011`,
  phone: `+91 636 670 0736`,
  phoneHref: `tel:+916366700736`,
  email: `kneevorthopaediccenter@gmail.com`,
  whatsappHref: `https://wa.me/916366700736`,
  hours: {
    weekdays: `Monday to Saturday: 9:00 AM to 7:00 PM`,
    sunday: `Sunday: By appointment`,
  },
  metro: `Nearest Metro: Jayanagar Metro Station, approximately five minutes away`,
  parking: `Free on-site parking available`,
  nearbyHeading: `Nearby Areas`,
  nearbyAreas: [
    `Jayanagar`,
    `JP Nagar`,
    `Basavanagudi`,
    `Banashankari`,
    `BTM Layout`,
    `Wilson Garden`,
    `Lalbagh`,
    `Nearby Bannerghatta Road areas`,
  ],
  directionsUrl: `https://maps.google.com/?q=Kneev+Orthopaedic+Centre+Jayanagar`,
  ctaPrimary: `Get Directions`,
  ctaSecondary: `Call the Clinic`,
  mapEmbedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.538133410082!2d77.5821029!3d12.937379700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c37637b029%3A0x51dafb847ff38263!2sKneev%20Orthopaedic%20Center%20%7C%20Dr.%20Amith%20Shetty!5e0!3m2!1sen!2sin!4v1780162330680!5m2!1sen!2sin`,
};

export const faqs = [
  { q: `What problems does an orthopaedic doctor treat?`, a: `An orthopaedic doctor treats conditions affecting bones, joints, muscles, ligaments and movement. This includes knee pain, back pain, shoulder pain, arthritis, sports injuries and fractures.` },
  { q: `What happens during the consultation?`, a: `Dr. Amith discusses your symptoms and medical history, examines the affected area and reviews any previous scans or reports. You will then receive an explanation of the likely problem and the recommended next steps.` },
  { q: `Do I need an X-ray?`, a: `Not every patient needs an X-ray. It may be recommended when imaging can help confirm the diagnosis or guide treatment. Digital X-rays are available at the clinic.` },
  { q: `Can I visit for a sports injury?`, a: `Yes. Kneev assesses ligament injuries, sprains, strains, overuse problems and pain caused by training or sport.` },
  { q: `Is physiotherapy available at the clinic?`, a: `Yes. Physiotherapy and rehabilitation are available when they are appropriate for your condition.` },
  { q: `Will I be advised to have surgery?`, a: `Surgery is recommended only when it is medically appropriate. Dr. Amith will explain the available non-surgical and surgical options based on your examination and diagnosis.` },
  { q: `What should I bring to my appointment?`, a: `Bring any previous X-rays, MRI scans, prescriptions, reports or treatment records related to your problem.` },
  { q: `Do I need an appointment?`, a: `Appointments are recommended to reduce waiting time. Walk-in consultations may be available depending on the doctor's schedule.` },
  { q: `What is the consultation fee?`, a: `Contact the clinic for the current consultation fee. The cost of any additional imaging or treatment will be explained before it is provided.` },
  { q: `Is parking available?`, a: `Yes. Free on-site parking is available.` },
  { q: `Do you accept insurance?`, a: `Insurance or corporate coverage depends on the provider and treatment required. Contact the clinic before your visit to confirm the available options.` },
];

export const finalCta = {
  heading: `Get the Right Care for Your Pain, Injury or Movement Problem`,
  copy: `Whether you are dealing with new pain, a recent injury or a problem that keeps returning, a proper orthopaedic assessment can help you understand what is wrong and what to do next. Book a consultation with Dr. Amith P. Shetty at Kneev Orthopaedic Centre in Jayanagar.`,
  ctaPrimary: `Book Your Consultation`,
  ctaSecondary: `Call +91 636 670 0736`,
  phoneHref: `tel:+916366700736`,
  trustBar: `17+ Years of Experience · 2,500+ Patients Treated · 4.9★ Google Rating`,
};
