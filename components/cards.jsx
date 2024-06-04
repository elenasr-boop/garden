const plants = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
const water = [{}, {}, {}];
const fertilizer = [{}, {}, {}];
const soil = [{}, {}, {}, {}, {}];
const temp = [{}, {}, {}];
const light = [{}, {}, {}];
const weather = [{}, {}, {}, {}, {}];
const pests = [{}, {}, {}];

export function Cards () {
    return (
        <div className="plants cards">
            <div className="card">1</div>
            <div className="card">2</div>
            <div className="card">3</div>
            <div className="card">4</div>
            <div className="card">5</div>
            <div className="card">6</div>
            <div className="card">7</div>
            <div className="card">8</div>
            <div className="card">9</div>
        </div>
    )
}