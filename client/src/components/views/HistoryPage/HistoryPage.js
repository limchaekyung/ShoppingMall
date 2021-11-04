import React from 'react'

function HistoryPage(props) {

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'left' }}>
                <h1>History</h1>
            </div>

            <table>
                <thead style={{background: '#c9dff0'}}>
                    <tr>
                        <th>Payment Id</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date of Purchase</th>
                    </tr>
                </thead>

                <tbody>

                    {props.user.userData && props.user.userData.history &&
                        props.user.userData.history.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>$ {item.price}</td>
                                <td>{item.quantity} EA</td>
                                <td>{item.dateOfPurchase}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage
