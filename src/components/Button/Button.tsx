type ButtonProps = {
  text: string,
  color: string,
}

function Button({ text, color }: ButtonProps) {
  return (
    <button style={{ color, padding: ".5rem 1rem", border: "none" }}>{text}</button>
  )
}

export { Button }