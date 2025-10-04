import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      image: 'img1.jpg',
      title: 'Personal Portfolio Website',
      description: 'A full-stack e-commerce platform built with React for a dynamic, user-friendly frontend and Django for a robust backend. The project includes features like product browsing, user authentication, shopping cart, order management, and secure payment integration, providing a seamless online shopping experience.',
      className: 'image1'
    },
    {
      image: 'ecommerce.jpg',
      title: 'E-Commerce website',
      description: 'A professional cleaning service platform developed using React for an interactive and responsive frontend and Django for a reliable backend. The site features service listings, booking functionality, customer authentication, real-time scheduling, and a secure payment system, making it easy for clients to book and manage cleaning services.',
      className: 'image2'
    },
    {
      image: 'img2.jpg',
      title: 'Blog Platform',
      description: 'A minimalist and fully responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. The site showcases projects, skills, and contact information, featuring smooth animations, a clean design, and fast loading times for an elegant and user-friendly experience.',
      className: 'image3'
    }
  ];

  return (
    <section className="container section projects">
      <h1>Projects</h1>
      <a className="projects__link" href="https://github.com/boaz-maroko/" target="_blank">
        Check out my Github🔗
      </a>
      <div className="projects__work">
        {projects.map((project, index) => (
          <div key={index} className={`project-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
            <Image 
              src={`/${project.image}`} 
              alt={project.title}
              className={`projects__img ${project.className}`}
              width={400}
              height={250}
            />
            <div className={`content${index + 1}`}>
              <h2 className="projects__subtitle">{project.title}</h2>
              <p className="projects__description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}