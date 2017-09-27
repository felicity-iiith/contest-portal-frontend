import { Link } from 'inferno-router';
import linkState from 'linkstate';
import Component from 'inferno-component';

class QuestionViewer extends Component {
  state = {
    question: {},
    loading: true,
    error: '',
  }
  async componentDidMount() {
    await this.fetchQuestion()
  }
  async componentWillReceiveProps(nextProps) {
    await this.fetchQuestion(nextProps.params.qno)
  }
  async fetchQuestion(qno = this.props.params.qno) {
    var res = await window.fetchWithAuth(`/questions/${qno}`);
    res = await res.json();
    if (!res.error) this.setState({ question: res, loading: false })
    else this.setState({ error: res.error, loading: false })
  }
  async checkAnswer() {
    // XXX: Need to fill in this stub
    // Read fetch documentation on how to send post request and
    // display output in window.alert
  }
  render() {
    const { loading, question, error, answer } = this.state
    const qno = parseInt(this.props.params.qno,10)
    return (
      <div>
        {loading && <div>Loading...</div>}
        <h1>Q{question.qno}: {question.title}</h1>
        {error && <div className="error">ERROR: {error}</div>}
        <p>
          {question.body}
        </p>
        <form onSubmit={this.checkAnswer}>
          <label for='answer'>Answer</label>
          <input type='text' name='answer' value={answer} onInput={linkState(this, 'answer')} />
          <button class='button-primary float-right'>Check</button>
        </form>
        <div class="clearfix" />
        {
          qno!==1 &&
            <Link className="button float-left" to={`/question/${qno-1}`}>
              Prev
            </Link>
        }
        {
          qno!==5 &&
            <Link className="button float-right" to={`/question/${qno+1}`}>
              Next
            </Link>
        }
      </div>
    )
  }
}

export default QuestionViewer;
