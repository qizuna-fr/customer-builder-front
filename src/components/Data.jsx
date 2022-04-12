import { Accueil } from '../pages/Accueil';
import { LastPage } from '../pages/LastPage';
import { PageOne } from '../pages/PageOne';
import { PageTwo } from '../pages/PageTwo';
import { PageThree } from '../pages/PageThree';
import { PageFour } from '../pages/PageFour';

  export const Data = [
    
    {
      title: 'accueil',
      url: '/accueil',
      slide : 0,
      component : <Accueil/>
    },
    {
      title: 'firstPage',
      url: '/page1',
      slide : 1,
      component : <PageOne/>
    },
    {
      title: 'secondPage',
      url: '/page2',
      slide : 2,
      component : <PageTwo/>
    },
    {
      title: 'third_page',
      url: '/page3',
      slide : 3,
      component : <PageThree/>
    },
    {
      title: 'fourthPage',
      url: '/page4',
      slide : 4,
      component : <PageFour/>
    },
    {
      title: 'lastPage',
      url: '/last-page',
      slide : -1,
      component : <LastPage/>
    },
]
