import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      {/* <ul>
        <li>
          <a href='#'>
            <img src='' alt=''/>
          </a>
        </li>
      </ul> */}
      <img className='logo' src='/images/logo.png' alt='Logo do organo'/>
      <p>Desenvolvido por Amanda &copy;</p>
    </footer>
  )
}

export default Footer;