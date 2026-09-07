export default function Inputbox({ label, inputAttr }) {
  return (
    <div>
      <label>{label}</label>
      <input {...inputAttr} />
    </div>
  );
}
