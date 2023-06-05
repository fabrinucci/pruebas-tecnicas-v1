import { Suspense, lazy } from 'react';
import { Route } from 'wouter';
import { Header } from './components/Header';
// import TopStoriesPage from './pages/TopStories';
// import DetailsPage from './pages/Details';

const TopStoriesPage = lazy(() => import('./pages/TopStories'));
const DetailsPage = lazy(() => import('./pages/Details'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Route path='/' component={TopStoriesPage} />
        <Route path='/article/:id' component={DetailsPage} />
      </Suspense>
    </>
  );
};
