import { Accueil } from './Accueil';
import { TransitionPages } from './TransitionPages';
import { FirstPage } from './FirstPage';
import { SecondPage } from './SecondPage';
import { ThirdPage } from './ThirdPage';
import { FourthPage } from './FourthPage';
import { LastPage } from '../pages/LastPage';

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
      component : <FirstPage/>
    },
    {
      title: 'secondPage',
      url: '/second_page',
      component : <SecondPage/>
    },
    {
      title: 'third_page',
      url: '/third_page',
      component : <ThirdPage/>
    },
    {
      title: 'fourthPage',
      url: '/fourth_page',
      component : <FourthPage/>
    },
    {
      title: 'lastPage',
      url: '/last_page',
      component : <LastPage/>
    },
]
