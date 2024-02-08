import {useEffect, useState} from "react";
import { Container, List, Title, Text } from "@mantine/core";
import Answer from "./answer/Answer.jsx";

function Answers() {
    const [questionList, setQuestionList] = useState([])

    useEffect(() => {
        const questions = JSON.parse(localStorage.getItem('quiz-questions'));
        setQuestionList(questions)
    }, [])

    const onSubmitAnswer = (value, id) => {
        const questIndex = questionList.findIndex((question) => question.id === id)
        questionList[questIndex].previousAnswers.push(value);
        localStorage.setItem('quiz-questions', JSON.stringify(questionList));
    }

    return (
        <>

            <Container mt='xl'>
                {questionList && !!questionList.length ? (
                    <>
                        <Title order={3} mt='xl'>Answer these questions</Title>
                        <List withPadding icon={<></>}>
                            {questionList.map((ques, index) => {
                                return (
                                    <Answer key={index} answer={ques} onSubmitAnswer={onSubmitAnswer} />
                                )
                            })}
                        </List>
                    </>
                ) : (
                    <Text m='xl'>Start by creating a question</Text>
                )}
            </Container>
        </>
    )
}

export default Answers