function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="header">
        <h1>Hello {'username'}</h1>
        <p className="motd">
          Congratulations! You reached yesterday's goal! 👏
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
