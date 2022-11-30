import React, {ChangeEvent, useState} from 'react';

const Callback = () => {
    const [name, setName]=useState('Dimich')

    const deleteHandler = ( ) => {
        setName('')
        setTitleChange('')

    }

    const [title, setTitle]= useState('')
    const [titleChange, setTitleChange]= useState('')
const valueOfInputSave = ( ) => {
    setTitleChange(title)
}
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> {
        setTitle(e.currentTarget.value)
    }
    return (
        <div>
            <input  onChange={onChangeHandler} type="number" id="qqq"/>
            <span>{name}</span>
            <button onClick={deleteHandler}>delete</button>
            <button onClick={valueOfInputSave}>save</button>
            <div>{titleChange}</div>
        </div>
    );
};

export default Callback;




