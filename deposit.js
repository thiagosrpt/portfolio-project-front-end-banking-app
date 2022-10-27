function Deposit(){
  const ctx = React.useContext(UserContext);
  const [deposit, setDeposit]     = React.useState('');
  const [currentBalance, setCurrentBalance] = React.useState(myuser.balance);
  const [status, setStatus]     = React.useState('');
  const depositCheck = document.getElementById('depositCheck') 

  function validate(field){
    if (isNaN(field)) {
      setStatus("Deposit must be a integer number.");
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (field < 1) {
      setStatus("Negative numbers and 0 are not accepted.");
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    if(!validate(deposit)) return;
    ctx.users.forEach((item) => {
      if(item.email === myuser.email) {
        item.balance = parseInt(item.balance) + parseInt(deposit);
        myuser.balance = item.balance;
        setDeposit("");
        setCurrentBalance(item.balance);
      }
    })
  }

  addEventListener('keyup', (e) => {
    if(deposit) {
      console.log(deposit)
      depositCheck.classList.remove('disabled')
    } else {
      depositCheck.classList.add('disabled')
    }
  });

return (
  <>
    {myuser ? 
    (
        <Card
        bgcolor="primary"
        status={status}
        header=
        {<><h2>Deposit</h2></>}
        body=
          {<>
          <h4>account: {myuser.email}</h4>
          <h3>Balance: ${currentBalance}</h3>
          <hr></hr>
          How much would you like to deposit?
              <input type="input" className="form-control" id="name" placeholder="Enter deposit amount" value={deposit} onChange={e => {setDeposit(e.currentTarget.value)}} /><br/>
              <button type="submit" className="btn btn-light disabled" onClick={handleDeposit} id="depositCheck">Deposit ${deposit}</button>
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
