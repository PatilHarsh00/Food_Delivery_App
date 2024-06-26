import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is some important text.</p>
                    <div className='container w-100 '>
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            <option key={0} value="half">Half</option>
                            <option key={1} value="full">Full</option>
                        </select>

                        <div className='d-inline h-100 fs-5'>Total Price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
