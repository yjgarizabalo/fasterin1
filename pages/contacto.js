import Layout from "../components/Layout";

// IMAGENES
import Image from 'next/image'
import hero__yweb_08 from "../public/img/hero__yweb_08.jpg"


const Contacto = () => (
    <Layout>
        {/* <!-- CONTENTS --> */}
        <main className="main">

            {/* <!-- HERO - CONTACTO --> */}
            <section className="hero__yweb">
                <div className="item__hero">
                    <h1 className="yweb__title">Contacto 📞</h1>
                    <p className="yweb__description">Es la tradicion mas bonita de los desarrolladores, un "Hola Mundo" basicamente se trata de un pedazo de codigo que no hace nada, pero inspira a seguir programando.</p>

                    <div className="btn__content_hero">
                        <a href="https://wa.link/yboqm3" className="btn__hero" target="_blank">!Contáctanos! <i className='bx bxl-whatsapp'></i></a>
                    </div>

                </div>
                <div className="item__hero">
                    <Image loading="lazy" className="hero__img" src={hero__yweb_08} width="400" height="250" alt="Desarrollo web Barranquilla" title="Desarrollo web Barranquilla" />
                </div>
            </section>

        </main>
    </Layout>
)

export default Contacto;