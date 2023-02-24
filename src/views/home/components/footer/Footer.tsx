import "./Footer.scss";

export const Footer = () => (
  <footer className="footer text-white flex flex-col items-center flex-1 justify-end">
    <p>Full Stack Developer</p>
    <div className="footer__networks flex">
      <a
        className="pointer"
        target="_blank"
        href="https://www.linkedin.com/in/jsebastianmurcia"
      >
        <i className="footer_icon fab fa-github text-white" />
      </a>
      <a className="pointer" target="_blank" href="https://github.com/jsmurcia">
        <i className="footer_icon fab fa-linkedin text-white" />
      </a>
      <a className="pointer" target="_blank" href="https://www.facebook.com/">
        <i className="footer_icon fab fa-facebook-square text-white" />
      </a>
    </div>
    <p className="footer__copyright text-center">
      Copyright® 2023 | All Rights Reserved | Powered by&nbsp;
      <span className="font-bold">Sebastian Murcia</span> ©
    </p>
  </footer>
);
