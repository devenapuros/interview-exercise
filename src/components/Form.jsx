export const Form = ({
    inputValue,
    formError,
    handleChange,
    handleSubmit,
    loading,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-column">
                <p>Given the following formula:</p>
                <img src="/serie.png" alt="series formula" />
            </div>
            <div className="form-column">
                <label htmlFor="n_parameter">
                    Enter parameter <strong>N</strong>{" "}
                    <small>(Only numbers accepted)</small>:
                </label>
                <input
                    id="n_parameter"
                    type="number"
                    name="n_parameter"
                    placeholder="N must have a minimum value of 1"
                    min={1}
                    value={inputValue}
                    onChange={handleChange}
                    disabled={loading}
                />
                {formError && <span className="form-error">{formError}</span>}
            </div>
            <input
                type="submit"
                value={loading ? "Computing..." : "Calculate"}
                disabled={loading}
            />
        </form>
    );
};
