import { useHomeController } from '@/hooks/controllers/useHomeController';
import { HomeView } from './Home.view';

const Home = () => {
  const { onClickRouteSignIn, onClickRouteSignUp } = useHomeController();

  return (
    <HomeView
      onClickSignIn={onClickRouteSignIn}
      onClickSignUp={onClickRouteSignUp}
    />
  );
};

export default Home;
