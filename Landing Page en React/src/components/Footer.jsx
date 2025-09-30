import logo from "../assets/images/logo.jpg";

const FooterLinks1 = [
  { id: 1, nombre: "Inicio", link: "/" },
  { id: 2, nombre: "Profesionales", link: "/" },
  { id: 3, nombre: "Pacientes", link: "/" },
  { id: 4, nombre: "Contactos", link: "/" },
  { id: 5, nombre: "Nuestra Historia", link: "/" },
  { id: 6, nombre: "Internacion", link: "/" },
];

const FooterLinks2 = [
  { id: 1, nombre: "Horario de Visitas", link: "/" },
  { id: 2, nombre: "Historia Clinica", link: "/" },
  { id: 3, nombre: "Terapia", link: "/" },
  { id: 4, nombre: "Especialidades", link: "/" },
  { id: 5, nombre: "Estudios", link: "/" },
  { id: 6, nombre: "Comites", link: "/" },
];

const ListaRedes = [
  { id: 1, icono: <i className="bi bi-twitter-x"></i>, red: "Twitter/X", link: "/" },
  { id: 2, icono: <i className="bi bi-facebook"></i>, red: "Facebook", link: "/" },
  { id: 3, icono: <i className="bi bi-instagram"></i>, red: "Instagram", link: "/" },
];
const ListaContactos = [
  { id: 1, icono: <i class="bi bi-pin-map-fill"></i>, contacto:"San Nicolas 425, Capital, Catamarca" },
  { id: 2, icono: <i class="bi bi-whatsapp"></i>, contacto:"+54 3834524562" },
  { id: 3, icono: <i class="bi bi-envelope-at-fill"></i>, contacto:"clinicadelvalle@test.com" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#04193f] text-white">
      {/* Sección principal */}
      <div className="flex flex-wrap justify-center lg:justify-evenly gap-8 px-6 py-10">
        {/* Logo */}
        <div className="flex flex-col gap-3 w-full sm:w-auto items-center sm:items-start">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Logo" className="w-16 h-16" />
            <p className="text-sm font-bold text-blue-600 sm:text-lg">
              CLINICA DEL VALLE
            </p>
          </div>
        </div>

        {/* Lista 1 */}
        <ul className="flex flex-col gap-[18px] w-1/2 sm:w-auto items-center sm:items-start">
          {FooterLinks1.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                className="font-bold text-[16px] hover:text-blue-400 font-serif transition-colors duration-200"
              >
                {link.nombre}
              </a>
            </li>
          ))}
        </ul>

        {/* Lista 2 */}
        <ul className="flex flex-col gap-[18px] w-1/2 sm:w-auto items-center sm:items-start">
          {FooterLinks2.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                className="font-bold text-[16px] hover:text-blue-400 font-serif transition-colors duration-200"
              >
                {link.nombre}
              </a>
            </li>
          ))}
        </ul>

        {/* Redes sociales */}
        <ul className="flex flex-col gap-4 w-full sm:w-auto items-center sm:items-start">
          <li>
            <h3 className="text-lg font-semibold tracking-wide uppercase text-gray-200">
              Redes Sociales
            </h3>
          </li>
          {ListaRedes.map((red) => (
            <li key={red.id}>
              <a
                href={red.link}
                className="font-bold text-[16px] hover:text-blue-400 font-serif transition-colors duration-200 gap-2"
              >
                <span className="text-xl">{red.icono}</span>
                <span className="ml-2">{red.red}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Contacto */}
        <ul className="flex flex-col gap-[18px] w-full sm:w-auto items-center sm:items-start">
          <h3 className="text-lg font-semibold tracking-wide uppercase text-gray-200"> Contactos</h3>
          {ListaContactos.map((contacto) => (
                <li key={contacto.id}className="font-bold text-[14px]">
                  <span className="text-xl">{contacto.icono}</span>
                <span className="ml-2">{contacto.contacto}</span> 
                </li>
             ))}
      </ul>
      </div>

      <div className="flex justify-center items-center py-4 text-xs sm:text-sm font-black border-t border-gray-700">
        <p className="cursor-pointer uppercase">© 2025 Clínica del Valle</p>
      </div>
    </footer>
  );
};

export default Footer;
