
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {HomePage} from "./pages/Home";
import {InboxPage} from "./pages/InboxPage";
import { MessagePage } from './pages/Message';

function App() {
  return (
    <div className="App">
     <Router>
       
       <Routes>
         <Route path="/" element={<HomePage />}/>
       <Route path="/Inbox" element={<InboxPage />}/>
       <Route path="/Message" element={<MessagePage />}/>
       <Route path="/*" element={<h1> Page Not Found</h1>}/>
       </Routes>
     </Router>

    </div>
  );
}

export default App;
