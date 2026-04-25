import { useState } from "react";
import emailjs from "@emailjs/browser";

const COURSES = [
  "Keyboard",
  "Piano",
  "Acoustic Guitar",
  "Electric Guitar",
  "Western Vocals",
  "Carnatic Vocals",
  "Music Theory",
  "Vocal Training",
];

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Australia",
  "UAE",
  "Singapore",
  "Canada",
  "Germany",
  "Malaysia",
  "Other",
];

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

const DemoModal = ({ open, onClose }: DemoModalProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    country: "",
    age: "",
    parentName: "",
    attendedBefore: "",
    course: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.gender) errs.gender = "Please select gender";
    if (!form.country) errs.country = "Please select country";
    if (!form.parentName.trim()) errs.parentName = "Parent name is required";
    if (!form.attendedBefore) errs.attendedBefore = "Please select an option";
    if (!form.course) errs.course = "Please select a course";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    setSubmitError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          gender: form.gender,
          age: form.age,
          country: form.country,
          parent_name: form.parentName,
          phone: form.phone,
          attended_before: form.attendedBefore,
          course: form.course,
        },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSuccess(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitError(
        "Something went wrong. Please try again or contact us directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSuccess(false);
      setSubmitError("");
      setForm({
        name: "",
        email: "",
        gender: "",
        age: "",
        country: "",
        parentName: "",
        attendedBefore: "",
        course: "",
        phone: "",
      });
      setErrors({});
    }, 300);
  };

  if (!open) return null;

  const selectClass =
    "w-full bg-background border border-border rounded-lg px-3.5 py-3 text-foreground text-[.92rem] outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10 appearance-none";
  const inputClass =
    "w-full bg-background border border-border rounded-lg px-3.5 py-3 text-foreground text-[.92rem] outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10 placeholder:text-muted-foreground/40";
  const labelClass =
    "block text-[.74rem] font-bold tracking-[.07em] uppercase text-foreground/60 mb-1.5";

  return (
    <div
      className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-1000 flex items-center justify-center p-5"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-card border border-border rounded-[20px] w-full max-w-130 relative overflow-hidden max-h-[92vh] overflow-y-auto shadow-2xl">
        <div className="h-1 bg-linear-to-r from-primary via-secondary to-primary shrink-0" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-muted border-none text-muted-foreground w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-primary/15 hover:text-primary z-[2]"
        >
          ✕
        </button>

        <div className="p-9 sm:p-10">
          {!success ? (
            <>
              <div className="text-[2.2rem] mb-2.5">🎶</div>
              <h2 className="font-heading text-[1.65rem] font-black mb-2 text-foreground">
                Book Your Free Demo
              </h2>
              <p className="text-[.87rem] text-muted-foreground leading-[1.65] mb-6">
                Fill in your details below. We&apos;ll WhatsApp you within 24
                hours to confirm your free trial class!
              </p>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                <div>
                  <label className={labelClass}>Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className={inputClass}
                  />
                  {errors.name && (
                    <span className="text-primary text-[.75rem] mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Email ID *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="Enter your email"
                    className={inputClass}
                  />
                  {errors.email && (
                    <span className="text-primary text-[.75rem] mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Gender & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                <div>
                  <label className={labelClass}>Gender *</label>
                  <select
                    value={form.gender}
                    onChange={(e) =>
                      setForm({ ...form, gender: e.target.value })
                    }
                    className={selectClass}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && (
                    <span className="text-primary text-[.75rem] mt-1 block">
                      {errors.gender}
                    </span>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Age *</label>
                  <input
                    type="text"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                    placeholder="Enter your age"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Parent Name & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                <div>
                  <label className={labelClass}>Parent Name *</label>
                  <input
                    type="text"
                    value={form.parentName}
                    onChange={(e) =>
                      setForm({ ...form, parentName: e.target.value })
                    }
                    placeholder="Enter parent's name"
                    className={inputClass}
                  />
                  {errors.parentName && (
                    <span className="text-primary text-[.75rem] mt-1 block">
                      {errors.parentName}
                    </span>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Country *</label>
                  <select
                    value={form.country}
                    onChange={(e) =>
                      setForm({ ...form, country: e.target.value })
                    }
                    className={selectClass}
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <span className="text-primary text-[.75rem] mt-1 block">
                      {errors.country}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className={labelClass}>Phone Number *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className={inputClass}
                />
              </div>

              {/* Attended Before */}
              <div className="mb-4">
                <label className={labelClass}>
                  Has student attended any class before? *
                </label>
                <select
                  value={form.attendedBefore}
                  onChange={(e) =>
                    setForm({ ...form, attendedBefore: e.target.value })
                  }
                  className={selectClass}
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.attendedBefore && (
                  <span className="text-primary text-[.75rem] mt-1 block">
                    {errors.attendedBefore}
                  </span>
                )}
              </div>

              {/* Course */}
              <div className="mb-4">
                <label className={labelClass}>Select a Course *</label>
                <select
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className={selectClass}
                >
                  <option value="">Select a course</option>
                  {COURSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <span className="text-primary text-[.75rem] mt-1 block">
                    {errors.course}
                  </span>
                )}
              </div>

              {/* Global error */}
              {submitError && (
                <p className="text-primary text-[.82rem] mb-3 text-center">
                  {submitError}
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg text-[.98rem] font-bold tracking-[.04em] cursor-pointer flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_20px_hsl(var(--red-glow)/0.2)] hover:brightness-90 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 mt-1"
              >
                {loading ? "Sending..." : "📋 Register for Free Demo"}
              </button>

              <div className="flex items-center justify-center gap-1.5 mt-3.5 text-[.77rem] text-muted-foreground">
                <span>We&apos;ll reach you via</span>
                <span className="text-green-600">💬 WhatsApp</span>
                <span>to fix your slot.</span>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="text-[3.5rem] mb-3.5">🎉</div>
              <h3 className="font-heading text-[1.55rem] mb-2.5 text-foreground">
                You&apos;re All Set!
              </h3>
              <p className="text-muted-foreground text-[.88rem] leading-[1.7] mb-6">
                Thank you! We&apos;ve received your details and will{" "}
                <strong className="text-foreground">
                  WhatsApp you within 24 hours
                </strong>{" "}
                to confirm your free demo class slot.
              </p>
              <a
                href="https://wa.me/?text=Hi%20Maple%20Diary%20Academy!%20I%20just%20booked%20a%20free%20demo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-green-600 text-primary-foreground px-7 py-3 rounded-lg font-bold text-[.9rem] transition-colors hover:bg-green-700"
              >
                💬 Message Us on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
