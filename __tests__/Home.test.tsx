import Home from "@/app/page"
import { render, screen } from "@testing-library/react"

it('deveria ter texto Docs', () => {
    render(<Home />)

    const mmyElem = screen.getByText('Docs')

    expect(mmyElem).toBeInTheDocument()
})

