import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../helpers';

export function dashboardLoader() {
  const userName = fetchData('userName');
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div className="dashboard">
      <h2>Welcome, {userName}</h2>
    </div>
  );
};

export default Dashboard;