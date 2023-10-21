
import './App.css';

function New_Form() {
  return (
    <div className="App">
     
      <form className="form">
      <h1>FORM</h1>
        <div className="div_css">
          <lable>Name</lable>
          <input className='form_input_field'  type="text" />
        </div>
        <div className="div_css">
          <lable>Email</lable>
          <input className='form_input_field' type="text" />
        </div>
        <div className="div_css">
          <lable>Age</lable>
          <input className='form_input_field' type="number" />
        </div>
        <div className="div_css">
          <lable>Comment </lable>
          <textarea className='form_input_field commentarea' />
       
        </div>
      <div className='div_css'>
      <button className='sub-btn' type="submit">Submit</button>
      </div>
        
      </form>
    </div>
  );
}

export default New_Form;



