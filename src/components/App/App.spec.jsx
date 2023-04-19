import { render } from '@testing-library/react';
import App from '../App/App';
import {render, screen} from "@testing-library/react";

// describe('App', () => {
//     it('renders the header', () => {
//         render(<App />)
//         const headerElement = screen.getByRole('banner');
//         expect(headerElement).toBeInTheDocument();
//     });

//     it('renders the header', () => {
//         const { getByRole } = render(<App />);
//         const headerElement = getByRole('banner');
//         expect(headerElement).toBeInTheDocument();
//     });

//     it('renders the slider', () => {
//         const { getByRole } = render(<App />);
//         const sliderElement = getByRole('slider');
//         expect(sliderElement).toBeInTheDocument();
//     });

//     it('renders the product slider', () => {
//         const { getByRole } = render(<App />);
//         const productSliderElement = getByRole('list');
//         expect(productSliderElement).toBeInTheDocument();
//     });

//     it('renders the newsletter', () => {
//         const { getByRole } = render(<App />);
//         const newsletterElement = getByRole('form');
//         expect(newsletterElement).toBeInTheDocument();
//     });

//     it('renders the footer', () => {
//         const { getByRole } = render(<App />);
//         const footerElement = getByRole('contentinfo');
//         expect(footerElement).toBeInTheDocument();
//     });
// });

describe('Jest', () => {
    it('testing jest', () => {
        expect(1).toBe(1);
    });
});