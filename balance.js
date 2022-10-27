function Balance(){
  const ctx = React.useContext(UserContext);
  console.log(myuser)

return (
  <>
    {myuser ? 
    (
      <Card
      bgcolor="warning"
      header=
      {<><h2>Account Balance</h2></>}
      body=
        {<>
        <h2>Hi {myuser.name}!</h2>
        <h3>Your total balance is <b>${myuser.balance}</b></h3>
        </>}
      />

    ):
    (
      <h3>Please, log in to access our services.</h3>
    )
    }
  </>
  );
}
