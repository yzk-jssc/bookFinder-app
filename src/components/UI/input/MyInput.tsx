import React, { ChangeEvent, FunctionComponent, InputHTMLAttributes } from 'react'
import { useContext } from 'react';
import { BookNameContext } from '../../../context/context';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    
    onChange:(e:ChangeEvent<HTMLInputElement>) => void;
}
 
const MyInput: FunctionComponent<MyInputProps> = ({onChange,  ...rest}) => {

    const {bookName} = useContext(BookNameContext)
    
    return (
        <div className="myInput__item">
            <input className='myInput__main' type="text" value={bookName} onChange={onChange} {...rest} placeholder='Just enter name of book there'/>
        </div>
    );
}
 
export default MyInput;