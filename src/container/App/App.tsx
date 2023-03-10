import { useState } from 'react'
import './App.scss'

type Props = {}
const App = (props: Props) => {
    const [firstCount, setFirstCount] = useState<number>(0)
    const [secondCount, setSecondCount] = useState<number>(0)
    const [thirdCount, setThirdCount] = useState<number>(0)

    return (
        <>
            <div className="container">
                <div className="main-cart">
                    <h1 className="title">First task:</h1>
                    <div className="box-button">
                        <button
                            className="button"
                            onClick={() => setFirstCount(firstCount + 1)}
                        >
                            change count({firstCount})
                        </button>
                    </div>
                    <div className="box-button">
                        <button
                            className="button"
                            onClick={() => setSecondCount(secondCount + 1)}
                        >
                            change count({secondCount})
                        </button>
                    </div>
                    <div className="box-button">
                        <button
                            className="button"
                            onClick={() => setThirdCount(thirdCount + 1)}
                        >
                            change count({thirdCount})
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App
