type ButtonProps = {
  text: string,
  color: string,
}

function Button({ text, color }: ButtonProps) {
  return (
    <button style={{ color }}>{text}</button>
  )
}

export { Button }