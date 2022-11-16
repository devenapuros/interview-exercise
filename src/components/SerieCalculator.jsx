import React, { useState } from "react";
import { Serie } from "../classes/serie";
import { Form } from "./Form";
import { ResultContainer } from "./ResultContainer";

export const SerieCalculator = () => {
    const [nParameter, setNParameter] = useState("");
    const [formError, setFormError] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    let serie = new Serie();

    const handleChange = (event) => {
        setNParameter(event.target.value);
    };

    const handleSubmit = (event) => {
        setLoading(true);
        event.preventDefault();
        serie
            .getSeriePromise(parseInt(nParameter))
            .then((res) => {
                setFormError("");
                setLoading(false);
                setResult(res);
            })
            .catch((error) => {
                setLoading(false);
                setFormError(error.message);
            });
    };

    return (
        <>
            <Form
                handleSubmit={handleSubmit}
                formError={formError}
                inputValue={nParameter}
                handleChange={handleChange}
                loading={loading}
            />
            {!formError && !loading && result && (
                <ResultContainer result={result} />
            )}
        </>
    );
};
