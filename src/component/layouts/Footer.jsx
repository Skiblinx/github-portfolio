

const Footer = () => {

  const date = new Date();
  const footerYear = date.getFullYear();
  const footerMonth = date.toLocaleString('default', { month: 'short' });

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <p>Copyright &copy; {footerMonth}, {footerYear}. All rights researved.</p>
    </footer>
  )
}

export default Footer