import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginUser from '../src/app/components/LoginUser/LoginUser';
import axios from 'axios'; 
import { MemoryRouter } from 'react-router-dom';

// Mockear axios.post para simular la llamada a la API
jest.mock('axios');

describe('LoginUser', () => {
  test('should log in successfully', async () => {
    // Configurar el mock de axios.post para retornar un acceso exitoso
    axios.post.mockResolvedValueOnce({
      status: 200,
      data: {
        data: {
          access_token: 'mocked_access_token',
        },
      },
    });

    // Renderizar el componente
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <LoginUser />
      </MemoryRouter>
    );

    // Introducir credenciales y enviar el formulario
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.click(getByText('Acceptar'));

    // Esperar a que la llamada a la API se complete
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    // Verificar que el usuario sea redirigido después de iniciar sesión
    expect(window.location.pathname).toBe('/admin/dashboard');
  });

  test('should display error message on login failure', async () => {
    // Configurar el mock de axios.post para retornar un error
    axios.post.mockRejectedValueOnce(new Error('Login failed'));

    // Renderizar el componente
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <LoginUser />
      </MemoryRouter>
    );

    // Introducir credenciales y enviar el formulario
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.click(getByText('Acceptar'));

    // Esperar a que la llamada a la API se complete
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    // Verificar que se muestra el mensaje de error
    expect(getByText('Failed to log in. Please try again later.')).toBeInTheDocument();
  });
});