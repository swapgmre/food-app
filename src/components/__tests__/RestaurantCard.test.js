import RestaurantCard from "../RestaurantCard"
import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

it("Should render RestaurantCard Component with props Data", () => {

  render(<RestaurantCard resData={MOCK_DATA} />)

  const name = screen.getByText("Cheesecake & Co.")

  expect(name).toBeInTheDocument()
});

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);



it("Should render the promotional label when header data is provided", () => {

  const mockPromotedData = {
    ...MOCK_DATA, info: {
      ...MOCK_DATA.info,
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
      },
    },
  };

  render(<PromotedRestaurantCard resData={mockPromotedData} />);

  const promoLabel = screen.getByText("₹100 OFF")
  expect(promoLabel).toBeInTheDocument();
});