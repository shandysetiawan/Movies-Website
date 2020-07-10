import React from 'react';
import { render, fireEvent, waitForElement, queryByText } from '@testing-library/react';
import Dashboard from "../pages/Dashboard"
// import "@testing-library/jest-dom/extend-expect"
import { BrowseRouter as Router, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import store from '../store'
import App from '../App';



test('should render App', () => {
    const { debug, queryByRole, getByTestId, toBeInTheDocument, queryByText } = render(
        <App />
    )


    // debug()
    expect(queryByRole('container')).toBeInTheDocument()

    fireEvent.click(getByTestId('link-favorite'))


    expect(queryByText('My Favorites')).toBeInTheDocument()

    fireEvent.click(getByTestId('link-dashboard'))

    expect(queryByText('Movies Highlights')).toBeInTheDocument()


})
// })
