import Layout from "../components/Layout";

// IMAGENES
import Image from 'next/image'
import Link from 'next/link'

import hero__yweb_14 from "../public/img/hero__yweb_14.webp"

const custom404 = () => (
    <Layout>
        {/* <!-- CONTENTS --> */}
        <main className="main">

            {/* <!-- HERO - 404 --> */}
            <section className="hero__yweb">
                <div className="item__hero">
                    <h1 className="yweb__title">404 | ☄️</h1>
                    <p className="yweb__description">Pagina no encontrada</p>
                    <div className="btn__content_hero">
                        <Link href="/">
                            <a className="btn__hero">Regresar 🌎</a>
                        </Link>
                    </div>
                </div>
                <div className="item__hero">
                    <Image loading="lazy" className="hero__img" src={hero__yweb_14} width="400" height="250" alt="Desarrollo web Barranquilla" title="Desarrollo web Barranquilla" />
                </div>
            </section>

        </main>
    </Layout>
)

export default custom404;