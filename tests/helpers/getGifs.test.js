import { getGifs } from "../../src/helpers/getGifs";

describe("test helper getGifs.js", () => {
  test("should return a gif array", async () => {
    const anIrrelevantCategory = "one punch";
    const gifs = await getGifs(anIrrelevantCategory);
    expect(gifs.length).toBeGreaterThan(0);
    const firstElement = gifs[0];
    expect(firstElement).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
