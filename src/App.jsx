import Footer from './components/Footer';

function App() {
  return (
    <>
      <main id="main__content">
        <section className="main__content-details">
          <nav>
            <img src="/src/assets/images/logo.svg" alt="" />
            <h1>Base Apparel</h1>
          </nav>
          <div>
            <h2><span>We&apos;re</span>coming soon</h2>
            <p>Hello fellow shoppers! We&apos;re currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <div>
              <input type="text" placeholder="Email Address"/>
              <button></button>
            </div>
          </div>
        </section>
        <section className="main__content-image"> 
          <div><img src="/src/assets/images/hero-desktop.jpg" alt="" /></div>
        </section>
      </main>
      <Footer />
    </>

  )
}

export default App
