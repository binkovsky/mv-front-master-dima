import './App.css';
import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from "./pages/Landing";
import Policy from "./pages/Policy";
import RiskWarning from "./pages/RiskWarning";
import AntiLauderingPolicy from "./pages/AntiLauderingPolicy";
import TermsOfService from "./pages/TermsOfService";


function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-main w-screen overflow-hidden">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/policy" element={<Policy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/kyc-aml" element={<AntiLauderingPolicy />} />
                    <Route path="/risks" element={<RiskWarning />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
