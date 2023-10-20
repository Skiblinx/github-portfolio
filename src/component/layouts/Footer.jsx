

const Footer = () => {

  const footerYear = new Date().getFullYear
  const footerMonth = new Date().getMonth

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <p>Copyright &copy; {footerMonth}, {footerYear}. All rights researved.</p>
    </footer>
  )
}

export default Footer