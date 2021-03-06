import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path='/movie/:id' element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;