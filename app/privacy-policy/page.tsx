import Link from "next/link";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-200 mx-auto px-[5%] py-24">
      <Link
        href="/"
        className="text-primary text-[.85rem] font-semibold hover:underline mb-8 inline-block"
      >
        ← Back to Home
      </Link>
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-black text-foreground mb-8">
        Privacy Policy
      </h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 text-[.92rem] leading-[1.8]">
        <p>
          <strong className="text-foreground">Maple Diary Academy</strong>
        </p>
        <p>
          <strong className="text-foreground">Last Updated:</strong> January 1,
          2025
        </p>

        <p>
          Maple Diary Academy (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
          respects your privacy and is committed to protecting the personal
          information of our students, parents, and website visitors. This
          Privacy Policy explains how we collect, use, store, and protect your
          information when you use our services.
        </p>

        <p>
          By accessing our website or enrolling in our courses, you agree to the
          practices described in this policy.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground mt-8">
          1. Information We Collect
        </h2>
        <p>
          We may collect the following types of information when you visit our
          website or enroll in our courses:
        </p>
        <p>
          <strong className="text-foreground">Personal Information</strong>
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Student&apos;s name</li>
          <li>Parent/guardian name (for minors)</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Country/Location</li>
          <li>Age of the student</li>
          <li>
            Payment information (processed through secure third-party payment
            providers)
          </li>
        </ul>

        <h2 className="font-heading text-xl font-bold text-foreground mt-8">
          2. How We Use Your Information
        </h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>To register students for courses</li>
          <li>To schedule and conduct online classes</li>
          <li>To communicate with students and parents regarding classes</li>
          <li>To process payments</li>
          <li>To provide certificates or course completion details</li>
          <li>To improve our courses and services</li>
          <li>To send important announcements or updates about our programs</li>
        </ul>
        <p>We do not sell or rent personal information to third parties.</p>

        <h2 className="font-heading text-xl font-bold text-foreground mt-8">
          3. Children&apos;s Privacy
        </h2>
        <p>
          Maple Diary Academy offers courses for children and adults. For
          students under the age of 18, personal information must be provided by
          a parent or legal guardian.
        </p>
        <p>Parents or guardians may contact us at any time to request:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Access to their child&apos;s information</li>
          <li>Corrections to the information</li>
          <li>Deletion of the information</li>
        </ul>

        <h2 className="font-heading text-xl font-bold text-foreground mt-8">
          4. Online Classes and Recording
        </h2>
        <p>
          Some online classes may be recorded for training, quality improvement,
          or for students who missed the session.
        </p>
        <p>
          Recordings will be used only for educational purposes within Maple
          Diary Academy and will not be publicly shared without consent.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground mt-8">
          5. Payment Security
        </h2>
        <p>
          Payments for courses may be processed through secure third-party
          payment gateways. Maple Diary Academy does not store full payment card
          details on our servers.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground mt-8">
          6. Data Protection
        </h2>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, misuse, or disclosure. However, no internet
          transmission can be guaranteed to be completely secure.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground mt-8">
          7. Third-Party Services
        </h2>
        <p>Our services may use third-party platforms such as:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Video conferencing tools (for example: Google Meet or Zoom)</li>
          <li>Payment gateways</li>
          <li>Email communication services</li>
        </ul>
        <p>
          These platforms may collect limited data according to their own
          privacy policies.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground mt-8">
          8. International Users
        </h2>
        <p>
          Since Maple Diary Academy offers online courses globally, your
          information may be processed and stored in countries where our service
          providers operate.
        </p>
        <p>
          By using our services, you consent to this transfer of information.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground mt-8">
          9. Updates to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. The updated
          version will always be posted on our website with the revised date.
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground mt-8">
          10. Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy or how your
          information is handled, please contact us:
        </p>
        <p>
          <strong className="text-foreground">Maple Diary Academy</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:themaplediary@gmail.com?subject=Hello&body=I%20want%20to%20connect"
            className="text-primary hover:underline"
          >
            themaplediary@gmail.com
          </a>
          <br />
          Website: www.(---).com
        </p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
