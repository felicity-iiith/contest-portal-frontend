
import Component from 'inferno-component';

class QuestionViewer extends Component {
  state = {
    question: {},
    loading: true,
    error: '',
  }
  async componentDidMount() {
    const { qno } = this.props.params;
    var res = await window.fetchWithAuth(`/questions/${qno}`);
    res = await res.json();
    if (!res.error) this.setState({ question: res, loading: false })
    else this.setState({ error: res.error, loading: false })
  }
  render() {
    const { loading, question, error } = this.state
    const quesno = parseInt(this.props.params.qno,10)
    const prev = `/question/${quesno-1}`
    const nxt = `/question/${quesno+1}`
    return (
      <div>
        {loading && <div>Loading...</div>}
        <h1>Q{question.qno}: {question.title}</h1>
        {error && <div className="error">ERROR: {error}</div>}
        <p>
          {question.body}
        </p>
        {
          quesno ===1 ?(
            <a class="button float-right" href={nxt}>Next</a>
          ) : quesno ===5 ?(
            <a class="button float-left" href={prev}>Prev</a>
          )
            :
            (<div>
              <a class="button float-left" href={prev}>Prev</a>
              <a class="button float-right" href={nxt}>Next</a></div>)
        }
      </div>
    )
  }
}

export default QuestionViewer;
