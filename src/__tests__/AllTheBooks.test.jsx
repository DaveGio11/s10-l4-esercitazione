import { render, screen } from "@testing-library/react";
import AllTheBooks from "../components/AllTheBooks";
import fantasy from "../data/fantasy.json";

describe("Is AllTheBooks working correctly", () => {
  it("are there books", () => {
    render(<AllTheBooks />);
    const bookList = screen.queryAllByTestId("nome-libro");
    expect(bookList.length).toEqual(fantasy.length);
  });
});
