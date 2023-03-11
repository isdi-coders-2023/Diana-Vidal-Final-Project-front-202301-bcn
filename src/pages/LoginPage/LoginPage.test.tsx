import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import renderWithProviders from "../../testUtil";

describe("Given a LoginPage page", () => {
  describe("When rendered", () => {
    test("Then it should show an image", () => {
      renderWithProviders(<LoginPage />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
