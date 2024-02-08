import { SetStateAction, useState } from 'react';
import GenerativeAi from "./components/GenerativeAi"
import Form from "./components/Form"

function App() {
  const [fullText, setFullText] = useState(
    'The duration is : [ ], the grade level is : [ ], the subject is: [ ]'
);

const updateFullText = (newText: SetStateAction<string>) => {
    setFullText(newText);
};
  return (
    <>
      <Form updateFullText={updateFullText}/>
      <GenerativeAi fullText={fullText} />
    </>
  )
}

export default App