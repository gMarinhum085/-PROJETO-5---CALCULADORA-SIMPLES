import { render, screen } from '@testing-library/react'
import Calculadora from '../components/Calculadora/Calculadora'
import React from 'react'

describe('Calculadora Simples', () => {
    
    test('renderiza os inputs', () => {
        render(<Calculadora />)

        const input1 = screen.getByPlaceholderText('Digite o primeiro número')
        const input2 = screen.getByPlaceholderText('Digite o segundo número')

        expect(input1).toBeInTheDocument()
        expect(input2).toBeInTheDocument()
    })

    test('renderiza os botões', () => {
        render(<Calculadora />)

        const button1 = screen.getByText('Somar')
        const button2 = screen.getByText('Subtrair')
        const button3 = screen.getByText('Multiplicar')
        const button4 = screen.getByText('Dividir')

        expect(button1).toBeInTheDocument()
        expect(button2).toBeInTheDocument()
        expect(button3).toBeInTheDocument()
        expect(button4).toBeInTheDocument()
    })

    test('exibe o parágrafo de resultado', () => {
        render(<Calculadora />)
        const paragraph = screen.getByText('Resultado:')
        expect(paragraph).toBeInTheDocument()
    })
})