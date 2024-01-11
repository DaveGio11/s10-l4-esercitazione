import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Is h1 mounting correctly h1", () => {
  it("mounts the h1 correctly", () => {
    render(<App />);
    const welcome = screen.getByText(/benvenuti in epibooks!/i);
    expect(welcome).toBeInTheDocument();
  });
});
