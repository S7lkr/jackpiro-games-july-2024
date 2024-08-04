import GameList from "./components/game-list/GameList"
import Header from "./components/header/Header"
import Loader from "./components/loader/Loader"

function App() {
    return (
        <>
            {false && <Loader />}
            <Header />
            {/* <GameList /> */}
        </>
    )
}

export default App
