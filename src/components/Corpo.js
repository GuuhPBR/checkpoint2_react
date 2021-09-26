import styled from "styled-components";

const CorpoDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
    background-color: aliceblue;
    height: 78vh;
`;

const CorpoBox = styled.div`
    background-color: whitesmoke;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    height: 200px;
`;

function Corpo() {
    return ( 
        <CorpoDiv>
            <CorpoBox>
                <h2>
                    Sabores
                </h2>
                <ul>
                    <li>Baunilha</li>
                    <li>Flocos</li>
                    <li>Chocolate</li>
                    <li>Morango</li>
                </ul>
            </CorpoBox>
            <CorpoBox>
                <h2>
                    Acompanhamentos
                </h2>
                <ul>
                    <li>Cobertura</li>
                    <li>Granola</li>
                    <li>Sucrilhos</li>
                    <li>Leite em pó</li>
                </ul>
            </CorpoBox>
        </CorpoDiv>
     );
}

export default Corpo;
