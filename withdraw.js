function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [withdraw, setWithdraw]     = React.useState('');
  const [currentBalance, setCurrentBalance] = React.useState(myuser.balance);
  const [status, setStatus]     = React.useState('');
  const withdrawCheck = document.getElementById('withdrawCheck') 

  function validate(field){
    if (isNaN(field)) {
      setStatus("Withdraw must be a integer number.");
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (field < 1) {
      setStatus("Negative numbers and 0 are not accepted.");
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (field > currentBalance) {
      setStatus(`You do not have enough founds to withdraw $${field}.`);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleWithdraw() {
    if(!validate(withdraw)) return;
    ctx.users.forEach((item) => {
      if(item.email === myuser.email) {
        item.balance = parseInt(item.balance) - parseInt(withdraw);
        myuser.balance = item.balance;
        setWithdraw("");
        setCurrentBalance(item.balance);
      }
    })
  }

  addEventListener('keyup', (e) => {
    if(withdraw) {
      console.log(withdraw)
      withdrawCheck.classList.remove('disabled')
    } else {
      withdrawCheck.classList.add('disabled')
    }
  });

return (
  <>
    {myuser ? 
    (
        <Card
        bgcolor="danger"
        status={status}
        header=
        {<><h2>Withdraw</h2></>}
        body=
          {<>
          <h4>account: {myuser.email}</h4>
          <h3>Balance: ${currentBalance}</h3>
          <hr></hr>
          How much would you like to withdraw?
              <input type="input" className="form-control" id="name" placeholder="Enter withdraw amount" value={withdraw} onChange={e => {setWithdraw(e.currentTarget.value)}} /><br/>
              <button type="submit" className="btn btn-light disabled" onClick={handleWithdraw} id="withdrawCheck">Withdraw ${withdraw}</button>
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
