import React, { useEffect, useState } from 'react'
import { getCatFacts } from '../../api/catFacts'
import { factModel } from '../../models/factModel'

/**
 * Cats Facts Component
 * @return {JSX.Element}
 * @author Carlos
 */
function CatsFacts(): JSX.Element {
    // state variable to store the fact object
    const [response, setResponse] = useState<factModel | null>(null)

    // triggers on component load
    useEffect(() => {
        fetchCatsApi().catch(console.error)
    }, [])

    /**
     * function that call the 'getCatFacts' async function and return a response
     * with a random fact from cats
     */
    async function fetchCatsApi() {
        const response: factModel = await getCatFacts()
        if (response) {
            setResponse(response)
        }
    }

    return (
        <>
            <h5>{response ? response.fact : 'Loading...'}</h5>
        </>
    );
}

export { CatsFacts };
