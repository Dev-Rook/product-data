import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.css";

import Landing from "./Pages/Landing";
import PersonelDetails from "./Dynamic-Pages/PersonelDetails";

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing />} />

          {/* Dynamic Route */}
          <Route path={"/Personel/:id"} element={<PersonelDetails />} />
          {/* Dynamic Route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
