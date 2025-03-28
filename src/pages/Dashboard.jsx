import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Intro } from '../components/Intro/Intro';
import { fetchData } from '../helpers';

export function dashboardLoader() {
  const userName = fetchData('userName');
  return { userName };
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem('userName', formData.userName);
    toast.success(`Welcome, ${formData.userName}`);
  } catch (e) {
    throw new Error('There was a problem creating your account.');
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};

export default Dashboard;
