import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>)
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button"); //good ways use this

  // const loginButton = screen.getByText("Login");

  // If there are multiple buttons, and we want to specifically find out login button the we can write and give parameter
  const loginButton = screen.getByRole("button", { name: "Login" })

  // Assertion 

  expect(loginButton).toBeInTheDocument();
})

it("Should render Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>)
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0 items)");

  // Assertion 

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>)
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  // Assertion 

  expect(cartItems).toBeInTheDocument();
})

it("Should change Login Button to Logout on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>)
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" })
  // Assertion 

  expect(logoutButton).toBeInTheDocument();
})