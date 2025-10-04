export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="container section">
      -- &copy;Maroko Boaz -- <br />
      2022-{currentYear}
    </footer>
  );
}