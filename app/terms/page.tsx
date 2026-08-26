import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Maple Diary Academy — understand our policies on enrolment, payments, cancellations, and use of our online music class services.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.maplediaryacademy.com/terms" },
};

const Terms = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-[800px] mx-auto px-[5%] py-24">
      <Link href="/" className="text-primary text-[.85rem] font-semibold hover:underline mb-8 inline-block">← Back to Home</Link>
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-black text-foreground mb-8">Terms & Conditions</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 text-[.92rem] leading-[1.8]">
        <p><strong className="text-foreground">Terms and Conditions</strong></p>
        <p><strong className="text-foreground">Effective Date:</strong> January 1, 2025</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
        <p>By accessing and using Maple Diary Academy&apos;s website and services, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of the terms, you must not use our services.</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. Eligibility</h2>
        <p>You must be at least 6 years old to register for our services. For students under 18, parental or guardian consent is required.</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Registration and Accounts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>You agree to provide accurate and complete information during the registration process.</li>
          <li>You are responsible for all activities that occur under your account and must notify us immediately of any unauthorised use.</li>
          <li>Students are required to purchase or have access to the specific instrument related to their course (e.g., piano, keyboard or guitar).</li>
        </ul>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Payment and Refund Policy</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>All classes are prepaid.</li>
          <li>Students are required to pay either for a 3-month or 6-month term upfront.</li>
          <li>Payment can be made via bank transfer or UPI methods such as Google Pay, PhonePe, or Paytm.</li>
          <li>Students must renew for further sessions before attending their last two sessions to ensure uninterrupted access to classes.</li>
          <li>No refunds will be issued for missed classes, but makeup sessions may be offered at the academy&apos;s discretion.</li>
          <li>Refunds, if applicable, are subject to review and a processing fee may apply.</li>
        </ul>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Class Conduct</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Students are expected to behave respectfully and professionally during classes.</li>
          <li>Students are requested to join the session 5 minutes before or at the earliest possible.</li>
          <li>Any form of disruptive behavior, abuse, or misconduct may result in suspension or removal without refund.</li>
        </ul>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">6. Intellectual Property</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>All content provided by Maple Diary Academy (videos, PDFs, recordings, exercises) is the intellectual property of the academy.</li>
          <li>Reproduction, distribution, or resale of course materials without written permission is prohibited.</li>
        </ul>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">7. Cancellations and Rescheduling</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Maple Diary Academy reserves the right to cancel or reschedule classes. In such cases, we will provide adequate notice and arrange an alternative session.</li>
          <li>Students must inform the academy at least 6 hours in advance if they need to cancel or reschedule a session.</li>
          <li>In order to cancel or reschedule a session, students may drop a message in their designated WhatsApp group.</li>
          <li>Students are allowed to cancel up to 2 classes per month.</li>
        </ul>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">8. Technical Requirements</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>A stable internet connection and a device capable of running Google Meet or the specified platform are required for attending classes.</li>
          <li>Students should join classes from a quiet environment to avoid distractions and background noise.</li>
        </ul>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">9. Modifications</h2>
        <p>We reserve the right to change these terms at any time. Continued use of the service after such changes constitutes acceptance of the new terms.</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">10. Privacy Policy</h2>
        <p>Please refer to our separate Privacy Policy for details on how we collect, use, and protect your personal information.</p>
        
        <h2 className="font-heading text-xl font-bold text-foreground mt-8">11. Contact Information</h2>
        <p>For any questions or concerns, you can reach us at:</p>
        <p>📧 Email: <a href="mailto:themaplediary@gmail.com" className="text-primary hover:underline">themaplediary@gmail.com</a><br />
        📞 Phone: <a href="tel:+919043872168" className="text-primary hover:underline">+91 9043872168</a></p>
      </div>
    </div>
  </div>
);

export default Terms;