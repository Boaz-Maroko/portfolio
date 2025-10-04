import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="container section about">
      <h1 className="about__title">About</h1>
      <hr />
      <p className="about__description">
        A passionate <strong>full-stack developer </strong>with a knack for bringing ideas to life on the web.
        From creating <strong>seamless user interfaces</strong> to building robust <strong>server-side
          architectures,</strong>
        I enjoy crafting solutions that make a difference. I thrive on solving problems,
        learning new things, and collaborating with teams to deliver projects that are not
        only functional but also meaningful. When I'm not coding, you'll find me exploring
        new tools, brainstorming creative ideas, or diving into a good book.
        <strong>Let's build something amazing together!</strong>
      </p>
      <hr />
      <h3 className="about__subtitle">Technologies</h3>
      <div className="about__separators">
        <div className="about__menu-container">
          <ul className="about__menu">
            <li className="about__list">ReactJS</li>
            <li className="about__list">NextJS</li>
            <li className="about__list">Django</li>
            <li className="about__list">HTML</li>
          </ul>
          <ul className="about__menu">
            <li className="about__list">CSS</li>
            <li className="about__list">JavaScript</li>
            <li className="about__list">Python</li>
            <li className="about__list">Java</li>
          </ul>
        </div>
        <Image 
          src="/profile_picture2.png" 
          alt="profile picture" 
          className="about__picture"
          width={150}
          height={150}
        />
      </div>
      <hr />
    </section>
  );
}