export const ResultContainer = ({ result }) => {
    return (
        <div className="result-container">
            <span>Result:</span>
            <p>{result || 12.3123}</p>
        </div>
    );
};
