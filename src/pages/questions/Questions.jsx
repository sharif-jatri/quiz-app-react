import { useState } from "react";
import { Button, Container, List, Title, Text, TextInput, Modal } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
function Questions() {
    const [questionInput, setQuestionInput] = useState('')

    const createHandler = () => {
        if(!questionInput) return false;
        const questions = JSON.parse(localStorage.getItem('quiz-questions'));
        const setValue = questions ? [...questions, {question: questionInput, answer: '', previousAnswers: []}] : [{question: questionInput, answer: '', previousAnswers: []}]
        localStorage.setItem('quiz-questions', JSON.stringify(setValue));
        setQuestionInput('')
    }
    return (
        <>
            <Container >
                <TextInput value={questionInput} onChange={(e) => setQuestionInput(e.target.value)} placeholder="Create new question"/>
                <Button mt='sm' onClick={createHandler}>Create</Button>


                    <>
                        <Title order={3} mt='xl'>Questions</Title>
                        <List withPadding icon={<></>}>

                        </List>
                    </>
            </Container>

            {/*<Modal opened={false} onClose={close} title="Edit Question">*/}
            {/*    <TextInput value={items[selectedQuestionIndex]?.question} onChange={(e) => editHandler(e.target.value)} />*/}
            {/*    <Button mt='sm' onClick={close}>Save & Close</Button>*/}
            {/*</Modal>*/}

        </>
    )
}

export default Questions