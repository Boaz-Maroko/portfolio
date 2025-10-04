import Image from 'next/image';

export default function Featured() {
  const images = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 
    'img4.jpg', 'img5.jpg', 'img6.jpg'
  ];

  return (
    <section id="featured" className="container section featured">
      <h1 className="featured__title">Featured</h1>
      <div className="featured__container">
        <div className="featured__container-imgs">
          {images.slice(0, 3).map((img, index) => (
            <div key={index} className="featured__img-container">
              <Image 
                src={`/${img}`} 
                alt="featured_project" 
                className="featured__img" 
                width={300}
                height={200}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="featured__container-imgs">
          {images.slice(3, 6).map((img, index) => (
            <div key={index} className="featured__img-container">
              <Image 
                src={`/${img}`} 
                alt="featured_project" 
                className="featured__img" 
                width={300}
                height={200}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}