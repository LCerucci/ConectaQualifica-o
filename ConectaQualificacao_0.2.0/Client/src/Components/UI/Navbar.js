import { Link } from "react-router-dom";

export function Navbar() {
  const navLinks = [
    { to: '/prefeitura', label: <img src={'homeImage'} alt="Home" className="button-image" /> },
    { to: '/home', label: 'Home' },
    { to: '/instituicoes', label: 'Instituição' },
    { to: '/cursos', label: 'Cursos' },
    { to: '/sobre', label: 'Sobre' },
  ];

  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link className="nav-button" to={link.to}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}