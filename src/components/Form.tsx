import { useState } from 'react';

interface FormProps {
    updateFullText: (newText: string) => void;
}

export default function Form({ updateFullText }:FormProps) {
    const [duration, setDuration] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = () => {
        const newText = `The duration is: ${duration}, the grade level is: ${gradeLevel}, the subject is: ${subject}, 
                        Make a lesson plan considering those factors and give time frames`;
        updateFullText(newText);
    };

    return (
        <>
            <div className='flex flex-col items-center pt-20'>
                <div className='w-80 flex flex-col items-center'>
                    <input
                        placeholder='Duration'
                        type="text"
                        className='w-full p-4 border-2 border-blue-600 my-5 rounded-lg'
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                    <input
                        placeholder='Grade Level'
                        type="text"
                        className='w-full p-4 border-2 border-blue-600 my-5 rounded-lg'
                        value={gradeLevel}
                        onChange={(e) => setGradeLevel(e.target.value)}
                    />
                    <input
                        placeholder='Subject'
                        type="text"
                        className='w-full p-4 border-2 border-blue-600 my-5 rounded-lg'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <button className='w-1/2 p-4 bg-blue-600 text-white my-5 rounded-lg' onClick={handleSubmit}>Submit lesson plan requirements.</button>
                </div>
            </div>
        </>
    );
}
