import { fireEvent, render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("Is CommentArea mounted correctly", () => {
  it("is CommentArea mounting", () => {
    render(<CommentArea />);
    const addComment = screen.getByPlaceholderText("Inserisci qui il testo");

    expect(addComment).toBeInTheDocument();
  });
});
