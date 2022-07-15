import styled from 'styled-components';

export const ContactContainer = styled.div`
    height: 600px;
    display: flex;

    @media screen and (max-width: 1000px) {
        margin-top: 100px;
        margin-bottom: 100px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const ContactH1 = styled.h1`
    display: flex;
    font-size: 2.5rem;
    text-align: center;
    color: #000;
    margin-top: 50px;
    margin-bottom: 50px;

    
    @media screen and (max-width: 820px) {
        font-size: 2.5rem;
    }
`;

export const ContactMap = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 1rem;
    margin-left: 5rem;

    @media screen and (max-width: 1000px) {
        text-align: center;
        justify-content: center;
        margin-left: 1rem;
    }

    @media screen and (max-width: 500px) {
        text-align: center;
        justify-content: center;
        width: 330px;
    }

`;

export const ContactContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 1000px) {
        align-items: center;
    }

    @media screen and (max-width: 478px) {
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;

export const ContactP = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    line-height: 30px;

    @media screen and (max-width: 590px) {
        font-size: 0.9rem;
        align-items: center;
        justify-content: center;
        margin: 0 20px 0 20px;
    }

    @media screen and (max-width: 542px) {
        font-size: 0.8rem;
        align-items: center;
        justify-content: center;
        margin: 0 15px 0 15px;
    }
    
`;