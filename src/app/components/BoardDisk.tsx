export const BoardDisk = () => {
  return (
    <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-white">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(15,23,42,0.85) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(15,23,42,0.85) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(15,23,42,0.85) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(15,23,42,0.85) 75%)
          `,
          backgroundSize: "22px 22px",
          backgroundPosition: "0 0, 0 11px, 11px -11px, -11px 0px",
          backgroundColor: "#06b6d4",
        }}
      />
      <svg
        viewBox="0 0 24 24"
        className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-white/90 drop-shadow"
        fill="currentColor"
        aria-hidden
      >
        <path d="M7 20h10v-2H7v2Zm6.5-14.5c-.17 0-.33.03-.5.05-.64-1.2-2.01-2.55-4-3.55l-.5 1.5c1.38.69 2.15 1.57 2.5 2.25C9.17 5.97 8 7.58 8 9.5c0 1.61.78 2.94 2 3.71V16h6v-1.5c1.22-.77 2-2.1 2-3.71 0-2.21-1.79-4-4-4h-.5Z" />
      </svg>
    </div>
  );
};
