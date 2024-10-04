import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Test on <GifExpertApp/> compnent', () => {

    test('Should show header with application name', () => {
        render(<GifExpertApp />);

        const heading = screen.getByRole('heading', { level: 1 });

        expect(heading.innerHTML).toBe('GifExpertApp');
    });

    test('Should add the category if its not repeated', () => {
        render(<GifExpertApp />);
        fireEvent.input(screen.getByRole('textbox'), { target: { value: 'saitama' } });
        fireEvent.submit(screen.getByRole('form'));

        const categoryHeaders = screen.getAllByRole('heading', { level: 2 });
        expect(categoryHeaders.length).toBe(2);
    });

    test('Should not add the category if its repeated', () => {
        render(<GifExpertApp />);
        fireEvent.input(screen.getByRole('textbox'), { target: { value: 'One Punch' } });
        fireEvent.submit(screen.getByRole('form'));

        const categoryHeaders = screen.getAllByRole('heading', { level: 2 });
        expect(categoryHeaders.length).toBe(1);
    });

});