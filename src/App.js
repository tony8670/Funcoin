import './App.css';

function App() {
    return (
        <div className="app">
            <div className="content">
                <header className={"header"}>
                    <div className="left">
                        <img className={"img"} src="https://www.freelogodesign.org/assets/img/logo-colors-meanings/logos-blancs/logo-apple.svg" alt=""/>
                        <h2 className={"logo"}>Funcoin</h2>
                        <nav>
                            <li>About</li>
                            <li>Stories</li>
                            <li>Help</li>
                            <li>Contact</li>
                        </nav>
                    </div>
                    <div className="right">
                        <a className={"link"} href="www.google.com">Sign in</a>
                        <button className={"btn"}>Create account</button>
                    </div>
                </header>

                <main className={"main"}>
                    <div className="text-area">
                        <h1 className={"heading"}>Invest with the no. 1 rated digital asset exchange</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti illum necessitatibus repudiandae! Assumenda cum dignissimos ex iure quam? Asperiores.</p>
                        <div className={"mt-5"}>
                            <button className="bt n-1">
                                WhitePaper
                            </button>
                            <button className="bt n-2">
                                Watch Video
                            </button>
                        </div>
                    </div>
                    <div className="back">
                        <img src="https://png.clipart.me/image_preview/9b6/neon-light-girl-vector-27490.jpg" alt=""/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
