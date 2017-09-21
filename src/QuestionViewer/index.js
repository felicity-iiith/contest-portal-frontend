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
        <p>
          {question.body}
        </p>
        {error && <div className="error">ERROR: {error}</div> }
      </div>
  }
      )
}
export default QuestionViewer;
