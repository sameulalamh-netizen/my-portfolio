import ContactCard from "../components/contact/ContactCard";
import ContactForm from "../components/contact/ContactForm";

const contactInfo = [
  {
    id: 1,
    icon: "📧",
    title: "Email",
    value: "md18956891@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=md18956891@gmail.com",
  },
  {
    id: 2,
    icon: "🐙",
    title: "GitHub",
    value: "Explore my projects",
    link: "https://github.com/your-username",
  },
  {
    id: 3,
    icon: "💼",
    title: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/your-username",
  },
  {
    id: 4,
    icon: "📱",
    title: "WhatsApp",
    value: "Chat with me",
    link: "https://wa.me/8801403110911",
  },
  {
    id: 5,
    icon: "📘",
    title: "Facebook",
    value: "Visit my Facebook profile",
    link: "https://www.facebook.com/md.sameul.alam.184876",
  },
];

function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b14] px-5 py-24 text-white sm:px-8">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            Let's Connect
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
            Get in <span className="text-violet-400">Touch</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
            Have a project idea, a question, or just want to connect?
            I'd love to hear from you. Feel free to reach out through
            any of the platforms below.
          </p>
        </section>

        {/* Contact Content */}
        <section className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">

          {/* Left Side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Contact Information
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Let's Start a <span className="text-violet-400">Conversation.</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              I'm interested in web development, building meaningful
              projects, and connecting with other developers.
              You can contact me using the information below.
            </p>

            {/* Contact Cards */}
            <div className="mt-9 space-y-4">
              {contactInfo.map((item) => (
                <ContactCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  value={item.value}
                  link={item.link}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>

        </section>
      </div>
    </main>
  );
}

export default Contact;