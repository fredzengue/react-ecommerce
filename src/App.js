import react from 'react'
import Layout from './components/Dashboard/Layout';



//import flag icon


function App() {
  

  return (
  <div className='flex'>
    <img src="https://portotheme.com/html/porto_ecommerce/assets/images/logo.png" alt="" />
    <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
    <div className="form">
      <form action="">
        <div>
          <input type="text" placeholder='Search...' />
          <button></button>
        </div>
      </form>
    </div>
    <div className="contact-info">
      <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
      <p>
        <h3>{t('layout.search_placeholder')}</h3>
        <h2>{t('layout.contact_info_title')}</h2>
        <h3><strong>+123 5535 3663</strong></h3>
      </p>
    </div>
    <div className='nav-icon'>
    <FontAwesomeIcon icon="fab fa-facebook" />
    </div>
    
  </div>
  );
}

export default App;
