import Component from 'inferno-component';
class Scoreboard extends Component {
  state = {
    scores: [],
    error: '',
  }
  async componentDidMount() {
    var res = await window.fetchWithAuth('/scoreboard');
    res = await res.json();
    if (!res.error) this.setState({ scores: res})
    else this.setState({ error: res.error})
  }
  render() {
    const { scores, error } = this.state
    return (
      <div>
        <table> 
          <th> 
            <td> Name </td> 
            <td> Score </td>
          </th>
            {scores.map(user => (
              <tr>
                <td> {user.name} </td>
                <td> {user.score} </td>  
              </tr>))}
        </table>
        {error && <div className="error">ERROR: {error}</div>}
      </div>
    )
  }
}

export default Scoreboard;