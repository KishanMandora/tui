type ButtonProps = {
  text: string
}

function Button({ text }: ButtonProps) {
  return (
    <button style={{ color: "red" }}>{text}</button>
  )
}

export { Button }