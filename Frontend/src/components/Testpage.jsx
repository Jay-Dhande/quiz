import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/Globalcontext';
import RightNav from './RightNav';

export default function Testpage() {
    const { currQuiz, index, setIndex } = useGlobalContext();
    const navigate = useNavigate();
    // const [hello,setHello]=useState(1)
    // index = 0 ; 
    // console.log(currQuiz);
    // console.log(index);
    // console.log(currQuiz[1]);


    const [submitted, setSubmitted] = useState(Array(currQuiz.length).fill(false));
    const question = currQuiz[index].question;
    const options = [currQuiz[index].optA, currQuiz[index].optB, currQuiz[index].optC, currQuiz[index].optD];
    const [selectedOptions, setSelectedOptions] = useState([[]]);
    const [reviewed, setReviewed] = useState(Array(currQuiz.length).fill(false));
    const [isChanged, setIsChanged]=useState(1)
    
    useEffect(()=>{
        let n= currQuiz.length
        let arr=[]
        for(let i=0;i<n;i++){
            arr.push([0,0,0,0])
        }
        setSelectedOptions(arr)
        console.log(selectedOptions)
        // console.log(currQuiz)
        // console.log("hello")
    },[])
    // currQuiz[index].question
    // currQuiz[index].optA, currQuiz[index].optB, currQuiz[index].optC,currQuiz[index].optD

    // console.log(currQuiz) ; 
    console.log(selectedOptions);

    const handleOptionChange = (optionIdx) => {
        // const isSelected = selectedOptions.includes(option);
        // if (isSelected) {
        //     let arr=selectedOptions
        //     arr[index]=selectedOptions.filter((item) => item !== option)
        //     setSelectedOptions(arr);
        // } else {
        //     // setSelectedOptions([...selectedOptions, option]);
        // }
        // console.log(optionIdx, index)
        let arr = selectedOptions
        let insideArr= selectedOptions[index]
        // [[],[],[]]
        if(insideArr[optionIdx]===1){
            insideArr[optionIdx]=0;
        }
        else{
            insideArr[optionIdx]=1;
        }
        // insideArr[optionIdx]=1;
        arr[index] = insideArr
        setSelectedOptions(arr);
        setIsChanged(isChanged+1)
        console.log(selectedOptions)
        // setHello(hello+1)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected options:', selectedOptions);
        setSubmitted([...submitted.slice(0, index), true, ...submitted.slice(index + 1)]);
        // Place your submission logic here
    };
    const handleReview = (e) => {
        e.preventDefault();

        setReviewed([...reviewed.slice(0, index), true, ...reviewed.slice(index + 1)]);
        // Place your submission logic here
    };

    const handleNext = (e) => {
        e.preventDefault()
        //    {currQuiz.size >= (index+1) ? setIndex(index+1) : setIndex(0) }
        if (index + 1 < currQuiz.length) {
            setIndex(index + 1);
        }
        console.log(index);
    }

    const handlePrev = (e) => {
        e.preventDefault();
        if (index - 1 >= 0) {
            setIndex(index - 1);
        }
        console.log(index);
    }
    const checkIfClicked=(optionIndex)=>{
        // console.log(selectedOptions[index][optionIndex]===1)

        if(selectedOptions[index][optionIndex]===1)return true;
        return false;
    }
    
    return (
        <>
            <TestpageStyled>
                <div className='questiondiv'>
                    <div className="question">Q{index + 1}  {question}</div>
                    <form onSubmit={handleSubmit}>
                        {options.map((option, index) => (
                            <div key={index}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={checkIfClicked(index)}
                                        onChange={() => handleOptionChange(index)}
                                        className='opt'
                                    />
                                    {options[index]}
                                </label>
                            </div>
                        ))}
                    </form>
                    <div className="navigatebtn">
                        <button className="prev" onClick={handlePrev}>Prev</button>
                        <button className='mark' onClick={handleReview}>Mark For Review</button>
                        <div className="move">
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                            <button className="next" onClick={handleNext}>Next</button>
                        </div>
                    </div>
                </div>
            </TestpageStyled>
            <RightNav submitted={submitted} reviewed={reviewed} />
        </>
    );
}

const TestpageStyled = styled.div`
    /* Add your styles here */
    .questiondiv{
        width: 65vw;
        border: 2px solid black;
        margin: 1vw;
    }
    .question{
        border: 2px solid black;
        margin: 1vw;
        padding: 1vw;
        height: fit-content;
    }
    .opt{
        border: 2px solid black;
        margin: 1vw;
        padding: 1vw;
        height: fit-content;

    }
    label{
        border: 2px solid black;
        display: block;
        padding: 1rem;
    }
    .navigatebtn{
        display: flex;
        justify-content: space-between;
    }
    button{
        padding: 0.8rem;
        margin: 0.3rem;

    }
`;
