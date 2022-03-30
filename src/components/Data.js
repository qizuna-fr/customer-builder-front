
import { PageTow } from './PageTow';
import { Accueil } from '../pages/Accueil';
import { PageOne } from './PageOne';
import { PageThree } from './PageThree';

  export const Data = [
   
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
        component : <PageTow/>
      },
      {
          title: 'third_page',
          url: '/third_page',
          component : <PageThree/>
        }
]
