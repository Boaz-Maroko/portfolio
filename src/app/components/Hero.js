import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container section hero">
      <Image 
        className="hero__profile" 
        src="/profile_picture1.jpg" 
        alt="profile picture" 
        width={200} 
        height={200}
      />
      <h1>Hello👋</h1>
      <p>I'm Boaz,</p>
      <p className="hero__title">
        <strong>FULLSTACK</strong><br />WEB DEVELOPER
      </p>
      <p className="hero__description">
        <strong>Full-stack developer</strong> passionate about creating modern, scalable,
        and impactful digital experiences
      </p>
      <p className="hero__description">
        <strong>I build innovative</strong> and user-friendly web applications.
      </p>
      <a href="mailto:boazmaroko123@gmail.com" target="_blank" className="btn">Reach Out</a>
    </section>
  );
}
