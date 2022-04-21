import { Accueil } from '../pages/Accueil';
import { LastPage } from '../pages/LastPage';
import { PageInputContent } from '../pages/PageInputContent';
import { PageUploadFile } from '../pages/PageUploadFile';
import { PageColorPicker } from '../pages/PageColorPicker';
import { PageFontPicker } from '../pages/PageFontPicker';
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
      component : <PageInputContent/>
    },
    {
      title: 'secondPage',
      url: '/page2',
      slide : 2,
      scroll : 1,
      color : 'tomato',
      component : <PageUploadFile/>
    },
    {
      title: 'third_page',
      url: '/page3',
      slide : 3,
      scroll : 1,
      color : 'orchid',
      component : <PageColorPicker/>
    },
    {
      title: 'fourthPage',
      url: '/page4',
      slide : 4,
      color : 'DarkSeaGreen',
      scroll : 1,
      component : <PageFontPicker/>
    },
    {
      title: 'lastPage',
      url: '/last-page',
      slide : -1,
      scroll : 1,
      component : <LastPage/>
    }
]
