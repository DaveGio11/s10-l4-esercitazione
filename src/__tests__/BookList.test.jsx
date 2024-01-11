import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("is the searchbar working", () => {
  it("first search", () => {
    render(<App />);

    const inputField = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(inputField, { target: { value: "stiletto" } });

    const filteredItem = screen.queryAllByTestId("nome-libro");
    expect(filteredItem).toHaveLength(1);
  });
});
