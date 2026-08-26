import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Maple Diary Academy Refund Policy — learn about our refund and cancellation terms for online music class enrolments.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.maplediaryacademy.com/refund-policy" },
};

const RefundPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-200 mx-auto px-[5%] py-24">
      <Link href="/" className="text-primary text-[.85rem] font-semibold hover:underline mb-8 inline-block">← Back to Home</Link>
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-black text-foreground mb-8">Refund Policy</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 text-[.92rem] leading-[1.8]">
        <p><strong className="text-foreground">Maple Diary Academy</strong></p>
        <p><strong className="text-foreground">Last Updated:</strong> January 1, 2025</p>
        
        <p>At Maple Diary Academy, we strive to provide high-quality online music education for students around the world. Please read our refund policy carefully before enrolling in any course.</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Course Fees</h2>
        <p>All course fees must be paid in advance before the start of classes. Enrollment is confirmed only after successful payment.</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. No Refund After Course Start</h2>
        <p>Once a course has started and the student has attended the first class, course fees are non-refundable.</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Refund Before Course Start</h2>
        <p>If a student wishes to cancel enrollment before the course begins, a refund request may be considered. Processing fees or transaction charges may be deducted from the refund amount.</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Missed Classes</h2>
        <p>If a student misses a scheduled class:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>If it is informed in advance, the total number of remaining classes will remain the same, and the class will be rescheduled based on instructor availability.</li>
          <li>If there is no prior information from the student, the class will be marked as absent and will not be compensated.</li>
          <li>Rescheduling may be allowed only if prior notice (at least 6 hours) is given. Rescheduling depends on instructor availability.</li>
          <li>If a student is planning to take a break, prior information must be provided so that the remaining classes and batch timings can be held, and the student can rejoin later.</li>
        </ul>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Technical Issues</h2>
        <p>Maple Diary Academy is not responsible for missed classes due to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Poor internet connection</li>
          <li>Device issues</li>
          <li>Power outages</li>
          <li>Student-side technical problems</li>
        </ul>
        <p>However, if the student informs us earlier about the issue, the class may be compensated depending on instructor availability.</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">6. Class Cancellation by Academy</h2>
        <p>If a class is cancelled by Maple Diary Academy due to instructor unavailability or technical issues on our side, the class will be rescheduled at no additional cost.</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">7. Exceptional Circumstances</h2>
        <p>In rare or exceptional cases, refund requests may be reviewed at the sole discretion of Maple Diary Academy.</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">8. Contact Us</h2>
        <p>For refund-related questions or requests, please contact:</p>
        <p><strong className="text-foreground">Maple Diary Academy</strong><br />
        Email: <a href="mailto:themaplediary@gmail.com" className="text-primary hover:underline">themaplediary@gmail.com</a><br />
        Website: www.(---).com</p>
      </div>
    </div>
  </div>
);

export default RefundPolicy;