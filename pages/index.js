import Link from 'next/link';
import Image from 'next/image';

// IMAGEN
import hero__yweb_01 from '../public/img/hero__yweb_01.webp'

import Layout from "../components/Layout";

const Index = () => (
    <Layout>
        <main className="main">

            {/* <!-- HERO --> */}
            <section className="hero__yweb">
                <div className="item__hero">
                    <h1 className="yweb__title">Desarrollo Web Barranquilla 🚀</h1>
                    {/* <!-- <h1 className="yweb__title">Desarrollo Web Barranquilla <i className='bx bx-code-alt'></i></h1> --> */}
                    <p className="yweb__description">Equipo de desarrollo web en Barranquilla, contruyamos tu idea juntos, hacemos tu proyecto realidad.</p>
                    <div className="btn__content_hero">
                        <Link href="/contacto">
                            <a className="btn__hero">!Contáctanos!</a>
                        </Link>
                    </div>
                </div>
                <div className="item__hero">
                    <Image className="hero__img" src={hero__yweb_01} width="400" height="250" alt="Desarrollo web Barranquilla" title="Desarrollo web Barranquilla" />
                </div>
            </section>

            {/* <!-- SERVICIOS --> */}
            <section className="servicio__yweb">
                <h2 className="yweb__subtitle">Lo que hacemos 👨‍💻</h2>
                <!-- <h2 className="yweb__subtitle">Lo que hacemos <i className='bx bx-meteor'></i></h2> -->
                <div className="item__servicio">
                    <a href="./desarrollo-web-baranquilla.html" className="card__servicio">
                        <div className="servicio__card-header">
                            <h3 className="card__title">Desarrollo web</h3>
                            <h3 className="card__title">🌐</h3>
                            <!-- <h3 className="card__title"><i className='bx bx-world' ></i></h3> -->
                        </div>
                        <p className="yweb__subdescription">Creamos y diseñamos tu sitio web de manera profesional, con originalidad y adaptable a todos los dispostivos (Responsive).</p>
                    </a>
                    <a href="./seo-sem-barranquilla.html" className="card__servicio">
                        <div className="servicio__card-header">
                            <h3 className="card__title">SEO</h3>
                            <h3 className="card__title">🔍</h3>
                            <!-- <h3 className="card__title"><i className='bx bx-search-alt' ></i></h3> -->
                        </div>
                        <p className="yweb__subdescription">Creamos y optimizamos portales web para mejorar tu posición en los resultados de Google. Estaras en los primeros lugares.</p>
                    </a>
                    <a href="./desarrollo-softeware-barranquilla.html" className="card__servicio">
                        <div className="servicio__card-header">
                            <h3 className="card__title">Software </h3>
                            <h3 className="card__title">💻</h3>
                            <!-- <h3 className="card__title"><i className='bx bx-code-block' ></i></h3> -->
                        </div>
                        <p className="yweb__subdescription">Ponemos a tu disposición un equipo de trabajo especializado, para llevar a cabo tus ideas.</p>
                    </a>
                    <a href="./fotografia-profesiona-barranquilla.html" className="card__servicio">
                        <div className="servicio__card-header">
                            <h3 className="card__title">Fotografia</h3>
                            <h3 className="card__title">📷</h3>
                            <!-- <h3 className="card__title"><i className='bx bx-camera'></i></h3> -->
                        </div>
                        <p className="yweb__subdescription">Una fotografia con angulo y el enfoque correcto es mas que mil palabras.</p>
                    </a>
                </div>
            </section>

            {/* <!-- NOSOTROS --> */}
            <section className="nosotros__yweb">
                <div className="item__nosotros">
                    <div>
                        <img loading="lazy" className="nosotros__img" src="./src/public/img/hero__yweb_02.webp" alt="Desarrollo Web Barranquilla" width="400" height="250">
                    </div>
                    <div>
                        <h2 className="yweb__subtitle">Nosotros 😀</h2>
                        <!-- <h2 className="yweb__subtitle">Nosotros <i className='bx bx-smile'></i></h2> -->
                        <p className="description__nosotros">Agencia de desarrollo web en Barranquilla, contruyamos tu idea juntos, hacemos tu proyecto realidad.</p>
                        <p className="description__nosotros">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem. Quisquam, quaerat et.</p>
                    </div>
                </div>
            </section>

            {/* <!-- PROYECTO --> */}
            <section className="proyecto__yweb">
                <h2 className="yweb__subtitle">Poyectos⭐</h2>
                <!-- <h2 className="yweb__subtitle">Poyectos <i className='bx bx-star' ></i></h2> -->
                <div className="item__proyectos">

                    <a rel="noopener" href="http://dolmenusa.com/" target="_blank" className="proyecto__card" title="Dolmen USA">
                        <img loading="lazy" className="img__proyecto" src="./src/public/img/proyecto__yweb_01.webp" alt="Dolmen USA" width="285" height="190">
                    </a>

                    <a rel="noopener" href="https://controlt.com.co/" target="_blank" className="proyecto__card" title="controlT">
                        <img loading="lazy" className="img__proyecto" src="./src/public/img/proyecto__yweb_02.webp" alt="ControlT" width="285" height="190">
                    </a>

                    <a rel="noopener" href="https://multillantascolombia.com/" target="_blank" className="proyecto__card" title="Multillantas">
                        <img loading="lazy" className="img__proyecto" src="./src/public/img/proyecto__yweb_03.webp" alt="Multillantas" width="285" height="190">
                    </a>

                    <a rel="noopener" href="https://corp.recursoconfiable.com/" target="_blank" className="proyecto__card" title="Recursos confiables">
                        <img loading="lazy" className="img__proyecto" src="./src/public/img/proyecto__yweb_04.webp" alt="Recursos confiables" width="285" height="190">
                    </a>

                </div>
            </section>
        </main>
    </Layout>
)

export default Index;