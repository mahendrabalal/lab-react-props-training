import './idCard.css';

function IdCard({lastName, firstName, gender, height, birth, picture}) {

    return (
<div className="id-card">
    <img src={picture} alt={`${firstName} ${lastName}`} />
    <div className="id-card-info">
        <p><strong>First Name:</strong>{`${firstName}`}</p>
        <p><strong>Last Name:</strong>{`${lastName}`}</p>
        <p><strong>Gender:</strong>{`${gender}`}</p>
        <p><strong>Height:</strong>{height / 100}m</p>
        <p><strong>Birth:</strong>{birth.toDateString()}</p>
    </div>
</div>
    )
}
export default IdCard