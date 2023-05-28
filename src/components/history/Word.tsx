import React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import classNames from 'classnames';

interface WordProps {
    word: string
    isCorrect: boolean
    createAt: string
}

const Word: React.FC<WordProps> = ({word, createAt, isCorrect}) => {

    const date = new Date(createAt)
    
    const secondaryColor = useAppSelector(state => state.app.colors.secondaryColor)

    const wordStyles = classNames('pr-[30px] text-error',  { 'text-success': isCorrect })

    return (
        <div style={{background: secondaryColor}} className='p-[10px] mx-[7px] shadow-secondary rounded-[15px]'>
            <span className={wordStyles}>{word}</span>
            <span className='text-textDark text-[12px]'>{`${date.getHours()}.${date.getMinutes()}`}</span>
        </div>
    );
};

export default Word;