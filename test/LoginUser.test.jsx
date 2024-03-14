// import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import LoginUser from '../src/app/components/LoginUser/LoginUser';
// import axios from 'axios'; 
// import { MemoryRouter } from 'react-router-dom';

describe('LoginUser', () => {
  it('renders the email and password inputs', () => {
    render(<LoginUser />)
    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })

  it('submits the form when the button is clicked', () => {
    const handleSubmit = jest.fn()
    render(<LoginUser onSubmit={handleSubmit} />)
    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')
    const button = screen.getByText('Acceptar')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password' } })
    fireEvent.click(button)
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
    })
  })

  it('displays an error message when the login fails', () => {
    render(<LoginUser />)
    const button = screen.getByText('Acceptar')
    fireEvent.click(button)
    const errorMessage = screen.getByText('Failed to log in. Please try again later.')
    expect(errorMessage).toBeInTheDocument()
  })
})