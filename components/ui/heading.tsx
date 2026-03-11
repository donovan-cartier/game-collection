export function Heading({ children, rank }: { children: React.ReactNode, rank?: 1 | 2 | 3 | 4 | 5 | 6 }) {
    switch (rank) {
        case 1:
            return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">{children}</h1>
        case 2:
            return <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>
        case 3:
            return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>
        case 4:
            return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>
        case 5:
            return <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">{children}</h5>
        case 6:
            return <h6 className="scroll-m-20 text-base font-semibold tracking-tight">{children}</h6>
        default:
            return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">{children}</h1>
    }
}