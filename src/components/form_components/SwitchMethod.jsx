const SwitchMethod = ({ method, phonePageUrl, emailPageUrl }) => {
  return (
    <div className="flex gap-2 mb-1">
      <Link
        href={phonePageUrl}
        className={`text-base pb-1 font-semibold ${
          method === "phone"
            ? "text-[var(--main-primary)] border-b-[3px] border-b-[var(--main-primary)]"
            : "text-[var(--text-primary)]"
        }`}
      >
        Using Phone
      </Link>
      <Link
        href={emailPageUrl}
        className={`text-base pb-1 font-semibold ${
          method === "email"
            ? "text-[var(--main-primary)] border-b-[3px] border-b-[var(--main-primary)]"
            : "text-[var(--text-primary)]"
        }`}
      >
        Using Email
      </Link>
    </div>
  );
};

export default SwitchMethod;
