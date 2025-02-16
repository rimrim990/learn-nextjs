'use client'

export default function Client() {
  const handleClick = () => {
    window.alert('Button pressed!')
  }

  return (
    <div>
      <button onClick={handleClick}>Button!</button>
    </div>
  )
}
