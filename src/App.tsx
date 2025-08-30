
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import BirthdayPage from "./pages/birthdaypage";


export default function App() {
return (
<Router>
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/birthday" element={<BirthdayPage />} />
</Routes>
</Router>
);
}