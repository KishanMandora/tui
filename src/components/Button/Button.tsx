type ButtonProps = {
  text: string,
  color: string,
}

function Button({ text, color }: ButtonProps) {
  return (
    <button style={{ color, padding: ".25rem .5rem", border: "none" }}>{text}</button>
  )
}

export { Button }