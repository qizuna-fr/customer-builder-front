import { Accueil } from '../pages/Accueil';
import { TransitionPages } from './TransitionPages';
import { LastPage } from '../pages/LastPage';
import { PageOne } from '../pages/PageOne';
import { PageTwo } from '../pages/PageTwo';
import { PageThree } from '../pages/PageThree';
import { PageFour } from '../pages/PageFour';

  export const Data = [
    {
      title: 'animated-switch',
      url: '/animated-switch',
      component : <TransitionPages/>
    },
    {
      title: 'accueil',
      url: '/accueil',
      component : <Accueil/>
    },
    {
      title: 'firstPage',
      url: '/first_page',
      component : <PageOne/>
    },
    {
      title: 'secondPage',
      url: '/second_page',
      component : <PageTwo/>
    },
    {
      title: 'third_page',
      url: '/third_page',
      component : <PageThree/>
    },
    {
      title: 'fourthPage',
      url: '/fourth_page',
      component : <PageFour/>
    },
    {
      title: 'lastPage',
      url: '/last_page',
      component : <LastPage/>
    },
]
