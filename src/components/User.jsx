export default function User({ name, mail, image }) {
  return (
    <div className="user-card">
      <img src={image} alt={name} />
      <h2>Hello, I'm {name} 👋🏻</h2>
      <p>Contact me on my email {mail}</p>
    </div>
  );
}
