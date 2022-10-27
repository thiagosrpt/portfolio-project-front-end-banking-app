function Home(){
  return (
    <LargeCard
      txtcolor="black"
      title="Welcome to BadBank"
      text="Click below to access your account or, if you are not a client yet, create your account today."
      body={(<img src="Family-enjoying-their-new-home.jpeg" className="img-fluid" alt="Responsive image"/>)}
      button="Access your Account"
      hash="#/login/"
    />

  );  
}
