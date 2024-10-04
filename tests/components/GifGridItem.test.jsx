import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("Test on component <GifGridItem>", () => {
  const title = "One punch battle";
  const url = "https://onepuch-gif.com/battle.png";
  test("Snapshot match", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test('should display the image with the indicated properties', () => { 
    render(<GifGridItem title={title} url={url}/>);
    const {src, alt} = screen.getByRole('img');
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });
  test('should display the title in the component', () => { 
    render(<GifGridItem title={title} url={url}/>);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
