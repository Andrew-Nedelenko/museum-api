import { useEffect, useState } from 'react';
import './App.css';

export type ImageData = {
    rgb: string;
    dominantColor: string;
    objectID: number;
    primaryImage: string;
};

function App() {
    const [imgId, setImageId] = useState(3799);
    const [imgData, setImgData] = useState<ImageData | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}pic/${imgId}`)
            .then((res) => res.text())
            .then((data) => setImgData(JSON.parse(data)))
            .finally(() => setIsLoading(false));
    }, [imgId]);

    const changeImage = (arg: number) => {
        setIsLoading(true);
        const picNumber = imgId + arg < 1 ? imgId : imgId + arg;
        setImageId(picNumber);
    };
    return (
        <div className="wrap">
            <div
                className="paginate"
                onClick={() => !isLoading && changeImage(-1)}
            >
                {isLoading ? 'x' : '<'}
            </div>
            <div className="wrap-flex">
                {imgData && (
                    <>
                        <p>{imgData.objectID}</p>
                        <img src={imgData.primaryImage} alt="No_image" />
                        {imgData.dominantColor && (
                            <>
                                <div className="color">
                                    Dominant Color:{' '}
                                    <span
                                        style={{ backgroundColor: imgData.rgb }}
                                    />
                                </div>
                                {imgData.dominantColor !== 'none' && (
                                    <div className="color">
                                        Primary Color:{' '}
                                        <span
                                            style={{
                                                backgroundColor:
                                                    imgData.dominantColor,
                                            }}
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
                <p>{isLoading && 'Loading...'}</p>
            </div>
            <div
                className="paginate"
                onClick={() => !isLoading && changeImage(1)}
            >
                {isLoading ? 'x' : '>'}
            </div>
        </div>
    );
}

export default App;
