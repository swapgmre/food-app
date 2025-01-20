import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {

  it("Should load Contact us component", () => {

    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();

  });

  it("Should load Button inside Contact Component", () => {

    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();

  })

  it("Should load input name inside Contact Component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  })

  it("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length);

    // Assertion
    expect(inputBoxes.length).toBe(2);

    // expect(inputBoxes.length).not.toBe(3); //can also write like this.
  })
});

