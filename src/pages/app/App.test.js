import { rest } from "msw";
import { render, screen, fireEvent } from "@testing-library/react";
import { setupServer } from "msw/node";

import { App } from "./App";

const response = {
  speaker: "Speaker",
  quote: "test quote",
};
const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders the app with a image, a quote and a button", () => {
  render(<App />);
  const buttonEl = screen.getByRole("button");
  const imageEl = screen.getByRole("img");
  const textEL = screen.getByText(/Thiago Miranda/);
  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEL).toBeInTheDocument();
});

test("calls a api on button click and update its text", async () => {
  render(<App />);
  const buttonEl = screen.getByRole("button");
  fireEvent.click(buttonEl);
  const quoteEl = await screen.findByText(response.quote);
  expect(quoteEl).toBeInTheDocument();
});

test("calls a api on startup and renders it response", async () => {
  render(<App />);
  const quoteEl = await screen.findByText(response.quote);
  expect(quoteEl).toBeInTheDocument();
});
