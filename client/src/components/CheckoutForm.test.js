import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("Form Header Renders", () => {
    render(<CheckoutForm />);
});

test("Form shows success message on submit with form details", () => {
    // Arrange
    render(<CheckoutForm />);

    // Act

    // Assert
    
});
