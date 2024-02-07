import {useEffect, useState} from "react";
import { Button, Container, List, Title, Text, TextInput, Modal } from "@mantine/core";
import Question from "./question/Question.jsx";

function Questions() {
    const [questionInput, setQuestionInput] = useState('')
    const [questionList, setQuestionList] = useState([])

    useEffect(() => {
        const questions = JSON.parse(localStorage.getItem('quiz-questions'));
        setQuestionList(questions)
    }, [])

    const createHandler = () => {
        if(!questionInput) return false;
        const questions = JSON.parse(localStorage.getItem('quiz-questions'));
        const setValue = questions ? [...questions, {id: Math.floor(Math.random() * 1000), question: questionInput, answer: '', previousAnswers: []}] : [{id: Math.floor(Math.random() * 100), question: questionInput, answer: '', previousAnswers: []}]
        localStorage.setItem('quiz-questions', JSON.stringify(setValue));
        setQuestionInput('')
        setQuestionList(setValue)
    }
    return (
        <>

            <Container mt='xl'>
                <TextInput value={questionInput} onChange={(e) => setQuestionInput(e.target.value)} placeholder="Create new question"/>
                <Button mt='sm' onClick={createHandler}>Create</Button>
                {questionList && !!questionList.length ? (
                    <>
                        <Title order={3} mt='xl'>Questions</Title>
                        <List withPadding icon={<></>}>
                            {questionList.map((ques, index) => {
                               return (
                                   <Question key={index} question={ques} />
                               )
                            })}
                        </List>
                    </>
                ) : (
                    <Text m='xl'>Start by creating a question</Text>
                )}
            </Container>

            {/*<Modal opened={false} onClose={close} title="Edit Question">*/}
            {/*    <TextInput value={items[selectedQuestionIndex]?.question} onChange={(e) => editHandler(e.target.value)} />*/}
            {/*    <Button mt='sm' onClick={close}>Save & Close</Button>*/}
            {/*</Modal>*/}

        </>
    )
}

export default Questions