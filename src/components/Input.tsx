function Input({ label, type, name, handleChange }: {
  label: string, type: string, name?: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="inputDiv">
      <input type={type} name={name ? name : type} onChange={handleChange} />
      <div className="placeholderDiv">{label}</div>
    </div>
  )
}

export default Input