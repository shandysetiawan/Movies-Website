import React from 'react';
import { render, fireEvent, waitForElement, queryByText } from '@testing-library/react';
import Dashboard from "../pages/Dashboard"
// import "@testing-library/jest-dom/extend-expect"
import { BrowseRouter as Router, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import store from '../store'
import App from '../App';



test('should render App', () => {
    const { debug, queryByRole, getByTestId, toBeInTheDocument, queryByText, queryByTestId, getByDisplayValue } = render(
        <App />
    )

    // debug()
    expect(queryByRole('container')).toBeInTheDocument()
    expect(queryByTestId('link-favorite')).toBeInTheDocument()

    fireEvent.click(getByTestId('link-favorite'))


    expect(queryByText('My Favorites')).toBeInTheDocument()
    expect(queryByText('No Favorites Movies')).toBeInTheDocument()
    expect(queryByTestId('link-dashboard')).toBeInTheDocument()

    fireEvent.click(getByTestId('link-dashboard'))

    // debug()
    expect(queryByText('Movies Highlights')).toBeInTheDocument()
    expect(getByDisplayValue('Search by Genre')).toBeInTheDocument()
    expect(queryByText('Loading')).toBeInTheDocument()

})
// })
