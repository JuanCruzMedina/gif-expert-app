import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe("Test on component <GifGrid>", () => {
    const category = 'one punch';

    test('Should show loading', () => {
        useFetchGifs.mockReturnValue({ images: [], isLoading: true });
        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('Should show items when load images from useFetchGifs hook', () => {
        const gifs = [
            { id: '1', title: 'Saitama', url: ' https://localhost/saitama.jpg' },
            { id: '2', title: 'Goku', url: ' https://localhost/goku.jpg' },
            { id: '3', title: 'Luffy', url: ' https://localhost/luffy.jpg' },
        ];
        useFetchGifs.mockReturnValue({ images: gifs, isLoading: false });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(3);
    });

});