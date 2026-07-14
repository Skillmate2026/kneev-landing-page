// Content for the knee-pain landing page (/knee-pain). Structure is rendered by
// the shared section components in src/components/sections.
import {
  Stethoscope, Zap, Activity, HeartPulse, Bone,
  ShieldCheck, ThumbsUp, MapPin,
} from 'lucide-react';

export const hero = {
  badge: `Jayanagar's Trusted Knee Specialist · 2,500+ Patients · 4.9★ Google`,
  headline: `Climb Stairs and Take Your Morning Walk Again,`,
  headlineAccent: `Without Rushing Into Knee Surgery`,
  subcopy: `Knee pain slowing you down? At Kneev in Jayanagar, Dr. Amith finds the real root cause of your knee pain and tries every non-surgical option first. Get an honest, unhurried knee assessment today. Minutes from JP Nagar, Basavanagudi, Banashankari and BTM Layout.`,
  trustChips: [
    `Conservative care first, surgery last`,
    `Many of our patients recover without surgery`,
    `We listen, no rushed 5-minute visits`,
  ],
};

export const stats = [
  { stat: `17+ Years`, label: `Treating Knees` },
  { stat: `2,500+`, label: `Patients Recovered` },
  { stat: `4.9★`, label: `Google Rating` },
  { stat: `112+`, label: `Five-Star Reviews` },
];

export const services = {
  heading: `Complete Knee Care, End to End`,
  items: [
    `Knee Arthritis Care`,
    `Ligament Injury Care`,
    `Sports Knee Injuries`,
    `Knee Pain Diagnosis`,
    `Non-Surgical Treatments`,
    `Post-Surgery Rehab Advice`,
  ],
};

export const doctor = {
  imageAlt: `Dr. Amith P. Shetty - Knee Specialist`,
  subtitle: `Founder & Chief Orthopaedic Surgeon · Knee Specialist`,
  quote: `I treat the patient, not just the MRI. Most knee problems resolve with the right diagnosis, lifestyle correction, and targeted physiotherapy. Surgery is strictly for when it's truly the only way to give you your life back.`,
  credentials: [
    { bold: `MBBS, MS (Orthopaedics)`, text: ` with extensive hands-on surgical training.` },
    { bold: `Dip SICOT (Belgium) & FIJR (Germany)`, text: `, advanced training in complex knee reconstruction.` },
    { bold: `17+ years`, text: ` treating knee arthritis, degenerative knees, and sports knee injuries.` },
    { bold: `Consultant at Manipal & Apollo Hospitals.`, text: `` },
  ],
};

export const promise = {
  headlineLine1: `Knee Surgery Is Our Last Resort, `,
  headlineLine2: `Not Our First Suggestion`,
  copyHtml: `Too many patients are told &ldquo;you need a knee replacement&rdquo; before anyone has truly tried to fix the cause. We do the opposite. <strong class="text-white">Many of our patients recover fully</strong> through accurate diagnosis, guided physiotherapy, and conservative treatment, with no operation needed.`,
  noteHtml: `Already been told you need a knee replacement? <span class="text-[#F47C20]">Bring your reports.</span> Dr. Amith will give you an honest, unbiased second opinion.`,
};

export const oneRoof = {
  heading: `Your Whole Knee Recovery, in One Place`,
  subcopy: `When your knee hurts, the last thing you need is to travel between clinics and labs. We handle everything here.`,
  items: [
    { icon: Stethoscope, title: `Unhurried Knee Consultation`, desc: `A real hands-on exam. We look at you, not just your reports.` },
    { icon: Zap, title: `Same-Day Digital X-Ray`, desc: `High-resolution knee imaging on-site, so you get answers the same visit.` },
    { icon: Activity, title: `Movement Analysis (360° Motion Map)`, desc: `We map how you move to find the hidden reason your knee hurts on stairs and morning walks.` },
    { icon: HeartPulse, title: `Targeted Knee Physiotherapy`, desc: `A personalised plan to rebuild strength and restore your knee's movement safely.` },
    { icon: Bone, title: `Keyhole (Arthroscopic) Knee Surgery`, desc: `Minimally invasive, faster recovery, only if you truly need it.` },
    { icon: ShieldCheck, title: `Knee Replacement`, desc: `Advanced robotic and conventional options, reserved for when it's genuinely the right choice.` },
  ],
};

export const dayOneSteps = [
  { title: `Book Online`, desc: `Pick a slot and skip the wait.` },
  { title: `Walk In`, desc: `Our team welcomes you at our Jayanagar clinic.` },
  { title: `Meet Dr. Amith`, desc: `A detailed manual knee exam to find the true root cause.` },
  { title: `Leave With a Plan`, desc: `A clear diagnosis and honest next steps, not a sales pitch.` },
];

export const whyChoose = {
  heading: `Why South Bengaluru Chooses Kneev for Knee Pain`,
  boxes: [
    { title: `Conservative Care First`, icon: ShieldCheck, desc: `We rebuild your knee before we ever consider operating on it.` },
    { title: `Transparent Pricing`, icon: ThumbsUp, desc: `No hidden costs for consults, scans, or treatment.` },
    { title: `Everything Under One Roof`, icon: Bone, desc: `Knee consult, X-ray, and rehab in one location.` },
    { title: `We Find the Root Cause`, icon: Activity, desc: `Movement analysis fixes why your knee hurts, not just the symptom.` },
    { title: `Noticeable Relief, Early`, icon: HeartPulse, desc: `Many patients feel real improvement after their first physio session.` },
    { title: `Right in Your Neighbourhood`, icon: MapPin, desc: `On 14th Cross, 2nd Block, Jayanagar, easy to reach from JP Nagar, Basavanagudi, Banashankari and BTM Layout.` },
  ],
};

export const testimonials = {
  heading: `Real Knee Patients. Real Relief.`,
  items: [
    { name: `Rajesh`, loc: `JP Nagar`, text: `Told to undergo knee replacement elsewhere. Visited Dr. Amith for a second opinion. After his guided physio, my pain is down by 90%.` },
    { name: `Srinivas`, loc: `Basavanagudi`, text: `The 360° motion mapping changed everything. They found the real reason my knee hurt during morning walks. Highly recommend this team.` },
    { name: `Meenakshi`, loc: `Jayanagar`, text: `Finding an honest clinic nearby can be exhausting. Kneev provided an accurate diagnosis on the spot and didn't force excessive medication.` },
    { name: `Anitha`, loc: `BTM Layout`, text: `Dr. Amith took the time to explain my MRI step by step. I've never had a doctor be so patient. The treatment plan worked wonderfully.` },
  ],
};

export const clinicHeading = `Your Knee Specialist, Right Here in Jayanagar`;

export const faqs = [
  { q: `Will I definitely need surgery for my knee?`, a: `Absolutely not. Many of our patients recover fully through guided physiotherapy and conservative treatment.` },
  { q: `Can I get a knee second opinion here?`, a: `Yes. Many patients visit us for exactly this reason. Bring your reports and Dr. Amith will give you an honest, unbiased assessment.` },
  { q: `Are X-rays included in the consultation?`, a: `Your consultation covers the complete clinical knee evaluation with Dr. Amith. Digital X-rays and lab diagnostics are charged separately at standard rates.` },
  { q: `What should I bring to my first appointment?`, a: `Please bring recent knee X-rays, MRI scans, previous prescriptions, and a list of current medications to avoid repeating tests.` },
  { q: `How long does the first consultation take?`, a: `Initial knee assessments typically take 20 to 30 minutes, allowing time for a thorough manual check and discussion of your symptoms.` },
  { q: `Is physiotherapy done at the same clinic?`, a: `Yes. We have a fully equipped physiotherapy centre right here, so you don't have to travel elsewhere for knee rehab.` },
  { q: `Do I need an appointment, or can I walk in?`, a: `Walk-ins are accepted, but we recommend booking to secure your slot and minimise wait time.` },
  { q: `Do you support insurance or corporate coverage?`, a: `Yes, our team supports proper claim documentation for surgical procedures and major treatments.` },
];

export const finalCta = {
  heading: `Take the First Step Toward Pain-Free Knees`,
  copy: `You deserve to walk, climb stairs, and sleep without knee pain holding you back. Book your complete knee assessment with Jayanagar's trusted knee specialist. Priority slots for South Bengaluru residents.`,
  points: [
    `Conservative care first, surgery last`,
    `Many of our patients recover without surgery`,
    `Honest, unhurried second opinions`,
  ],
};
