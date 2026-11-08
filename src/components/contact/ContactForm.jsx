function ContactForm() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-violet-600/20 to-blue-600/20 blur-xl" />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative space-y-5 rounded-3xl border border-white/10 bg-[#101522] p-7 sm:p-9"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Send a Message
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Let's Work Together
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            Have a project or an idea? Feel free to send me a message.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Subject
          </label>
          <input
            type="text"
            placeholder="Enter subject"
            required
            className="w-full rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            required
            className="w-full resize-none rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-500"
        >
          Send Message
          <span className="text-xl">↗</span>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;