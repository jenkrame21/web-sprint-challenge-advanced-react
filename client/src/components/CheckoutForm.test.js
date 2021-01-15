import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("Form Header Renders", () => {
    render(<CheckoutForm />);
});

test("Form shows success message on submit with form details", async () => {
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

    // 3. Get checkout button through role
    const checkoutButton = screen.getByRole("button");

    // 4. User clicks checkout button after filling input fields
    userEvent.click(checkoutButton);

    // 5. Get TestId of successMessage
    const successMessageTestId = screen.getByTestId("successMessage");
    expect(successMessageTestId).toBeInTheDocument();

    // Assert
    // 1. New full name input fields are on the screen
    // First name and last name are in same p tag element
    const newFullName = await screen.findByText("Jenn Kramer");
    expect(newFullName).toBeInTheDocument();

    // 2. New address input fields is on the screen
    const newAddress = await screen.findByText(/124 whatever street/i);
    expect(newAddress).toBeInTheDocument();

    // 3. New city, state, and zip input fields are on the screen
    // City, state, and zip are in same p tag element
    const newCityStateZip = await screen.findByText(/sunshine city, florida 12345/i);
    expect(newCityStateZip).toBeInTheDocument();

});
