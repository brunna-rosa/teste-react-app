import React, { useState } from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    width:50%;
    height:24px;
    font-size:14px;
    padding:5px;
    border:1px solid #DDD;
    border-radius: 3px;
    outline:0;
    color: #495057;

    &:focus: {
        border:1px solid #333;
        color:#333;
    };
    
    &,&::placeholder: {
      fontSize: 14px;
      fontWeight: 400;
      lineHeight: 14;
      opacity: 1;
    };

    &::placeholder: {
      color: #AAAAAA;
    };
`;

function InputStyle(props) {

    const [texto, setTexto] = useState('');

    // Ao adicionar uma tarefa, limpa o campo de digitação
    function handleKeyUp(e){
        if(e.keyCode === 13){
            props.onEnter( texto );
            setTexto('');
        }
    }

    return(
        <InputText 
            type="text"
            value={texto}
            onChange={(e)=>setTexto(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder={ props.placeholder ?? "Qual é a nova tarefa?" }
            title="Pressione Enter para inserir"
        />
    );
}

export default InputStyle;