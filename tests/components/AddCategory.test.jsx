import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe("Test on <AddCategory/> component", () => {
    const newTextInputValue = "saitama";

    test("should change the value of the text input", () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const textInput = screen.getByRole("textbox");

        fireEvent.input(textInput, { target: { value: newTextInputValue } });

        expect(textInput.value).toBe(newTextInputValue);
    });

    test('should call onNewCategory if text input has value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const textInput = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(textInput, { target: { value: newTextInputValue } });
        fireEvent.submit(form);

        expect(textInput.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenLastCalledWith(newTextInputValue);
    })


    test('should not call onNewCategory if text input is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole("form");

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    })

});
