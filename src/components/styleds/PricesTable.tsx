import styled from "styled-components"

export const StylizedTable = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    table {
    width: 80%;
    border-collapse: collapse;
    border: 2px solid #ddd;
    margin: 20px 0;
    }

    th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
    }

    th {
    background-color: #5c2d52;
    color: white;
    }

    // linhas ímpares
    tbody tr:nth-child(odd) {
    background-color: #fce4ec;
    }

    // linhas pares
    tbody tr:nth-child(even) {
    background-color: #ffffff;
    }
`