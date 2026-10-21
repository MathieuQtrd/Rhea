import Cart from "./Cart"


const Header = () => {

    return (
        <header>
            <div>
                <div className="d-flex justify-content-end container">
                    <Cart />
                </div>
                <h1 className="pt-3 pb-5 text-center playfair">Mon restaurant</h1>
            </div>
        </header>
    )
}

export default Header
