import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("Form Header Renders", () => {
    render(<CheckoutForm />);
});

test("Form shows success message on submit with form details", () => {
    // Arrange
    render(<CheckoutForm />);

    // Act
    // 1. Get the form elements
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipcodeInput = screen.getByLabelText(/zip/i);

    // 2. User types in input fields
    userEvent.type(firstNameInput, "Jenn");
    userEvent.type(lastNameInput, "Kramer");
    userEvent.type(addressInput, "124 Whatever Street");
    userEvent.type(cityInput, "Sunshine City");
    userEvent.type(stateInput, "Florida");
    userEvent.type(zipcodeInput, "12345");

    // 3. User clicks checkout button after filling input fields
    const checkoutButton = screen.getByRole("button");
    userEvent.click(checkoutButton);

    // const successMessage = screen.getByDisplayValue()

    // Assert

});
