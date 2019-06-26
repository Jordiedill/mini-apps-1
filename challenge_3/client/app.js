
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {};
    }

    render() {
        return(
            <div>
                <form id="firstForm">
                    <input type="text" value="First Name"></input>
                    <input type="text" value="Email"></input>
                    <input type="password" name="password"></input>
                </form>
              <button className='firstNext'>Yay!</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

