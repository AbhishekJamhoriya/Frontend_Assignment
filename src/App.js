
import Background_Color_Change from "./Component/Backcolor";
import New_Form from "./Component/form"
import Fruit from "./Component/fruit";
import Image_Gallary from "./Component/image_gallary";
import Navbar from "./Component/navbar";
import Odd_Even from "./Component/oddeven";
import Random_Number from "./Component/randomnumber";
import Toggle_Text from "./Component/toggle_text";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<New_Form />} />
          <Route path="/Random_Number" element={<Random_Number />} />
          <Route path="/Odd_Even" element={<Odd_Even />} />
          <Route path="/fruit" element={<Fruit />} />
          <Route path="/Toggle_Text" element={<Toggle_Text />} />
          <Route path="/Image_Gallary" element={<Image_Gallary />} />
          <Route path="/Background_Color_Change" element={<Background_Color_Change />} />
        </Routes>
      </Router>
      {/* <New_Form/> */}

    </div>
  );
}

export default App;
