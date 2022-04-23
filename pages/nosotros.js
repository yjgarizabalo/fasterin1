import Layout from "../components/Layout";

// IMAGENES
import Image from 'next/image'
import hero__yweb_05 from "../public/img/hero__yweb_05.jpg"

const Nosotros = () => (
    <Layout>
        {/* <!-- CONTENTS --> */}
        <main className="main">

            {/* <!-- HERO - NOSOTROS --> */}
            <section className="hero__yweb">
                <div className="item__hero">
                    <h1 className="yweb__title">Nosotros 🚀</h1>
                    <p className="yweb__description">Agencia de desarrollo web en Barranquilla, contruyamos tu idea juntos, hacemos tu proyecto realidad.</p>
                    <p className="yweb__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id cum architecto aut voluptatem labore, illo sunt repellat tempore? Porro at expedita illum fuga. Porro quia doloremque reiciendis fugiat odit quisquam, dolorum nobis similique repudiandae laudantium, cum unde a quos.</p>
                </div>
                <div className="item__hero">
                    <Image loading="lazy" className="hero__img" src={hero__yweb_05} width="400" height="250" alt="Desarrollo web Barranquilla" title="Desarrollo web Barranquilla"/>
                </div>
            </section>


            {/* <!-- NOSOTROS --> */}
            {/* <!-- <section className="nosotros__yweb">
                <div className="item__nosotros">
                    <div>
                        <img loading="lazy" className="nosotros__img" src="./../public/img/hero__yweb_02.jpg" alt="Desarrollo Web Barranquilla" width="400" height="250">
                    </div>
                    <div>
                        <h3 className="yweb__subtitle">Nosotros</h3>
                        <p className="description__nosotros">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem. Quisquam, quaerat et. Cupiditate dignissimos veritatis tempora amet consequuntur vero veniam minima nobis, corporis, quis deleniti quam earum praesentium aperiam quidem molestias, obcaecati neque alias iure impedit sapiente explicabo accusamus! Sunt vitae unde quis dolorem sequi iure eveniet culpa veniam.</p>
                    </div>
                </div>
            </section> --> */}

        </main>
    </Layout>
)

export default Nosotros;