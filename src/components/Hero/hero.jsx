import './hero.css';

const Hero = () => {
  return (
    <div className="main-hero">
      <button>Let us guide your Home</button>
      <h2>DISCOVER A PLACE YOU WILL LOVE<br />TO LIVE</h2>
      <form>
        <input type="text" placeholder="Search Location" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Hero;

