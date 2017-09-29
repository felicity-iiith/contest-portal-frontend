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
        <h1>Questions</h1>
        {loading && <div>Loading...</div>}
        <ul>
          {questions.map(question => (
            <li>
              <Link to={`/question/${question.id}/`}>{question.title}</Link>
            </li>))}
        </ul>
        {error && <div className="error">ERROR: {error}</div>}
      </div>
    )
  }
}

export default QuestionsList;
