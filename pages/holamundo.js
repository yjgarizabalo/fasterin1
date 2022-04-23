import Layout from "../components/Layout";

// IMAGENES
import Image from 'next/image'
import hero__yweb_07 from "../public/img/hero__yweb_07.jpg"

const Holamundo = () => (
    <Layout>
        <main className="main">

            {/* <!-- HERO - NOSOTROS --> */}
            <section className="hero__yweb">
                <div className="item__hero">
                    <h1 className="yweb__title">¡Hola mundo! 🌎</h1>
                    <p className="yweb__description">Es la tradicion mas bonita de los desarrolladores, un "Hola Mundo" basicamente se trata de un pedazo de codigo que no hace nada, pero inspira a seguir programando.</p>
                    <p className="yweb__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id cum architecto aut voluptatem labore, illo sunt repellat tempore? Porro at expedita illum fuga.</p>
                </div>
                <div className="item__hero">
                    <Image loading="lazy" className="hero__img" src={hero__yweb_07} width="400" height="250" alt="Desarrollo web Barranquilla" title="Desarrollo web Barranquilla" />
                </div>
            </section>


            {/* <!-- HOLA MUNDO --> */}


        </main>
    </Layout>

)

export default Holamundo;