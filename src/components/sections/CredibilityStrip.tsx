export function CredibilityStrip({ items }: { items: readonly string[] }) {
  return (
    <div className="bg-midnight-texture border-y border-mist/10 py-5 sm:py-6">
      <p className="mx-auto max-w-[1100px] px-6 text-center font-body text-[13px] leading-loose text-mist sm:text-[14px]">
        {items.map((item, i) => (
          <span key={item}>
            <span>{item}</span>
            {i < items.length - 1 && <span className="mx-3 text-gold sm:mx-4">·</span>}
          </span>
        ))}
      </p>
    </div>
  );
}
