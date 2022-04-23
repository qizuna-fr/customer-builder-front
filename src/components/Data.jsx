import { Accueil } from '../pages/Accueil';
import { LastPage } from '../pages/LastPage';
import { PageInputContent } from '../pages/PageInputContent';
import { PageUploadFile } from '../pages/PageUploadFile';
import { PageColorPicker } from '../pages/PageColorPicker';
import { PageFontPicker } from '../pages/PageFontPicker';
import { Slider } from '../slides/Slider';
import { PageStyleComponent } from '../pages/PageStyleComponent';

  export const Data = [
    {
      title: 'qizuna',
      url: '/qizuna',
      component : <Slider/>
    },
    {
      title: 'accueil',
      url: '/accueil',
      component : <Accueil/>
    },
    {
      title: 'InputContentComponent',
      url: '/page1',
      color : 'orange',
      component : <PageInputContent/>
    },
    {
      title: 'UploadFileComponent',
      url: '/page2',
      color : 'tomato',
      component : <PageUploadFile/>
    },
    {
      title: 'ColorComponent',
      url: '/page3',
      color : 'orchid',
      component : <PageColorPicker/>
    },
    {
      title: 'FontComponent',
      url: '/page4',
      color : 'DarkSeaGreen',
      component : <PageFontPicker/>
    },
    {
      title: 'StyleComponent',
      url: '/page5',
      color : 'DarkSeaGreen',
      component : <PageStyleComponent/>
    },
    {
      title: 'lastPage',
      url: '/last-page',
      component : <LastPage/>
    }
]
