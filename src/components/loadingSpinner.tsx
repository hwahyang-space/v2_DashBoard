const LoadingSpinner = () => {
    return (<>
        <div className="overlay">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    </>)
}

export default LoadingSpinner;