function Login(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    const createButton = document.getElementById('createBtn') 
  
  
    function validate(field, label){
        var emailValidation = email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if (!field) {
          setStatus('Error: ' + label + " field is missing");
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        if(!emailValidation) {
          setStatus('Please enter a valid email.');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        if(password.length < 3) {
          setStatus('Password must be at least 8 characters long.');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    function handleLogin(){
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      //ctx.users.push({email,password,balance:100});
      ctx.users.forEach((item) => {
        item.auth = "false"
      });
      ctx.users.forEach((item) => {
        if(item.email === email && item.password === password) {
          item.auth = "true"
          setShow(false);
          myuser = item;
          return;
        }
      });
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
      createButton.classList.add('disabled')
    }
  

// Listen to field length to activate login button //
    addEventListener('keyup', (e) => {
      if(email && password) {
        createButton.classList.remove('disabled')
      }
      if(!email || !password) {
        createButton.classList.add('disabled')
      }
    });
  
    addEventListener('change', (e) => {
      if(email && password) {
        createButton.classList.remove('disabled')
      }
      if(!email || !password) {
        createButton.classList.add('disabled')
      }
    });
  //////////

    return (
      <Card
        bgcolor="primary"
        header="Login"
        status={status}
        user={myuser}
        body={show ? (  
                <>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {setEmail(e.currentTarget.value)}}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {setPassword(e.currentTarget.value);}}/><br/>
                <button type="submit" className="btn btn-light disabled" onClick={handleLogin} id="createBtn">Login</button>
                </>
              ):(
                <>
                <h5>Welcome, {myuser.name}!</h5>
                <p>Logged in as {myuser.email}.</p>
                </>
              )}
      />
    )
}
