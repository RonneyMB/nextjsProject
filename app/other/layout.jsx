export default function OtherLayout({ children }) {
  return (
    <div>
      <ul>
        <li>Planetas</li>
        <li>Transporte</li>
        <li>Casas gobernantes</li>
      </ul>
      {children}
    </div>
  );
}
