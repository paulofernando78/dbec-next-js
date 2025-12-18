export const List = ({ items = [] }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}><span className="bold">•</span> {item}</li>
      ))}
    </ul>
  )
}