import { useActionState, useEffect, useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/Models/ContactExperience";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);

  const submitForm = async (previousState, formData) => {
    try {
      const name = formData.get("name")?.trim();
      const email = formData.get("email")?.trim();
      const message = formData.get("message")?.trim();

      const errors = {};

      if (!name) {
        errors.name = "Name is required.";
      } else if (name.length < 3) {
        errors.name = "Name must be at least 3 characters.";
      }

      if (!email) {
        errors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Invalid email address.";
      }

      if (!message) {
        errors.message = "Message is required.";
      } else if (message.length > 1000) {
        errors.message = "Message must be less than 1000 characters.";
      }

      if (Object.keys(errors).length > 0) {
        return { success: false, errors, formData: { name, email, message } };
      }

      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      return {
        success: true,
        message: "Message sent successfully!",
        errors: {},
        formData: { name: "", email: "", message: "" },
      };
    } catch (error) {
      console.error("Error submitting form:", error);
      return {
        success: false,
        message: "Form submission failed.",
        errors: {},
        formData: previousState.formData,
      };
    }
  };
  const [state, formAction, isPending] = useActionState(submitForm, {
    success: false,
    message: "",
    errors: {},
    formData: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [localErrors, setLocalErrors] = useState(state.errors || {});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setLocalErrors(state.errors || {});
  }, [state.errors]);

  useEffect(() => {
    if (state.success) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.success]);

  const onChange = (e) => {
    const { name } = e.target;
    setLocalErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section id="contact" className="flex-center section-padding mb-24">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch — Let's Connect"
          sub="🔥 Contact Information"
        />

        <div className="mt-16 grid-12-cols">
          {/* Contact Form - Left Side */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                action={formAction}
                ref={formRef}
                className="w-full flex flex-col gap-7"
              >
                <div className="mb-6">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    onChange={onChange}
                  />
                  {localErrors?.name && (
                    <p className="mt-1 text-red-500 text-sm">
                      {localErrors.name}
                    </p>
                  )}
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    onChange={onChange}
                  />
                  {localErrors?.email && (
                    <p className="mt-1 text-red-500 text-sm">
                      {localErrors.email}
                    </p>
                  )}
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    onChange={onChange}
                  ></textarea>
                  {localErrors?.message && (
                    <p className="mt-1 text-red-500 text-sm">
                      {localErrors.message}
                    </p>
                  )}
                </div>
                <button type="submit" disabled={isPending}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {isPending ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
                {showSuccess && (
                  <p className="mt-4 text-green-500 font-semibold">
                    {state.message}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* 3D Contact - Right Side */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
