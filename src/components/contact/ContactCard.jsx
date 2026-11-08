function ContactCard({ icon, title, value, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#101522] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-2xl">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 break-all text-sm text-gray-400">{value}</p>
      </div>

      <span className="text-xl text-gray-500 group-hover:text-violet-400">
        ↗
      </span>
    </a>
  );
}

export default ContactCard;