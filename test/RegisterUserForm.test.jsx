// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import Form from '@/app/components/RegisterUserForm/RegisterUserForm';

// // Mockear la función registerUser para simular la llamada a la API
// jest.mock('../../services/axios', () => ({
//     registerUser: jest.fn(),
//   }));
  
//   describe('RegisterUserForm', () => {
//     test('should submit form and register user successfully', async () => {
//       // Configurar el mock de registerUser para retornar un resultado exitoso
//       registerUser.mockResolvedValueOnce({ remember_token: 'mocked_remember_token' });
  
//       // Renderizar el componente
//       const { getByLabelText, getByText } = render(<Form />);
  
//       // Introducir valores en los campos del formulario
//       fireEvent.change(getByLabelText(/Nombre/i), { target: { value: 'John Doe' } });
//       fireEvent.change(getByLabelText(/E-mail/i), { target: { value: 'john@example.com' } });
//       fireEvent.change(getByLabelText(/Contraseña/i), { target: { value: 'password123' } });
  
//       // Enviar el formulario
//       fireEvent.click(getByText(/Aceptar/i));
  
//       // Esperar a que la llamada a la API se complete
//       await waitFor(() => expect(registerUser).toHaveBeenCalledTimes(1));
  
//       // Verificar que el usuario sea redirigido después de registrarse
//       expect(window.location.pathname).toBe('/admin/dashboard');
//     });
  
//     test('should display error message on registration failure', async () => {
//       // Configurar el mock de registerUser para retornar un error
//       registerUser.mockRejectedValueOnce(new Error('Registration failed'));
  
//       // Renderizar el componente
//       const { getByLabelText, getByText } = render(<Form />);
  
//       // Introducir valores en los campos del formulario
//       fireEvent.change(getByLabelText(/Nombre/i), { target: { value: 'John Doe' } });
//       fireEvent.change(getByLabelText(/E-mail/i), { target: { value: 'john@example.com' } });
//       fireEvent.change(getByLabelText(/Contraseña/i), { target: { value: 'password123' } });
  
//       // Enviar el formulario
//       fireEvent.click(getByText(/Aceptar/i));
  
//       // Esperar a que la llamada a la API se complete
//       await waitFor(() => expect(registerUser).toHaveBeenCalledTimes(1));
  
//       // Verificar que se muestra el mensaje de error
//       expect(getByText('Failed to log in. Please try again later.')).toBeInTheDocument();
//     });
//   });