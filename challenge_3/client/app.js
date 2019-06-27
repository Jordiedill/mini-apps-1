
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          checkout: false,
          form1: false,
          form2: true,
          form3: false,
          confirm: false
          
        };
    }

    render() {
      if(this.state.checkout) {
        return (
          <div> 
            <button className='form1btn'>Yay!</button>
          </div>
        )
      }
      if(this.state.form1) {
        return(form1());
      }
      if(this.state.form2) {
        return (form2());
      }
      if(this.state.form3) {
        return(
         <div></div>
        )
      }
      if(this.state.confirm) {
        return (
          <div> </div>
        )
      }


        
    }
}

var form1 = (props) => {
  return(
    <div>
      <form id="firstForm">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Email" />
        <input type="password" name="password" />
      </form>
      <button className='form1btn'>Yay!</button>
    </div>
  )

}

var form2 = (props) => {
  return(
    <div>
      <input type="text" placeholder="Address Line 1" />
      <input type="text" placeholder="Address Line 2" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="State" />
      <input type="text" placeholder="Zip Code" />
      <input type="text" placeholder="Phone" />
    </div>

  )
}



ReactDOM.render(<App />, document.getElementById('root'));


            // <div>
            //     <form id="firstForm">
            //         <input type="text" value="First Name" />
            //         <input type="text" value="Email" />
            //         <input type="password" name="password" />
            //     </form>
            //   <button className='firstNext'>Yay!</button>
            // </div>
