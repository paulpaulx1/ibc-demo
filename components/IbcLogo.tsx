export default function IbcLogo({ dark = false }: { dark?: boolean }) {
  const color = dark ? "#0f1f36" : "#ffffff";

  return (
    <svg
      viewBox="0 0 80 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-14 h-7"
    >
      <text
        x="5"
        y="26"
        fontFamily="Georgia, 'Libre Baskerville', serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="3"
        fill={color}
      >
        I B C
      </text>
      <path
        d="M5 33q15 5 35 0t35 0"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
