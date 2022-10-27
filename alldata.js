function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>


    <div>
    <h5>All Data in Store</h5>
    <br></br>
    <br></br>
      <div className="allData">
        {ctx.users.map((item) => (
          <div className="card card-alldata" style={{maxWidth: "60rem", minWidth:"10rem"}}>
            <div className="card-header alldata-name">
            {item.name}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{item.email}</li>
              <li className="list-group-item">${item.balance}</li>
              <li className="list-group-item"><b>auth:</b> {item.auth}</li>
              <li className="list-group-item"><b>pw:</b> {item.password}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>

    </>
  );
}
