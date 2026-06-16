// Content for the main home page (/). Structure is rendered by the shared
// section components in src/components/sections.
import {
  Stethoscope, Zap, Activity, HeartPulse, Award,
  MessageSquare, ThumbsUp, MapPin,
} from 'lucide-react';

export const hero = {
  badge: `Jayanagar's Trusted Orthopaedic Clinic · 2,500+ Patients · 4.9★ Google`,
  headline: `Find Out What's Really Causing Your Pain,`,
  headlineAccent: `and Get a Clear Plan to Fix It`,
  subcopy: `Knee, back, joint, or sports pain wearing you down? At Kneev in Jayanagar, Dr. Amith takes the time to find the real root cause and gives you an honest, personalised treatment plan. Book a thorough orthopaedic assessment today. Minutes from JP Nagar, Basavanagudi, Banashankari and BTM Layout.`,
  trustChips: [
    `We find the root cause, not just mask it`,
    `We actually listen, no rushed 5-minute visits`,
    `Honest, transparent advice`,
  ],
};

export const stats = [
  { stat: `17+ Years`, label: `Experience` },
  { stat: `2,500+`, label: `Patients Recovered` },
  { stat: `4.9★`, label: `Google Rating` },
  { stat: `112+`, label: `Five-Star Reviews` },
];

export const services = {
  heading: `Comprehensive Orthopaedic Care, All in One Place`,
  items: [
    `Knee Pain Treatment`,
    `Back & Spine Care`,
    `Shoulder Pain Treatment`,
    `Sports Injury Care`,
    `Arthritis Management`,
    `Fracture & Trauma Care`,
  ],
};

export const doctor = {
  imageAlt: `Dr. Amith P. Shetty - Orthopaedic Surgeon`,
  subtitle: `Founder & Chief Orthopaedic Surgeon`,
  quote: `I treat the patient, not just the MRI. My job is to find the real cause of your pain and give you a clear, honest plan to get your quality of life back, with the right diagnosis, lifestyle correction, and targeted physiotherapy.`,
  credentials: [
    { bold: `MBBS, MS (Orthopaedics)`, text: ` with extensive hands-on surgical training.` },
    { bold: `Dip SICOT (Belgium) & FIJR (Germany)`, text: `, advanced training in complex joint reconstruction.` },
    { bold: `17+ years`, text: ` treating degenerative joint diseases and sports injuries.` },
    { bold: `Consultant at Manipal & Apollo Hospitals.`, text: `` },
  ],
};

export const promise = {
  headlineLine1: `We Find the Real Cause, `,
  headlineLine2: `Not Just Mask the Pain`,
  copyHtml: `Painkillers and quick five-minute appointments rarely fix anything. At Kneev, Dr. Amith takes the time to understand your symptoms, examine you properly, and identify what's actually driving your pain. You leave with a clear diagnosis and a treatment plan built for your body, not a one-size-fits-all prescription.`,
  noteHtml: null,
};

export const oneRoof = {
  heading: `Your Whole Recovery, in One Place`,
  subcopy: `When you're in pain, the last thing you need is to travel between clinics and labs. We handle everything here.`,
  items: [
    { icon: Stethoscope, title: `Unhurried Consultation`, desc: `A real hands-on exam. We look at you, not just your reports.` },
    { icon: Zap, title: `Same-Day Digital X-Ray`, desc: `High-resolution imaging on-site, so you get answers the same visit.` },
    { icon: Activity, title: `Movement Analysis (360° Motion Map)`, desc: `We map how you move to find the hidden cause of your pain.` },
    { icon: HeartPulse, title: `Targeted Physiotherapy`, desc: `A personalised plan to rebuild strength and restore your movement safely.` },
    { icon: Award, title: `Accurate Diagnosis`, desc: `Clear answers about what's wrong and exactly what to do next.` },
    { icon: MessageSquare, title: `Ongoing Support`, desc: `Direct access to our team, even after you go home.` },
  ],
};

export const dayOneSteps = [
  { title: `Book Online`, desc: `Pick a slot and skip the wait.` },
  { title: `Walk In`, desc: `Our team welcomes you at our Jayanagar clinic.` },
  { title: `Meet Dr. Amith`, desc: `A detailed manual exam to find the true root cause.` },
  { title: `Leave With a Plan`, desc: `A clear diagnosis and honest next steps, not a sales pitch.` },
];

export const whyChoose = {
  heading: `Why South Bengaluru Chooses Kneev`,
  boxes: [
    { title: `We Find the Root Cause`, icon: Activity, desc: `We diagnose why it hurts, not just treat the symptom.` },
    { title: `We Actually Listen`, icon: MessageSquare, desc: `No rushed appointments. Dr. Amith gives you real time.` },
    { title: `Transparent Pricing`, icon: ThumbsUp, desc: `No hidden costs for consults, scans, or treatment.` },
    { title: `Everything Under One Roof`, icon: Stethoscope, desc: `Consult, X-ray, and rehab in one location.` },
    { title: `Noticeable Relief, Early`, icon: HeartPulse, desc: `Many patients feel real improvement after their first physio session.` },
    { title: `Right in Your Neighbourhood`, icon: MapPin, desc: `On 14th Cross, 2nd Block, Jayanagar, easy to reach from JP Nagar, Basavanagudi, Banashankari and BTM Layout.` },
  ],
};

export const testimonials = {
  heading: `Real Patients. Real Relief.`,
  items: [
    { name: `Meenakshi`, loc: `Jayanagar`, text: `Finding an honest clinic nearby can be exhausting. Kneev provided an accurate diagnosis on the spot and didn't force excessive medication.` },
    { name: `Srinivas`, loc: `Basavanagudi`, text: `The 360° motion mapping changed everything. They found the real reason my knee hurt during morning walks. Highly recommend this team.` },
    { name: `Anitha`, loc: `BTM Layout`, text: `Dr. Amith took the time to explain my MRI step by step. I've never had a doctor be so patient. The treatment plan worked wonderfully.` },
    { name: `Vikram`, loc: `Banashankari`, text: `The transparent pricing and direct doctor availability makes this the best clinic. I finally have relief from my chronic sciatica.` },
  ],
};

export const clinicHeading = `Your Orthopaedic Specialist, Right Here in Jayanagar`;

export const faqs = [
  { q: `What kind of pain do you treat?`, a: `Knee pain, joint pain, back and neck pain, arthritis, sports injuries, and general orthopaedic concerns for all ages.` },
  { q: `How is the consultation different from other clinics?`, a: `Dr. Amith gives you a full 20 to 30 minute assessment with a proper hands-on exam, so you get a real diagnosis instead of a rushed prescription.` },
  { q: `Are X-rays included in the consultation?`, a: `Your consultation covers the complete clinical evaluation with Dr. Amith. Digital X-rays and lab diagnostics are charged separately at standard rates.` },
  { q: `What should I bring to my first appointment?`, a: `Please bring any recent X-rays, MRI scans, previous prescriptions, and a list of current medications to avoid repeating tests.` },
  { q: `Is physiotherapy done at the same clinic?`, a: `Yes. We have a fully equipped physiotherapy centre right here, so you don't have to travel elsewhere for rehab.` },
  { q: `Do I need an appointment, or can I walk in?`, a: `Walk-ins are accepted, but we recommend booking to secure your slot and minimise wait time.` },
  { q: `Do you support insurance or corporate coverage?`, a: `Yes, our team supports proper claim documentation for major treatments.` },
];

export const finalCta = {
  heading: `Take the First Step Toward a Pain-Free Life`,
  copy: `You deserve to walk, work, and sleep without pain holding you back. Book your complete assessment with Jayanagar's trusted orthopaedic specialist. Priority slots for South Bengaluru residents.`,
  points: [
    `We find the root cause, not just mask it`,
    `Honest, transparent advice`,
    `Everything under one roof`,
  ],
};
