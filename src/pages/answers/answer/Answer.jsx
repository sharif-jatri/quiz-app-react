import { Button, TextInput } from "@mantine/core";
import {useState} from "react";

function Answer({answer, onSubmitAnswer}) {
    const [answerInput, setAnswerInput] = useState('')

    return (
        <>
            <p><b>Question:</b> {answer.question}</p>
            <div>
                Enter Your Answer:
                <TextInput value={answerInput} onChange={(e) => setAnswerInput(e.target.value) } />
                <Button mt='md' onClick={() =>{
                    onSubmitAnswer(answerInput, answer.id)
                    setAnswerInput('')
                }}>Submit</Button>
            </div>
            <p><b>Previous answers:</b> {answer?.previousAnswers.join(', ')}</p>
            <hr/>
        </>
    )
}

export default Answer