import React, { useEffect, useState } from 'react'
import { getCatFacts } from '../../api/catFacts'

/**
 * Cats Facts Component
 * @return {JSX.Element}
 * @author Carlos
 */
function CatsFacts(): JSX.Element {
    // state variable to store the fact
    const [response, setResponse] = useState<string>('')

    // triggers on component load
    useEffect(() => {
        fetchCatsApi().catch(console.error)
    }, [])

    /**
     * function that will call the 'getCatFacts' async and return a response
     */
    async function fetchCatsApi() {
        const response = await getCatFacts()
        if (await response) {
            setResponse(response.fact)
        }
    }

    return (
        <>
            <h5>{response}</h5>
        </>
    );
}

export { CatsFacts };
