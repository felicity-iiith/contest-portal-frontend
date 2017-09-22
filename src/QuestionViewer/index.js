/* global fetchWithAuth */

import Component from 'inferno-component';

class QuestionViewer extends Component {
  state = {
    question: {},
    loading: true,
    error: '',
  }
  async componentDidMount() {
    const { qno } = this.props.params;
    var res = await fetchWithAuth(`/questions/${qno}`);
    res = await res.json();
    if (!res.error) this.setState({ question: res, loading: false })
    else this.setState({ error: res.error, loading: false })
  }
  render() {
    const { loading, question, error } = this.state
    return (
      <div>
        {loading && <div>Loading...</div>}
        <h1>Q{question.qno}: {question.title}</h1>
        {error && <div className="error">ERROR: {error}</div>}
        <p>
          {question.body}
        </p>
        <ul class="Nav">
        <li><a rel="prev" href="question/1" id="prv">&lt; Prev</a></li>
        <li><a rel="next" href="/question/2" id="nxt">Next &gt;</a></li>
        </ul>
      </div>
    )
  }
}

export default QuestionViewer;
