import styled from "styled-components";

const StyledBox = styled.div`
    background-color: white;
    border-radius: 16px;
    padding: 24px;
    font-weight: ${({$weight})=>$weight};

`;
const StyledBoxName = styled.div`
    
`;
const StyledBoxFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
`;
const StyledBoxCB = styled.div`
    display: flex;
    gap:16px;
    margin-bottom: 40px;
`;
const StyledBoxFieldQuery = styled.div`
    display: flex;
    padding: 12px 24px;
    border: 1px solid ${({$bordercolor})=>$bordercolor};
    border-radius: 8px;
    width: 100%;
    align-items: center;
`;
const StyledBoxQuery = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledBoxQueryType = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (width>=768px) {
        flex-direction: row;
    }
`;
const StyledTitle = styled.h1`

`;
const StyledTextQuery = styled.p`
    margin: 0;
`;
const StyledTextInput = styled.input`
    border-radius: 8px;
    border-style: none;
    border: 1px solid ${({$bordercolor})=>$bordercolor};
    height: 51px;
`;
const StyledCheckBox = styled.input`
    border-radius: 50%;
    margin-right: 12px;
    width: 24px;
`;
const StyledTextArea = styled.textarea`
    padding: 12px 24px;
    border: 1px solid ${({$bordercolor})=>$bordercolor};
    border-radius: 16px;
    height: 240px;
`;
const StyledButton = styled.input`
    color:white;
    background-color: ${({$bg})=>$bg};
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 16px;
    padding: 16px;
    border-style: none;
`;



export {StyledButton,StyledTextArea,StyledCheckBox,StyledTextQuery,StyledBoxQueryType,StyledTextInput,StyledBoxFieldQuery,StyledBoxQuery,StyledBoxCB,StyledBoxFields,StyledBox,StyledTitle,StyledBoxName}