

function Question({question}) {
    return (
        <>
            <p>Question: {question.question}</p>
            <p>Answers: {question?.previousAnswers.join(', ')}</p>
            <hr/>
        </>
    )
}

export default Question