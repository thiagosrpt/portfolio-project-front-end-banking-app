function NavBar(){

  window.addEventListener('hashchange', function () {
    //console.log('location changed!');
    var newHash = new URL (window.location.href);
    var hrefNewHash = document.querySelector(`[href='${newHash.hash}']`);
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((item) => {
      item.classList.remove('active');
    })
    hrefNewHash.classList.add('active');
  });

 

  return(
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" id="createAccount" href="#/CreateAccount/"
            data-tool-tip="Create your account at BadBank today, no credit review necessary!">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/"
            data-tool-tip="Log into your account.">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/"
            data-tool-tip="Make a deposit into your account">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/"
            data-tool-tip="Withdraw maney from your account.">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/"
            data-tool-tip="Check your current balance">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/"
            data-tool-tip="All data">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}