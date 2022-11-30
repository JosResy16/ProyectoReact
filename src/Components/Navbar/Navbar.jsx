import Cartwidget from "../CartWidget/Cartwidget"

const Navbar = () => {

    return (
        <header className="header">
                <div className=" container container-header">
                    <div>LOGO</div>
                    <div className="container-ul">
                        <ul className="ul-nav">
                            <li>Todos los productos</li>
                            <li>Descuentos</li>
                            <li>Lo más nuevo</li>
                            <li>Contácto</li>
                        </ul>
                    </div>
                    <div>
                        <Cartwidget/>
                    </div>
                </div>
        </header>
    )
}

export default Navbar
