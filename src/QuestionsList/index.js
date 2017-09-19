/* global fetchWithAuth */

import Component from 'inferno-component';
import { Link } from 'inferno-router';

class QuestionsList extends Component {
  state = {
    questions: [],
    loading: true,
    error: '',
  }
  async componentDidMount() {
    var res = await fetchWithAuth('/questions');
    res = await res.json();
    if (!res.error) this.setState({ questions: res, loading: false })
    else this.setState({ error: res.error, loading: false })
  }
  render() {
    const { loading, questions, error } = this.state
    return (
      <div>
      {!window.email ?
        <ul></ul>
        :
        <ul className="navigation-title " to="/"><h3 className="float-right">Hello {window.email}</h3></ul>
      }
        <h1>Questions</h1>
        {loading && <div>Loading...</div>}
        <ul>
          {questions.map(question => (
            <li>
              <Link to={`/questions/${question.id}/${question.uuid}`}>{question.title}</Link>
            </li>))}
        </ul>
        {error && <div className="error">ERROR: {error}</div>}
      </div>
    )
  }
}

export default QuestionsList;
