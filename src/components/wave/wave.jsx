export const Wave = ({ width }) => {
  return (
    <svg
      pathOffset={1}
      className={`wave-svg ${width && "active"}`}
      viewBox="0 0 1926 475"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 79.9995C776 1151 1050 -346.5 1925 79.9995" stroke="#BFA181" />
    </svg>
  );
};
