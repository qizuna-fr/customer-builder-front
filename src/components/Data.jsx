import { Accueil } from '../pages/Accueil';
import { LastPage } from '../pages/LastPage';
import { PageOne } from '../pages/PageOne';
import { PageTwo } from '../pages/PageTwo';
import { PageThree } from '../pages/PageThree';
import { PageFour } from '../pages/PageFour';
import { Pagescroll } from '../slides/Pagescroll';

  export const Data = [
    {
      title: 'scroll',
      url: '/scroll',
      slide : 0,
      scroll : 0,
      component : <Pagescroll/>
    },
    {
      title: 'accueil',
      url: '/accueil',
      slide : 0,
      scroll : 0,
      component : <Accueil/>
    },
    {
      title: 'firstPage',
      url: '/page1',
      slide : 1,
      scroll : 1,
      color : 'orange',
      component : <PageOne/>
    },
    {
      title: 'secondPage',
      url: '/page2',
      slide : 2,
      scroll : 1,
      color : 'tomato',
      component : <PageTwo/>
    },
    {
      title: 'third_page',
      url: '/page3',
      slide : 3,
      scroll : 1,
      color : 'orchid',
      component : <PageThree/>
    },
    {
      title: 'fourthPage',
      url: '/page4',
      slide : 4,
      scroll : 1,
      component : <PageFour/>
    },
    {
      title: 'lastPage',
      url: '/last-page',
      slide : -1,
      scroll : 0,
      component : <LastPage/>
    }
]
