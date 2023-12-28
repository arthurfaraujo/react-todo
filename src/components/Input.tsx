function Input({ label, type }: { label: string, type: string }) {
  return (
    <div className="inputDiv">
      <input type={type} name={type} />
      <div className="placeholderDiv">{label}</div>
    </div>
  )
}

export default Input